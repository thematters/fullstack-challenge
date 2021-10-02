/**
 * This is an incomplete script of client app. Please
 * make it live with features we requested. :)
 *
 */

import React from 'react'
import { render } from 'react-dom'
import 'normalize.css'
import Router from './pages'

const App = (): React.ReactElement => {
  return (
    <Router />
  )
}

render(<App />, document.getElementById('app'))
