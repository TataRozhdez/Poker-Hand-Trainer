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
    handleChooseAnswer,
    selected,
    setTime,
    stopGame
  } = deckContext

  useEffect(() => {
    getDeck()
    // eslint-disable-next-line
  }, [])

  if (gameStarted) { 
    // const timeStart = Date.now()  
    // setTime(timeStart)

    const renderingHand = []
    const hand = Hand.solve(renderingHand)
    
    cards.cards.map(i => renderingHand.push(i.code))

    console.log('Hand:', hand.name)
    // console.log('state', deckContext)

    // if (hand.name === selected) {
    //   const timeEnd = Date.now - timeStart
    //   setTime(timeEnd)

    //   console.log('Success', selected)
    //   console.log('state', deckContext)

    //   // console.clear()
    // }
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
          handleChooseAnswer={handleChooseAnswer}
        />
      </div>
    </div>
  )
}
