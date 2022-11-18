import React,{FC} from 'react'
import { Input, InputProps } from 'antd'
import { TodoTextAreaProps } from '../../Interfaces'

const { TextArea } = Input;
const TextAreaField:FC<InputProps & TodoTextAreaProps> = ({placeholder,value,setDescription,className}) => {
    return(
        <TextArea className={className} placeholder={placeholder} value={value} onChange={e => setDescription(e.target.value)}/>
    )
}

export default TextAreaField