import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const navItems = [
  {
    key: '/',
    label: (
      <Link to="/" key="/">
        Home
      </Link>
    ),
  },
  {
    key: '/companies',
    label: (
      <Link to="/companies" key="/companies">
        Companies
      </Link>
    ),
  },
];

const BasicLayout = ({ children }) => {
  const location = useLocation();
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" activeKey={location.pathname} mode="horizontal" items={navItems} />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 80, minHeight: '80vh' }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default BasicLayout;
