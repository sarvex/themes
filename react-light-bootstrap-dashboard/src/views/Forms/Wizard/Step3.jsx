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
// react component used to create charts
import SweetAlert from "react-bootstrap-sweetalert";

import Button from "components/CustomButton/CustomButton.jsx";

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null
    };
  }
  isValidated() {
    return true;
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.setState({ alert: null })}
          onCancel={() => this.setState({ alert: null })}
          confirmBtnBsStyle="info"
        >
          You clicked the finish button!
        </SweetAlert>
      )
    });
  }
  render() {
    return (
      <div className="wizard-step">
        <h2 className="text-center text-space">
          Yuhuuu!
          <br />
          <small>
            {" "}
            Click on "<b>Finish</b>" to join our community
          </small>
        </h2>
        <div className="wizard-finish-button">
          <Button
            bsStyle="info"
            fill
            wd
            onClick={this.successAlert.bind(this)}
            pullRight
          >
            Finish
          </Button>
        </div>
        {this.state.alert}
      </div>
    );
  }
}

export default Step3;
