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

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class RegularForms extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
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
                      <Input type="email" />
                    </FormGroup>
                    <label>Password</label>
                    <FormGroup>
                      <Input type="password" />
                    </FormGroup>
                    <FormGroup check className="mt-3">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />
                        Subscribe to newsletter
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
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
                          <Input type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md="3">Email</Label>
                      <Col md="9">
                        <FormGroup>
                          <Input type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label md="3">Password</Label>
                      <Col md="9">
                        <FormGroup>
                          <Input type="password" />
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
                      <Button
                        className="btn-fill"
                        color="primary"
                        type="submit"
                      >
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
                          <Input type="password" />
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
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="option1"
                              id="exampleRadios1"
                              name="exampleRadios"
                              type="radio"
                            />
                            <span className="form-check-sign" />
                            First Radio
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              defaultValue="option2"
                              id="exampleRadios2"
                              name="exampleRadios"
                              type="radio"
                            />
                            <span className="form-check-sign" />
                            Second Radio
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Inline checkboxes</Label>
                      <Col sm="10">
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />a
                          </Label>
                        </FormGroup>
                        <FormGroup check inline>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />b
                          </Label>
                        </FormGroup>
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
                      <Col className="checkbox-radios" sm={4}>
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
                      <Col className="checkbox-radios" sm="5">
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              defaultValue="option1"
                              id="exampleRadios3"
                              name="exampleRadio"
                              type="radio"
                            />
                            <span className="form-check-sign" />
                            Radio is off
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio">
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="option2"
                              id="exampleRadios4"
                              name="exampleRadio"
                              type="radio"
                            />
                            <span className="form-check-sign" />
                            Radio is on
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio" disabled>
                          <Label check>
                            <Input
                              defaultValue="option1"
                              disabled
                              id="exampleRadios5"
                              name="exampleRadio1"
                              type="radio"
                            />
                            <span className="form-check-sign" />
                            Radio is off
                          </Label>
                        </FormGroup>
                        <FormGroup check className="form-check-radio" disabled>
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue="option2"
                              disabled
                              id="exampleRadios6"
                              name="exampleRadio1"
                              type="radio"
                            />
                            <span className="form-check-sign" />
                            Radio is on
                          </Label>
                        </FormGroup>
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
                              <Input placeholder="md={3}" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="4">
                            <FormGroup>
                              <Input placeholder="md={4}" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="5">
                            <FormGroup>
                              <Input placeholder="md={5}" type="text" />
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
