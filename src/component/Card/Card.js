import React from 'react'
import './Card.scss'

export const Card = ({ cards }) => {
  console.log(cards)

  return (
    <div className='random-card'>
      {
        cards.cards.map(i => <img key={i.code} src={i.image} alt={i.code} />)
      } 
    </div>
  )
}
