import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class HeaderNav extends Component {
  render() {
    let brand = <a href="">LinkedIn</a>;
    return (
      <Navbar fixedTop inverse defaultExpanded>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Zeze</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/experience">Experience</NavItem>
            <NavItem href="/about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
