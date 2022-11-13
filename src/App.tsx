import React, { FC } from "react";
import TodoApp from "./container";

import { Row,Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const App: FC = () => {
  return (
    <Row className="App">
      <Col span={24}>
        <TodoApp />
      </Col>
    </Row>
  );
};

export default App;
