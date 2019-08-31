/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  InputGroup
} from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Navbar.Form pullLeft className="navbar-search-form">
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-search" />
              </InputGroup.Addon>
              <FormControl type="text" placeholder="Search..." />
            </InputGroup>
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-line-chart" />
            <p>Stats</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={
              <div>
                <i className="fa fa-gavel" />
                <p className="hidden-md hidden-lg">
                  Actions
                  <b className="caret" />
                </p>
              </div>
            }
            noCaret
            id="basic-nav-dropdown-1"
          >
            <MenuItem eventKey={2.1}>Create New Post</MenuItem>
            <MenuItem eventKey={2.2}>Manage Something</MenuItem>
            <MenuItem eventKey={2.3}>Do Nothing</MenuItem>
            <MenuItem eventKey={2.4}>Submit to live</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Another action</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={3}
            title={
              <div>
                <i className="fa fa-bell-o" />
                <span className="notification">5</span>
                <p className="hidden-md hidden-lg">
                  Notifications
                  <b className="caret" />
                </p>
              </div>
            }
            noCaret
            id="basic-nav-dropdown-2"
          >
            <MenuItem eventKey={3.1}>Notification 1</MenuItem>
            <MenuItem eventKey={3.2}>Notification 2</MenuItem>
            <MenuItem eventKey={3.3}>Notification 3</MenuItem>
            <MenuItem eventKey={3.4}>Notification 4</MenuItem>
            <MenuItem eventKey={3.5}>Another notifications</MenuItem>
          </NavDropdown>
          <NavDropdown
            eventKey={4}
            title={
              <div>
                <i className="fa fa-list" />
                <p className="hidden-md hidden-lg">
                  More
                  <b className="caret" />
                </p>
              </div>
            }
            noCaret
            id="basic-nav-dropdown-3"
            bsClass="dropdown-with-icons dropdown"
          >
            <MenuItem eventKey={4.1}>
              <i className="pe-7s-mail" /> Messages
            </MenuItem>
            <MenuItem eventKey={4.2}>
              <i className="pe-7s-help1" /> Help Center
            </MenuItem>
            <MenuItem eventKey={4.3}>
              <i className="pe-7s-tools" /> Settings
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={4.4}>
              <i className="pe-7s-lock" /> Lock Screen
            </MenuItem>
            <MenuItem eventKey={4.5}>
              <div className="text-danger">
                <i className="pe-7s-close-circle" /> Log out
              </div>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}
export default HeaderLinks;
