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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal,
  ModalBody,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      modalMini: false,
      modalClassic: false,
      modalNotice: false
    };
  }
  toggleModalClassic = () => {
    this.setState({
      modalClassic: !this.state.modalClassic
    });
  };
  toggleModalNotice = () => {
    this.setState({
      modalNotice: !this.state.modalNotice
    });
  };
  toggleModalMini = () => {
    this.setState({
      modalMini: !this.state.modalMini
    });
  };
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful premium admin
            for every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notifications Style</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="primary">
                    <span>This is a plain notification</span>
                  </Alert>
                  <UncontrolledAlert color="primary" fade={false}>
                    <span>This is a notification with close button.</span>
                  </UncontrolledAlert>
                  <UncontrolledAlert
                    className="alert-with-icon"
                    color="primary"
                    fade={false}
                  >
                    <span
                      data-notify="icon"
                      className="tim-icons icon-bell-55"
                    />
                    <span>
                      This is a notification with close button and icon.
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert
                    className="alert-with-icon"
                    color="primary"
                    fade={false}
                  >
                    <span
                      data-notify="icon"
                      className="tim-icons icon-bell-55"
                    />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Notification states</CardTitle>
                </CardHeader>
                <CardBody>
                  <UncontrolledAlert color="primary" fade={false}>
                    <span>
                      <b>Primary - </b>
                      This is a regular notification made with ".alert-primary"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="info" fade={false}>
                    <span>
                      <b>Info - </b>
                      This is a regular notification made with ".alert-info"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="success" fade={false}>
                    <span>
                      <b>Success - </b>
                      This is a regular notification made with ".alert-success"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="warning" fade={false}>
                    <span>
                      <b>Warning - </b>
                      This is a regular notification made with ".alert-warning"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="danger" fade={false}>
                    <span>
                      <b>Danger - </b>
                      This is a regular notification made with ".alert-danger"
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">Notifications Places</CardTitle>
                        <p className="category mb-3">
                          Click to view notifications
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="info"
                              onClick={() => this.notify("tl")}
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="info"
                              onClick={() => this.notify("tc")}
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="info"
                              onClick={() => this.notify("tr")}
                            >
                              Top Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="info"
                              onClick={() => this.notify("bl")}
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="info"
                              onClick={() => this.notify("bc")}
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="info"
                              onClick={() => this.notify("br")}
                            >
                              Bottom Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col className="text-center" md="12">
                      <CardHeader>
                        <CardTitle tag="h4">Modal</CardTitle>
                      </CardHeader>
                      <Button color="primary" onClick={this.toggleModalClassic}>
                        Classic modal
                      </Button>
                      <Button color="success" onClick={this.toggleModalNotice}>
                        Notice modal
                      </Button>
                      <Button color="default" onClick={this.toggleModalMini}>
                        Small alert modal
                      </Button>
                      {/* Classic Modal */}
                      <Modal
                        isOpen={this.state.modalClassic}
                        toggle={this.toggleModalClassic}
                      >
                        <div className="modal-header justify-content-center">
                          <button
                            aria-hidden={true}
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalClassic}
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </button>
                          <h6 className="title title-up">Modal title</h6>
                        </div>
                        <ModalBody className="text-center">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. A small river named Duden
                            flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your
                            mouth.
                          </p>
                        </ModalBody>
                        <div className="modal-footer">
                          <Button
                            color="default"
                            type="button"
                            onClick={this.toggleModalClassic}
                          >
                            Nice Button
                          </Button>
                          <Button
                            color="danger"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalClassic}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>
                      {/* End Classic Modal */}
                      {/* Notice Modal */}
                      <Modal
                        isOpen={this.state.modalNotice}
                        toggle={this.toggleModalNotice}
                      >
                        <div className="modal-header">
                          <button
                            aria-hidden={true}
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalNotice}
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </button>
                          <h5 className="modal-title" id="myModalLabel">
                            How Do You Become an Affiliate?
                          </h5>
                        </div>
                        <ModalBody className="text-center">
                          <div className="instruction">
                            <Row>
                              <Col md="8">
                                <strong>1. Register</strong>
                                <p className="description">
                                  The first step is to create an account at{" "}
                                  <a href="https://www.creative-tim.com/">
                                    Creative Tim
                                  </a>
                                  . You can choose a social network or go for
                                  the classic version, whatever works best for
                                  you.
                                </p>
                              </Col>
                              <Col md="4">
                                <div>
                                  <img
                                    alt="..."
                                    className="rounded img-raised"
                                    src={require("assets/img/bg1.jpg")}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="instruction">
                            <Row>
                              <Col md="8">
                                <strong>2. Apply</strong>
                                <p className="description">
                                  The first step is to create an account at{" "}
                                  <a href="https://www.creative-tim.com/">
                                    Creative Tim
                                  </a>
                                  . You can choose a social network or go for
                                  the classic version, whatever works best for
                                  you.
                                </p>
                              </Col>
                              <Col md="4">
                                <div>
                                  <img
                                    alt="..."
                                    className="rounded img-raised"
                                    src={require("assets/img/bg3.jpg")}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <p>
                            If you have more questions, don't hesitate to
                            contact us or send us a tweet{" "}
                            {`@creativetim. We're `}
                            here to help!
                          </p>
                        </ModalBody>
                        <div className="modal-footer justify-content-center">
                          <Button
                            className="btn-round"
                            color="info"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalNotice}
                          >
                            Sounds good!
                          </Button>
                        </div>
                      </Modal>
                      {/* End Notice Modal */}
                      {/* Small Modal */}
                      <Modal
                        modalClassName="modal-mini modal-primary"
                        isOpen={this.state.modalMini}
                        toggle={this.toggleModalMini}
                      >
                        <div className="modal-header justify-content-center">
                          <button
                            aria-hidden={true}
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalMini}
                          >
                            <i className="tim-icons icon-simple-remove text-white" />
                          </button>
                          <div className="modal-profile">
                            <i className="tim-icons icon-single-02" />
                          </div>
                        </div>
                        <ModalBody className="text-center">
                          <p>Always have an access to your profile</p>
                        </ModalBody>
                        <div className="modal-footer">
                          <Button
                            className="btn-neutral"
                            color="link"
                            type="button"
                            onClick={this.toggleModalMini}
                          >
                            Back
                          </Button>
                          <Button
                            className="btn-neutral"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalMini}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal>
                      {/* End Small Modal */}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
