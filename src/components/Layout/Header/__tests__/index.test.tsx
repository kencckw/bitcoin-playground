import React from 'react';
import renderer from 'react-test-renderer';
import { Header as Component } from '../';

it('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
