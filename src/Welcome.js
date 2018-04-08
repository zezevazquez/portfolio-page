import React, { Component } from 'react';
import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

// import HeaderNav from '../components/HeaderNav';
// import Body from '../components/Body';
// import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar>
      </Navbar>
    );
  }
}
