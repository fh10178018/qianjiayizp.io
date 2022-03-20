import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';

const Wrapper = styled.div``;

const AppLayout: React.FC<any> = () => (
  <Wrapper>
    <Layout className="layout">
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  </Wrapper>
);
export default AppLayout;
