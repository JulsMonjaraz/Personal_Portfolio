import React from 'react'
import { Card } from '../Card.jsx'
import './Proyects.css'
import {card_1,card_2,card_3,card_4} from './Data/Data'

function Proyects() {
    return (
        <div className="proyects-container" id = "proyects">
            <h3 className = "proyects__mywork">My work</h3>
            <div className="line">  </div>
            <Card 
            {...card_1}
            />
            <Card 
            {...card_2}
            />
            <Card 
            {...card_3}
            />
            <Card 
            {...card_4}
            />
        </div>
    )
}

export default Proyects
