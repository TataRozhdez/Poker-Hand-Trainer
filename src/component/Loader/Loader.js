import React from 'react'
import spinner from '../../resources/img/spinner.gif' 
import './Loader.scss'

export const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt='Loadind...' />
    </div>
  )
}
