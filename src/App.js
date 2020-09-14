import React, { useEffect, useContext } from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { MainContent } from './component/MainContent/MainContent'
import { Sidebar } from './component/Sidebar/Sidebar'
import DeckContext from './context/deck/deckContext'

export const App = () => {
  const deckContext = useContext(DeckContext)
  const {
    loading,
    loadCard,
    getCards,
    hand,
    getDeck,
    cards,
    gameStarted,
    setResult,
    timer,
    stopGame
  } = deckContext

  useEffect(() => {
    getDeck()
    // eslint-disable-next-line
  }, [])


    console.log('state', deckContext)

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
          hand={hand}
          timer={timer}
          stopGame={stopGame}
          setResult={setResult}
        />
      </div>
    </div>
  )
}
