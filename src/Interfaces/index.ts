export interface TodoInputProps {
  value: string;
  // setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodo: (v: string) => void;
}
export interface TodoTextAreaProps {
  value: string;
  // setDescription: React.Dispatch<React.SetStateAction<string>>;
  setDescription: (v: string) => void;
}
export interface AddTodoButton {
  onClick: () => void;
  text: string;
}

// export type InputOrTextModalProps = {
//   onClick: () => void,
// } & ({
//   type: "input",
//   onAdd: (todo: string) => ({user: string, fn:(name: string)=>void}),
// } | {
//   type: "text",
//   onClose: ()=>void,
// })

// const obj: InputOrTextModalProps = {type: "text", }
export interface SetTodos {
  id:number
  todo: string;
  description: string;
}
export interface CustomeModalProps {
  onClose: () => void;
  onOpen: boolean;
  getTodos(todo: SetTodos): void;
}
export interface Todos {
  id:number,
  todo: string;
  description:string
}

export interface TodoListProps{
todos:Todos[]
}