import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import { About } from './component/About/About'

const app = (
  <Switch>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/'>
      <App />
    </Route>
    <Redirect to='/' />
  </Switch>
)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      { app }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
