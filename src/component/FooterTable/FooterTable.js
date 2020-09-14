import React from 'react'
import './FooterTable.scss'

export const FooterTable = ({ results }) => {

  return (
    <div className='FooterTable'>
      <table className='table'>
        <thead>
          <tr>
            <th>table</th>
            <th>timelaps</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map((i, index) => (
              <tr key={index}>
                <td>{i.packet}</td>
                <td>{i.timelab} sec</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
