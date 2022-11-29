import React, { FC, useState } from "react";
import { CustomeModalProps, Todos, SetTodos } from "../../Interfaces";
import { InputField, TextAreaField } from "..";
import { BasicButton } from "../../components";

import "./index.css";
import { Modal, ModalProps, Row, Col, message } from "antd";

const PopModal: FC<ModalProps & CustomeModalProps> = ({
  onOpen,
  onClose,
  title,
  getTodos,
  className,
}) => {
  // const [todo, setTodo] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  const [allTodos, setAllTodos] = useState<SetTodos>({
    id: 0,
    todo: "",
    description: "",
    isDone: false,
  });

  const addTodo = () => {
    const { todo, description } = allTodos;
    if (!todo || !description)
      return message.error("Please fil all the fileds");
    if (allTodos) {
      getTodos && getTodos({ ...allTodos, id: Date.now(), isDone: false });
      setAllTodos({ ...allTodos, todo: "", description: "" });
    }
  };

  return (
    <Modal
      className={className}
      footer={false}
      open={onOpen}
      onCancel={onClose}
    >
      <Row gutter={[10, 20]} align="middle" justify="center">
        <Col span={24}>
          <h1 className="headingOne">{title}</h1>
        </Col>
        <Col span={24}>
          <label className="addTodoModal__label">Enter Name:</label>
          <InputField
            className="inputField"
            value={allTodos.todo}
            setTodo={(v) => setAllTodos({ ...allTodos, todo: v })}
          />
        </Col>
        <Col span={24}>
          <label className="addTodoModal__label">Enter Description:</label>
          <TextAreaField
            className="inputField"
            value={allTodos.description}
            setDescription={(v) => setAllTodos({ ...allTodos, description: v })}
          />
        </Col>
        <Col span={10} className="col_btn_Addtodo">
          <BasicButton
            className="addTodoModal__btn--Addtodo"
            onClick={addTodo}
            text="Add Todo"
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default PopModal;
