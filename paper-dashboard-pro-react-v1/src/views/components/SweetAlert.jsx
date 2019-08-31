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
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";

// reactstrap components
import { Button, Card, CardBody, CardText, Row, Col } from "reactstrap";

class SweetAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null
    };
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  basicAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        />
      )
    });
  };
  titleAndTextAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          It's pretty, isn't it?
        </ReactBSAlert>
      )
    });
  };
  successAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          You clicked the button!
        </ReactBSAlert>
      )
    });
  };
  htmlAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="HTML example"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          You can use <b>bold</b> text,{" "}
          <a href="https://www.creative-tim.com/">links</a> and other HTML tags
        </ReactBSAlert>
      )
    });
  };
  warningWithConfirmMessage = () => {
    this.setState({
      alert: (
        <ReactBSAlert
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
        </ReactBSAlert>
      )
    });
  };
  warningWithConfirmAndCancelMessage = () => {
    this.setState({
      alert: (
        <ReactBSAlert
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
        </ReactBSAlert>
      )
    });
  };
  autoCloseAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Auto close alert!"
          onConfirm={() => this.hideAlert()}
          showConfirm={false}
        >
          I will close in 2 seconds.
        </ReactBSAlert>
      )
    });
    setTimeout(this.hideAlert, 2000);
  };
  inputAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
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
  };
  inputConfirmAlert = e => {
    this.setState({ alert: e });
    setTimeout(this.inputConfirmAlertNext, 200);
  };
  inputConfirmAlertNext = () => {
    const inputValue = this.state.alert;
    this.setState({
      alert: (
        <ReactBSAlert
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
  };
  successDelete = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          Your imaginary file has been deleted.
        </ReactBSAlert>
      )
    });
  };
  cancelDetele = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          Your imaginary file is safe :)
        </ReactBSAlert>
      )
    });
  };
  hideAlert = () => {
    this.setState({
      alert: null
    });
  };
  render() {
    return (
      <>
        <div className="content">
          {this.state.alert}
          <h5>Sweet Alert 2</h5>
          <p>
            A beautiful plugin, that replace the classic alert, Handcrafted by
            our friend{" "}
            <a
              target="_blank"
              href="https://github.com/djorg83"
              rel="noopener noreferrer"
            >
              Daniel Jorgensen
            </a>
            . Please check out the{" "}
            <a
              href="https://github.com/djorg83/react-bootstrap-sweetalert"
              target="_blank"
              rel="noopener noreferrer"
            >
              full documentation.
            </a>
          </p>
          <div className="places-sweet-alerts">
            <Row>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Basic example</CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.basicAlert}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>A title with a text under</CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.titleAndTextAlert}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>A success message</CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.successAlert}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Custom HTML description</CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.htmlAlert}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      A warning message, with a function attached to the
                      "Confirm" Button...
                    </CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.warningWithConfirmMessage}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      ...and by passing a parameter, you can execute something
                      else for "Cancel"
                    </CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.warningWithConfirmAndCancelMessage}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      A message with auto close timer set to 2 seconds
                    </CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.autoCloseAlert}
                      outline
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Modal window with input field</CardText>
                    <Button
                      className="btn-round"
                      color="default"
                      onClick={this.inputAlert}
                      outline
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

export default SweetAlert;
