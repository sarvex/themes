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
import React from "react";
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
// react component that creates a dropdown menu for selection
import Select from "react-select";

import { selectOptions } from "variables/Variables.jsx";

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      website: "",
      websiteError: null,
      languageSelect: null,
      languageError: null,
      bootstrapVersion: ""
    };
  }
  isValidated() {
    var wb;
    try {
      new URL(this.state.website);
      this.setState({ websiteError: null });
      wb = true;
    } catch (_) {
      this.setState({
        websiteError: (
          <small className="text-danger">Must be a valid URL!</small>
        )
      });
      wb = false;
    }
    this.state.languageSelect === null
      ? this.setState({
          languageError: (
            <small className="text-danger">
              You have to select a language.
            </small>
          )
        })
      : this.setState({ languageError: null });
    var lg = this.state.languageSelect !== null;
    // console.log(this.state,urlRex.test(this.state.website),(this.state.languageSelect !== null),what);
    var valid = wb && lg;
    return valid;
  }
  render() {
    return (
      <div className="wizard-step">
        <h5 className="text-center">
          Please give us more details about your platform.
        </h5>
        <Row>
          <Col md={10} mdOffset={1}>
            <FormGroup>
              <ControlLabel>
                Your Website <span className="text-danger">*</span>
              </ControlLabel>
              <FormControl
                type="text"
                name="website"
                placeholder="ex: https://www.creative-tim.com"
                onChange={event =>
                  this.setState({ website: event.target.value })
                }
              />
              {this.state.websiteError}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Framework Type</ControlLabel>
              <FormControl
                type="text"
                name="framework"
                placeholder="ex: https://www.creative-tim.com"
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>
                Language <span className="text-danger">*</span>
              </ControlLabel>
              <Select
                name="languageSelect"
                value={this.state.languageSelect}
                options={selectOptions}
                palceholder="- language -"
                onChange={value => this.setState({ languageSelect: value })}
              />
              {this.state.languageError}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5} mdOffset={1}>
            <FormGroup>
              <ControlLabel>Bootstrap version</ControlLabel>
              <Select
                name="bootstrapSelect"
                value={this.state.bootstrapVersion}
                options={[
                  { value: 1, label: "Bootstrap 1.1" },
                  { value: 2, label: "Bootstrap 2.0" },
                  { value: 3, label: "Bootstrap 3.0" },
                  { value: 4, label: "Bootstrap 4.0(beta)" }
                ]}
                onChange={value => this.setState({ bootstrapVersion: value })}
              />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <ControlLabel>Price</ControlLabel>
              <FormControl type="number" name="price" placeholder="ex: 19.00" />
              {this.state.emailError}
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Step2;
