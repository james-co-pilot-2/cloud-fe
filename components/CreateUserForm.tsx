'use client';
import { IUser } from '@/types';
import { Button, Form, Input, Modal, Radio } from 'antd';
import { useState } from 'react';

export default function CreateUserForm() {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleCreate = (values: IUser) => {
    console.log('User Created:', values);
    form.resetFields();
    setVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        handleCreate(values);
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Create User
      </Button>
      <Modal
        open={visible}
        title="Create New User"
        okText="Create"
        cancelText="Cancel"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" initialValues={{ sex: true }}>
          <Form.Item
            name="fullname"
            label="Full Name"
            rules={[{ required: true, message: 'Please input the full name!' }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: 'Please input the age!' }]}
          >
            <Input type="number" placeholder="Enter age" />
          </Form.Item>
          <Form.Item
            name="sex"
            label="Sex"
            rules={[{ required: true, message: 'Please select the sex!' }]}
          >
            <Radio.Group>
              <Radio value={true}>Male</Radio>
              <Radio value={false}>Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
