import React from 'react'
import './MainContent.scss'
import { FooterTable } from '../FooterTable/FooterTable'
import { Card } from '../Card/Card'

export const MainContent = () => {

  return (
    <div className='MainContent'>
      <div className='card-line'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <FooterTable />
    </div>
  )
}
