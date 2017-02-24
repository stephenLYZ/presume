import React from 'react'
import { render } from 'react-dom'
import App from './app/app'

// import style
import './main.scss'

const THEME = window.config.theme
if(THEME) {
  require(`./themes/${THEME}.scss`)
} else {
  require('./themes/blue.scss')
}

render(
  <App />,
  document.getElementById('root')
)
