import React from 'react'
import './Card.css'
import {AiFillGithub} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';


export const Card = ({
    title,
    desc,
    imgUrl,
    alt,
    imgStart,
    techStack
}) => {

    const checkTitle = title ? title : 'Default title'
    const checkDesc = desc ? desc : 'Default description'
    const checkImg = imgUrl ? imgUrl : 'No img url...'
    const checkTech = techStack ? techStack : 'Default techstack'
    return (
        <div 
        className="card-container"
        style = {{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className="img-container">
               <img 
               className = "card-img"
               src= {checkImg}
               alt = {alt}
               />
                <div className="card-media-container">
                 <BiWorld className = "card-social-icon" title = "Website"/>
                 <AiFillGithub className = "card-social-icon" title = "Git-repo"/>
                </div>
            </div>

            <div className="desc-container">
                <h2 className = "card-title">{checkTitle}</h2>
                <p className = "card-tech">{checkTech}</p>
                <p className = "card-desc">{checkDesc}</p>
            </div>

        </div>
    )

}
