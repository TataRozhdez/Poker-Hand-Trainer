import React from 'react'
import './MainContent.scss'
import { FooterTable } from '../FooterTable/FooterTable'
import { Card } from '../Card/Card'
import { Loader } from '../Loader/Loader'
import { Timer } from '../Timer/Timer'

export const MainContent = ({ loading, cards }) => {

  return (
    <div className='MainContent'>
      <div className='card-line'>
        { loading && <Loader /> }
        {cards && <Card cards={cards} />}
      </div>
      {cards && <Timer remaining={cards.remaining}/>}
      <FooterTable />
    </div>
  )
}
