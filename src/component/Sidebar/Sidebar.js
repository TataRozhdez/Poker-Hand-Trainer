import React from 'react'
import './Sidebar.scss'

import playImg from '../../resources/img/play.png'
import stopImg from '../../resources/img/stop.png'

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <h2>&diams; Poker Hand Ranking &diams;</h2>
      <a href='#!'>Royal Flush</a>
      <a href='#!'>Straight Flush</a>
      <a href='#!'>Four of a Kind</a>
      <a href='#!'>Full House</a>
      <a href='#!'>Flush</a>
      <a href='#!'>Straight</a>
      <a href='#!'>Three of a Kind</a>
      <a href='#!'>Two Pair</a>
      <a href='#!'>Pair</a>
      <a href='#!'>High Card</a>

      <div className='play-btn'>
        <button><img src={playImg} alt='play'/></button>
        <button disabled><img src={stopImg} alt='stop'/></button>
      </div>
    </div>
  )
}
