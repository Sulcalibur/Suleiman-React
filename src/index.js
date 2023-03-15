import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import HiveLearning from './views/hive-learning'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={HiveLearning} exact path="/hive-learning" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
