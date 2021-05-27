import { push } from '@/tests/mockHistory';
import React from 'react';
import renderer from 'react-test-renderer';
import { LinkButton as Component } from '../';

it('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('push history state correctly', () => {
  const tree: any = renderer
    .create(<Component to="/abc" state={{}} />)
    .toJSON();

  tree.props.onClick();
  expect(push).toBeCalledTimes(1);
  expect(push).toBeCalledWith('/abc', {});
});
