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

class MapCard extends Component {
  render() {
    return (
      <div className="card card-map">
        <div className="header">
          <h4 className="title">{this.props.title}</h4>
        </div>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

export default MapCard;
