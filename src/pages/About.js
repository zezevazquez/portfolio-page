import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

export default class About extends Component {
  render(){
    return (
      <div>
        <HeaderNav />
        <h2>About</h2>
        <div>Some work page content</div>
        <Footer />
      </div>
    )
  }
}
