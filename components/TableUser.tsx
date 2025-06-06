'use client';

import { IUser } from '@/types';
import { Button, Col, Row, Table, TableColumnProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import EditModal from './EditModal';

type Props = {
  users: IUser[];
};
export default function TableUser({ users }: Props) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<IUser | null>(null);

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleEdit = (user: IUser) => {
    setEditingUser(user);
    setEditModalOpen(true);
  };

  const columns: TableColumnProps<IUser>[] = [
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      key: 'sex',
      render: (sex: boolean) => (sex ? 'Male' : 'Female'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Row gutter={8}>
          <Col>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
            />
          </Col>
          <Col>
            <Button
              danger
              type="primary"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
            />
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={users} columns={columns} rowKey="id" />
      {editingUser && (
        <EditModal
          visible={isEditModalOpen}
          user={editingUser}
          onClose={() => setEditModalOpen(false)}
        />
      )}
    </>
  );
}
