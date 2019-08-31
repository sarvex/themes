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
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ExtendedTables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Name</th>
                        <th>Job Position</th>
                        <th className="text-center">Since</th>
                        <th className="text-right">Salary</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Andrew Mike</td>
                        <td>Develop</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 99,225</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="info"
                            id="tooltip264453216"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip264453216"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="success"
                            id="tooltip366246651"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip366246651"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip476609793"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip476609793"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 89,241</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="info"
                            id="tooltip269174504"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip269174504"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="success"
                            id="tooltip495755671"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip495755671"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip94395840"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip94395840"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className="text-center">2010</td>
                        <td className="text-right">€ 92,144</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="info"
                            id="tooltip667520750"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip667520750"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="success"
                            id="tooltip793231916"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip793231916"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip884055770"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip884055770"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 49,990</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip289345217"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip289345217"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip247076752"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip247076752"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip1643763"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip1643763"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className="text-center">2015</td>
                        <td className="text-right">€ 69,201</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip67723462"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip67723462"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip120598831"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip120598831"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip66076761"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip66076761"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 99,201</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip747701937"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip747701937"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip159182735"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip159182735"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip808966390"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip808966390"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Striped Table with Checkboxes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive striped>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th className="text-center" />
                        <th>Product Name</th>
                        <th>Type</th>
                        <th className="text-center">Qty</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Moleskine Agenda</td>
                        <td>Office</td>
                        <td className="text-center">25</td>
                        <td className="text-right">€ 49</td>
                        <td className="text-right">€ 1,225</td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Stabilo Pen</td>
                        <td>Office</td>
                        <td className="text-center">30</td>
                        <td className="text-right">€ 10</td>
                        <td className="text-right">€ 300</td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>A4 Paper Pack</td>
                        <td>Office</td>
                        <td className="text-center">50</td>
                        <td className="text-right">€ 10.99</td>
                        <td className="text-right">€ 109</td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Apple iPad</td>
                        <td>Meeting</td>
                        <td className="text-center">10</td>
                        <td className="text-right">€ 499.00</td>
                        <td className="text-right">€ 4,990</td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Apple iPhone</td>
                        <td>Communication</td>
                        <td className="text-center">10</td>
                        <td className="text-right">€ 599.00</td>
                        <td className="text-right">€ 5,999</td>
                      </tr>
                      <tr>
                        <td colSpan="5" />
                        <td className="td-total">Total</td>
                        <td className="td-price">€ 35,999</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Shopping Cart Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="table-shopping" responsive>
                    <thead>
                      <tr>
                        <th className="text-center" />
                        <th>Product</th>
                        <th />
                        <th />
                        <th className="text-right">Price</th>
                        <th className="text-right">Qty</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={require("assets/img/agenda.png")}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Get Shit Done Notebook
                          </a>
                          <br />
                          <small>Most beautiful agenda for the office.</small>
                        </td>
                        <td />
                        <td />
                        <td className="td-number">
                          <small>€</small>
                          3,390
                        </td>
                        <td className="td-number">
                          1{" "}
                          <ButtonGroup className="btn-group-sm">
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-simple-delete" />
                            </Button>
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>
                          549
                        </td>
                        <td className="td-actions">
                          <Button
                            className="btn-neutral"
                            color="default"
                            data-placement="left"
                            id="tooltip848814788"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            placement="left"
                            target="tooltip848814788"
                          >
                            Remove item
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={require("assets/img/stylus.jpg")}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Stylus
                          </a>
                          <br />
                          <small>
                            Design is not just what it looks like and feels
                            like. Design is how it works
                          </small>
                        </td>
                        <td />
                        <td />
                        <td className="td-number">
                          <small>€</small>
                          499
                        </td>
                        <td className="td-number">
                          2{" "}
                          <ButtonGroup className="btn-group-sm">
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-simple-delete" />
                            </Button>
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>
                          998
                        </td>
                        <td className="td-actions">
                          <Button
                            className="btn-neutral"
                            color="default"
                            data-placement="left"
                            id="tooltip822160608"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            placement="left"
                            target="tooltip822160608"
                          >
                            Remove item
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img
                              alt="..."
                              src={require("assets/img/evernote.png")}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Evernote iPad Stander
                          </a>
                          <br />
                          <small>
                            A groundbreaking Retina display. All-flash
                            architecture. Fourth-generation Intel processors.
                          </small>
                        </td>
                        <td />
                        <td />
                        <td className="td-number">
                          <small>€</small>
                          200
                        </td>
                        <td className="td-number">
                          1{" "}
                          <ButtonGroup className="btn-group-sm">
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-simple-delete" />
                            </Button>
                            <Button
                              className="btn-round"
                              color="default"
                              outline
                            >
                              <i className="nc-icon nc-simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>
                          799
                        </td>
                        <td className="td-actions">
                          <Button
                            className="btn-neutral"
                            color="default"
                            data-placement="left"
                            id="tooltip799358710"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            placement="left"
                            target="tooltip799358710"
                          >
                            Remove item
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3" />
                        <td className="td-total">Total</td>
                        <td className="td-price">
                          <small>€</small>
                          7,479
                        </td>
                        <td className="text-right" colSpan="3">
                          <Button
                            className="btn-round"
                            color="default"
                            id="tooltip861527148"
                            outline
                            title=""
                            type="button"
                          >
                            Complete Purchase{" "}
                            <i className="nc-icon nc-minimal-right" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip861527148"
                          >
                            Buy now
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ExtendedTables;
