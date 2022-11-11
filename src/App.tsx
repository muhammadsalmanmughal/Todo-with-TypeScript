import React, { FC, useState } from "react";
import { InputField,BasicButton } from "./components";

import { Row } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const App: FC = () => {
  const [todo, setTodo] = useState<string>('')
  
  return (
    <Row gutter={[10,10]} className="App">
      Todo app with TypeScript.
      <InputField value={todo} placeholder='Enter your todo' setTodo={setTodo} />
      <BasicButton/>
    </Row>
  );
};

export default App;
