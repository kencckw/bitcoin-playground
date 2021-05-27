import React, { ChangeEventHandler, FC } from 'react';
import { Button, Col, Form, FormInstance, Input, PageHeader, Row } from 'antd';
import { FormLayout } from '@/components/Forms/Layout';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { RuleObject } from 'rc-field-form/lib/interface';

export interface IHDSegWitAddressesFormData {
  seed?: string;
  addresses: { path?: string }[];
}

export interface IHDSegWitAddressesFormProps {
  form: FormInstance;
  initialValues: IHDSegWitAddressesFormData;
  onSeedChange: ChangeEventHandler<HTMLTextAreaElement>;
  onRemoveButtonClick: (index: number) => void;
  onAddButtonClick: () => void;
  onPathChange: (index: number, value: string) => void;
  seedValidationRules: RuleObject[];
  getPathValidationRules: (index: number) => RuleObject[];
}

export const HDSegWitAddressesForm: FC<IHDSegWitAddressesFormProps> = ({
  form,
  initialValues,
  onSeedChange,
  onRemoveButtonClick,
  onAddButtonClick,
  onPathChange,
  seedValidationRules,
  getPathValidationRules,
}) => {
  return (
    <FormLayout>
      <Form form={form} initialValues={initialValues}>
        <PageHeader
          title="HD SegWit Bitcoin Addresses"
          subTitle="Generate multiple addresses"
          style={{ paddingLeft: 0 }}
        />
        <Form.Item name="seed" label="Seed" rules={seedValidationRules}>
          <Input.TextArea
            autoSize={{ maxRows: 3, minRows: 3 }}
            autoComplete="off"
            onChange={onSeedChange}
          />
        </Form.Item>
        <Form.List name="addresses">
          {
            /* istanbul ignore next */ (fields, { add, remove }) => (
              <>
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={onAddButtonClick}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Address
                  </Button>
                </Form.Item>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Row key={key}>
                    <Col flex="180px">
                      <Form.Item
                        {...restField}
                        label="Path"
                        name={[name, 'path']}
                        fieldKey={[fieldKey, 'path']}
                        rules={getPathValidationRules(name)}
                      >
                        <Input
                          style={{ width: '100%' }}
                          autoComplete="off"
                          onChange={(event) =>
                            onPathChange(name, event.target.value)
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col flex="auto">
                      <Form.Item
                        {...restField}
                        name={[name, 'address']}
                        fieldKey={[fieldKey, 'address']}
                      >
                        <Input
                          disabled
                          style={{ width: '100%' }}
                          suffix={
                            <MinusCircleOutlined
                              onClick={() => onRemoveButtonClick(name)}
                              style={{ color: 'red' }}
                            />
                          }
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                ))}
              </>
            )
          }
        </Form.List>
      </Form>
    </FormLayout>
  );
};
