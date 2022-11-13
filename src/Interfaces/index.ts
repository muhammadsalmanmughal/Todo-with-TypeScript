export interface TodoInputProps {
  value: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
export interface AddTodoButton {
  addTodo: () => void;
  text:string
}
export interface CustomeModalProps {
  onClose: () => void;
  onOpen: boolean;
}