import React, { FC, useState } from "react";
import { InputField, BasicButton,PopModal } from "../components";
import {Todos} from '../Interfaces'
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
  const [allTodos, setAllTodos] = useState<Todos[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const showTodos = (todos:string) => {
    console.log('alltodo: ', typeof(todos));
    setAllTodos([...allTodos, { todo:todos }]);
  }

  const onCloseModal = ():void => {
    setIsModalOpen(false)
  }
  const onOpenModal = ():void => {
    setIsModalOpen(true)
  }
  return (
    <Row gutter={[10, 10]} className="App">
      <Col span={24}>
        <h2>Todo app with TypeScript.</h2>
      </Col>
      {/* <Col span={24}>
        <InputField
          value={todo}
          placeholder="Enter your todo"
          setTodo={setTodo}
        />
      </Col> */}
      <Col span={24}>
        <BasicButton onClick={onOpenModal} text="Add Todo" />
      </Col>
      {/* <Col span={24}>
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
              <Meta title="Card title" description={item.todo} />
            </Card>
          );
        })}
      </Col> */}
      <Col span={24}>
        <PopModal onOpen={isModalOpen} onClose={onCloseModal} title='Add Todos' getTodos={(todo:string)=>showTodos(todo)}/>
      </Col>
    </Row>
  );
};

export default TodoApp;
