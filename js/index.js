import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Blog from './Blog'

render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/blog" component={ Blog } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
