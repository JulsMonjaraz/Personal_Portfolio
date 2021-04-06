import React from 'react'
import './Button.css'

const STYLES = ['btn--primary','btn--outline','btn--grad']
const SIZEZ = ['btn--medium','btn--large','btn--mobile','btn--small']
const COLOR = ['primary','blue',, 'green--gradient','blue--gradient','pink--gradient','purple--gradient']

export const Button = ({
     children,
     type,
     onclick,
     buttonStyle,
     buttonSize,
     buttonColor, 
     classN
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZEZ.includes(buttonSize) ? buttonSize : SIZEZ[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

    return (
        <button className = {`btn ${classN} ${checkButtonColor} ${checkButtonSize} ${checkButtonStyle}`}
        onClick = {onclick} type = {type}
        >
          {children}
        </button>
    )
}
