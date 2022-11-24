import React, { FC } from "react";
import { InputField, BasicButton, PopModal } from "../index";
import { TodoListProps,Todos } from "../../Interfaces";

import { Row, Col, Card, Tooltip, Popconfirm } from "antd";
import { EditOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";

const TodosList: FC<TodoListProps[]> = (todos) => {
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
                    // onConfirm={() => deleteTodo(item.id)}
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
              {/* <h3>{item.todo}</h3>
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
              /> */}
            </Card>
          </Col>
        );
      })}
      allTodos
    </Row>
  );
};

export default TodosList;
