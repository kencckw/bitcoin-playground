import React from 'react';

import { Form } from '@/tests/mockAntd';
import renderer from 'react-test-renderer';
import { MultiSigAddressesFormContainer } from '../';
import { IMultiSigAddressesFormProps } from '@/components/Forms/MultiSigAddresses';

jest.mock('@/components/Forms/MultiSigAddresses', () => {
  return {
    MultiSigAddressesForm: jest
      .fn()
      .mockImplementation((props) => <div {...props} />),
  };
});

describe('MnemonicWordsFormContainer', () => {
  const t = renderer.create(<MultiSigAddressesFormContainer />);
  const props = t.root.findByType('div').props as IMultiSigAddressesFormProps;
  const setFieldsValue = Form.useForm()[0].setFieldsValue as ReturnType<
    typeof jest.fn
  >;

  afterEach(() => {
    setFieldsValue.mockReset();
  });

  it('onNChange', () => {
    props.onNChange({ target: { value: '2' } });
    expect(setFieldsValue).toBeCalled();
    expect(setFieldsValue).toBeCalledWith({
      n: 2,
      publicKeys: [{ value: '' }, { value: '' }],
      address: '',
    });
  });

  it('onMChange', () => {
    props.onMChange({ target: { value: '1' } });
    expect(setFieldsValue).toBeCalled();
    expect(setFieldsValue).toBeCalledWith({ m: 1, address: '' });
  });

  it('onPublicKeyChanged', () => {
    props.onPublicKeyChanged(0)({ target: { value: '1234' } });
    expect(setFieldsValue).toBeCalled();
    expect(setFieldsValue).toBeCalledWith({
      publicKeys: [{ value: '1234' }, { value: '' }],
      address: '',
    });
  });

  it('initialValues', () => {
    expect(props.initialValues).toEqual({
      m: 2,
      n: 3,
      publicKeys: [{ value: '' }, { value: '' }, { value: '' }],
    });
  });

  it('getPublicKeyValidationRules', async () => {
    const validator = props.getPublicKeyValidationRules(0)[0].validator;
    props.onPublicKeyChanged(0)({ target: { value: '1234' } });
    await expect(validator()).rejects.toEqual('Invalid Public Key');

    props.onPublicKeyChanged(0)({
      target: {
        value:
          '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
      },
    });
    await expect(validator()).resolves.toEqual(undefined);
  });
});
