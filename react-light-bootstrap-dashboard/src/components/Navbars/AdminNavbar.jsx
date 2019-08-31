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
import { Navbar } from "react-bootstrap";

// links that appear in navbar - they are separated from this component (navbar) so that we can redner them on responsive in sidebar as well

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

// we import here the routes for dashboard pages (links that appear in sidebar) to set navbar's name

import routes from "routes.js";

class AdminNavbar extends Component {
  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // function for responsive that hides/shows the sidebar
  mobileSidebarToggle = e => {
    document.documentElement.classList.toggle("nav-open");
  };
  render() {
    return (
      <Navbar fluid className={this.props.navbar ? "navbar-fixed" : ""}>
        <div className="navbar-minimize">
          <button
            id="minimizeSidebar"
            className="btn btn-default btn-fill btn-round btn-icon"
            onClick={this.props.handleMiniClick}
          >
            <i className="fa fa-ellipsis-v visible-on-sidebar-regular" />
            <i className="fa fa-navicon visible-on-sidebar-mini" />
          </button>
        </div>
        <Navbar.Header>
          <Navbar.Brand>
            {/* Here we create navbar brand, based on route name */}
            <a href="#pablo">{this.getActiveRoute(routes)}</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>

        {/* Here we import the links that appear in navbar */}
        {window.innerWidth > 992 ? (
          <Navbar.Collapse>
            <AdminNavbarLinks />
          </Navbar.Collapse>
        ) : null}
      </Navbar>
    );
  }
}

export default AdminNavbar;
