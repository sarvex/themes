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
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import bgImage from "assets/img/bg15.jpg";

class Pricing extends React.Component {
  componentDidMount() {
    document.body.classList.add("pricing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("pricing-page");
  }
  render() {
    return (
      <>
        <div className="content">
          <div className="pricing-page">
            <Container>
              <Row>
                <Col xs={12} md={6} className="ml-auto mr-auto text-center">
                  <h2 className="title">Pick the best plan for you</h2>
                  <h5 className="description">
                    You have Free Unlimited Updates and Premium Support on each
                    package.
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col lg="3" md="6">
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
                <Col lg="3" md="6">
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
                <Col lg="3" md="6">
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category">Charlie Pack</h6>
                    <CardBody>
                      <div className="card-icon icon-success">
                        <i className="now-ui-icons media-2_sound-wave" />
                      </div>
                      <CardTitle tag="h3">69$</CardTitle>
                      <ul>
                        <li>Working materials in PSD</li>
                        <li>1 year access to the library</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round btn-neutral"
                        color="success"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="3" md="6">
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category">Extra Pack</h6>
                    <CardBody>
                      <div className="card-icon icon-danger">
                        <i className="now-ui-icons education_atom" />
                      </div>
                      <CardTitle tag="h3">159$</CardTitle>
                      <ul>
                        <li>Complete documentation</li>
                        <li>2GB cloud storage</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round btn-neutral"
                        color="danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div
          className="full-page-background"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        />
      </>
    );
  }
}

export default Pricing;
