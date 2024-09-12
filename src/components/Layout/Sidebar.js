import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider style={{marginTop:"70px"}} width={200} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
        <Menu.Item key="1">
          <Link to="/chat/1">Chat Room 1</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/chat/2">Chat Room 2</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
