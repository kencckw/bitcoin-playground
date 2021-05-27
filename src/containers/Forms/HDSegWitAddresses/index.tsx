import React, { ChangeEventHandler, FC, useCallback, useMemo } from 'react';
import { Form } from 'antd';
import { HDSegWitAddressesForm } from '@/components/Forms/HDSegWitAddresses';
import { HDSegWitAddresses } from '@/utils/hdWallet';

export const HDSegWitAddressesFormContainer: FC = () => {
  const [form] = Form.useForm();

  const hDSegWitAddresses = useMemo(() => new HDSegWitAddresses(), []);
  const initialValues = useMemo(() => {
    return {
      seed: hDSegWitAddresses.getSeed(),
      addresses: hDSegWitAddresses.getPathObjects(),
    };
  }, [hDSegWitAddresses]);

  const onSeedChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      hDSegWitAddresses.setSeed(event.target.value);
      form.setFieldsValue({
        seed: hDSegWitAddresses.getSeed(),
        addresses: hDSegWitAddresses.getPathObjects(),
      });
    },
    [form, hDSegWitAddresses],
  );

  const onRemoveButtonClick = useCallback(
    (index: number) => {
      hDSegWitAddresses.removePath(index);
      form.setFieldsValue({
        addresses: hDSegWitAddresses.getPathObjects(),
      });
    },
    [form, hDSegWitAddresses],
  );

  const onAddButtonClick = useCallback(() => {
    hDSegWitAddresses.addPath();
    form.setFieldsValue({
      addresses: hDSegWitAddresses.getPathObjects(),
    });
  }, [form, hDSegWitAddresses]);

  const onPathChange = useCallback(
    (index: number, value: string) => {
      hDSegWitAddresses.setPath(index, value);
      form.setFieldsValue({
        addresses: hDSegWitAddresses.getPathObjects(),
      });
    },
    [hDSegWitAddresses],
  );

  const getPathValidationRules = useCallback(
    (index: number) => [
      {
        validator: () => {
          if (hDSegWitAddresses.isPathValid(index)) {
            return Promise.resolve();
          }

          return Promise.reject('Invalid Path');
        },
      },
    ],
    [hDSegWitAddresses],
  );

  const seedValidationRules = useMemo(
    () => [
      {
        validator: () => {
          if (hDSegWitAddresses.isSeedValid()) {
            return Promise.resolve();
          }
          return Promise.reject('Invalid Seed');
        },
      },
    ],
    [hDSegWitAddresses],
  );

  return (
    <HDSegWitAddressesForm
      form={form}
      initialValues={initialValues}
      onSeedChange={onSeedChange}
      onRemoveButtonClick={onRemoveButtonClick}
      onAddButtonClick={onAddButtonClick}
      onPathChange={onPathChange}
      seedValidationRules={seedValidationRules}
      getPathValidationRules={getPathValidationRules}
    />
  );
};
