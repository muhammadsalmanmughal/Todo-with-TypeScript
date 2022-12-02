import React, { FC, useState } from "react";
import { InputField, BasicButton, PopModal, TodosList } from "../components";
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

  const markDone = (id: number) => {
    setAllTodos(
      allTodos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
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
        <h2 className="">Todo app with TypeScript.</h2>
      </Col>
      <Col span={24}>
        <BasicButton
          className="btn--openModal"
          onClick={onOpenModal}
          text="Add Todo"
        />
      </Col>
      <Col span={24} style={{ width: "100%" }}>
        <TodosList
          todos={allTodos}
          deleteTodo={(id: number) => deleteTodo(id)}
          isTodoDone={(id: number) => markDone(id)}
        />
      </Col>
      <Col span={24}>
        <PopModal
          className="addTodoModal"
          onOpen={isModalOpen}
          onClose={onCloseModal}
          title="Add Todos"
          getTodos={(todo: SetTodos) => showTodos(todo)}
          isEditModal={false}
        />
      </Col>
    </Row>
  );
};

export default TodoApp;
