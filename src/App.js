import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';

import HeaderNav from './components/HeaderNav';
import Body from './components/Body';
import Footer from './components/Footer';

ReactDOM.render(
  <div>
    <HeaderNav />
    <Body />
    <Footer />
  </div>
  , document.getElementById('app')
);
