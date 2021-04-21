import React from 'react'

import Navbar from './components/Navbar'
import Routes from './routes'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Switch>
          <Route exact path="/items/:id" component={SingleWatch} />
        </Switch>
    </div>
  )
}

export default App
