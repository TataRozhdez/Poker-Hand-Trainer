import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.scss'
import { About } from './component/About/About'
import DeckState from './context/deck/DeckState'

const app = (
  <DeckState>
    <BrowserRouter>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <App />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </DeckState>
)


ReactDOM.render(
  <React.StrictMode>
      { app }
  </React.StrictMode>,
  document.getElementById('root')
)
