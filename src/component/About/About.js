import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

export const About = () => {
  return (
    <div className='About'>
      <Link to='/' className='title'>&#10550; About "Combination Trainer" App</Link>
      <div className='about-txt'>
        <p>
          The goal of the game is to solve the poker hand and return the type as fast as you can.<br />
          Your speed of hand solver will be saved until the end of the game in the bottom table.
        </p>
        <p>
          The source code of the project can be found at the <a className='social-link' href='https://github.com/TataRozhdez/Poker-Hand-Trainer'>GitHub</a>.<br />
          Write their feedback or wishes in <a className='social-link' href='https://linkedin.com/in/tatarozhdez'>LinkedIn</a>.
        </p>
        <p>Have a good game!</p>
      </div>
    </div>
  )
}

// Существует два уровня сложности игры: на 5 карт (здесь вы определяете...) и на 7 карт (вам предстоит понять...). (?) 
