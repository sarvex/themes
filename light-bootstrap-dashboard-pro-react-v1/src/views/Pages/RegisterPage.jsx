/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Media, FormControl, FormGroup } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

class RegisterPage extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="header-text">
              <h2>Light Bootstrap Dashboard PRO</h2>
              <h4>Register for free and experience the dashboard today</h4>
              <hr />
            </div>
          </Col>
          <Col md={4} mdOffset={2}>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-user" />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Free Account</Media.Heading>
                Here you can write a feature description for your dashboard, let
                the users know what is the value that you give them.
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-graph1" />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Awesome Performances</Media.Heading>
                Here you can write a feature description for your dashboard, let
                the users know what is the value that you give them.
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
                <div className="icon">
                  <i className="pe-7s-headphones" />
                </div>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Global Support</Media.Heading>
                Here you can write a feature description for your dashboard, let
                the users know what is the value that you give them.
              </Media.Body>
            </Media>
          </Col>
          <Col md={4}>
            <form>
              <Card
                plain
                content={
                  <div>
                    <FormGroup>
                      <FormControl type="text" placeholder="Your First Name" />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type="text" placeholder="Your Last Name" />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type="text" placeholder="Company" />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type="email" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                      <FormControl type="password" placeholder="Password" autoComplete="off"/>
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="password"
                        autoComplete="off"
                        placeholder="Password Confirmation"
                      />
                    </FormGroup>
                  </div>
                }
                ftTextCenter
                legend={
                  <Button wd fill neutral>
                    Create Free Account
                  </Button>
                }
              />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RegisterPage;
