import React from 'react'
import Slide from 'react-reveal/Slide'
import './Card.scss'

export const Card = ({ cards }) => {

  return (
    <div className='random-card'>
      {
        cards.map(
          i => <Slide key={i.code} right cascade><img src={i.image} alt={i.code} /></Slide>
        )
      } 
    </div>
  )
}
