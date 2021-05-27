import React, { FC, useCallback, useMemo } from 'react';
import {
  IMnemonicWordsFormData,
  MnemonicWordsForm,
} from '@/components/Forms/MnemonicWords';
import crypto from 'crypto';
import * as bip39 from 'bip39';
import { Form, message } from 'antd';
import { Callbacks, Rule } from 'rc-field-form/lib/interface';
import { useDebounceFn } from 'ahooks';

export interface IMnemonicWordsFormContainerProps {}

const wordlistMapping = {
  en: 'english',
  tc: 'chinese_traditional',
  sc: 'chinese_simplified',
};

export const generate = (
  size: number,
  language: keyof typeof wordlistMapping,
) => {
  return bip39.entropyToMnemonic(
    crypto.randomBytes(size).toString('hex'),
    bip39.wordlists[wordlistMapping[language]],
  );
};

const defaultInitialValues: Partial<IMnemonicWordsFormData> = {
  size: 16,
  language: 'en',
};

export const calculateSeed = (
  words: string,
  language: keyof typeof wordlistMapping,
  password?: string,
) => {
  if (
    bip39.validateMnemonic(words, bip39.wordlists[wordlistMapping[language]])
  ) {
    return bip39.mnemonicToSeed(words, password).then((v) => v.toString('hex'));
  }
  return Promise.resolve('');
};

const recalculateFields = ['value', 'passphrase'];
export const MnemonicWordsFormContainer: FC<IMnemonicWordsFormContainerProps> =
  () => {
    const [form] = Form.useForm();

    const { run } = useDebounceFn(
      (value?: string) => {
        const words = value || form.getFieldValue('value');
        const language = form.getFieldValue('language');
        const passphrase = form.getFieldValue('passphrase');

        return calculateSeed(words, language, passphrase).then((seed) => {
          form.setFieldsValue({
            value: words,
            seed: seed,
          });
        });
      },
      {
        wait: 200,
      },
    );

    const onCopyButtonClick = useCallback(() => {
      const seed = form.getFieldValue('seed');
      return navigator.clipboard
        .writeText(seed)
        .then(() => message.success(`Copied!`, 2))
        .catch((error) => message.error(`Copy failed! ${error}`, 2));
    }, [form]);

    const onRandomButtonClick = useCallback(() => {
      const size = form.getFieldValue('size');
      const language = form.getFieldValue('language');
      let words = generate(size, language);
      return run(words);
    }, [form]);

    const onFieldsChange: Callbacks['onFieldsChange'] = useCallback(
      (changedFields) => {
        const shouldUpdateSeed = Boolean(
          changedFields.find(
            (f: any) => recalculateFields.indexOf(f.name[0]) >= 0,
          ),
        );
        if (shouldUpdateSeed) {
          return run();
        }
      },
      [form],
    );

    const mnemonicWordsValidationRules: Rule[] = useMemo(() => {
      return [
        {
          required: true,
          message:
            'You must generate a mnemonic words before going to next step',
        },
        {
          validator: (rule, value) => {
            if (bip39.validateMnemonic(value)) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error('You must enter a valid mnemonic words'),
            );
          },
        },
      ];
    }, []);

    return (
      <MnemonicWordsForm
        form={form}
        initialValues={defaultInitialValues}
        onRandomButtonClick={onRandomButtonClick}
        onFieldsChange={onFieldsChange}
        onCopyButtonClick={onCopyButtonClick}
        mnemonicWordsValidationRules={mnemonicWordsValidationRules}
      />
    );
  };
