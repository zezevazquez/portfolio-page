import React, { Component } from 'react'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

export default class Projects extends Component {
  render(){
    return (
      <div>
        <HeaderNav />
        <h2>Projects</h2>
        <div>Some work page content</div>
        <Footer />
      </div>
    )
  }
}
