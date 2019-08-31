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
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Form,
  InputGroup
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Radio from "components/CustomRadio/CustomRadio.jsx";

class RegularForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: "1",
      radioVariant: "1"
    };
  }
  handleRadio = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Stacked Form"
                content={
                  <form>
                    <FormGroup>
                      <ControlLabel>Email address</ControlLabel>
                      <FormControl placeholder="Enter email" type="email" />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl placeholder="Password" type="password" autoComplete="off"/>
                    </FormGroup>
                    <FormGroup>
                      <Checkbox
                        isChecked
                        number="1"
                        label="Subscribe to newsletter"
                      />
                    </FormGroup>
                    <Button bsStyle="info" fill>
                      Submit
                    </Button>
                  </form>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Horizontal Form"
                content={
                  <Form horizontal>
                    <FormGroup>
                      <ControlLabel className="col-md-3">Email</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="Email" type="email" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">Password</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="Password" type="password" autoComplete="off"/>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col md={9} mdOffset={3}>
                        <Checkbox number="2" label="Remember me" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col md={9} mdOffset={3}>
                        <Button bsStyle="info" fill>
                          Submit
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                title={<legend>Form Elements</legend>}
                content={
                  <Form horizontal>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          With Help
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl type="text" />
                          <HelpBlock>
                            Validation is based on string length.
                          </HelpBlock>
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Password
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl type="password" autoComplete="off"/>
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Placeholder
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl placeholder="placeholder" type="text" />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Disabled
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl
                            placeholder="Disabled input here"
                            type="text"
                            disabled
                          />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Static control
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl.Static>
                            hello@creative-tim.com
                          </FormControl.Static>
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Checkboxes and Radios
                        </ControlLabel>
                        <Col sm={10}>
                          <Checkbox number="3" label="First Checkbox" />
                          <Checkbox number="4" label="Second Checkbox" />
                          <Radio
                            number="5"
                            option="1"
                            name="radio"
                            onChange={this.handleRadio}
                            checked={this.state.radio === "1"}
                            label="Checked"
                          />
                          <Radio
                            number="6"
                            option="2"
                            name="radio"
                            onChange={this.handleRadio}
                            checked={this.state.radio === "2"}
                            label="Unchecked"
                          />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Inline Checkboxes
                        </ControlLabel>
                        <Col sm={10}>
                          <Checkbox inline number="7" label="a" />
                          <Checkbox inline number="8" label="b" />
                          <Checkbox inline number="9" label="c" />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <legend>Input Variants</legend>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Custom Checkboxes & Radios
                        </ControlLabel>
                        <Col sm={4} smOffset={1}>
                          <Checkbox number="10" label="Unchecked" />
                          <Checkbox isChecked number="11" label="Checked" />
                          <Checkbox
                            disabled
                            number="12"
                            label="Disabled unchecked"
                          />
                          <Checkbox
                            disabled
                            isChecked
                            number="13"
                            label="Disabled checked"
                          />
                        </Col>
                        <Col sm={5}>
                          <Radio
                            number="14"
                            option="2"
                            name="radioVariant"
                            onChange={this.handleRadio}
                            checked={this.state.radioVariant === "2"}
                            label="Radio is off"
                          />
                          <Radio
                            number="15"
                            option="1"
                            name="radioVariant"
                            onChange={this.handleRadio}
                            checked={this.state.radioVariant === "1"}
                            label="Radio is on"
                          />
                          <Radio
                            disabled
                            number="16"
                            option="4"
                            name="radioVariantDisabled"
                            label="Disabled radio off"
                          />
                          <Radio
                            disabled
                            number="17"
                            option="3"
                            name="radioVariantDisabled"
                            checked
                            label="Disabled radio on"
                          />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Input with success
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl type="text" className="valid" />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Input with error
                        </ControlLabel>
                        <Col sm={10}>
                          <FormControl type="text" className="error" />
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Column sizing
                        </ControlLabel>
                        <Col sm={10}>
                          <Row>
                            <Col md={3}>
                              <FormControl type="text" placeholder="md={3}" />
                            </Col>
                            <Col md={4}>
                              <FormControl type="text" placeholder="md={4}" />
                            </Col>
                            <Col md={5}>
                              <FormControl type="text" placeholder="md={5}" />
                            </Col>
                          </Row>
                        </Col>
                      </FormGroup>
                    </fieldset>
                    <fieldset>
                      <FormGroup>
                        <ControlLabel className="col-sm-2">
                          Input groups
                        </ControlLabel>
                        <Col sm={3}>
                          <InputGroup>
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl type="text" placeholder="Username" />
                          </InputGroup>
                        </Col>
                        <Col sm={3}>
                          <InputGroup>
                            <FormControl type="text" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                          </InputGroup>
                        </Col>
                        <Col sm={4}>
                          <InputGroup>
                            <InputGroup.Addon>$</InputGroup.Addon>
                            <FormControl type="text" />
                            <InputGroup.Addon>.00</InputGroup.Addon>
                          </InputGroup>
                        </Col>
                      </FormGroup>
                    </fieldset>
                  </Form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RegularForms;
