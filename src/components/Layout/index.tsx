import React, { FC } from 'react';
import { Layout as AntLayout } from 'antd';
import { Header } from '@/components/Layout/Header';

export interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <AntLayout style={{ height: '100vh' }}>
      <Header
        avatar="https://avatars.githubusercontent.com/u/6268906?s=400&v=4"
        githubURL="https://github.com/kencckw"
      />
      <AntLayout.Content>{children}</AntLayout.Content>
    </AntLayout>
  );
};

export default Layout;
