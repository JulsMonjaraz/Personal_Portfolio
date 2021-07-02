import React from 'react'
import './Card.css'
import {AiFillGithub} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';
import { Link } from 'react-router-dom';


export const Card = ({
    title,
    desc,
    imgUrl,
    alt,
    imgStart,
    techStack,
    webUrl,
    gitUrl
}) => {

    const checkTitle = title ? title : 'Default title'
    const checkDesc = desc ? desc : 'Default description'
    const checkImg = imgUrl ? imgUrl : 'No img url...'
    const checkTech = techStack ? techStack : 'Default techstack'
    const checkwebUrl = webUrl ? webUrl : '#'
    const checkgitUrl = gitUrl ? gitUrl : '#'


    

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <div 
        className="card-container"
        style = {{display: 'flex',flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className="img-container">
               <img 
               className = "card-img"
               src= {checkImg}
               alt = {alt}
               onClick ={ () => openInNewTab(checkwebUrl)}
               />
                <div className="card-media-container">
                      <BiWorld className = "card-social-icon" title = "Website" onClick ={ () => openInNewTab(checkwebUrl)}/>
                      <AiFillGithub className = "card-social-icon" title = "Git-repo" onClick ={ () => openInNewTab(checkgitUrl)}/>
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
