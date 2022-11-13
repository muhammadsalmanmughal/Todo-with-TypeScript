import React, { FC, useState } from "react";
import { CustomeModalProps, Todos } from "../Interfaces";
import { InputField } from "../components";

import { Modal, ModalProps } from "antd";

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
      <InputField
        value={todo}
        placeholder="Enter your todo"
        setTodo={setTodo}
      />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default PopModal;
