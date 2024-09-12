import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Home = () => {
  return (
    <Card
      title={<Title level={2}>Welcome to ChatApp</Title>}
      style={{ width: 500, margin: 'auto', marginTop: '50px' }}
    >
      <p>ChatApp is your go-to solution for real-time messaging. Start by logging in or registering to join the conversation!</p>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary">
          <Link to="/login">Login</Link>
        </Button>
        <Button type="default">
          <Link to="/register">Register</Link>
        </Button>
      </Space>
    </Card>
  );
};

export default Home;
