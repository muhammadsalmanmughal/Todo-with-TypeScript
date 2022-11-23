import React, { FC, useState } from "react";
import { InputField, BasicButton, PopModal } from "../components";
import { Todos, SetTodos } from "../Interfaces";

import { Row, Col, Card, Tooltip, Popconfirm } from "antd";
import { EditOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "../index.css";

const { Meta } = Card;
const TodoApp: FC = () => {
  const [allTodos, setAllTodos] = useState<Todos[]>([]);
  console.log("allTodos: ", allTodos);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showTodos = (todos: SetTodos) => {
    setAllTodos([...allTodos, todos]);
    onCloseModal();
  };

  const deleteTodo = (id: number): void => {
    setAllTodos(
      allTodos.filter((item) => {
        return item.id !== id;
      })
    );
    // const filterTodos = allTodos.filter(item =>{
    //   return item.id!== id
    // })
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
      <Col span={24} style={{ width: "100%" }}>
        <Row>
          {allTodos?.map((item, index) => {
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
                        onConfirm={() => deleteTodo(item.id)}
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
