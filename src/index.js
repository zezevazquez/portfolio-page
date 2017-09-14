import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import About from './pages/About'



render(
  <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/" component={Welcome} />
      </Switch>
  </BrowserRouter>,
  document.querySelector('#app')
)
