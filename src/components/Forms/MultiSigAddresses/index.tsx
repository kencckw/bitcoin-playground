import React, { ChangeEventHandler, FC } from 'react';
import { Form, FormInstance, Input, PageHeader } from 'antd';
import { FormLayout } from '@/components/Forms/Layout';
import { Rule } from 'rc-field-form/lib/interface';

export interface IMultiSigAddressesFormData {
  n: number;
  m: number;
  publicKeys: { value: string }[];
}

export interface IMultiSigAddressesFormProps {
  form: FormInstance;
  initialValues: IMultiSigAddressesFormData;
  onNChange: ChangeEventHandler<HTMLInputElement>;
  onMChange: ChangeEventHandler<HTMLInputElement>;
  onPublicKeyChanged: (key: number) => ChangeEventHandler<HTMLInputElement>;
  getPublicKeyValidationRules: (index: number) => Rule[];
}

export const MultiSigAddressesForm: FC<IMultiSigAddressesFormProps> = ({
  form,
  initialValues,
  onNChange,
  onMChange,
  onPublicKeyChanged,
  getPublicKeyValidationRules,
}) => {
  return (
    <FormLayout>
      <Form form={form} initialValues={initialValues}>
        <PageHeader
          title="Multi-sig P2SH Bitcoin Address"
          style={{ paddingLeft: 0 }}
        />
        <Form.Item name="address" label="Generated address">
          <Input disabled />
        </Form.Item>
        <Form.Item name="n" label="n">
          <Input autoComplete="off" onChange={onNChange} />
        </Form.Item>
        <Form.Item name="m" label="m">
          <Input autoComplete="off" onChange={onMChange} />
        </Form.Item>
        <Form.List name="publicKeys">
          {
            /* istanbul ignore next */ (fields) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Form.Item
                    {...restField}
                    key={key}
                    name={[name, 'value']}
                    fieldKey={[fieldKey, 'value']}
                    label={`Public Key ${key + 1}`}
                    rules={getPublicKeyValidationRules(key)}
                  >
                    <Input onChange={onPublicKeyChanged(key)} />
                  </Form.Item>
                ))}
              </>
            )
          }
        </Form.List>
      </Form>
    </FormLayout>
  );
};
