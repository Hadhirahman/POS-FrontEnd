import  { useState } from 'react';
import { Layout, Menu, Table, Space, Modal, Form, Input, Button } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const TableManagement = () => {
  const [visible, setVisible] = useState(false);
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', capacity: 4 },
    { id: 2, name: 'Table 2', capacity: 2 },
    // Add more tables as needed
  ]);

  const columns = [
    {
      title: 'Table Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Capacity',
      dataIndex: 'capacity',
      key: 'capacity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="text" icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button type="text" icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </Space>
      ),
    },
  ];

  const handleDelete = (id) => {
    setTables(tables.filter(table => table.id !== id));
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['tableManagement']}>
          <Menu.Item key="tableManagement">Table Management</Menu.Item>
          <Menu.Item key="order">Order</Menu.Item>
          {/* Add more menu items for other functionalities */}
        </Menu>
      </Sider>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ margin: '16px 0' }}>
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Add Table
          </Button>
        </div>
        <Table columns={columns} dataSource={tables} rowKey="id" />
      </Content>
      <Modal
        title="Add Table"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleOk}
          onFinishFailed={handleCancel}
        >
          <Form.Item
            label="Table Name"
            name="tableName"
            rules={[{ required: true, message: 'Please input the table name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Capacity"
            name="capacity"
            rules={[{ required: true, message: 'Please input the capacity!' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default TableManagement;
