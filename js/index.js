import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Main from './main'
import Projects from './projects'


render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Main} />
        <Route path="/project/:name/:url" component={Project} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
