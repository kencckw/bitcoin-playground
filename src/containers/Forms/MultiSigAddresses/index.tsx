import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Form } from 'antd';

import { MultiSigAddressesForm } from '@/components/Forms/MultiSigAddresses';
import { MultiSignatureP2SHAddress } from '@/utils/multisig';

export const MultiSigAddressesFormContainer: FC = () => {
  const [form] = Form.useForm();
  const [address] = useState(new MultiSignatureP2SHAddress());

  const onNChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      address.setN(event.target.value);
      form.setFieldsValue({
        n: address.n,
        publicKeys: address.toPublicKeyObjects(),
        address: address.calculateAddress(),
      });
    },
    [form],
  );

  const onMChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      address.setM(event.target.value);
      form.setFieldsValue({
        m: address.m,
        address: address.calculateAddress(),
      });
    },
    [form],
  );

  const onPublicKeyChanged = useCallback(
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      address.setPublicKey(index, event.target.value);
      form.setFieldsValue({
        publicKeys: address.toPublicKeyObjects(),
        address: address.calculateAddress(),
      });
    },
    [form],
  );

  const initialValues = useMemo(() => {
    return {
      n: address.n,
      m: address.m,
      publicKeys: address.toPublicKeyObjects(),
    };
  }, [address]);

  const getPublicKeyValidationRules = useCallback(
    (key: number) => {
      return [
        {
          validator: (): Promise<void> => {
            if (address.isValidPublicKey(key)) {
              return Promise.resolve();
            }
            return Promise.reject('Invalid Public Key');
          },
        },
      ];
    },
    [address],
  );

  return (
    <MultiSigAddressesForm
      form={form}
      initialValues={initialValues}
      onPublicKeyChanged={onPublicKeyChanged}
      getPublicKeyValidationRules={getPublicKeyValidationRules}
      onNChange={onNChange}
      onMChange={onMChange}
    />
  );
};
