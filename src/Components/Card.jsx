import React from 'react'
import { Button } from './Button.jsx'
import './Card.css'


export const Card = ({
    title,
    desc,
    imgUrl,
    btn_color,
    imgStart
}) => {

    const checkTitle = title ? title : 'Default title'
    const checkDesc = desc ? desc : 'Default description'
    const checkImg = imgUrl ? imgUrl : 'No img url...'
    const checkButtonColor = btn_color ? btn_color : 'blue--gradient'
    return (
        <div 
        className="card-container"
        style = {{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className="img-container">
               <img 
               className = "card-img"
               src= {checkImg}/>
            </div>

            <div className="desc-container">
                <h2 className = "card-title">{checkTitle}</h2>
                <p className = "card-desc">{checkDesc}</p>
                <Button 
                classN = "card-btn"
                children = 'Button'
                buttonColor = {checkButtonColor} 
                buttonSize = "btn--large" 
                buttonStyle = "btn--grad" />
            </div>

        </div>
    )

}
