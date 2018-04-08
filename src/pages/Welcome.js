import React, { Component } from 'react';

import HeaderNav from '../components/HeaderNav';
import Body from '../components/Body';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <Body />
        <Footer />
      </div>
    );
  }
}
