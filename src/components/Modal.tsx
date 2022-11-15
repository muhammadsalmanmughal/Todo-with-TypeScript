import React, { FC, useState } from "react";
import { CustomeModalProps, Todos } from "../Interfaces";
import { InputField,TextAreaField } from "../components";

import { Modal, ModalProps, Row, Col } from "antd";

const PopModal: FC<ModalProps & CustomeModalProps> = ({
  onOpen,
  onClose,
  title,
  getTodos,
}) => {
  const [todo, setTodo] = useState<string>("");
  //   const [allTodos, setAllTodos] = useState<Todos[]>([]);

  const addTodo = () => {
    if (todo) {
      //   setAllTodos([...allTodos, { todo }]);
      getTodos(todo);
      setTodo("");
    }
  };

  return (
    <Modal title={title} open={onOpen} onCancel={onClose} onOk={addTodo}>
      <Row gutter={[10,10]}>
        <Col span={24}>
          <label>Enter Name:</label>
          <InputField
            value={todo}
            // placeholder="Enter your todo name"
            setTodo={setTodo}
          />
        </Col>
        <Col span={24}>
        <label>Enter Description:</label>
          <TextAreaField
            value=''
            // placeholder="Enter your todo description"
            setTodo={setTodo}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default PopModal;
