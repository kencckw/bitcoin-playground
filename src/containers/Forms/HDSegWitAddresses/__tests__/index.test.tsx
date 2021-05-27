import React from 'react';

import renderer from 'react-test-renderer';
import { Form } from '@/tests/mockAntd';
import { HDSegWitAddressesFormContainer } from '../';
import { IHDSegWitAddressesFormProps } from '@/components/Forms/HDSegWitAddresses';
import { Rule } from 'rc-field-form/lib/interface';

jest.mock('@/components/Forms/HDSegWitAddresses', () => {
  return {
    HDSegWitAddressesForm: jest
      .fn()
      .mockImplementation((props) => <div {...props} />),
  };
});

describe('HDSegWitAddressesContainer', () => {
  const t = renderer.create(<HDSegWitAddressesFormContainer />);
  const props = t.root.findByType('div').props as IHDSegWitAddressesFormProps;
  const setFieldsValue = Form.useForm()[0].setFieldsValue as ReturnType<
    typeof jest.fn
  >;
  afterEach(() => {
    setFieldsValue.mockReset();
  });

  it('initialValues', () => {
    expect(props.initialValues).toEqual({
      seed: '',
      addresses: [
        {
          address: '',
          path: `m/44'/0'/1'/1/0`,
        },
      ],
    });
  });

  it('removeButtonClick', () => {
    props.onRemoveButtonClick(0);
    expect(setFieldsValue).toBeCalledTimes(1);
    expect(setFieldsValue).toBeCalledWith({
      addresses: [],
    });
  });

  it('addButtonClick', () => {
    props.onAddButtonClick();
    expect(setFieldsValue).toBeCalledTimes(1);
    expect(setFieldsValue).toBeCalledWith({
      addresses: [{ address: '', path: `m/44'/0'/1'/1/0` }],
    });

    setFieldsValue.mockReset();
    props.onAddButtonClick();
    expect(setFieldsValue).toBeCalledTimes(1);
    expect(setFieldsValue).toBeCalledWith({
      addresses: [
        { address: '', path: `m/44'/0'/1'/1/0` },
        { address: '', path: `m/44'/0'/1'/1/1` },
      ],
    });
  });

  it('onSeedChange', () => {
    props.onSeedChange({ target: { value: 'seed' } } as any);
    expect(setFieldsValue).toBeCalledTimes(1);
    expect(setFieldsValue).toBeCalledWith({
      addresses: [
        { address: '', path: `m/44'/0'/1'/1/0` },
        { address: '', path: `m/44'/0'/1'/1/1` },
      ],
      seed: 'seed',
    });
  });

  it('onPathChange', () => {
    props.onPathChange(0, `m/44'/0'/1'/1/`);
    expect(setFieldsValue).toBeCalledTimes(1);
    expect(setFieldsValue).toBeCalledWith({
      addresses: [
        { address: '', path: `m/44'/0'/1'/1/` },
        { address: '', path: `m/44'/0'/1'/1/1` },
      ],
    });
  });

  it('getPathValidationRules', async () => {
    let rule: Rule = props.getPathValidationRules(0)[0];
    expect.assertions(1);
    await expect(rule.validator()).rejects.toEqual('Invalid Path');
  });

  it('seedValidationRules', async () => {
    let rule: Rule = props.seedValidationRules[0];
    expect.assertions(1);
    await expect(rule.validator()).rejects.toEqual('Invalid Seed');
  });
});
