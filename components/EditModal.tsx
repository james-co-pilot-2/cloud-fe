'use client';
import { Modal, Form, Input, Radio } from 'antd';
import { IUser } from '@/types';

type Props = {
  visible: boolean;
  user: IUser;
  onClose: () => void;
};

export default function EditModal({ visible, user, onClose }: Props) {
  const [form] = Form.useForm();

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Updated user:', { ...user, ...values });
        form.resetFields();
        onClose();
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={visible}
      title="Edit User"
      okText="Save"
      cancelText="Cancel"
      onOk={handleSave}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical" initialValues={user}>
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
  );
}
