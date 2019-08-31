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
import { FormGroup, FormControl } from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/default-avatar.png";

class LockScreenPage extends Component {
  render() {
    return (
      <form className="ng-untouched ng-pristine ng-valid">
        <div className="user-profile">
          <div className="author">
            <img alt="..." className="avatar" src={avatar} />
          </div>
          <h4>Tania Andrew</h4>
          <FormGroup>
            <FormControl type="password" placeholder="Enter Password" autoComplete="off"/>
          </FormGroup>
          <Button wd neutral round>
            Unlock
          </Button>
        </div>
      </form>
    );
  }
}

export default LockScreenPage;
