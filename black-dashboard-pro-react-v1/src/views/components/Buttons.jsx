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
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card>
            <Row>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Pick your Color</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="default">Default</Button>
                  <Button color="primary">Primary</Button>
                  <Button color="info">Info</Button>
                  <br />
                  <Button
                    className="animation-on-hover"
                    color="success"
                    data-placement="bottom"
                    id="tooltip811118930"
                    type="button"
                  >
                    Success
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="bottom"
                    target="tooltip811118930"
                  >
                    I'm special!
                  </UncontrolledTooltip>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </CardBody>
              </Col>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Buttons with Label</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="default">
                    <i className="tim-icons icon-minimal-left" /> Left
                  </Button>
                  <Button color="default">
                    Right <i className="tim-icons icon-minimal-right" />
                  </Button>
                  <Button color="info">
                    <i className="tim-icons icon-alert-circle-exc" /> Info
                  </Button>
                  <br />
                  <Button color="success">
                    <i className="tim-icons icon-check-2" /> Success
                  </Button>
                  <Button color="warning">
                    <i className="tim-icons icon-time-alarm" /> Warning
                  </Button>
                  <Button color="danger">
                    <i className="tim-icons icon-simple-remove" /> Danger
                  </Button>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Pick your Size</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="primary" size="sm">
                    Small
                  </Button>
                  <Button color="primary">Regular</Button>
                  <Button color="primary" size="lg">
                    Large
                  </Button>
                </CardBody>
              </Col>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Pick your Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="primary">Default</Button>
                  <Button className="btn-round" color="primary">
                    round
                  </Button>
                  <Button className="btn-round" color="primary">
                    <i className="tim-icons icon-heart-2" /> with icon
                  </Button>
                  <Button className="btn-round btn-icon" color="primary">
                    <i className="tim-icons icon-heart-2" />
                  </Button>
                  <Button className="btn-simple" color="primary">
                    simple
                  </Button>
                  <Button className="btn-link" color="primary">
                    link
                  </Button>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Pagination</CardTitle>
                </CardHeader>
                <CardBody>
                  <nav aria-label="Page navigation example">
                    <Pagination
                      className="pagination pagination-warning"
                      listClassName="pagination-warning"
                    >
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          4
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          5
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Previous"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span aria-hidden={true}>
                            <i
                              aria-hidden={true}
                              className="tim-icons icon-double-left"
                            />
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Next"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span aria-hidden={true}>
                            <i
                              aria-hidden={true}
                              className="tim-icons icon-double-right"
                            />
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardBody>
              </Col>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Button Group</CardTitle>
                </CardHeader>
                <CardBody>
                  <ButtonGroup>
                    <Button color="info" type="button">
                      Left
                    </Button>
                    <Button color="info" type="button">
                      Middle
                    </Button>
                    <Button color="info" type="button">
                      Right
                    </Button>
                  </ButtonGroup>
                  <br />
                  <br />
                  <ButtonGroup data-toggle="buttons">
                    <Button className="btn-round" color="info" type="button">
                      1
                    </Button>
                    <Button className="btn-round" color="info" type="button">
                      2
                    </Button>
                    <Button className="btn-round" color="info" type="button">
                      3
                    </Button>
                    <Button className="btn-round" color="info" type="button">
                      4
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button className="btn-round" color="info" type="button">
                      5
                    </Button>
                    <Button className="btn-round" color="info" type="button">
                      6
                    </Button>
                    <Button className="btn-round" color="info" type="button">
                      7
                    </Button>
                  </ButtonGroup>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <CardHeader>
                  <CardTitle tag="h4">Social buttons</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4" sm="5">
                      <p className="category">Default</p>
                      <Button color="twitter">
                        <i className="fab fa-twitter" /> Connect with Twitter
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <p className="category"> </p>
                      <Button className="btn-icon" color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <p className="category"> </p>
                      <Button className="btn-icon btn-round" color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <p className="category">Neutral</p>
                      <Button className="btn-icon btn-simple" color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <p className="category"> </p>
                      <Button className="btn-simple" color="twitter">
                        <i className="fab fa-twitter" /> Connect with Twitter
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="facebook">
                        <i className="fab fa-facebook-square" /> Share · 2.2k
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="facebook">
                        <i className="fab fa-facebook-f" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="facebook">
                        <i className="fab fa-facebook-square" /> Share · 2.2k
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="google">
                        <i className="fab fa-google-plus-g" /> Share on Google+
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="google">
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="google">
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="google">
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="google">
                        <i className="fab fa-google-plus-g" /> Share on Google+
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="linkedin">
                        <i className="fab fa-linkedin" /> Connect with Linkedin
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="linkedin">
                        <i className="fab fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="linkedin">
                        <i className="fab fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="linkedin">
                        <i className="fab fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="linkedin">
                        <i className="fab fa-linkedin" /> Connect with Linkedin
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="pinterest">
                        <i className="fab fa-pinterest" /> Pint it · 212
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="pinterest">
                        <i className="fab fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="pinterest">
                        <i className="fab fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="pinterest">
                        <i className="fab fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="pinterest">
                        <i className="fab fa-pinterest" /> Pint it · 212
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="youtube">
                        <i className="fab fa-youtube" /> View on Youtube
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="youtube">
                        <i className="fab fa-youtube" /> View on Youtube
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="tumblr">
                        <i className="fab fa-tumblr-square" /> Repost
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="tumblr">
                        <i className="fab fa-tumblr" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="tumblr">
                        <i className="fab fa-tumblr" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="tumblr">
                        <i className="fab fa-tumblr-square" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="tumblr">
                        <i className="fab fa-tumblr-square" /> Repost
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="github">
                        <i className="fab fa-github" /> Connect with Github
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="github">
                        <i className="fab fa-github" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="github">
                        <i className="fab fa-github" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="github">
                        <i className="fab fa-github" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="github">
                        <i className="fab fa-github" /> Connect with Github
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="behance">
                        <i className="fab fa-behance-square" /> Follow us
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="behance">
                        <i className="fab fa-behance" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="behance">
                        <i className="fab fa-behance" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="behance">
                        <i className="fab fa-behance" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="behance">
                        <i className="fab fa-behance-square" /> Follow us
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="dribbble">
                        <i className="fab fa-dribbble" /> Find us on Dribble
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="dribbble">
                        <i className="fab fa-dribbble" /> Find us on Dribble
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="reddit">
                        <i className="fab fa-reddit" /> Repost · 232
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon" color="reddit">
                        <i className="fab fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-round" color="reddit">
                        <i className="fab fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1">
                      <Button className="btn-icon btn-simple" color="reddit">
                        <i className="fab fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-simple" color="reddit">
                        <i className="fab fa-reddit" /> Repost · 232
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </div>
      </>
    );
  }
}

export default Buttons;
