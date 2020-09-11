import React, { useEffect, useState } from 'react'
import './Card.scss'

export const Card = () => {
  const [deck, setDeck] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadCard, setLoadCard] = useState(true)
  const [card, setCard] = useState()

  const getDeck = async () => {
    const deck = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((res) => res.json())
      .then(result => {
        setDeck(deck)
        console.log('1')
      })
      .catch((error) => console.log(error))

  }

  if (loading) {
    getDeck()
    setLoading(false)
    console.log(deck)
  }

  // if (!loading && !card && deck) {
  //   fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=5`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCard(result)
  //       setLoadCard(false)
  //     })
  //     .catch((error) => console.log(error))
  // }

  // console.log(deck.deck_id)

  // if (!loadCard) {
  //   console.log('card', card)
  // }

  return (
    <div className='random-card'>
      {
        loading && !card
          ? <span>Loading</span>
          // : card.cards.map(i => <img src={i.image} alt={i.code}/>)
          : <span>OK</span>
      }
    </div>
  )
}
