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
  FormText,
  Row,
  Col
} from "reactstrap";

class RegularForms extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Stacked Form</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="#" method="#">
                    <label>Email address</label>
                    <FormGroup>
                      <Input placeholder="Enter email" type="email" />
                    </FormGroup>
                    <label>Password</label>
                    <FormGroup>
                      <Input
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                      />
                    </FormGroup>
                    <FormGroup check className="mt-3">
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          Subscribe to newsletter{" "}
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-round" color="info" type="submit">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Horizontal Form</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form-horizontal">
                    <Row>
                      <Label md="3">Username</Label>
                      <Col md="9">
                        <FormGroup>
                          <Input placeholder="Username" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md="3">Email</Label>
                      <Col md="9">
                        <FormGroup>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md="3">Password</Label>
                      <Col md="9">
                        <FormGroup>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="3" />
                      <Col md="9">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Remember me
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col md="3" />
                    <Col md="9">
                      <Button className="btn-round" color="info" type="submit">
                        Sign in
                      </Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Form Elements</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="/" className="form-horizontal" method="get">
                    <Row>
                      <Label sm="2">With help</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="text" />
                          <FormText color="default" tag="span">
                            A block of help text that breaks onto a new line.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Password</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input type="password" autoComplete="off" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Placeholder</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input placeholder="placeholder" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Disabled</Label>
                      <Col sm="10">
                        <FormGroup>
                          <Input
                            defaultValue="Disabled input here.."
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Static control</Label>
                      <Col sm="10">
                        <FormGroup>
                          <p className="form-control-static">
                            hello@creative-tim.com
                          </p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Checkboxes and radios</Label>
                      <Col className="checkbox-radios" sm="10">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            First Checkbox
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Second Checkbox
                          </Label>
                        </FormGroup>
                        <div className="form-check-radio">
                          <Label check>
                            <Input
                              defaultValue="option1"
                              id="exampleRadios11"
                              name="exampleRadioz"
                              type="radio"
                            />
                            First Radio <span className="form-check-sign" />
                          </Label>
                        </div>
                        <div className="form-check-radio">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="option2"
                              id="exampleRadios12"
                              name="exampleRadioz"
                              type="radio"
                            />
                            Second Radio <span className="form-check-sign" />
                          </Label>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Inline checkboxes</Label>
                      <Col sm="10">
                        <FormGroup check inline>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />a
                          </Label>
                        </FormGroup>{" "}
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />b
                          </Label>
                        </FormGroup>{" "}
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />c
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Input Variants</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form action="/" className="form-horizontal" method="get">
                    <Row>
                      <Label sm="2">Custom Checkboxes &amp; radios</Label>
                      <Col className="checkbox-radios" sm="4">
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            Unchecked
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultChecked type="checkbox" />
                            <span className="form-check-sign" />
                            Checked
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                          <Label check>
                            <Input disabled type="checkbox" />
                            <span className="form-check-sign" />
                            Disabled Unchecked
                          </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                          <Label check>
                            <Input disabled type="checkbox" />
                            <span className="form-check-sign" />
                            Disabled Checked
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col lg="3" sm="6">
                        <div className="form-check-radio">
                          <Label check>
                            <Input
                              defaultValue="option1"
                              id="exampleRadios1"
                              name="exampleRadios"
                              type="radio"
                            />
                            Radio is off <span className="form-check-sign" />
                          </Label>
                        </div>
                        <div className="form-check-radio">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="option2"
                              id="exampleRadios2"
                              name="exampleRadios"
                              type="radio"
                            />
                            Radio is on <span className="form-check-sign" />
                          </Label>
                        </div>
                        <div className="form-check-radio disabled">
                          <Label check>
                            <Input
                              defaultValue="option3"
                              disabled
                              id="exampleRadios3"
                              name="exampleRadios"
                              type="radio"
                            />
                            Disabled radio is off{" "}
                            <span className="form-check-sign" />
                          </Label>
                        </div>
                        <div className="form-check-radio disabled">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="option4"
                              disabled
                              id="exampleRadios4"
                              name="exampleRadioz"
                              type="radio"
                            />
                            Disabled radio is on{" "}
                            <span className="form-check-sign" />
                          </Label>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Input with success</Label>
                      <Col sm="10">
                        <FormGroup className="has-success">
                          <Input defaultValue="Success" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Input with error</Label>
                      <Col sm="10">
                        <FormGroup className="has-danger">
                          <Input defaultValue="Error" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Column sizing</Label>
                      <Col sm="10">
                        <Row>
                          <Col md="3">
                            <FormGroup>
                              <Input placeholder=".col-md-3" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="4">
                            <FormGroup>
                              <Input placeholder=".col-md-4" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="5">
                            <FormGroup>
                              <Input placeholder=".col-md-5" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularForms;
