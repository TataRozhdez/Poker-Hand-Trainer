import React, { useEffect, useContext } from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { MainContent } from './component/MainContent/MainContent'
import { Sidebar } from './component/Sidebar/Sidebar'
import DeckContext from './context/deck/deckContext'

export const App = () => {
  const deckContext = useContext(DeckContext)

  const { loading, getCards, getDeck, cards, gameStarted, stopGame } = deckContext

  useEffect(() => {
    getDeck()
    // eslint-disable-next-line
  }, [])

  if (gameStarted || stopGame) {
    // console.log(deckContext)
    console.log(cards)
  }

  return (
    <div>
      <Navbar />
      <div className='app'>
        <MainContent loading={loading} cards={cards}/>
        <Sidebar
          getCards={getCards}
          loading={loading}
          start={gameStarted}
          stopGame={stopGame}
        />
      </div>
    </div>
  )
}
