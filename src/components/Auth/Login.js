import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import axios from 'axios';
import api from '../../axios';

const { Title } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await api.post('users/login', values);
      localStorage.setItem('token', response.data.token);
      // Redirect to chat page or handle login
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <Card
      title={<Title level={3}>Login</Title>}
      style={{ width: 300, margin: 'auto', marginTop: '50px' }}
    >
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
