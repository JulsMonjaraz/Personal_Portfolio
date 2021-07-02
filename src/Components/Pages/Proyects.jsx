import React from 'react'
import { Card } from '../Card.jsx'
import './Proyects.css'
import {card_1} from '../Pages/Data/Cards'
import { Link } from "react-router-dom";
import {AiFillGithub} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';


import {useTranslation} from 'react-i18next'


function Proyects() {

    const [t] = useTranslation("global")

    return (
        <div className="proyects-container" id = "proyects">
            <h4 className = "mywork-subtitle">{t("work.title")}</h4>
            <h3 className = "mywork-title">{t("work.subtitle")}</h3>
            
            <div className="line">  </div>

        

            <Card 
             title = {t("work.cd1-title")}
             desc = {t("work.cd1-desc")}
             imgUrl = "images/Gitme1.png"
             imgStart = "start"
             techStack ={t("work.cd1-stack")}
             webUrl = "https://git-mee.herokuapp.com"
             gitUrl = "https://github.com/JulsMonjaraz/Git-me"
            />

            <div className="card-media-container">
                <BiWorld className = "card-social-icon" title = "Website" />
                <AiFillGithub className = "card-social-icon" title = "Git-repo"/>
            </div>

            

            
            <Card 
            title = {t("work.cd2-title")}
            desc = {t("work.cd2-desc")}
            btn_color = "pink--gradient"
            imgStart = ""
            techStack ={t("work.cd2-stack")}
            />
            <Card 
            title = {t("work.cd3-title")}
            desc = {t("work.cd3-desc")}
            imgUrl = "images/img-3.svg"
            btn_color = "green--gradient"
            imgStart = "start"
            techStack ={t("work.cd3-stack")}
            />
            <Card 
           title = {t("work.cd4-title")}
           desc = {t("work.cd4-desc")}
           imgUrl = "images/img-4.svg"
           imgStart = ""
           techStack ={t("work.cd4-stack")}
            />
        </div>
    )
}

export default Proyects
