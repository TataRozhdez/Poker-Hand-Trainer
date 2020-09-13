import React, { useEffect, useContext } from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { MainContent } from './component/MainContent/MainContent'
import { Sidebar } from './component/Sidebar/Sidebar'
import DeckContext from './context/deck/deckContext'
import {Hand} from 'pokersolver'

export const App = () => {

  const deckContext = useContext(DeckContext)

  const {
    loading,
    loadCard,
    getCards,
    getDeck,
    cards,
    gameStarted,
    chooseAnswer,
    stopGame
  } = deckContext

  useEffect(() => {
    getDeck()
    // eslint-disable-next-line
  }, [])

  if (gameStarted) {
    console.log(deckContext)
    
    const renderingHand = [] 
    cards.cards.map(i => renderingHand.push(i.code))
    const hand = Hand.solve(renderingHand)

    console.log('1', hand.name)
  }

  return (
    <div>
      <Navbar />
      <div className='app'>
        <MainContent
          loading={loading}
          gameStarted={gameStarted}
          loadCard={loadCard}
          cards={cards}
        />
        <Sidebar
          getCards={getCards}
          loading={loading}
          start={gameStarted}
          stopGame={stopGame}
          chooseAnswer={chooseAnswer}
        />
      </div>
    </div>
  )
}
