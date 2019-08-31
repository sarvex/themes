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
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

class Pricing extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("pricing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("pricing-page");
  }
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h1 className="title">Pick the best plan for you</h1>
                <h4 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card className="card-pricing card-primary">
                  <CardBody>
                    <CardTitle tag="h1">pro</CardTitle>
                    <CardImg
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    />
                    <ListGroup>
                      <ListGroupItem>300 messages</ListGroupItem>
                      <ListGroupItem>150 emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                    <div className="card-prices">
                      <h3 className="text-on-front">
                        <span>$</span>
                        95
                      </h3>
                      <h5 className="text-on-back">95</h5>
                      <p className="plan">Professional plan</p>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center mb-3 mt-3">
                    <Button className="btn-round btn-just-icon" color="primary">
                      Get started
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-pricing card-success card-white">
                  <CardBody>
                    <CardTitle tag="h1">basic</CardTitle>
                    <CardImg
                      alt="..."
                      src={require("assets/img/card-success.png")}
                    />
                    <ListGroup>
                      <ListGroupItem>50 messages</ListGroupItem>
                      <ListGroupItem>100 emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                    <div className="card-prices">
                      <h3 className="text-on-front">
                        <span>$</span>
                        57
                      </h3>
                      <h5 className="text-on-back">57</h5>
                      <p className="plan">Basic plan</p>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center mb-3 mt-3">
                    <Button className="btn-round btn-just-icon" color="success">
                      Get started
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-pricing card-warning card-raised card-white">
                  <CardBody>
                    <CardTitle tag="h1">mid</CardTitle>
                    <CardImg
                      alt="..."
                      src={require("assets/img/card-warning.png")}
                    />
                    <ListGroup>
                      <ListGroupItem>200 messages</ListGroupItem>
                      <ListGroupItem>130 emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                    <div className="card-prices">
                      <h3 className="text-on-front">
                        <span>$</span>
                        72
                      </h3>
                      <h5 className="text-on-back">72</h5>
                      <p className="plan">Medium plan</p>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center mb-3 mt-3">
                    <Button className="btn-round btn-just-icon" color="warning">
                      Get started
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-pricing card-danger card-white">
                  <CardBody>
                    <CardTitle tag="h1">trial</CardTitle>
                    <CardImg
                      alt="..."
                      src={require("assets/img/card-danger.png")}
                    />
                    <ListGroup>
                      <ListGroupItem>50 messages</ListGroupItem>
                      <ListGroupItem>50 emails</ListGroupItem>
                      <ListGroupItem>No Support</ListGroupItem>
                    </ListGroup>
                    <div className="card-prices">
                      <h3 className="text-on-front">
                        <span>$</span>9
                      </h3>
                      <h5 className="text-on-back">9</h5>
                      <p className="plan">Trial plan</p>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center mb-3 mt-3">
                    <Button className="btn-round btn-just-icon" color="danger">
                      Get started
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Col className="mt-5" md="12">
              <h3 className="title">Professional Plan</h3>
            </Col>
            <Row>
              <Col md="4">
                <p>
                  Premium pricing is the strategy of consistently pricing at, or
                  near, the high end of the possible price range to help attract
                  status-conscious consumers. The high pricing of a premium
                  product ...
                </p>
              </Col>
              <Col className="ml-auto" md="6">
                <div className="progress-container progress-warning">
                  <span className="progress-badge">500GB</span>
                  <Progress max="100" value="75" />
                </div>
                <div className="progress-container progress-primary">
                  <span className="progress-badge">4 years</span>
                  <Progress max="100" value="50" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Pricing;
