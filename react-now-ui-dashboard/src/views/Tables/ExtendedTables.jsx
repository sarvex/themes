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
  Table,
  UncontrolledTooltip,
  ButtonGroup,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class ExtendedTables extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
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
                        <td className="text-right btns-mr-5">
                          <Button
                            className="btn-icon"
                            color="info"
                            id="tooltip590841497"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons users_single-02" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip590841497"
                          />
                          <Button
                            className="btn-icon"
                            color="success"
                            id="tooltip26024663"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip26024663"
                          />
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip930083782"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip930083782"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 89,241</td>
                        <td className="text-right btns-mr-5">
                          <Button
                            className="btn-icon"
                            color="info"
                            id="tooltip657443952"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons users_single-02" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip657443952"
                          />
                          <Button
                            className="btn-icon"
                            color="success"
                            id="tooltip329666278"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip329666278"
                          />
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip785326494"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip785326494"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className="text-center">2010</td>
                        <td className="text-right">€ 92,144</td>
                        <td className="text-right btns-mr-5">
                          <Button
                            className="btn-icon"
                            color="info"
                            id="tooltip280775293"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons users_single-02" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip280775293"
                          />
                          <Button
                            className="btn-icon"
                            color="success"
                            id="tooltip67964979"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip67964979"
                          />
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip523242304"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip523242304"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">€ 49,990</td>
                        <td className="text-right btns-mr-5">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip467570182"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons users_single-02" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip467570182"
                          />
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip824696339"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip824696339"
                          />
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip613627153"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip613627153"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className="text-center">2015</td>
                        <td className="text-right">€ 69,201</td>
                        <td className="text-right btns-mr-5">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip779759454"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons users_single-02" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip779759454"
                          />
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip509112288"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip509112288"
                          />
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip760127116"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip760127116"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">€ 99,201</td>
                        <td className="text-right btns-mr-5">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip244552643"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons users_single-02" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip244552643"
                          />
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip662313574"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip662313574"
                          />
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip585661947"
                            size="sm"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip585661947"
                          />
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
                        <th>Color</th>
                        <th>Size</th>
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
                              src={require("assets/img/saint-laurent.jpg")}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Suede Biker Jacket
                          </a>
                          <br />
                          <small>by Saint Laurent</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>
                          3,390
                        </td>
                        <td className="td-number">
                          1{" "}
                          <ButtonGroup>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-delete" />
                            </Button>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>
                          549
                        </td>
                        <td className="td-actions">
                          <Button
                            color="neutral"
                            id="tooltip455652873"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            placement="left"
                            target="tooltip455652873"
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
                              src={require("assets/img/balmain.jpg")}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Jersey T-Shirt
                          </a>
                          <br />
                          <small>by Balmain</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>
                          499
                        </td>
                        <td className="td-number">
                          2{" "}
                          <ButtonGroup>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-delete" />
                            </Button>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>
                          998
                        </td>
                        <td className="td-actions">
                          <Button
                            color="neutral"
                            id="tooltip248126406"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            placement="left"
                            target="tooltip248126406"
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
                              src={require("assets/img/prada.jpg")}
                            />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Slim-Fit Swim Short
                          </a>
                          <br />
                          <small>by Prada</small>
                        </td>
                        <td>Red</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>
                          200
                        </td>
                        <td className="td-number">
                          1{" "}
                          <ButtonGroup>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-delete" />
                            </Button>
                            <Button color="info" size="sm">
                              <i className="now-ui-icons ui-1_simple-add" />
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td className="td-number">
                          <small>€</small>
                          799
                        </td>
                        <td className="td-actions">
                          <Button
                            color="neutral"
                            id="tooltip517344924"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            placement="left"
                            target="tooltip517344924"
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
                          2,346
                        </td>
                        <td className="text-right" colSpan="3">
                          <Button
                            className="btn-round"
                            color="info"
                            id="tooltip304204142"
                            type="button"
                          >
                            Complete Purchase{" "}
                            <i className="now-ui-icons arrows-1_minimal-right" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip304204142"
                          />
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
