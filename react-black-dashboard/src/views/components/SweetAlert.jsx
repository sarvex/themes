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
          confirmBtnBsStyle="success"
          btnSize=""
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
          confirmBtnBsStyle="success"
          btnSize=""
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
          confirmBtnBsStyle="success"
          btnSize=""
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
          confirmBtnBsStyle="success"
          btnSize=""
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
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
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
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
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
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          btnSize=""
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
          success
          style={{ display: "block", marginTop: "-100px" }}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="success"
          btnSize=""
          title="You entered: "
        >
          <b>{inputValue}</b>
        </ReactBSAlert>
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
          confirmBtnBsStyle="success"
          btnSize=""
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
          confirmBtnBsStyle="success"
          btnSize=""
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
          <div className="places-sweet-alerts">
            <h2 className="text-center">Sweet Alert</h2>
            <p className="category text-center">
              A beautiful plugin, that replace the classic alert, Handcrafted by
              our friend{" "}
              <a
                href="https://twitter.com/t4t5"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tristan Edwards
              </a>
              . Please check out the{" "}
              <a
                href="https://sweetalert2.github.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                full documentation.
              </a>
            </p>
            <Row className="mt-5">
              <Col className="ml-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Basic example</CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.basicAlert}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>A success message</CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.successAlert}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Custom HTML description</CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.htmlAlert}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      A warning message, with a function attached to the
                      "Confirm" Button...
                    </CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.warningWithConfirmMessage}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>Modal window with input field</CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.inputAlert}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>A title with a text under</CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.titleAndTextAlert}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      A message with auto close timer set to 2 seconds
                    </CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.autoCloseAlert}
                    >
                      Try me!
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="3">
                <Card>
                  <CardBody className="text-center">
                    <CardText>
                      ...and by passing a parameter, you can execute something
                      else for "Cancel"
                    </CardText>
                    <Button
                      className="btn-fill"
                      color="info"
                      onClick={this.warningWithConfirmAndCancelMessage}
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
