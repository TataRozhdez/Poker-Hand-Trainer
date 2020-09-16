import React from 'react'
import Flip from 'react-reveal/Flip';
import './Property.scss'

export const Property = ({ isOpen }) => {
  return (
    <div className='Property' onClick={() => isOpen(false)}>
      <Flip right>
        <div className='property-txt'>
          <span>X</span>
          <p>
            Difficulty control box. <br />
            Coming soon...
          </p>
        </div>
      </Flip>
    </div>
  )
}
