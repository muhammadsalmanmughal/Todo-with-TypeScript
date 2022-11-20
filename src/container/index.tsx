import React, { FC, useState } from "react";
import { InputField, BasicButton, PopModal } from "../components";
import { Todos, SetTodos } from "../Interfaces";
import { Row, Col, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "../index.css";

const { Meta } = Card;
const TodoApp: FC = () => {
  const [allTodos, setAllTodos] = useState<Todos[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showTodos = (todos: SetTodos) => {
    console.log("alltodo: ", todos);
    setAllTodos([...allTodos, todos]);
    onCloseModal();
  };

  const onCloseModal = (): void => {
    setIsModalOpen(false);
  };
  const onOpenModal = (): void => {
    setIsModalOpen(true);
  };
  return (
    <Row className="App">
      <Col span={24}>
        <h2 className="headingOne">Todo app with TypeScript.</h2>
      </Col>
      {/* <Col span={24}>
        <InputField
          value={todo}
          placeholder="Enter your todo"
          setTodo={setTodo}
        />
      </Col> */}
      <Col span={24}>
        <BasicButton
          className="btn--openModal"
          onClick={onOpenModal}
          text="Add Todo"
        />
      </Col>
      <Col span={24} style={{width:'100%'}}>
        <Row>
          {allTodos?.map((item) => {
            console.log("allTodos: ", allTodos);
            return (
              <Col
                span={5}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  style={{ width: '100%', margin: 10 }}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title={item.todo} description={item.description} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col span={24}>
        <PopModal
          className="addTodoModal"
          onOpen={isModalOpen}
          onClose={onCloseModal}
          title="Add Todos"
          getTodos={(todo: SetTodos) => showTodos(todo)}
        />
      </Col>
    </Row>
  );
};

export default TodoApp;
