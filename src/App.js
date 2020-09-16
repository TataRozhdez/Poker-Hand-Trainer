import React, { useEffect, useContext } from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { MainContent } from './component/MainContent/MainContent'
import { Sidebar } from './component/Sidebar/Sidebar'
import DeckContext from './context/deck/deckContext'

export const App = () => {
  const deckContext = useContext(DeckContext)
  const {
    loading,
    getCards,
    hand,
    getDeck,
    cards,
    gameStarted,
    setResult,
    timer,
    results,
    stopGame
  } = deckContext

  useEffect(() => {
    getDeck()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar />
      <div className='app'>
        <MainContent
          loading={loading}
          gameStarted={gameStarted}
          cards={cards}
          results={results}
        />
        <Sidebar
          getCards={getCards}
          loading={loading}
          start={gameStarted}
          hand={hand.name}
          timer={timer}
          stopGame={stopGame}
          setResult={setResult}
        />
      </div>
    </div>
  )
}
