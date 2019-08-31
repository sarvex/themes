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
/*eslint-disable*/
import React from "react";
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Card, CardBody, CardText, Row, Col, Button } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class SweetAlertPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.successDelete = this.successDelete.bind(this);
    this.cancelDetele = this.cancelDetele.bind(this);
    this.inputConfirmAlert = this.inputConfirmAlert.bind(this);
    this.inputConfirmAlertNext = this.inputConfirmAlertNext.bind(this);
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  basicAlert() {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        />
      )
    });
  }
  titleAndTextAlert() {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          It's pretty, isn't it?
        </SweetAlert>
      )
    });
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          You clicked the button!
        </SweetAlert>
      )
    });
  }
  htmlAlert() {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="HTML example"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          You can use <b>bold</b> text,{" "}
          <a
            href="https://www.creative-tim.com/?ref=nudr-sweetalert-page"
            target="_blank"
          >
            links
          </a>{" "}
          and other HTML tags
        </SweetAlert>
      )
    });
  }
  warningWithConfirmMessage() {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover this imaginary file!
        </SweetAlert>
      )
    });
  }
  warningWithConfirmAndCancelMessage() {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.cancelDetele()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover this imaginary file!
        </SweetAlert>
      )
    });
  }
  autoCloseAlert() {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Auto close alert!"
          onConfirm={() => this.hideAlert()}
          showConfirm={false}
        >
          I will close in 2 seconds.
        </SweetAlert>
      )
    });
    setTimeout(this.hideAlert, 2000);
  }
  inputAlert() {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.inputConfirmAlert(e)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
        />
      )
    });
  }
  inputConfirmAlert(e) {
    this.setState({ alert: e });
    setTimeout(this.inputConfirmAlertNext, 200);
  }
  inputConfirmAlertNext() {
    const inputValue = this.state.alert;
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          title={
            <p>
              You entered: <b>{inputValue}</b>
            </p>
          }
        />
      )
    });
  }
  successDelete() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          Your imaginary file has been deleted.
        </SweetAlert>
      )
    });
  }
  cancelDetele() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          Your imaginary file is safe :)
        </SweetAlert>
      )
    });
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  render() {
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Sweet Alert</h2>
              <p className="category">
                A beautiful plugin, that replace the classic alert, Handcrafted
                by our friend{" "}
                <a target="_blank" href="https://github.com/djorg83">
                  Daniel Jorgensen
                </a>
                . Please check out the{" "}
                <a
                  href="https://github.com/djorg83/react-bootstrap-sweetalert"
                  target="_blank"
                >
                  full documentation.
                </a>
                .
              </p>
            </div>
          }
        />
        <div className="content">
          {this.state.alert}
          <div className="places-sweet-alerts">
            <Row>
              <Col md={3} xs={12} className="ml-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Basic example</CardText>
                    <Button
                      color="primary"
                      onClick={this.basicAlert.bind(this)}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} xs={12} className="mr-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>A success message</CardText>
                    <Button
                      color="primary"
                      onClick={this.successAlert.bind(this)}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={3} xs={12} className="ml-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Custom HTML description</CardText>
                    <Button color="primary" onClick={this.htmlAlert.bind(this)}>
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} xs={12} className="mr-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      A warning message, with a function attached to the
                      "Confirm" Button...
                    </CardText>
                    <Button
                      color="primary"
                      onClick={this.warningWithConfirmMessage.bind(this)}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={3} xs={12} className="ml-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Modal window with input field</CardText>
                    <Button
                      color="primary"
                      onClick={this.inputAlert.bind(this)}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} xs={12} className="mr-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>A title with a text under</CardText>
                    <Button
                      color="primary"
                      onClick={this.titleAndTextAlert.bind(this)}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={3} xs={12} className="ml-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      A message with auto close timer set to 2 seconds
                    </CardText>
                    <Button
                      color="primary"
                      onClick={this.autoCloseAlert.bind(this)}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={3} xs={12} className="mr-auto">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      ...and by passing a parameter, you can execute something
                      else for "Cancel"
                    </CardText>
                    <Button
                      color="primary"
                      onClick={this.warningWithConfirmAndCancelMessage.bind(
                        this
                      )}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default SweetAlertPage;
