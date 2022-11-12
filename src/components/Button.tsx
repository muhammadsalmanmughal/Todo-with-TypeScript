import React,{FC} from 'react'
import { Button,ButtonProps } from 'antd'
import {AddTodoButton} from '../Interfaces'

const BasicButton:FC<ButtonProps & AddTodoButton> = ({addTodo})=> {
    return(
        <Button onClick={addTodo}>CLick Me</Button>
    )
}

export default BasicButton