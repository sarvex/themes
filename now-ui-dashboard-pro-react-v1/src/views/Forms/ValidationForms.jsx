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
import React from "react";

// reactstrap components
import {
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class ValidationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        emailState: "",
        passwordState: "",
        confirmState: "",
        fullNameState: "",
        email: "",
        password: "",
        confirm: "",
        fullName: ""
      },
      login: {
        email: "",
        confirm: "",
        emailState: "",
        confirmState: ""
      },
      type: {
        required: "",
        email: "",
        number: "",
        url: "",
        source: "",
        destionation: "",
        requiredState: "",
        emailState: "",
        numberState: "",
        urlState: "",
        equalState: ""
      },
      range: {
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
      }
    };
  }
  registerEmail(e) {
    var register = this.state.register;
    register["email"] = e.target.value;
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      register["emailState"] = "has-success";
    } else {
      register["emailState"] = "has-danger";
    }
    this.setState({ register });
  }
  registerPassword(e) {
    var register = this.state.register;
    register["password"] = e.target.value;
    if (e.target.value.length > 0) {
      register["passwordState"] = "has-success";
    } else {
      register["passwordState"] = "has-danger";
    }
    if (register["password"] === register["confirm"]) {
      register["confirmState"] = "has-success";
    } else {
      register["confirmState"] = "has-danger";
    }
    this.setState({ register });
  }
  registerConfirm(e) {
    var register = this.state.register;
    register["confirm"] = e.target.value;
    if (register["password"] === register["confirm"]) {
      register["confirmState"] = "has-success";
    } else {
      register["confirmState"] = "has-danger";
    }
    this.setState({ register });
  }
  registerSubmit(e) {
    var register = this.state.register;
    if (register["emailState"] !== "has-success")
      register["emailState"] = "has-danger";
    if (register["passwordState"] !== "has-success")
      register["passwordState"] = "has-danger";
    if (register["confirmState"] !== "has-success")
      register["confirmState"] = "has-danger";
    this.setState({ register });
  }
  loginEmail(e) {
    var login = this.state.login;
    login["email"] = e.target.value;
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      login["emailState"] = "has-success";
    } else {
      login["emailState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginFullName(e) {
    var login = this.state.login;
    login["fullName"] = e.target.value;
    if (/[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value)) {
      login["fullNameState"] = "has-success";
    } else {
      login["fullNameState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginPassword(e) {
    var login = this.state.login;
    login["password"] = e.target.value;
    if (e.target.value.length > 0) {
      login["passwordState"] = "has-success";
    } else {
      login["passwordState"] = "has-danger";
    }
    this.setState({ login });
  }
  loginSubmit(e) {
    var login = this.state.login;
    if (login["emailState"] !== "has-success")
      login["emailState"] = "has-danger";
    if (login["passwordState"] !== "has-success")
      login["passwordState"] = "has-danger";
    if (login["fullNameState"] !== "has-success")
      login["fullNameState"] = "has-danger";
    this.setState({ login });
  }
  typeRequired(e) {
    var type = this.state.type;
    type["required"] = e.target.value;
    if (type["required"].length > 0) {
      type["requiredState"] = "has-success";
    } else {
      type["requiredState"] = "has-danger";
    }
    this.setState({ type });
  }
  typeEmail(e) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var type = this.state.type;
    type["email"] = e.target.value;
    if (emailRex.test(type["email"])) {
      type["emailState"] = "has-success";
    } else {
      type["emailState"] = "has-danger";
    }
    this.setState({ type });
  }
  typeNumber(e) {
    var numberRex = new RegExp("^[0-9]+$");
    var type = this.state.type;
    type["number"] = e.target.value;
    if (numberRex.test(type["number"])) {
      type["numberState"] = "has-success";
    } else {
      type["numberState"] = "has-danger";
    }
    this.setState({ type });
  }
  typeUrl(e) {
    var type = this.state.type;
    type["url"] = e.target.value;
    try {
      new URL(type["url"]);
      type["urlState"] = "has-success";
    } catch (_) {
      type["urlState"] = "has-danger";
    }
    this.setState({ type });
  }
  typeSource(e) {
    var type = this.state.type;
    type["source"] = e.target.value;
    if (type["source"] === type["destionation"]) {
      type["equalState"] = "has-success";
    } else {
      type["equalState"] = "has-danger";
    }
    this.setState({ type });
  }
  typeDestionation(e) {
    var type = this.state.type;
    type["destionation"] = e.target.value;
    if (type["source"] === type["destionation"]) {
      type["equalState"] = "has-success";
    } else {
      type["equalState"] = "has-danger";
    }
    this.setState({ type });
  }
  typeValidate(e) {
    var type = this.state.type;
    if (type["requiredState"] !== "has-success")
      type["requiredState"] = "has-danger";
    if (type["emailState"] !== "has-success") type["emailState"] = "has-danger";
    if (type["numberState"] !== "has-success")
      type["numberState"] = "has-danger";
    if (type["urlState"] !== "has-success") type["urlState"] = "has-danger";
    if (type["equalState"] !== "has-success") type["equalState"] = "has-danger";
    this.setState({ type });
  }
  rangeMinL(e) {
    var range = this.state.range;
    range["minLength"] = e.target.value;
    if (range["minLength"].length > 4) {
      range["minLengthState"] = "has-success";
    } else {
      range["minLengthState"] = "has-danger";
    }
    this.setState({ range });
  }
  rangeMaxL(e) {
    var range = this.state.range;
    range["maxLength"] = e.target.value;
    if (range["maxLength"].length < 6) {
      range["maxLengthState"] = "has-success";
    } else {
      range["maxLengthState"] = "has-danger";
    }
    this.setState({ range });
  }
  rangeRange(e) {
    var numberRex = new RegExp("^[0-9]+$");
    var range = this.state.range;
    range["range"] = e.target.value;
    if (!numberRex.test(range["range"])) {
      range["rangeState"] = "has-danger";
    } else {
      if (range["range"] < 11 && range["range"] > 5) {
        range["rangeState"] = "has-success";
      } else {
        range["rangeState"] = "has-danger";
      }
    }
    this.setState({ range });
  }
  rangeMin(e) {
    var numberRex = new RegExp("^[0-9]+$");
    var range = this.state.range;
    range["min"] = e.target.value;
    if (!numberRex.test(range["min"])) {
      range["minState"] = "has-danger";
    } else {
      if (range["min"] > 5) {
        range["minState"] = "has-success";
      } else {
        range["minState"] = "has-danger";
      }
    }
    this.setState({ range });
  }
  rangeMax(e) {
    var numberRex = new RegExp("^[0-9]+$");
    var range = this.state.range;
    range["max"] = e.target.value;
    if (!numberRex.test(range["max"])) {
      range["maxState"] = "has-danger";
    } else {
      if (range["max"] < 7) {
        range["maxState"] = "has-success";
      } else {
        range["maxState"] = "has-danger";
      }
    }
    this.setState({ range });
  }
  rangeValidate(e) {
    var range = this.state.range;
    if (range["minLengthState"] !== "has-success")
      range["minLengthState"] = "has-danger";
    if (range["maxLengthState"] !== "has-success")
      range["maxLengthState"] = "has-danger";
    if (range["rangeState"] !== "has-success")
      range["rangeState"] = "has-danger";
    if (range["minState"] !== "has-success") range["minState"] = "has-danger";
    if (range["maxState"] !== "has-success") range["maxState"] = "has-danger";
    this.setState({ range });
  }
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} md={6}>
              <Form>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Register Form</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <FormGroup
                      className={"has-label " + this.state.register.emailState}
                    >
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        onChange={e => this.registerEmail(e)}
                      />
                    </FormGroup>
                    <FormGroup
                      className={
                        "has-label " + this.state.register.passwordState
                      }
                    >
                      <Label>Password *</Label>
                      <Input
                        type="password"
                        autoComplete="password"
                        onChange={e => this.registerPassword(e)}
                      />
                    </FormGroup>
                    <FormGroup
                      className={
                        "has-label " + this.state.register.confirmState
                      }
                    >
                      <Label>Confirm Password *</Label>
                      <Input
                        type="password"
                        autoComplete="password"
                        onChange={e => this.registerConfirm(e)}
                      />
                    </FormGroup>
                    <div className="category form-category">
                      * Required fields
                    </div>
                  </CardBody>
                  <CardFooter className="text-right">
                    <FormGroup check className="pull-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />
                        Subscribe to newsletter
                      </Label>
                    </FormGroup>
                    <Button
                      color="primary"
                      onClick={e => this.registerSubmit(e)}
                    >
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <Form>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Login Form</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <FormGroup
                      className={"has-label " + this.state.login.fullNameState}
                    >
                      <Label>Full Name *</Label>
                      <Input
                        type="text"
                        onChange={e => this.loginFullName(e)}
                      />
                    </FormGroup>
                    <FormGroup
                      className={"has-label " + this.state.login.emailState}
                    >
                      <Label>Email Address *</Label>
                      <Input type="email" onChange={e => this.loginEmail(e)} />
                    </FormGroup>
                    <FormGroup
                      className={"has-label " + this.state.login.passwordState}
                    >
                      <Label>Password *</Label>
                      <Input
                        type="password"
                        autoComplete="password"
                        onChange={e => this.loginPassword(e)}
                      />
                    </FormGroup>
                    <div className="category form-category">
                      * Required fields
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={e => this.loginSubmit(e)}>
                      Login
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            <Col xs={12}>
              <Form className="form-horizontal">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Type Validation</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Label sm={2}>Required Text</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.type.requiredState}>
                          <Input
                            type="text"
                            onChange={e => this.typeRequired(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>required</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Email</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.type.emailState}>
                          <Input
                            type="email"
                            onChange={e => this.typeEmail(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>email</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Number</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.type.numberState}>
                          <Input
                            type="text"
                            onChange={e => this.typeNumber(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>number</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Url</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.type.urlState}>
                          <Input type="text" onChange={e => this.typeUrl(e)} />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>url</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Equal to</Label>
                      <Col xs={12} sm={3}>
                        <FormGroup className={this.state.type.equalState}>
                          <Input
                            type="text"
                            onChange={e => this.typeSource(e)}
                            placeholder="#idSource"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs={12} sm={3}>
                        <FormGroup className={this.state.type.equalState}>
                          <Input
                            type="text"
                            onChange={e => this.typeDestionation(e)}
                            placeholder="#idDestination"
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>equalTo</code>
                      </Label>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={e => this.typeValidate(e)}>
                      Validate Inputs
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
            <Col xs={12}>
              <Form className="form-horizontal">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Range Validation</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Label sm={2}>Min length</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.range.minLengthState}>
                          <Input
                            type="text"
                            onChange={e => this.rangeMinL(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>minLength="5"</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Max length</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.range.maxLengthState}>
                          <Input
                            type="text"
                            onChange={e => this.rangeMaxL(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>maxLength="5"</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Range</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.range.rangeState}>
                          <Input
                            type="text"
                            onChange={e => this.rangeRange(e)}
                          />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>range="[6,10]"</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Min Value</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.range.minState}>
                          <Input type="text" onChange={e => this.rangeMin(e)} />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>min="6"</code>
                      </Label>
                    </Row>
                    <Row>
                      <Label sm={2}>Max Value</Label>
                      <Col xs={12} sm={7}>
                        <FormGroup className={this.state.range.maxState}>
                          <Input type="text" onChange={e => this.rangeMax(e)} />
                        </FormGroup>
                      </Col>
                      <Label sm={3} className="label-on-right">
                        <code>max="6"</code>
                      </Label>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      onClick={e => this.rangeValidate(e)}
                    >
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
