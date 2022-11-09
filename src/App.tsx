import React, { FC } from "react";
import { InputField } from "./components";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const App: FC = () => {
  return (
    <Row gutter={[10,10]} className="App">
      Todo app with TypeScript.
      <InputField />
    </Row>
  );
};

export default App;
