import React, { useState } from 'react'
import settingsImg from '../../resources/img/settings.png'
import { Link } from 'react-router-dom'
import { Property } from '../Property/Property'
import './Navbar.scss'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  const isOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <div className='Navbar'>
      <h1 className='title'>
        Combination Trainer
      </h1>
      <div>
        <Link to='/about' className='info'>&#304;</Link>
        <button onClick={isOpen} className='btn-property'><img src={settingsImg} alt='settings' /></button>
        { open && <Property isOpen={setOpen}/>}  
      </div>
    </div>
  )
}
