import React from 'react'
import { FooterTable } from '../FooterTable/FooterTable'
import { Card } from '../Card/Card'
import { Loader } from '../Loader/Loader'
import './MainContent.scss'

export const MainContent = ({ loading, results, cards }) => {
  return (
    <div className='MainContent'>
      <div className='card-line'>
        {loading && <Loader />}
        { cards && <Card cards={cards} /> }
      </div>
      <FooterTable results={results} />
    </div>
  )
}
