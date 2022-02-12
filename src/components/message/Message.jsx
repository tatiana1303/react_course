import React from "react"
import './Message.css'

export const Message = (props) => {
    return (
        <p className='message'>There {props.text} </p>
    )
    
}