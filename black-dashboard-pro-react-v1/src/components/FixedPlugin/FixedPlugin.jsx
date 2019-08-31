/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

import { Button } from "reactstrap";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown",
      darkMode: true
    };
  }
  handleClick = () => {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  };
  handleActiveMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
    document.body.classList.toggle("white-content");
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <a
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              this.handleClick();
            }}
          >
            <i className="fa fa-cog fa-2x" />
          </a>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.activeColor === "primary"
                      ? "badge filter badge-primary active"
                      : "badge filter badge-primary"
                  }
                  data-color="primary"
                  onClick={() => {
                    this.props.handleActiveClick("primary");
                  }}
                />
                <span
                  className={
                    this.props.activeColor === "blue"
                      ? "badge filter badge-info active"
                      : "badge filter badge-info"
                  }
                  data-color="info"
                  onClick={() => {
                    this.props.handleActiveClick("blue");
                  }}
                />
                <span
                  className={
                    this.props.activeColor === "green"
                      ? "badge filter badge-success active"
                      : "badge filter badge-success"
                  }
                  data-color="success"
                  onClick={() => {
                    this.props.handleActiveClick("green");
                  }}
                />
                <span
                  className={
                    this.props.activeColor === "orange"
                      ? "badge filter badge-warning active"
                      : "badge filter badge-warning"
                  }
                  data-color="warning"
                  onClick={() => {
                    this.props.handleActiveClick("orange");
                  }}
                />
                <span
                  className={
                    this.props.activeColor === "red"
                      ? "badge filter badge-danger active"
                      : "badge filter badge-danger"
                  }
                  data-color="danger"
                  onClick={() => {
                    this.props.handleActiveClick("red");
                  }}
                />
              </div>
            </li>
            <li className="header-title">SIDEBAR MINI</li>
            <li className="adjustments-line">
              <div className="togglebutton switch-sidebar-mini">
                <span className="label-switch">OFF</span>
                <Switch
                  onChange={this.props.handleMiniClick}
                  value={this.props.sidebarMini}
                  onText=""
                  offText=""
                />
                <span className="label-switch">ON</span>
              </div>
            </li>
            <li className="adjustments-line">
              <div className="togglebutton switch-change-color mt-3">
                <span className="label-switch">LIGHT MODE</span>
                <Switch
                  onChange={this.handleActiveMode}
                  value={this.state.darkMode}
                  onText=""
                  offText=""
                />
                <span className="label-switch">DARK MODE</span>
              </div>
            </li>
            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-pro-react"
                color="primary"
                block
                className="btn-round"
              >
                Buy now
              </Button>
            </li>
            <li className="button-container">
              <Button
                color="default"
                block
                className="btn-round"
                outline
                href="https://demos.creative-tim.com/black-dashboard-pro-react/#/documentation/tutorial"
                target="_blank"
              >
                <i className="nc-icon nc-paper" /> Documentation
              </Button>
            </li>
            <li className="button-container">
              <Button
                href="https://www.creative-tim.com/product/black-dashboard-react"
                color="info"
                block
                className="btn-round"
              >
                Get free version
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
