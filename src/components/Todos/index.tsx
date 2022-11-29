import React, { FC, useState } from "react";
import { InputField } from "../index";
import { TodoListProps } from "../../Interfaces";
import { PopModal } from "../../components";

import { Row, Col, Card, Tooltip, Popconfirm } from "antd";
import { EditOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import "./index.css";

const TodosList: FC<TodoListProps> = ({ todos, deleteTodo, isTodoDone }) => {
  // console.log('TodosList: ', props);
  // const todos = props?.todos

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const delete_Todo = (id: number) => {
    deleteTodo(id);
  };

  const onCloseModal = (): void => {
    setIsModalOpen(false);
  };
  const onOpenModal = (): void => {
    setIsModalOpen(true);
  };

  return (
    <Row>
      {todos?.map((item, index) => {
        return (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{ width: "100%", margin: 10 }}
              className={`todoCard ${item.isDone ? "isDone" : ""}`}
              actions={[
                <Tooltip placement="top" title="Delete Todo.">
                  <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={() => delete_Todo(item.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <DeleteOutlined key="delete" />
                  </Popconfirm>
                </Tooltip>,
                <Tooltip placement="top" title="Edit Todo.">
                  <EditOutlined
                    key="edit"
                    onClick={
                      () => onOpenModal()
                    }
                  />
                  ,
                </Tooltip>,
                <Tooltip placement="top" title="Mark it done.">
                  <CheckOutlined
                    key="done"
                    onClick={() => isTodoDone(item.id)}
                  />
                  ,
                </Tooltip>,
              ]}
            >
              {item.isDone && <span className="badge"></span>}
              {/* <Meta title={item.todo} description={item.description} /> */}
              <h2 className="todoCard_Title">{item.todo}</h2>
              {/* <InputField
                className="inputField"
                value={item.todo}
                setTodo={(e) => console.log(e)}
              /> */}
              <p className="todoCard_Description">{item.description}</p>
              {/* <InputField
                className="inputField"
                value={item.description}
                setTodo={(e) => console.log(e)}
              /> */}
            </Card>
          </Col>
        );
      })}
      <Col span={24}>
        <PopModal onOpen={isModalOpen} onClose={onCloseModal} />
      </Col>
    </Row>
  );
};

export default TodosList;
