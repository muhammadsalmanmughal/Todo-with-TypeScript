import React,{FC} from 'react'
import { Button,ButtonProps } from 'antd'
import {AddTodoButton} from '../Interfaces'

const BasicButton:FC<ButtonProps & AddTodoButton> = ({onClick,text,...rest})=> {
    return(
        <Button onClick={onClick} {...rest}>{text}</Button>
    )
}

export default BasicButton