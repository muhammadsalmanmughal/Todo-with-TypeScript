import React, { FC } from "react";
import { InputField } from "../index";
import { TodoListProps } from "../../Interfaces";

import { Row, Col, Card, Tooltip, Popconfirm } from "antd";
import { EditOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";

const TodosList: FC<TodoListProps> = ({todos, deleteTodo}) => {
  // console.log('TodosList: ', props);
  // const todos = props?.todos
  const delete_Todo = (id:number) => {
    deleteTodo(id)
  }
  return (
    <Row>
      {todos?.map((item, index) => {
        return (
          <Col
            key={index}
            span={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{ width: "100%", margin: 10 }}
              actions={[
                <Tooltip placement="top" title="Delete Todo.">
                  <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={() => delete_Todo(item.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined key="delete" />
                  </Popconfirm>
                </Tooltip>,
                <Tooltip placement="top" title="Edit Todo.">
                  <EditOutlined key="edit" />,
                </Tooltip>,
                <Tooltip placement="top" title="Mark it complete.">
                  <CheckOutlined key="done" />,
                </Tooltip>,
              ]}
            >
              {/* <Meta title={item.todo} description={item.description} /> */}
              <h3>{item.todo}</h3>
              <InputField
                className="inputField"
                value={item.todo}
                setTodo={(e) => console.log(e)}
              />
              <p>{item.description}</p>
              <InputField
                className="inputField"
                value={item.description}
                setTodo={(e) => console.log(e)}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default TodosList;
