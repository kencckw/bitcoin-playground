import React, { FC } from 'react';
import { Button, Form, Input, PageHeader, Select } from 'antd';
import { CopyOutlined, ReloadOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import { FormLayout } from '@/components/Forms/Layout';
import { Callbacks, Rule } from 'rc-field-form/lib/interface';

export interface IMnemonicWordsFormData {
  size: number;
  language: string;
  passphrase?: string;
  value?: string;
  seed?: string;
}

export interface IMnemonicWordsFormProps {
  form: FormInstance;
  onFinish?: (data: IMnemonicWordsFormData) => void;
  onRandomButtonClick: () => void;
  onCopyButtonClick: () => void;
  onFieldsChange: Callbacks<IMnemonicWordsFormData>['onFieldsChange'];
  initialValues: Partial<IMnemonicWordsFormData>;
  mnemonicWordsValidationRules?: Rule[];
}

export const MnemonicWordsForm: FC<IMnemonicWordsFormProps> = ({
  form,
  onFinish,
  onRandomButtonClick,
  initialValues,
  onFieldsChange,
  onCopyButtonClick,
  mnemonicWordsValidationRules,
}) => {
  return (
    <FormLayout>
      <Form
        initialValues={initialValues}
        onFinish={onFinish}
        form={form}
        onFieldsChange={onFieldsChange}
        requiredMark
      >
        <PageHeader
          title="Mnemonic words"
          subTitle="Import/generate a mnemonic words"
          extra={[
            <Button
              key="1"
              type="primary"
              ghost
              icon={<ReloadOutlined />}
              onClick={onRandomButtonClick}
            >
              Random
            </Button>,
          ]}
          style={{ paddingLeft: 0 }}
        />
        <Form.Item name="size" label="Number of words">
          <Select>
            <Select.Option value={16}>12</Select.Option>
            <Select.Option value={20}>15</Select.Option>
            <Select.Option value={24}>18</Select.Option>
            <Select.Option value={28}>21</Select.Option>
            <Select.Option value={32}>24</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="language" label="Language">
          <Select>
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="tc">Traditional Chinese</Select.Option>
            <Select.Option value="sc">Simplified Chinese</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="passphrase" label="Passphrase">
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item name="value" rules={mnemonicWordsValidationRules}>
          <Input.TextArea autoSize={{ maxRows: 6, minRows: 6 }} />
        </Form.Item>

        <PageHeader
          title="Seed"
          subTitle="Calculated from the mnemonic words"
          style={{ paddingLeft: 0 }}
          extra={[
            <Button
              key="1"
              type="primary"
              ghost
              icon={<CopyOutlined />}
              onClick={onCopyButtonClick}
            >
              Copy
            </Button>,
          ]}
        />
        <Form.Item name="seed">
          <Input.TextArea
            autoSize={{ maxRows: 2, minRows: 2 }}
            disabled
            autoComplete="off"
          />
        </Form.Item>
      </Form>
    </FormLayout>
  );
};
