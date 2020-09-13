import React from 'react'
import './MainContent.scss'
import { FooterTable } from '../FooterTable/FooterTable'
import { Card } from '../Card/Card'
import { Loader } from '../Loader/Loader'

export const MainContent = ({ loading, loadCard, cards, gameStarted }) => {
  return (
    <div className='MainContent'>
      <div className='card-line'>
        {loading && <Loader />}
        { cards && <Card cards={cards} /> }
      </div>
      <FooterTable />
    </div>
  )
}
