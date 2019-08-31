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
/*eslint-disable*/
import React, { Component } from "react";
import { Modal, Alert, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Card
            title="Notifications"
            category={
              <span>
                Handcrafted by{" "}
                <a
                  target="_blank"
                  href="https://github.com/igorprado"
                >
                  Igor Prado
                </a>
                . Please checkout the{" "}
                <a
                  href="https://github.com/igorprado/react-notification-system"
                  target="_blank"
                >
                  full documentation.
                </a>
              </span>
            }
            content={
              <div>
                <Row>
                  <Col md={6}>
                    <h5>Notifications Style</h5>
                    <Alert bsStyle="info">
                      <span>This is a plain notification</span>
                    </Alert>
                    <Alert bsStyle="info">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span>This is a notification with close button.</span>
                    </Alert>
                    <Alert bsStyle="info" className="alert-with-icon">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span data-notify="icon" className="pe-7s-bell" />
                      <span data-notify="message">
                        This is a notification with close button and icon.
                      </span>
                    </Alert>
                    <Alert bsStyle="info" className="alert-with-icon">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span data-notify="icon" className="pe-7s-bell" />
                      <span data-notify="message">
                        This is a notification with close button and icon and
                        have many lines. You can see that the icon and the close
                        button are always vertically aligned. This is a
                        beautiful notification. So you don't have to worry about
                        the style.
                      </span>
                    </Alert>
                  </Col>
                  <Col md={6}>
                    <h5>Notification states</h5>
                    <Alert bsStyle="info">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span>
                        <b> Info - </b> This is a regular notification made with
                        bsStyle="info"
                      </span>
                    </Alert>
                    <Alert bsStyle="success">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span>
                        <b> Success - </b> This is a regular notification made
                        with bsStyle="success"
                      </span>
                    </Alert>
                    <Alert bsStyle="warning">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span>
                        <b> Warning - </b> This is a regular notification made
                        with bsStyle="warning"
                      </span>
                    </Alert>
                    <Alert bsStyle="danger">
                      <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                      >
                        ×
                      </button>
                      <span>
                        <b> Danger - </b> This is a regular notification made
                        with bsStyle="danger"
                      </span>
                    </Alert>
                  </Col>
                </Row>
                <br />
                <br />
                <div className="places-buttons">
                  <Row>
                    <Col md={6} mdOffset={3} className="text-center">
                      <h5>
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} mdOffset={3}>
                      <Button
                        block
                        onClick={() => this.props.handleClick("tl")}
                      >
                        Top Left
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        block
                        onClick={() => this.props.handleClick("tc")}
                      >
                        Top Center
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        block
                        onClick={() => this.props.handleClick("tr")}
                      >
                        Top Right
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} mdOffset={3}>
                      <Button
                        block
                        onClick={() => this.props.handleClick("bl")}
                      >
                        Bottom Left
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        block
                        onClick={() => this.props.handleClick("bc")}
                      >
                        Bottom Center
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        block
                        onClick={() => this.props.handleClick("br")}
                      >
                        Bottom Right
                      </Button>
                    </Col>
                  </Row>
                </div>
                <h4 className="title">Modals</h4>
                <p className="category">
                  We've restyled the default modals from Bootstrap. Please
                  checkout the{" "}
                  <a href="https://react-bootstrap.github.io/components.html#modals" target="_blank">
                    full documentation
                  </a>
                  .
                </p>
                <br />
                <Row>
                  <Col md={6}>
                    <Button
                      bsStyle="info"
                      fill
                      onClick={() => this.setState({ showModal: true })}
                    >
                      Launch demo modal
                    </Button>
                    <Modal
                      show={this.state.showModal}
                      onHide={() => this.setState({ showModal: false })}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>...</Modal.Body>
                      <Modal.Footer>
                        <Button
                          simple
                          onClick={() => this.setState({ showModal: false })}
                        >
                          Close
                        </Button>
                        <Button
                          bsStyle="success"
                          fill
                          onClick={() => this.setState({ showModal: false })}
                        >
                          Save changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </div>
            }
          />
        </Grid>
      </div>
    );
  }
}

export default Notifications;
