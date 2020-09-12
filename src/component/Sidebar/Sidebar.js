import React from 'react'
import playImg from '../../resources/img/play.png'
import stopImg from '../../resources/img/stop.png'
import './Sidebar.scss'

export const Sidebar = ({ getCards, loading, start, stopGame }) => {

  return (
    <div className='Sidebar'>
      <h2>&diams; Poker Hand Ranking &diams;</h2>
      <button className='btn-option'>Royal Flush</button>
      <button className='btn-option'>Straight Flush</button>
      <button className='btn-option'>Four of a Kind</button>
      <button className='btn-option'>Full House</button>
      <button className='btn-option'>Flush</button>
      <button className='btn-option'>Straight</button>
      <button className='btn-option'>Three of a Kind</button>
      <button className='btn-option'>Two Pair</button>
      <button className='btn-option'>Pair</button>
      <button className='btn-option'>High Card</button>
      {
        !loading && (
          <div className='play-btn'>
            <button
              onClick={() => getCards()}
              disabled={start}
            >
              <img src={playImg} alt='play' />
            </button>
            <button
              onClick={() => stopGame()}
              disabled={!start}
            >
              <img src={stopImg} alt='stop' />
            </button>
          </div>
        )
      }
    </div>
  )
}
