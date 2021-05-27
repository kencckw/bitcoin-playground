import React from 'react';
import renderer from 'react-test-renderer';
import { MnemonicWordsForm as Component } from '../';

it('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
