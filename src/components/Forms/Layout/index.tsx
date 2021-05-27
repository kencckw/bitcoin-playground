import { Card, Col, Row } from 'antd';
import React, { FC } from 'react';

export const FormLayout: FC = ({ children }) => {
  return (
    <Row justify="center" align="top" style={{ paddingTop: 12 }}>
      <Col sm={24} lg={16} xl={12} style={{ width: '100%' }}>
        <Card style={{ minHeight: 650 }}>{children}</Card>
      </Col>
    </Row>
  );
};
