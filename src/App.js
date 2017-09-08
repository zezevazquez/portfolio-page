import React from 'react'
import ReactDOM from 'react-dom'

import HeaderNav from './components/HeaderNav'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return(
    <div>
      <HeaderNav />
      <Body />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
