import React, { FC, useState } from "react";
import { InputField,BasicButton } from "./components";

import { Row } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const App: FC = () => {
  interface Todos{
    todo: string
  }
  const [todo, setTodo] = useState<string>('')
  const [allTodos, setAllTodos] = useState<Todos[]>([])

  const addTodo = ()=>{
    setAllTodos([...allTodos,{todo}])
  }
  return (
    <Row gutter={[10,10]} className="App">
      Todo app with TypeScript.
      <InputField value={todo} placeholder='Enter your todo' setTodo={setTodo} />
      <BasicButton addTodo={addTodo}/>
      {
        allTodos?.map(item => {
          return<p>{item.todo}</p>
        })
      }
      
    </Row>
  );
};

export default App;
