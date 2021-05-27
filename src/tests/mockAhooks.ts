export const useResponsive = jest.fn().mockReturnValue({});
export const useDebounceFn = jest.fn().mockReturnValue({
  run: jest.fn(),
});

jest.doMock('ahooks', () => {
  return {
    useResponsive,
    useDebounceFn,
  };
});
