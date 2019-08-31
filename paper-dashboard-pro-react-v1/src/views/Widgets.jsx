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
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Widgets extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="text-center" lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Tasks</CardTitle>
                  <h5 className="card-category">Backend development</h5>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip42906017"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip42906017"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip570363224"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip570363224"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip584875601"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip584875601"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip517629613"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip517629613"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/kaci-baum-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            Using dummy content or fake information in the Web
                            design process can result in products with
                            unrealistic
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip792337830"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792337830"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip731952378"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip731952378"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="img-row">
                            <div className="img-wrapper">
                              <img
                                alt="..."
                                className="img-raised"
                                src={require("assets/img/faces/joe-gardner-2.jpg")}
                              />
                            </div>
                          </td>
                          <td className="text-left">
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="info"
                              id="tooltip825783733"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-ruler-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip825783733"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                            <Button
                              className="btn-round btn-icon btn-icon-mini btn-neutral"
                              color="danger"
                              id="tooltip285089652"
                              title=""
                              type="button"
                            >
                              <i className="nc-icon nc-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip285089652"
                            >
                              Remove
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh spin" />
                    Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardText tag="div">
                    <CardTitle tag="h4">Employees Stats</CardTitle>
                    <p className="card-category">
                      New employees on 15th September, 2016
                    </p>
                  </CardText>
                </CardHeader>
                <CardBody className="table-responsive">
                  <Table className="table-hover">
                    <thead className="text-warning">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge danger">
                        <i className="nc-icon nc-single-copy-04" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="danger" pill>
                            Some Title
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Wifey made the best Father's Day meal ever. So
                            thankful so happy so blessed. Thank you for making
                            my family We just had fun with the “future” theme
                            !!! It was a fun night all together ... The always
                            rude Kanye Show at 2am Sold Out Famous viewing @
                            Figueroa and 12th in downtown.
                          </p>
                        </div>
                        <h6>
                          <i className="ti-time" />
                          11 hours ago via Twitter
                        </h6>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="nc-icon nc-sun-fog-29" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            Another One
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Thank God for the support of my wife and real
                            friends. I also wanted to point out that it’s the
                            first album to go number 1 off of streaming!!! I
                            love you Ellen and also my number one design rule of
                            anything I do from shoes to music to homes is that
                            Kim has to like it....
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="nc-icon nc-world-2" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info" pill>
                            Another Title
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Called I Miss the Old Kanye That’s all it was Kanye
                            And I love you like Kanye loves Kanye Famous viewing
                            @ Figueroa and 12th in downtown LA 11:10PM
                          </p>
                          <p>
                            What if Kanye made a song about Kanye Royère doesn't
                            make a Polar bear bed but the Polar bear couch is my
                            favorite piece of furniture we own It wasn’t any
                            Kanyes Set on his goals Kanye
                          </p>
                          <hr />
                        </div>
                        <div className="timeline-footer">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="info"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="nc-icon nc-settings-gear-65" />
                            </DropdownToggle>
                            <DropdownMenu>
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
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Row>
                <Col lg="6">
                  <Card className="card-pricing">
                    <CardHeader>
                      <h6 className="card-category">Alpha Pack</h6>
                    </CardHeader>
                    <CardBody>
                      <div className="card-icon icon-primary">
                        <i className="nc-icon nc-spaceship" />
                      </div>
                      <CardTitle tag="h3">69$</CardTitle>
                      <ul>
                        <li>Working materials in EPS</li>
                        <li>6 months access to the library</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="card-pricing card-plain">
                    <CardHeader>
                      <h6 className="card-category">Bravo Pack</h6>
                    </CardHeader>
                    <CardBody>
                      <div className="card-icon icon-warning">
                        <i className="nc-icon nc-shop" />
                      </div>
                      <CardTitle tag="h3">10$</CardTitle>
                      <ul>
                        <li>Complete documentation</li>
                        <li>Working materials in Sketch</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round btn-neutral"
                        color="warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Card className="card-testimonial">
                <CardBody>
                  <div className="icon icon-primary">
                    <i className="fa fa-quote-right" />
                  </div>
                  <p className="card-description">
                    The networking at Web Summit is like no other European tech
                    conference.
                  </p>
                </CardBody>
                <CardFooter>
                  <CardTitle tag="h4">Gina Andrew</CardTitle>
                  <h6 className="card-category">@ginaandrew</h6>
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Widgets;
