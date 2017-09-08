import React, { Component } from 'react'
import { SocialIcons } from 'react-social-icons'
var urls = [
  'http://zezevazquez.com',
  'http://twitter.com/zezevazquez',
  'http://linkedin.com/in/zezevazquez',
  'http://github.com/zezevazquez'
];
export default class Social extends Component{
  render() {
    return (
      <SocialIcons urls={urls} />
    )
  }
}
