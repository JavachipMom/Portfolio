import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Main from './main'
import Projects from './projects'
import Blog from './Blog'
import Resume from './Resume'


render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/home" component={Main} />
        <Route path="/projects" component={ Projects } />
        <Route path="/Blog" component={ Blog } />
        <Route path="/Resume" component={ Resume } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
