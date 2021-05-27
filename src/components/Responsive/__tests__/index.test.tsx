import { useResponsive } from '@/tests/mockAhooks';
import React from 'react';
import renderer from 'react-test-renderer';
import { Responsive as Component } from '../';

it('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});

const create = () => {
  return renderer.create(
    <Component
      xs={<div id="xs" />}
      sm={<div id="sm" />}
      md={<div id="md" />}
      lg={<div id="lg" />}
      xl={<div id="xl" />}
    />,
  ).root;
};

it('should return correct component based on window size', () => {
  useResponsive.mockReturnValue({ xs: true });
  expect(create().findAllByProps({ id: 'xs' })).toHaveLength(1);

  useResponsive.mockReturnValue({ sm: true });
  expect(create().findAllByProps({ id: 'sm' })).toHaveLength(1);

  useResponsive.mockReturnValue({ md: true });
  expect(create().findAllByProps({ id: 'md' })).toHaveLength(1);

  useResponsive.mockReturnValue({ lg: true });
  expect(create().findAllByProps({ id: 'lg' })).toHaveLength(1);

  useResponsive.mockReturnValue({ xl: true });
  expect(create().findAllByProps({ id: 'xl' })).toHaveLength(1);
});
