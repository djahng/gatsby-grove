import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

export default class NavBar extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => this.setState({ collapsed: !this.state.collapsed });

  render() {
    return (
      <Navbar
        expand="md"
        dark
      >
        <Link to="#" className="navbar-brand">
          <h3 className="mb-0">Aurora Grove</h3>
        </Link>

        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <Link to="#" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link">About</Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link">Explore</Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link">Book</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
