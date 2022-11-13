import React,{FC} from 'react'
import { Button,ButtonProps } from 'antd'
import {AddTodoButton} from '../Interfaces'

const BasicButton:FC<ButtonProps & AddTodoButton> = ({addTodo,text,...rest})=> {
    return(
        <Button onClick={addTodo} {...rest}>{text}</Button>
    )
}

export default BasicButton