import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

export const About = () => {
  return (
    <div className='About'>
      <Link to='/' className='title'>&#10550; Combination Trainer</Link>
      <p>Some txt about this APP</p>
    </div>
  )
}
