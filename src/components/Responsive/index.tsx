import { useResponsive } from 'ahooks';
import React, { FC, ReactNode } from 'react';

export interface IResponsiveProps {
  xs?: ReactNode;
  sm?: ReactNode;
  md?: ReactNode;
  lg?: ReactNode;
  xl?: ReactNode;
}

export const Responsive: FC<IResponsiveProps> = ({ xs, sm, md, lg, xl }) => {
  const responsive = useResponsive();

  let result = null;

  if (responsive.xs && xs) {
    result = xs;
  }
  if (responsive.sm && sm) {
    result = sm;
  }
  if (responsive.md && md) {
    result = md;
  }
  if (responsive.lg && lg) {
    result = lg;
  }
  if (responsive.xl && xl) {
    result = xl;
  }

  return <>{result}</>;
};
