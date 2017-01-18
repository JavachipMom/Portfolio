import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Blog from './Blog'
import Projects from './Projects'

render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/home" component={ Home } />
        <Route path="/blog" component={ Blog } />
        <Route path="/projects" component={ Projects } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
