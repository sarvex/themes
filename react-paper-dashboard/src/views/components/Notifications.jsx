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
            Welcome to <b>Now UI Dashboard React</b> - a beautiful premium admin
            for every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <NotificationAlert ref="notificationAlert" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <p className="card-category">
                    Handcrafted by our friend{" "}
                    <a
                      href="https://github.com/mouse0270"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Robert McIntosh
                    </a>
                    . Please checkout the{" "}
                    <a
                      href="http://bootstrap-notify.remabledesigns.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      full documentation.
                    </a>
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardHeader>
                          <CardTitle>Notifications Style</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Alert color="info">
                            <span>This is a plain notification</span>
                          </Alert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              This is a notification with close button.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-bell-55"
                            />
                            <span>
                              This is a notification with close button and icon.
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert
                            className="alert-with-icon"
                            color="info"
                            fade={false}
                          >
                            <span
                              data-notify="icon"
                              className="nc-icon nc-chart-pie-36"
                            />
                            <span>
                              This is a notification with close button and icon
                              and have many lines. You can see that the icon and
                              the close button are always vertically aligned.
                              This is a beautiful notification. So you don't
                              have to worry about the style.
                            </span>
                          </UncontrolledAlert>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardHeader>
                          <CardTitle>Notification states</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <UncontrolledAlert color="primary" fade={false}>
                            <span>
                              <b>Primary - </b>
                              This is a regular notification made with
                              ".alert-primary"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="info" fade={false}>
                            <span>
                              <b>Info - </b>
                              This is a regular notification made with
                              ".alert-info"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="success" fade={false}>
                            <span>
                              <b>Success - </b>
                              This is a regular notification made with
                              ".alert-success"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="warning" fade={false}>
                            <span>
                              <b>Warning - </b>
                              This is a regular notification made with
                              ".alert-warning"
                            </span>
                          </UncontrolledAlert>
                          <UncontrolledAlert color="danger" fade={false}>
                            <span>
                              <b>Danger - </b>
                              This is a regular notification made with
                              ".alert-danger"
                            </span>
                          </UncontrolledAlert>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          Notifications Places
                          <p className="category">
                            Click to view notifications
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              onClick={() => this.notify("tl")}
                              outline
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              onClick={() => this.notify("tc")}
                              outline
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              onClick={() => this.notify("tr")}
                              outline
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
                              className="btn-round"
                              color="default"
                              onClick={() => this.notify("bl")}
                              outline
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              onClick={() => this.notify("bc")}
                              outline
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              className="btn-round"
                              color="default"
                              onClick={() => this.notify("br")}
                              outline
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
                      <Button color="info" onClick={this.toggleModalNotice}>
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
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={this.toggleModalClassic}
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </button>
                          <h4 className="title title-up">Modal title</h4>
                        </div>
                        <div className="modal-body">
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
                        </div>
                        <div className="modal-footer">
                          <div className="left-side">
                            <Button
                              className="btn-link"
                              color="default"
                              data-dismiss="modal"
                              type="button"
                              onClick={this.toggleModalClassic}
                            >
                              Never mind
                            </Button>
                          </div>
                          <div className="divider" />
                          <div className="right-side">
                            <Button
                              className="btn-link"
                              color="danger"
                              type="button"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Modal>
                      {/* End Modal */}
                      {/* notice modal */}
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
                            <i className="nc-icon nc-simple-remove" />
                          </button>
                          <h5 className="modal-title" id="myModalLabel">
                            How Do You Become an Affiliate?
                          </h5>
                        </div>
                        <div className="modal-body">
                          <div className="instruction">
                            <Row>
                              <Col md="8">
                                <strong>1. Register</strong>
                                <p className="description">
                                  The first step is to create an account at{" "}
                                  <a href="http://www.creative-tim.com/">
                                    Creative Tim
                                  </a>
                                  . You can choose a social network or go for
                                  the classic version, whatever works best for
                                  you.
                                </p>
                              </Col>
                              <Col md="4">
                                <div className="picture">
                                  <img
                                    alt="..."
                                    className="rounded img-raised"
                                    src={require("assets/img/bg/daniel-olahs.jpg")}
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
                                  <a href="http://www.creative-tim.com/">
                                    Creative Tim
                                  </a>
                                  . You can choose a social network or go for
                                  the classic version, whatever works best for
                                  you.
                                </p>
                              </Col>
                              <Col md="4">
                                <div className="picture">
                                  <img
                                    alt="..."
                                    className="rounded img-raised"
                                    src={require("assets/img/bg/david-marcu.jpg")}
                                  />
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <p>
                            If you have more questions, don't hesitate to
                            contact us or send us a tweet @creativetim. We're
                            here to help!
                          </p>
                        </div>
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
                      {/* end notice modal */}
                      {/* small modal */}
                      <Modal
                        className="modal-sm"
                        modalclassName="modal-primary"
                        isOpen={this.state.modalMini}
                        toggle={this.toggleModalMini}
                      >
                        <div className="modal-header justify-content-center">
                          <div className="modal-profile ml-auto mr-auto">
                            <i className="nc-icon nc-bulb-63" />
                          </div>
                        </div>
                        <div className="modal-body">
                          <p>Always have an access to your profile</p>
                        </div>
                        <div className="modal-footer">
                          <div className="left-side">
                            <Button color="link" type="button">
                              Back
                            </Button>
                          </div>
                          <div className="divider" />
                          <div className="right-side">
                            <Button
                              color="link"
                              data-dismiss="modal"
                              type="button"
                              onClick={this.toggleModalMini}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      </Modal>
                      {/* end small modal */}
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
