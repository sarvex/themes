/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";

class AuthNavbar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };
  render() {
    return (
      <Navbar
        expand="lg"
        className={
          this.state.isOpen
            ? "bg-white navbar-absolute"
            : "navbar-transparent navbar-absolute"
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <Link to="/" className="navbar-brand">
              Now Ui Dashboard Pro - React
            </Link>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/admin/dashboard" className="nav-link">
                  <i className="now-ui-icons design_bullet-list-67" /> Dashboard
                </Link>
              </NavItem>
              <NavItem className={this.activeRoute("/auth/register-page")}>
                <Link to="/auth/register-page" className="nav-link">
                  <i className="now-ui-icons tech_mobile" /> Register
                </Link>
              </NavItem>
              <NavItem className={this.activeRoute("/auth/login-page")}>
                <Link to="/auth/login-page" className="nav-link">
                  <i className="now-ui-icons users_circle-08" /> Login
                </Link>
              </NavItem>
              <NavItem className={this.activeRoute("/auth/pricing-page")}>
                <Link to="/auth/pricing-page" className="nav-link">
                  <i className="now-ui-icons business_money-coins" /> Pricing
                </Link>
              </NavItem>
              <NavItem className={this.activeRoute("/auth/lock-screen-page")}>
                <Link to="/auth/lock-screen-page" className="nav-link">
                  <i className="now-ui-icons ui-1_lock-circle-open" /> Lock
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AuthNavbar;
