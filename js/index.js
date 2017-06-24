import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Main from './main'
import Resume from './resume'


render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="/resume" component={ Resume } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
