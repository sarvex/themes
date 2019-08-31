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
/*eslint-disable*/
import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// this is used to create scrollbars on windows devices like the ones from apple devices
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";

// image for avatar in Sidebar
import avatar from "assets/img/default-avatar.png";
// logo for sidebar
import logo from "logo.svg";

import routes from "routes.js";

var ps;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.getCollapseStates(routes),
      openAvatar: false,
      isWindows: navigator.platform.indexOf("Win") > -1 ? true : false,
      width: window.innerWidth
    };
  }
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <li
            className={this.getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                this.setState(st);
              }}
            >
              <i className={prop.icon} />
              <p>
                {prop.name}
                <b
                  className={
                    this.state[prop.state] ? "caret rotate-180" : "caret"
                  }
                />
              </p>
            </a>
            <Collapse in={this.state[prop.state]}>
              <ul className="nav">{this.createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={this.activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink
            to={prop.layout + prop.path}
            className="nav-link"
            activeClassName="active"
          >
            {prop.icon ? (
              <>
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </>
            ) : (
              <>
                <span className="sidebar-mini">{prop.mini}</span>
                <span className="sidebar-normal">{prop.name}</span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // if the windows width changes CSS has to make some changes
  // this functions tell react what width is the window
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidUpdate() {
    if (navigator.platform.indexOf("Win") > -1) {
      setTimeout(() => {
        ps.update();
      }, 350);
    }
  }
  componentDidMount() {
    this.updateDimensions();
    // add event listener for windows resize
    window.addEventListener("resize", this.updateDimensions.bind(this));
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    // we need to destroy the false scrollbar when we navigate
    // to a page that doesn't have this component rendered
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        {this.props.hasImage ? (
          <div
            className="sidebar-background"
            style={{ backgroundImage: "url(" + this.props.image + ")" }}
          />
        ) : (
          ""
        )}
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbdpr-sidebar"
            className="simple-text logo-mini"
            target="_blank"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com?ref=lbdpr-sidebar"
            className="simple-text logo-normal"
            target="_blank"
          >
            Creative Tim
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebarWrapper">
          <div className="user">
            <div className="photo">
              <img src={avatar} alt="Avatar" />
            </div>
            <div className="info">
              <a
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ openAvatar: !this.state.openAvatar });
                }}
              >
                <span>
                  Tania Andrew
                  <b
                    className={
                      this.state.openAvatar ? "caret rotate-180" : "caret"
                    }
                  />
                </span>
              </a>
              <Collapse in={this.state.openAvatar}>
                <ul className="nav">
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <span className="sidebar-mini">MP</span>
                      <span className="sidebar-normal">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <span className="sidebar-mini">EP</span>
                      <span className="sidebar-normal">Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <span className="sidebar-mini">S</span>
                      <span className="sidebar-normal">Settings</span>
                    </a>
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
          <ul className="nav">
            {/*
              If we are on responsive, we want both links from navbar and sidebar
              to appear in sidebar, so we render here HeaderLinks
            */}
            {this.state.width <= 992 ? <AdminNavbarLinks /> : null}
            {/*
              here we render the links in the sidebar if the link is simple,
              we make a simple link, if not, we have to create a collapsible group,
              with the speciffic parent button and with it's children which are the links
            */}
            {this.createLinks(routes)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
