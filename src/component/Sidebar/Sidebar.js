import React from 'react'
import playImg from '../../resources/img/play.png'
import stopImg from '../../resources/img/stop.png'
import './Sidebar.scss'

export const Sidebar = ({ getCards, loading, start, handleChooseAnswer, stopGame }) => {

  return (
    <div className='Sidebar'>
      <h2>&diams; Poker Hand Ranking &diams;</h2>
      <button
        className='btn-option'
        id='Royal Flush'
        onClick={handleChooseAnswer}
      >Royal Flush</button>
      <button
        className='btn-option'
        id='Straight Flush'
        onClick={handleChooseAnswer}
      >Straight Flush</button>
      <button
        className='btn-option'
        id='Four of a Kind'
        onClick={handleChooseAnswer}
      >Four of a Kind</button>
      <button
        className='btn-option'
        id='Full House'
        onClick={handleChooseAnswer}
      >Full House</button>
      <button
        className='btn-option'
        id='Flush'
        onClick={handleChooseAnswer}
      >Flush</button>
      <button
        className='btn-option'
        id='Straight'
        onClick={handleChooseAnswer}
      >Straight</button>
      <button
        className='btn-option'
        id='Three of a Kind'
        onClick={handleChooseAnswer}
      >Three of a Kind</button>
      <button
        className='btn-option'
        id='Two Pair'
        onClick={handleChooseAnswer}
      >Two Pair</button>
      <button
        className='btn-option'
        id='Pair'
        onClick={handleChooseAnswer}
      >Pair</button>
      <button
        className='btn-option'
        id='High Card'
        onClick={handleChooseAnswer}
      >High Card</button>
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
