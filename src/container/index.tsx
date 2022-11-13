import React, { FC, useState } from "react";
import { InputField, BasicButton,PopModal } from "../components";
import { Row, Col, Card} from "antd";
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const addTodo = () => {
    setIsModalOpen(true)
    // if (todo) {
    //   setAllTodos([...allTodos, { todo }]);
    //   setTodo("");
    // } else {
    //   alert("Enter Todo.");
    // }
  };

  const onCloseModal = ():void => {
    setIsModalOpen(false)
  }
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
      <Col span={24}>
        <PopModal onOpen={isModalOpen} onClose={onCloseModal}/>
      </Col>
    </Row>
  );
};

export default TodoApp;
