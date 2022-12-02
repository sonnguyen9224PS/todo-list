import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Button, Form, Input, Divider } from "antd";
import {
  createToDoList,
  deleteToDoList,
  updateTodoList,
} from "../redux/action";
import Lists from "./List";

const initialValues = {
  title: "",
  description: "",
};

function Todolist() {
  const [form] = Form.useForm();
  const { todoList } = useSelector((state) => state.todo);

  console.log("list", todoList);
  const dispatch = useDispatch();

  function handleUpdateTodo(values, id) {
    dispatch(updateTodoList({ data: values, id }));
  }
  function handleDeleteTodo(id) {
    dispatch(deleteToDoList({ id: id }));
  }

  function handleCreateTodo(values) {
    dispatch(createToDoList({ data: values }));
  }
  function renderTodoList() {
    return todoList.map((item, index) => {
      return (
        <Lists
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          key={index}
          listData={item}
        />
      );
    });
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={initialValues}
          onFinish={(values) => {
            handleCreateTodo(values);
            form.resetFields();
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider />
      </div>
      {renderTodoList()}
    </>
  );
}

export default Todolist;
