import React from 'react'
import './Navbar.scss'
import settingsImg from '../../resources/img/settings.png'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Combination Trainer</h1>
      <img src={settingsImg} alt='settings'/>
    </div>
  )
}
