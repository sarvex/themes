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
/*eslint-disable*/
import React, { Component } from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
      bg_checked: true,
      switched: false,
      mini_checked: this.props.mini
    };
    this.handleClick = this.handleClick.bind(this);
    this.onMiniClick = this.onMiniClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  onMiniClick() {
    this.props.handleMiniClick();
  }
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.bgColor === "yellow"
                      ? "badge filter badge-yellow active"
                      : "badge filter badge-yellow"
                  }
                  data-color="yellow"
                  onClick={() => {
                    this.props.handleColorClick("yellow");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleColorClick("blue");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleColorClick("green");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    this.props.handleColorClick("orange");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    this.props.handleColorClick("red");
                  }}
                />
              </div>
            </li>
            {window.location.href.indexOf("/auth/") > -1 ? null : (
              <li className="header-title">Sidebar Mini</li>
            )}
            {window.location.href.indexOf("/auth/") > -1 ? null : (
              <li className="adjustments-line">
                <div className="togglebutton switch-sidebar-mini">
                  <span className="label-switch">OFF</span>
                  <Switch
                    onChange={this.onMiniClick}
                    value={this.props.sidebarMini}
                    onText=""
                    offText=""
                  />
                  <span className="label-switch label-right">ON</span>
                </div>
              </li>
            )}

            <li className="button-container">
              <a
                href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=nudr-fixed-plugin"
                target="_blank"
                className="btn btn-primary btn-block btn-round"
              >
                Buy now
              </a>
              <a
                href="https://demos.creative-tim.com/now-ui-dashboard-pro-react/#/documentation/tutorial?ref=nudr-fixed-plugin"
                className="btn btn-block btn-round btn-info"
                target="_blank"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FixedPlugin.defaultProps = {
  sidebarMini: true,
  handleMiniClick: () => {},
  bgColor: "blue",
  handleColorClick: () => {}
};

FixedPlugin.propTypes = {
  // background color for the Sidebar component
  bgColor: PropTypes.oneOf(["blue", "yellow", "green", "orange", "red"]),
  // function that is called upon pressing the button near the logo
  handleMiniClick: PropTypes.func,
  // bool variable to know if the Sidebar component is minimized or not
  sidebarMini: PropTypes.bool,
  // function that returns the selected color for the Sidebar background
  handleColorClick: PropTypes.func
};

export default FixedPlugin;
