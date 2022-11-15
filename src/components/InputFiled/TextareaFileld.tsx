import React,{FC} from 'react'
import { Input, InputProps } from 'antd'
import { TodoTextAreaProps } from '../../Interfaces'

const { TextArea } = Input;
const TextAreaField:FC<InputProps & TodoTextAreaProps> = ({placeholder,value,setTodo}) => {
    return(
        <TextArea placeholder={placeholder} value={value} onChange={e => setTodo(e.target.value)}/>
    )
}

export default TextAreaField