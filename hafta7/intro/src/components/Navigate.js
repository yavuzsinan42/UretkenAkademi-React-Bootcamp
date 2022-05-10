import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import FormDemo from "./FormDemo";
import SepetOzeti from "./SepetOzeti";

export default class Navigate extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">YSA Store</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
              <Link to="/form/">Form Demo</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to="/form2">Form Demo2</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <SepetOzeti
              sepet={this.props.sepet}
              sepettenCikar={this.props.sepettenCikar}
            />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
