import React from 'react';

import { useDebounceFn } from '@/tests/mockAhooks';
import { Form, message } from '@/tests/mockAntd';
import renderer from 'react-test-renderer';
import { calculateSeed, MnemonicWordsFormContainer } from '../';
import { IMnemonicWordsFormProps } from '@/components/Forms/MnemonicWords';

jest.mock('@/components/Forms/MnemonicWords', () => {
  return {
    MnemonicWordsForm: jest
      .fn()
      .mockImplementation((props) => <div {...props} />),
  };
});

describe('MnemonicWordsFormContainer', () => {
  const t = renderer.create(<MnemonicWordsFormContainer />);
  const props = t.root.findByType('div').props as IMnemonicWordsFormProps;
  const setFieldsValue = Form.useForm()[0].setFieldsValue as ReturnType<
    typeof jest.fn
  >;
  const getFieldValue = Form.useForm()[0].getFieldValue as ReturnType<
    typeof jest.fn
  >;
  const run = useDebounceFn().run;

  afterEach(() => {
    getFieldValue.mockReset();
    run.mockReset();
    setFieldsValue.mockReset();
  });

  it('initialValues', () => {
    expect(props.initialValues).toEqual({ size: 16, language: 'en' });
  });

  it('onFieldsChange', () => {
    props.onFieldsChange([{ name: ['value'], value: 'words' }], []);
    expect(run).toBeCalledTimes(1);
  });

  it('onRandomButtonClick', () => {
    getFieldValue.mockReturnValueOnce(16);
    props.onRandomButtonClick();
    expect(run).toBeCalledTimes(1);
  });

  it('calculateSeed', () => {
    expect(calculateSeed('', 'en')).resolves.toBe('');
    expect(
      calculateSeed(
        'length adjust brass diet six weird final recipe spy bean apart want',
        'en',
      ),
    ).resolves.toBe(
      '38affb98d8dd85fd0b206efa37058907a29bd9a77a1a5e1926231047260c206971459ce7354f40419c4a6d557a995dc45e6e21992947b0849d5b352b7123d9ca',
    );
  });

  it('onCopyButtonClick', async () => {
    navigator.clipboard.writeText.mockReturnValue(Promise.resolve());
    await props.onCopyButtonClick();
    expect(navigator.clipboard.writeText).toBeCalled();

    navigator.clipboard.writeText.mockReturnValue(Promise.reject('test'));
    await props.onCopyButtonClick();
    expect(message.error).toBeCalled();
  });

  it('mnemonicWordsValidationRules', async () => {
    let validator = props.mnemonicWordsValidationRules[1].validator;
    await expect(validator([], '123')).rejects.toThrow(
      'You must enter a valid mnemonic words',
    );

    await expect(
      validator(
        [],
        'length adjust brass diet six weird final recipe spy bean apart want',
      ),
    ).resolves.toBe(undefined);
  });
});
