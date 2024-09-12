import React from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import axios from 'axios';
import api from '../../axios';

const { Title } = Typography;

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
        await api.post('/users/register', values); // Use Axios instance
      // Redirect to login page or handle registration
      message.success('Registration successful!');
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <Card
      title={<Title level={3}>Register</Title>}
      style={{ width: 300, margin: 'auto', marginTop: '50px' }}
    >
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegisterPage;
