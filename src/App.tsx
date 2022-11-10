import React, { FC, useState } from "react";
import { InputField,BasicButton } from "./components";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const App: FC = () => {
  const [todo, setTodo] = useState<string>('')
  return (
    <Row gutter={[10,10]} className="App">
      Todo app with TypeScript.
      <InputField />
      <BasicButton/>
    </Row>
  );
};

export default App;
