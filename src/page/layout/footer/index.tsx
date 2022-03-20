import { Col, Row } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import CompanyMap from './map';
// import styled from 'styled-components';

const Product: React.FC<any> = () => (
  <Footer>
    <Row>
      <Col span={12}>
        <CompanyMap />
      </Col>
      <Col span={12}>col</Col>
    </Row>
  </Footer>
);
export default Product;
