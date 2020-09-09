import React from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { MainContent } from './component/MainContent/MainContent'
import { Sidebar } from './component/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <Navbar />
      <div className='app'>
        <MainContent />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
