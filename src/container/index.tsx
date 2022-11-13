import React, { FC, useState } from "react";
import { InputField, BasicButton } from "../components";
import { Row, Col, Avatar, Card, Skeleton, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "../App.css";

const { Meta } = Card;
const TodoApp: FC = () => {
  interface Todos {
    todo: string;
  }
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todos[]>([]);

  const addTodo = () => {
    if (todo) {
      setAllTodos([...allTodos, { todo }]);
      setTodo("");
    } else {
      alert("Enter Todo.");
    }
  };
  return (
    <Row gutter={[10, 10]} className="App">
      <Col span={24}>
        <h2>Todo app with TypeScript.</h2>
      </Col>
      <Col span={24}>
        <InputField
          value={todo}
          placeholder="Enter your todo"
          setTodo={setTodo}
        />
      </Col>
      <Col span={24}>
        <BasicButton addTodo={addTodo} text="Add Todo" />
      </Col>
      <Col span={24}>
        {allTodos?.map((item) => {
          return (
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              {/* <Skeleton loading={loading} avatar active> */}
              <Meta title="Card title" description={item.todo} />
              {/* </Skeleton> */}
            </Card>
          );
        })}
      </Col>
    </Row>
  );
};

export default TodoApp;
