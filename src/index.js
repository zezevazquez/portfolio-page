import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Work from './pages/Work'
import Welcome from './pages/Welcome'



render(
  <BrowserRouter>
    <div>
      <Switch>

        <Route path="/work" component={Work} />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.querySelector('#app')
)
