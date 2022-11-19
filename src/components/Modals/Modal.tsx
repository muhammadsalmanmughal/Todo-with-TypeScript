import React, { FC, useState } from "react";
import { CustomeModalProps, Todos, SetTodos } from "../../Interfaces";
import { InputField, TextAreaField } from "..";
import { BasicButton } from "../../components";

import "../../App.css";
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
    <Modal className="addTodoModal" footer={false} open={onOpen} onCancel={onClose}>
      <Row gutter={[10, 20]} align='middle' justify='center'>
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
        <Col span={10} className='col_btn_Addtodo'>
          <BasicButton className="addTodoModal__btn--Addtodo" onClick={addTodo} text="Add Todo" />
        </Col>
      </Row>
    </Modal>
  );
};

export default PopModal;
