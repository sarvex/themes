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
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
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

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Widgets extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col xs="5">
                          <div className="icon icon-primary icon-circle">
                            <i className="now-ui-icons ui-2_chat-round" />
                          </div>
                        </Col>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">1058</h3>
                          <h6 className="stats-title">messages</h6>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" />
                    Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col xs="5">
                          <div className="icon icon-warning icon-circle">
                            <i className="now-ui-icons business_bank" />
                          </div>
                        </Col>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">
                            <span>$</span>
                            23,685
                          </h3>
                          <h6 className="stats-title">Deposit</h6>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-1_calendar-60" />
                    Last week
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col xs="5">
                          <div className="icon icon-danger icon-circle">
                            <i className="now-ui-icons sport_user-run" />
                          </div>
                        </Col>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">364</h3>
                          <h6 className="stats-title">Players</h6>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" />
                    In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col xs="5">
                          <div className="icon icon-info icon-circle">
                            <i className="now-ui-icons ui-2_favourite-28" />
                          </div>
                        </Col>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">+83K</h3>
                          <h6 className="stats-title">followers</h6>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" />
                    Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" lg="6" md="12">
              <Card className="card-contributions">
                <CardBody>
                  <CardTitle tag="h1">3,521</CardTitle>
                  <h3 className="card-category">Total Public Contributions</h3>
                  <p className="card-description">
                    After a very successful two-year run, we’re going to be
                    changing the way that contributions work.
                  </p>
                </CardBody>
                <hr />
                <CardFooter>
                  <Row>
                    <Col xs="6">
                      <div className="card-stats justify-content-center">
                        <Switch offColor="" onColor="" />
                        <span>All public contributions</span>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="card-stats justify-content-center">
                        <Switch defaultValue={false} offColor="" onColor="" />
                        <span>Past week contributions</span>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
              <Card className="card-tasks">
                <CardHeader>
                  <h5 className="card-category">Backend development</h5>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
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
                        <td className="text-left">
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip222618948"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip222618948"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip710260028"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip710260028"
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
                        <td className="text-left">
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip622534530"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip622534530"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip724121077"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip724121077"
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
                        <td className="text-left">
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip325537789"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip325537789"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip540150719"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip540150719"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" /> Updated 3
                    minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge danger">
                        <i className="now-ui-icons objects_planet" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="danger">Some Title</Badge>
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
                        <i className="now-ui-icons shopping_tag-content" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success">Another One</Badge>
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
                        <i className="now-ui-icons shopping_delivery-fast" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info">Another Title</Badge>
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
                              <i className="now-ui-icons design_bullet-list-67" />
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
                    <h6 className="card-category">Alpha Pack</h6>
                    <CardBody>
                      <div className="card-icon icon-primary">
                        <i className="now-ui-icons objects_diamond" />
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
                    <h6 className="card-category">Bravo Pack</h6>
                    <CardBody>
                      <div className="card-icon icon-warning">
                        <i className="now-ui-icons media-1_button-power" />
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
                <CardHeader className="card-header-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/james.jpg")}
                    />
                  </a>
                </CardHeader>
                <CardBody>
                  <p className="card-description">
                    The networking at Web Summit is like no other European tech
                    conference.
                  </p>
                  <div className="icon icon-primary">
                    <i className="fa fa-quote-right" />
                  </div>
                </CardBody>
                <CardFooter>
                  <CardTitle tag="h4">Alton becker</CardTitle>
                  <p className="category">@altonbecker</p>
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
