import React from 'react'

export const Timer = ({ remaining }) => {
  return (
    <div className='Timer'>
      <h3>Time: @</h3>
      <h3>Remaining card: {remaining}</h3>
    </div>
  )
}
