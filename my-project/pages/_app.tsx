import '../styles/globals.css';
import 'antd/dist/antd.css'
import React, { useState } from 'react';
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
//import Layout from '../components/layout/layout'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import {useSession} from "next-auth/react";

import Header from '../components/header/header';


const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    
    <SessionProvider session={session}>
      <Layout style={{ minHeight: '100vh' }}>
        
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} width={200} className="site-layout-background">
          <div className="logo" />
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        
        <Header/>

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>John</Breadcrumb.Item>
          </Breadcrumb>
          <Component {...pageProps} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Leadway Design ©2022 Created by John Lee</Footer>
        </Layout>
      </Layout>
    
    </SessionProvider>
  
    )
}

export default MyApp
