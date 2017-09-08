import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class HeaderNav extends Component {
  render() {
    let brand = <a href=''>LinkedIn</a>;
    return (
      <Navbar fixedTop inverse defaultExpanded>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Zeze's</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>Projects</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Experience</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
