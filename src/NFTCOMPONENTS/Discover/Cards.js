import React from 'react'
import './card.css'

const Cards = ({cardDetails}) => {
  return (
    <div className='con'>
      {cardDetails.map((card) => {
        const {id , title , icon , description , word} = card
        return (
            <Card card={card}/>
        )
      })}
    </div>
  )
}

const Card = (props)=> {
    const {id , title , icon , description , word} = props.card
    return (
        <div className="card-2" key={id}>
            <div className="card-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{word}</button>
        </div>
    )
}

export default Cards
