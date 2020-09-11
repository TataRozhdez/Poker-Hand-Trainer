import React from 'react'
import './Navbar.scss'
import settingsImg from '../../resources/img/settings.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1 className='title'>
        Combination Trainer
      </h1>
      <div>
        <Link to='/about' className='info'>&#304;</Link>
        <a href='#!'><img src={settingsImg} alt='settings'/></a>
      </div>
    </div>
  )
}
