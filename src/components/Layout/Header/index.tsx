import React, { FC, ReactNode } from 'react';
import { Button, PageHeader } from 'antd';
import {
  FontSizeOutlined,
  GithubOutlined,
  HomeOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { LinkButton } from '@/components/LinkButton';
import { Responsive } from '@/components/Responsive';

export interface IHeaderProps {
  avatar: string;
  githubURL: string;
}

interface IHeaderLinkButtonProps {
  icon: ReactNode;
  to: string;
}

const HeaderLinkButton: FC<IHeaderLinkButtonProps> = ({
  icon,
  children,
  to,
}) => {
  return (
    <Responsive
      xs={<LinkButton icon={icon} size="large" to={to} />}
      lg={
        <LinkButton icon={icon} size="large" to={to}>
          {children}
        </LinkButton>
      }
    />
  );
};

export const Header: FC<IHeaderProps> = ({ avatar, githubURL }) => {
  return (
    <PageHeader
      avatar={{ src: avatar }}
      title="Bitcoin Playground"
      extra={[
        <HeaderLinkButton key="0" icon={<FontSizeOutlined />} to="/mw">
          Mnemonic Words
        </HeaderLinkButton>,
        <HeaderLinkButton key="1" icon={<WalletOutlined />} to="/hd">
          HD Wallets
        </HeaderLinkButton>,
        <HeaderLinkButton key="2" icon={<HomeOutlined />} to="/ms">
          Multi-sig Addresses
        </HeaderLinkButton>,
        <Button
          key="3"
          type="ghost"
          icon={<GithubOutlined />}
          shape="circle"
          size="large"
          href={githubURL}
        />,
      ]}
    />
  );
};
