/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class ValidationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // register form
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
      registerEmailState: "",
      registerPasswordState: "",
      registerConfirmPasswordState: "",
      // login form
      loginFullName: "",
      loginEmail: "",
      loginPassword: "",
      loginFullNameState: "",
      loginEmailState: "",
      loginPasswordState: "",
      // type validation form
      required: "",
      email: "",
      number: "",
      url: "",
      source: "",
      destination: "",
      requiredState: "",
      emailState: "",
      numberState: "",
      urlState: "",
      sourceState: "",
      destinationState: "",
      // range validation form
      minLength: "",
      maxLength: "",
      range: "",
      min: "",
      max: "",
      minLengthState: "",
      maxLengthState: "",
      rangeState: "",
      minState: "",
      maxState: ""
    };
  }
  // function that returns true if value is email, false otherwise
  verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if two strings are equal
  compare = (string1, string2) => {
    if (string1 === string2) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  verifyUrl = value => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "password":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "equalTo":
        if (this.compare(event.target.value, this.state[stateNameEqualTo])) {
          this.setState({ [stateName + "State"]: "has-success" });
          this.setState({ [stateNameEqualTo + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
          this.setState({ [stateNameEqualTo + "State"]: "has-danger" });
        }
        break;
      case "number":
        if (this.verifyNumber(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "max-length":
        if (!this.verifyLength(event.target.value, stateNameEqualTo + 1)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "url":
        if (this.verifyUrl(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "min-value":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "max-value":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value <= stateNameEqualTo
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "range":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo &&
          event.target.value <= maxValue
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };
  registerClick = () => {
    if (this.state.registerEmailState === "") {
      this.setState({ registerEmailState: "has-danger" });
    }
    if (
      this.state.registerPasswordState === "" ||
      this.state.registerConfirmPasswordState === ""
    ) {
      this.setState({ registerPasswordState: "has-danger" });
      this.setState({ registerConfirmPasswordState: "has-danger" });
    }
  };
  loginClick = () => {
    if (this.state.loginFullNameState === "") {
      this.setState({ loginFullNameState: "has-danger" });
    }
    if (this.state.loginEmailState === "") {
      this.setState({ loginEmailState: "has-danger" });
    }
    if (this.state.loginPasswordState === "") {
      this.setState({ loginPasswordState: "has-danger" });
    }
  };
  typeClick = () => {
    if (this.state.requiredState === "") {
      this.setState({ requiredState: "has-danger" });
    }
    if (this.state.emailState === "") {
      this.setState({ emailState: "has-danger" });
    }
    if (this.state.numberState === "") {
      this.setState({ numberState: "has-danger" });
    }
    if (this.state.urlState === "") {
      this.setState({ urlState: "has-danger" });
    }
    if (this.state.sourceState === "" || this.state.destinationState === "") {
      this.setState({ sourceState: "has-danger" });
      this.setState({ destinationState: "has-danger" });
    }
  };
  rangeClick = () => {
    if (this.state.minLengthState === "") {
      this.setState({ minLengthState: "has-danger" });
    }
    if (this.state.maxLengthState === "") {
      this.setState({ maxLengthState: "has-danger" });
    }
    if (this.state.rangeState === "") {
      this.setState({ rangeState: "has-danger" });
    }
    if (this.state.minValueState === "") {
      this.setState({ minValueState: "has-danger" });
    }
    if (this.state.maxValueState === "") {
      this.setState({ maxValueState: "has-danger" });
    }
    if (this.state.minState === "") {
      this.setState({ minState: "has-danger" });
    }
    if (this.state.maxState === "") {
      this.setState({ maxState: "has-danger" });
    }
  };
  render() {
    // taking all the states
    let {
      // register form
      registerEmailState,
      registerPasswordState,
      registerConfirmPasswordState,
      // login form
      loginFullNameState,
      loginEmailState,
      loginPasswordState,
      // type validation form
      requiredState,
      emailState,
      numberState,
      urlState,
      sourceState,
      destinationState,
      // range validation form
      minLengthState,
      maxLengthState,
      rangeState,
      minState,
      maxState
    } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Form id="RegisterValidation">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Register Form</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <FormGroup className={`has-label ${registerEmailState}`}>
                      <label>Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        onChange={e => this.change(e, "registerEmail", "email")}
                      />
                      {this.state.registerEmailState === "has-danger" ? (
                        <label className="error">
                          Please enter a valid email address.
                        </label>
                      ) : null}
                    </FormGroup>
                    <FormGroup className={`has-label ${registerPasswordState}`}>
                      <label>Password *</label>
                      <Input
                        id="registerPassword"
                        name="password"
                        type="password"
                        autoComplete="off"
                        onChange={e =>
                          this.change(e, "registerPassword", "password")
                        }
                      />
                      {this.state.registerPasswordState === "has-danger" ? (
                        <label className="error">This field is required.</label>
                      ) : null}
                    </FormGroup>
                    <FormGroup
                      className={`has-label ${registerConfirmPasswordState}`}
                    >
                      <label>Confirm Password *</label>
                      <Input
                        equalto="#registerPassword"
                        id="registerPasswordConfirmation"
                        name="password_confirmation"
                        type="password"
                        autoComplete="off"
                        onChange={e =>
                          this.change(
                            e,
                            "registerConfirmPassword",
                            "equalTo",
                            "registerPassword"
                          )
                        }
                      />
                      {this.state.registerConfirmPasswordState ===
                      "has-danger" ? (
                        <label className="error">This field is required.</label>
                      ) : null}
                    </FormGroup>
                    <div className="category form-category">
                      * Required fields
                    </div>
                  </CardBody>
                  <CardFooter className="text-right">
                    <FormGroup check className="pull-left">
                      <Label check>
                        <Input name="optionCheckboxes" type="checkbox" />
                        <span className="form-check-sign" />
                        Subscribe to newsletter
                      </Label>
                    </FormGroup>
                    <Button color="primary" onClick={this.registerClick}>
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            <Col md="6">
              <Form id="LoginValidation">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Login Form</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <FormGroup className={`has-label ${loginFullNameState}`}>
                      <label>Full Name *</label>
                      <Input
                        name="fullname"
                        type="text"
                        onChange={e =>
                          this.change(e, "loginFullName", "length", 1)
                        }
                      />
                      {this.state.loginFullNameState === "has-danger" ? (
                        <label className="error">This field is required.</label>
                      ) : null}
                    </FormGroup>
                    <FormGroup className={`has-label ${loginEmailState}`}>
                      <label>Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        onChange={e => this.change(e, "loginEmail", "email")}
                      />
                      {this.state.loginEmailState === "has-danger" ? (
                        <label className="error">
                          Please enter a valid email address.
                        </label>
                      ) : null}
                    </FormGroup>
                    <FormGroup className={`has-label ${loginPasswordState}`}>
                      <label>Password *</label>
                      <Input
                        name="password"
                        type="password"
                        autoComplete="off"
                        onChange={e =>
                          this.change(e, "loginPassword", "password")
                        }
                      />
                      {this.state.loginPasswordState === "has-danger" ? (
                        <label className="error">This field is required.</label>
                      ) : null}
                    </FormGroup>
                    <div className="category form-category">
                      * Required fields
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={this.loginClick}>
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            <Col md="12">
              <Form className="form-horizontal" id="TypeValidation">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Type Validation</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Label sm="2">Required Text</Label>
                      <Col sm="7">
                        <FormGroup className={requiredState}>
                          <Input
                            name="required"
                            type="text"
                            onChange={e =>
                              this.change(e, "required", "length", 1)
                            }
                          />
                          {this.state.requiredState === "has-danger" ? (
                            <label className="error">
                              This field is required.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>required</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Email</Label>
                      <Col sm="7">
                        <FormGroup className={emailState}>
                          <Input
                            name="email"
                            type="text"
                            onChange={e => this.change(e, "email", "email")}
                          />
                          {this.state.emailState === "has-danger" ? (
                            <label className="error">
                              Please enter a valid email address.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>email="true"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Number</Label>
                      <Col sm="7">
                        <FormGroup className={numberState}>
                          <Input
                            name="number"
                            type="text"
                            onChange={e => this.change(e, "number", "number")}
                          />
                          {this.state.numberState === "has-danger" ? (
                            <label className="error">
                              Please enter a valid number.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>number="true"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Url</Label>
                      <Col sm="7">
                        <FormGroup className={urlState}>
                          <Input
                            name="url"
                            type="text"
                            onChange={e => this.change(e, "url", "url")}
                          />
                          {this.state.urlState === "has-danger" ? (
                            <label className="error">
                              Please enter a valid URL.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>url="true"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Equal to</Label>
                      <Col sm="3">
                        <FormGroup className={sourceState}>
                          <Input
                            id="idSource"
                            placeholder="#idSource"
                            type="text"
                            onChange={e =>
                              this.change(e, "source", "equalTo", "destination")
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="3">
                        <FormGroup className={destinationState}>
                          <Input
                            id="idDestination"
                            placeholder="#idDestination"
                            type="text"
                            onChange={e =>
                              this.change(e, "destination", "equalTo", "source")
                            }
                          />
                          {this.state.destinationState === "has-danger" ? (
                            <label className="error">
                              Please enter the same value.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="4">
                        <code>equalTo="#idSource"</code>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={this.typeClick}>
                      Validate Inputs
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            <Col md="12">
              <Form className="form-horizontal" id="RangeValidation">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Range Validation</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Label sm="2">Min Length</Label>
                      <Col sm="7">
                        <FormGroup className={minLengthState}>
                          <Input
                            name="min_length"
                            type="text"
                            onChange={e =>
                              this.change(e, "minLength", "length", 5)
                            }
                          />
                          {this.state.minLengthState === "has-danger" ? (
                            <label className="error">
                              Please enter at least 5 characters.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>minLength="5"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Max Length</Label>
                      <Col sm="7">
                        <FormGroup className={maxLengthState}>
                          <Input
                            name="max_length"
                            type="text"
                            onChange={e =>
                              this.change(e, "maxLength", "max-length", 5)
                            }
                          />
                          {this.state.maxLengthState === "has-danger" ? (
                            <label className="error">
                              Please enter 5 or less characters.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>maxLength="5"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Range</Label>
                      <Col sm="7">
                        <FormGroup className={rangeState}>
                          <Input
                            name="range"
                            type="text"
                            onChange={e =>
                              this.change(e, "range", "range", 6, 10)
                            }
                          />
                          {this.state.rangeState === "has-danger" ? (
                            <label className="error">
                              Please enter a value between 6 and 10.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>range="[6,10]"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Min Value</Label>
                      <Col sm="7">
                        <FormGroup className={minState}>
                          <Input
                            name="min"
                            type="text"
                            onChange={e =>
                              this.change(e, "min", "min-value", 6)
                            }
                          />
                          {this.state.minState === "has-danger" ? (
                            <label className="error">
                              Please enter a value greater than or equal to 6.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>min="6"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Max Value</Label>
                      <Col sm="7">
                        <FormGroup className={maxState}>
                          <Input
                            name="max"
                            type="text"
                            onChange={e =>
                              this.change(e, "max", "max-value", 6)
                            }
                          />
                          {this.state.maxState === "has-danger" ? (
                            <label className="error">
                              Please enter a value less than or equal to 6.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>max="6"</code>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={this.rangeClick}>
                      Validate Inputs
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ValidationForms;
