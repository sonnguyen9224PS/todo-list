import { Card, Button, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Lists({ listData, handleDeleteTodo, handleUpdateTodo, id }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  if (!isUpdate) {
    return (
      <Card title="Todo">
        <Card
          type="inner"
          title={
            <Link to={`/detailpage/${listData.id}`}>{listData.title}</Link>
          }
          extra={
            <div>
              <Button
                onClick={() => {
                  navigate(`detailpage/${id}`);
                }}
                style={{ marginRight: 10 }}
                type="primary"
              >
                Detail
              </Button>
              <Button
                onClick={() => {
                  setIsUpdate(true);
                }}
                style={{ marginRight: 10 }}
                type="primary"
              >
                Edit
              </Button>
              <Button
                type="danger"
                onClick={() => {
                  handleDeleteTodo(listData.id);
                }}
              >
                Delete
              </Button>
            </div>
          }
        >
          {listData.description}
        </Card>
      </Card>
    );
  }
  return (
    <Card style={{ backgroundColor: "#ccc" }}>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        initialValues={{
          title: listData.title,
          description: listData.description,
        }}
        onFinish={(values) => {
          handleUpdateTodo(values, listData.id);
          setIsUpdate(false);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "input your title !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button style={{ marginRight: 15 }} type="primary" htmlType="submit">
            Update
          </Button>
          <Button
            onClick={() => setIsUpdate(false)}
            type="button"
            htmlType="submit"
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Lists;
