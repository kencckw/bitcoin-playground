const returnValue = [
  {
    getFieldValue: jest.fn(),
    setFieldsValue: jest.fn(),
  },
];

export const Form = {
  useForm: jest.fn().mockReturnValue(returnValue),
};

export const message = {
  success: jest.fn(),
  error: jest.fn(),
};

jest.doMock('antd', () => {
  return {
    Form,
    message,
  };
});
