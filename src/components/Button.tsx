import React,{FC} from 'react'
import { Button,ButtonProps } from 'antd'

const BasicButton:FC<ButtonProps> = (props)=> {
    return(
        <Button>CLick Me</Button>
    )
}

export default BasicButton