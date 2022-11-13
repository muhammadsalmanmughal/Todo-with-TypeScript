export interface TodoInputProps {
  value: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
export interface AddTodoButton {
  onClick: () => void;
  text:string
}
export interface CustomeModalProps {
  onClose: () => void;
  onOpen: boolean;
}