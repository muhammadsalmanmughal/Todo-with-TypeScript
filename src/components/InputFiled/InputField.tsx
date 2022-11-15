import React,{FC} from 'react'
import { Input, InputProps } from 'antd'
import { TodoInputProps } from '../../Interfaces'

const InputField:FC<InputProps & TodoInputProps> = ({placeholder,value,setTodo}) => {
    return(
        <Input placeholder={placeholder} value={value} onChange={e => setTodo(e.target.value)}/>
    )
}

export default InputField