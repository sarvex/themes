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
import {
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Card>
            <Row>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle tag="h4">Pick your Color</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="btns-mr-5">
                    <Button>Default</Button>
                    <Button color="primary">Primary</Button>
                    <Button color="info">Info</Button>
                    <Button color="success">Success</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="danger">Danger</Button>
                  </div>
                </CardBody>
              </Col>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle tag="h4">Buttons with Label</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="btns-mr-5">
                    <Button>
                      <span className="btn-label">
                        <i className="now-ui-icons arrows-1_minimal-left" />
                      </span>
                      Left
                    </Button>
                    <Button color="primary">
                      Right
                      <span className="btn-label">
                        <i className="now-ui-icons arrows-1_minimal-right" />
                      </span>
                    </Button>
                    <Button color="info">
                      <span className="btn-label">
                        <i className="now-ui-icons travel_info" />
                      </span>
                      Info
                    </Button>
                    <Button color="success">
                      <span className="btn-label">
                        <i className="now-ui-icons ui-1_check" />
                      </span>
                      Success
                    </Button>
                    <Button color="warning">
                      <span className="btn-label">
                        <i className="now-ui-icons ui-2_time-alarm" />
                      </span>
                      Warning
                    </Button>
                    <Button color="danger">
                      <span className="btn-label">
                        <i className="now-ui-icons ui-1_simple-remove" />
                      </span>
                      Danger
                    </Button>
                  </div>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle tag="h4">Pick your Size</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="btns-mr-5">
                    <Button color="primary" size="sm">
                      Small
                    </Button>
                    <Button color="primary">Normal</Button>
                    <Button color="primary" size="lg">
                      Large
                    </Button>
                  </div>
                </CardBody>
              </Col>
              <Col xs={12} md={6}>
                <CardHeader>
                  <CardTitle tag="h4">Pick your Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="btns-mr-5">
                    <Button color="primary">Default</Button>
                    <Button color="primary" className="btn-round">
                      Round
                    </Button>
                    <Button color="primary" className="btn-round">
                      <i className="now-ui-icons ui-2_favourite-28" /> with icon
                    </Button>
                    <Button color="primary" className="btn-round btn-icon">
                      <i className="now-ui-icons ui-2_favourite-28" />
                    </Button>
                    <Button color="primary" outline>
                      Simple
                    </Button>
                  </div>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <CardHeader>
                  <CardTitle tag="h4">Pagination</CardTitle>
                </CardHeader>
                <CardBody>
                  <Pagination>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                  </Pagination>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink href="#">
                        <span aria-hidden="true">
                          <i
                            className="fa fa-angle-double-left"
                            aria-hidden="true"
                          />
                        </span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        <span aria-hidden="true">
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Col>
              <Col md={6} xs={12}>
                <CardHeader>
                  <CardTitle tag="h4">Button Group</CardTitle>
                </CardHeader>
                <CardBody>
                  <ButtonGroup>
                    <Button color="info">Left</Button>
                    <Button color="info">Middle</Button>
                    <Button color="info">Right</Button>
                  </ButtonGroup>
                  <br />
                  <br />
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button className="btn-round" color="info">
                        1
                      </Button>
                      <Button className="btn-round" color="info">
                        2
                      </Button>
                      <Button className="btn-round" color="info">
                        3
                      </Button>
                      <Button className="btn-round" color="info">
                        4
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button className="btn-round" color="info">
                        5
                      </Button>
                      <Button className="btn-round" color="info">
                        6
                      </Button>
                      <Button className="btn-round" color="info">
                        7
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </CardBody>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
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
                      <Button className="btn-icon btn-neutral" color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <p className="category"> </p>
                      <Button className="btn-neutral" color="twitter">
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
                      <Button className="btn-icon btn-neutral" color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="facebook">
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
                      <Button className="btn-icon btn-neutral" color="google">
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="google">
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
                      <Button className="btn-icon btn-neutral" color="linkedin">
                        <i className="fab fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="linkedin">
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
                      <Button
                        className="btn-icon btn-neutral"
                        color="pinterest"
                      >
                        <i className="fab fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="pinterest">
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
                      <Button className="btn-icon btn-neutral" color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="youtube">
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
                      <Button className="btn-icon btn-neutral" color="tumblr">
                        <i className="fab fa-tumblr-square" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="tumblr">
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
                      <Button className="btn-icon btn-neutral" color="github">
                        <i className="fab fa-github" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="github">
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
                      <Button className="btn-icon btn-neutral" color="behance">
                        <i className="fab fa-behance" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="behance">
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
                      <Button className="btn-icon btn-neutral" color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="dribbble">
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
                      <Button className="btn-icon btn-neutral" color="reddit">
                        <i className="fab fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="reddit">
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
