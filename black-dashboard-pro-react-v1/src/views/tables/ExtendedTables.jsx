/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
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
            <ol className="breadcrumb bg-transparent ml-3">
              <BreadcrumbItem>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  {" "}
                  Library
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="active">Data</BreadcrumbItem>
            </ol>
            <Col md="12">
              <Card>
                <CardHeader>
                  <div className="tools float-right">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className="btn-link btn-icon"
                        color="default"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem
                          className="text-danger"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Remove Data
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
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
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/tania.jpg")}
                            />
                          </div>
                        </td>
                        <td>Andrew Mike</td>
                        <td>Develop</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 99,225</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon"
                            color="success"
                            id="tooltip324367706"
                            size="sm"
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip324367706"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip974171201"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip974171201"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/robi.jpg")}
                            />
                          </div>
                        </td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 89,241</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon"
                            color="success"
                            id="tooltip533157871"
                            size="sm"
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip533157871"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip423541936"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip423541936"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg")}
                            />
                          </div>
                        </td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className="text-center">2010</td>
                        <td className="text-right">€ 92,144</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon"
                            color="success"
                            id="tooltip101947879"
                            size="sm"
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip101947879"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip964133889"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip964133889"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/jana.jpg")}
                            />
                          </div>
                        </td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 49,990</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip932549650"
                            size="sm"
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip932549650"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip696208424"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip696208424"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/robi.jpg")}
                            />
                          </div>
                        </td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className="text-center">2015</td>
                        <td className="text-right">€ 69,201</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip188998609"
                            size="sm"
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip188998609"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip991400757"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip991400757"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              src={require("assets/img/emilyz.jpg")}
                            />
                          </div>
                        </td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 99,201</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip967557276"
                            size="sm"
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip967557276"
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip467555755"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip467555755"
                          >
                            Tooltip on top
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
                  <div className="tools float-right">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className="btn-link btn-icon"
                        color="default"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem
                          className="text-danger"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Remove Data
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <CardTitle tag="h4">Striped Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive striped>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Product Name</th>
                        <th>Type</th>
                        <th>Milestone</th>
                        <th className="text-center">Qty</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
                        <td>
                          <div className="progress-container">
                            <span className="progress-badge">v1.2.0</span>
                            <Progress max="100" value="25">
                              <span className="progress-value">25%</span>
                            </Progress>
                          </div>
                        </td>
                        <td className="text-center">25</td>
                        <td className="text-right">€ 49</td>
                        <td className="text-right">€ 1,225</td>
                      </tr>
                      <tr>
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
                        <td>
                          <div className="progress-container">
                            <span className="progress-badge">v1.4.0</span>
                            <Progress max="100" value="45">
                              <span className="progress-value">45%</span>
                            </Progress>
                          </div>
                        </td>
                        <td className="text-center">30</td>
                        <td className="text-right">€ 10</td>
                        <td className="text-right">€ 300</td>
                      </tr>
                      <tr>
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
                        <td>
                          <div className="progress-container">
                            <span className="progress-badge">v2.0.0</span>
                            <Progress max="100" value="10">
                              <span className="progress-value">10%</span>
                            </Progress>
                          </div>
                        </td>
                        <td className="text-center">50</td>
                        <td className="text-right">€ 10.99</td>
                        <td className="text-right">€ 109</td>
                      </tr>
                      <tr>
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
                        <td>
                          <div className="progress-container">
                            <span className="progress-badge">v1.5.0</span>
                            <Progress max="100" value="80">
                              <span className="progress-value">80%</span>
                            </Progress>
                          </div>
                        </td>
                        <td className="text-center">10</td>
                        <td className="text-right">€ 499.00</td>
                        <td className="text-right">€ 4,990</td>
                      </tr>
                      <tr>
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
                        <td>
                          <div className="progress-container">
                            <span className="progress-badge">v1.0.0</span>
                            <Progress max="100" value="30">
                              <span className="progress-value">30%</span>
                            </Progress>
                          </div>
                        </td>
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
                  <div className="tools float-right">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className="btn-link btn-icon"
                        color="default"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem className="text-danger">
                          Remove Data
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <CardTitle tag="h4">Shopping Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table-shopping">
                      <thead>
                        <tr>
                          <th className="text-center" />
                          <th>Product</th>
                          <th>Color</th>
                          <th className="text-right">Size</th>
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
                                src={require("assets/img/jacket.png")}
                              />
                            </div>
                          </td>
                          <td className="td-name">
                            <a href="pablo" onClick={e => e.preventDefault()}>
                              Suede Biker Jacket
                            </a>
                            <br />
                            <small>by Cristianis</small>
                          </td>
                          <td>Black</td>
                          <td className="td-number">XS</td>
                          <td className="td-number">
                            <small>€</small>
                            3490
                          </td>
                          <td className="td-number">
                            <ButtonGroup>
                              <Button
                                className="btn-simple"
                                color="info"
                                size="sm"
                              >
                                <i className="tim-icons icon-simple-delete" />
                              </Button>
                              <Button color="info" size="sm">
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                            </ButtonGroup>{" "}
                            1
                          </td>
                          <td className="td-number">
                            <small>€</small>
                            3490
                          </td>
                          <td className="td-actions">
                            <Button
                              className="btn-link"
                              color="primary"
                              data-placement="top"
                              id="tooltip647160017"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="top"
                              target="tooltip647160017"
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
                                src={require("assets/img/t-shirt.png")}
                              />
                            </div>
                          </td>
                          <td className="td-name">
                            <a href="pablo" onClick={e => e.preventDefault()}>
                              Jersey T-Shirt
                            </a>
                            <br />
                            <small>by Jerry</small>
                          </td>
                          <td>Black</td>
                          <td className="td-number">M</td>
                          <td className="td-number">
                            <small>€</small>
                            235
                          </td>
                          <td className="td-number">
                            <ButtonGroup>
                              <Button
                                className="btn-simple"
                                color="info"
                                size="sm"
                              >
                                <i className="tim-icons icon-simple-delete" />
                              </Button>
                              <Button color="info" size="sm">
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                            </ButtonGroup>{" "}
                            2
                          </td>
                          <td className="td-number">
                            <small>€</small>
                            470
                          </td>
                          <td className="td-actions">
                            <Button
                              className="btn-link"
                              color="primary"
                              data-placement="top"
                              id="tooltip581613919"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="top"
                              target="tooltip581613919"
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
                                src={require("assets/img/gucci.png")}
                              />
                            </div>
                          </td>
                          <td className="td-name">
                            <a href="pablo" onClick={e => e.preventDefault()}>
                              Slim-Fit Swim Short
                            </a>
                            <br />
                            <small>by Panini</small>
                          </td>
                          <td>Red</td>
                          <td className="td-number">L</td>
                          <td className="td-number">
                            <small>€</small>
                            140
                          </td>
                          <td className="td-number">
                            <ButtonGroup>
                              <Button
                                className="btn-simple"
                                color="info"
                                size="sm"
                              >
                                <i className="tim-icons icon-simple-delete" />
                              </Button>
                              <Button color="info" size="sm">
                                <i className="tim-icons icon-simple-add" />
                              </Button>
                            </ButtonGroup>{" "}
                            1
                          </td>
                          <td className="td-number">
                            <small>€</small>
                            140
                          </td>
                          <td className="td-actions">
                            <Button
                              className="btn-link"
                              color="primary"
                              data-placement="top"
                              id="tooltip237511111"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="top"
                              target="tooltip237511111"
                            >
                              Remove item
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="5" />
                          <td className="td-total">Total</td>
                          <td className="td-price">
                            <small>€</small>
                            4100
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </Table>
                    <Button color="info" className="btn-round float-right mr-5">
                      Complete Purchase{" "}
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
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
