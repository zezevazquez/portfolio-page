import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

export default class Work extends Component {
  render(){
    return (
      <div>
        <HeaderNav />
        <h2>Work</h2>
        <div>Some work page content</div>
        <Footer /> 
      </div>
    )
  }
}
