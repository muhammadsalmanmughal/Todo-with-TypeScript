import React, { FC, useState } from "react";
import { CustomeModalProps, Todos, SetTodos } from "../../Interfaces";
import { InputField, TextAreaField } from "..";

import { Modal, ModalProps, Row, Col } from "antd";

const PopModal: FC<ModalProps & CustomeModalProps> = ({
  onOpen,
  onClose,
  title,
  getTodos,
}) => {
  // const [todo, setTodo] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  const [allTodos, setAllTodos] = useState<SetTodos>({
    todo: "",
    description: "",
  });

  const addTodo = () => {
    if (allTodos) {
      //   setAllTodos([...allTodos, { todo }]);
      getTodos(allTodos);
      // setTodo("");
      // setDescription("");
      setAllTodos({ todo: "", description: "" });
    }
  };

  return (
    <Modal title={title} open={onOpen} onCancel={onClose} onOk={addTodo}>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <label>Enter Name:</label>
          <InputField
            value={allTodos.todo}
            setTodo={(v) => setAllTodos({ ...allTodos, todo: v })}
          />
        </Col>
        <Col span={24}>
          <label>Enter Description:</label>
          <TextAreaField
            value={allTodos.description}
            setDescription={(v) => setAllTodos({ ...allTodos, description: v })}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default PopModal;
