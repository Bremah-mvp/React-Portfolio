import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/react-portfolio" className="mr-auto">Bremah Mvp</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink tag={Link} to="/react-portfolio">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/react-portfolio/projects">Projects</NavLink>             
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/react-portfolio/contact">Contact</NavLink>            
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}