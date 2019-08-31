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
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Button
} from "reactstrap";

// core components
import bgImage from "assets/img/bg16.jpg";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.body.classList.add("register-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("register-page");
  }
  render() {
    return (
      <>
        <div className="content">
          <div className="register-page">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} md={8} xs={12}>
                  <div className="info-area info-horizontal mt-5">
                    <div className="icon icon-primary">
                      <i className="now-ui-icons media-2_sound-wave" />
                    </div>
                    <div className="description">
                      <h5 className="info-title">Marketing</h5>
                      <p className="description">
                        We've created the marketing campaign of the website. It
                        was a very interesting collaboration.
                      </p>
                    </div>
                  </div>
                  <div className="info-area info-horizontal">
                    <div className="icon icon-primary">
                      <i className="now-ui-icons media-1_button-pause" />
                    </div>
                    <div className="description">
                      <h5 className="info-title">Fully Coded in React 16</h5>
                      <p className="description">
                        We've developed the website with React 16, HTML5 and
                        CSS3. The client has access to the code using GitHub.
                      </p>
                    </div>
                  </div>
                  <div className="info-area info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons users_single-02" />
                    </div>
                    <div className="description">
                      <h5 className="info-title">Built Audience</h5>
                      <p className="description">
                        There is also a Fully Customizable CMS Admin Dashboard
                        for this product.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={8} xs={12}>
                  <Card className="card-signup">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Register</CardTitle>
                      <div className="social btns-mr-5">
                        <Button className="btn-icon btn-round" color="twitter">
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button className="btn-icon btn-round" color="dribbble">
                          <i className="fab fa-dribbble" />
                        </Button>
                        <Button className="btn-icon btn-round" color="facebook">
                          <i className="fab fa-facebook-f" />
                        </Button>
                        <h5 className="card-description">or be classical</h5>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <InputGroup
                          className={
                            this.state.firstnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="First Name..."
                            onFocus={e =>
                              this.setState({ firstnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ firstnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.lastnameFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons text_caps-small" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            placeholder="Last Name..."
                            onFocus={e =>
                              this.setState({ lastnameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ lastnameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={
                            this.state.emailFocus ? "input-group-focus" : ""
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="email"
                            placeholder="Email..."
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />
                            <div>
                              I agree to the{" "}
                              <a href="#something">terms and conditions</a>.
                            </div>
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        color="primary"
                        size="lg"
                        className="btn-round"
                        href="#pablo"
                      >
                        Get Started
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

export default RegisterPage;
