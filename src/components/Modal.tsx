import React, { FC, useState } from "react";
import { CustomeModalProps, Todos,SetTodos } from "../Interfaces";
import { InputField, TextAreaField } from "../components";

import { Modal, ModalProps, Row, Col } from "antd";

const PopModal: FC<ModalProps & CustomeModalProps> = ({
  onOpen,
  onClose,
  title,
  getTodos,
}) => {
  const [todo, setTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
    const [allTodos, setAllTodos] = useState<SetTodos>({todo:'', description:''});

  const addTodo = () => {
    if (todo) {
      //   setAllTodos([...allTodos, { todo }]);
      getTodos(allTodos);
      setTodo("");
      setDescription("");
    }
  };

  return (
    <Modal title={title} open={onOpen} onCancel={onClose} onOk={addTodo}>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <label>Enter Name:</label>
          <InputField
            value={todo}
            setTodo={setTodo}
          />
        </Col>
        <Col span={24}>
          <label>Enter Description:</label>
          <TextAreaField
            value={description}
            setDescription={setDescription}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default PopModal;
