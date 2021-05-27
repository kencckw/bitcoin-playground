export const push = jest.fn();

jest.doMock('umi', () => {
  return {
    history: {
      push,
    },
  };
});
