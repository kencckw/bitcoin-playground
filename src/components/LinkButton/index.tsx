import { Button, ButtonProps } from 'antd';
import React, { FC, useCallback } from 'react';
import { history } from 'umi';

export type ILinkButtonProps = { to: string; state?: any } & ButtonProps;

export const LinkButton: FC<ILinkButtonProps> = (props) => {
  const onClick = useCallback(() => {
    history.push(props.to, props.state);
  }, []);
  return <Button {...props} onClick={onClick} />;
};
