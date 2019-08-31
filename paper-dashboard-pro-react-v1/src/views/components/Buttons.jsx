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
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col
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
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </CardBody>
              </Col>
              <Col md="6">
                <CardHeader>
                  <CardTitle tag="h4">Buttons with Label</CardTitle>
                </CardHeader>
                <CardBody>
                  <Button color="info">
                    <span className="btn-label">
                      <i className="nc-icon nc-settings-gear-65" />
                    </span>
                    Info
                  </Button>
                  <Button color="success">
                    <span className="btn-label">
                      <i className="nc-icon nc-check-2" />
                    </span>
                    Success
                  </Button>
                  <Button color="warning">
                    <i className="nc-icon nc-zoom-split" />
                    Warning
                  </Button>
                  <Button color="danger">
                    <i className="nc-icon nc-simple-remove" />
                    Danger
                  </Button>
                  <Button color="default">
                    <span className="btn-label">
                      <i className="nc-icon nc-minimal-left" />
                    </span>
                    Left
                  </Button>
                  <Button color="default">
                    Right{" "}
                    <span className="btn-label btn-label-right">
                      <i className="nc-icon nc-minimal-right" />
                    </span>
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
                  <Button className="btn-round btn-icon" color="primary">
                    <i className="fa fa-heart" />
                  </Button>
                  <Button className="btn-round" color="primary" outline>
                    <i className="fa fa-heart" />
                    with icon
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
                      className="pagination pagination-primary"
                      listClassName="pagination-primary"
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
                              className="fa fa-angle-double-left"
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
                              className="fa fa-angle-double-right"
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
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      Left
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      Middle
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      Right
                    </Button>
                  </ButtonGroup>
                  <br />
                  <br />
                  <ButtonGroup data-toggle="buttons">
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      1
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      2
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      3
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      4
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      5
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      6
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
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
                        <i className="fa fa-twitter" />
                        Connect with Twitter
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <p className="category"> </p>
                      <Button className="btn-icon" color="twitter">
                        <i className="fa fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <p className="category"> </p>
                      <Button className="btn-icon btn-round" color="twitter">
                        <i className="fa fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <p className="category">Neutral</p>
                      <Button className="btn-icon btn-neutral" color="twitter">
                        <i className="fa fa-twitter" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <p className="category"> </p>
                      <Button className="btn-neutral" color="twitter">
                        <i className="fa fa-twitter" />
                        Connect with Twitter
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="facebook">
                        <i className="fa fa-facebook-square" />
                        Share · 2.2k
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="facebook">
                        <i className="fa fa-facebook-f" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="facebook">
                        <i className="fa fa-facebook-f" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="facebook">
                        <i className="fa fa-facebook-square" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="facebook">
                        <i className="fa fa-facebook-square" />
                        Share · 2.2k
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="google">
                        <i className="fa fa-google-plus" />
                        Share on Google+
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="google">
                        <i className="fa fa-google-plus" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="google">
                        <i className="fa fa-google-plus" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="google">
                        <i className="fa fa-google-plus" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="google">
                        <i className="fa fa-google-plus" />
                        Share on Google+
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="linkedin">
                        <i className="fa fa-linkedin" />
                        Connect with Linkedin
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="linkedin">
                        <i className="fa fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="linkedin">
                        <i className="fa fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="linkedin">
                        <i className="fa fa-linkedin" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="linkedin">
                        <i className="fa fa-linkedin" />
                        Connect with Linkedin
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="pinterest">
                        <i className="fa fa-pinterest" />
                        Pint it · 212
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="pinterest">
                        <i className="fa fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="pinterest">
                        <i className="fa fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button
                        className="btn-icon btn-neutral"
                        color="pinterest"
                      >
                        <i className="fa fa-pinterest" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="pinterest">
                        <i className="fa fa-pinterest" />
                        Pint it · 212
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="youtube">
                        <i className="fa fa-youtube" />
                        View on Youtube
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="youtube">
                        <i className="fa fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="youtube">
                        <i className="fa fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="youtube">
                        <i className="fa fa-youtube" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="youtube">
                        <i className="fa fa-youtube" />
                        View on Youtube
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="tumblr">
                        <i className="fa fa-tumblr-square" />
                        Repost
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="tumblr">
                        <i className="fa fa-tumblr" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="tumblr">
                        <i className="fa fa-tumblr" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="tumblr">
                        <i className="fa fa-tumblr-square" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="tumblr">
                        <i className="fa fa-tumblr-square" />
                        Repost
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="github">
                        <i className="fa fa-github" />
                        Connect with Github
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="github">
                        <i className="fa fa-github" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="github">
                        <i className="fa fa-github" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="github">
                        <i className="fa fa-github" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="github">
                        <i className="fa fa-github" />
                        Connect with Github
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="behance">
                        <i className="fa fa-behance-square" />
                        Follow us
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="behance">
                        <i className="fa fa-behance" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="behance">
                        <i className="fa fa-behance" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="behance">
                        <i className="fa fa-behance" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="behance">
                        <i className="fa fa-behance-square" />
                        Follow us
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="dribbble">
                        <i className="fa fa-dribbble" />
                        Find us on Dribble
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="dribbble">
                        <i className="fa fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="dribbble">
                        <i className="fa fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="dribbble">
                        <i className="fa fa-dribbble" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="dribbble">
                        <i className="fa fa-dribbble" />
                        Find us on Dribble
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="5">
                      <Button color="reddit">
                        <i className="fa fa-reddit" />
                        Repost · 232
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon" color="reddit">
                        <i className="fa fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-round" color="reddit">
                        <i className="fa fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="1" sm="1" xs="3">
                      <Button className="btn-icon btn-neutral" color="reddit">
                        <i className="fa fa-reddit" />
                      </Button>
                    </Col>
                    <Col md="3" sm="4">
                      <Button className="btn-neutral" color="reddit">
                        <i className="fa fa-reddit" />
                        Repost · 232
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
