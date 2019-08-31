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
  CardHeader,
  CardFooter,
  CardTitle,
  Container,
  Col,
  FormGroup,
  Input,
  Button
} from "reactstrap";

// core components
import avatar from "assets/img/emilyz.jpg";

import bgImage from "assets/img/bg13.jpg";

class LockScreenPage extends React.Component {
  componentDidMount() {
    document.body.classList.add("lock-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("lock-page");
  }
  render() {
    return (
      <>
        <div className="content">
          <div className="lock-page">
            <Container>
              <Col lg={4} md={8} xs={12} className="mr-auto ml-auto">
                <Card className="card-lock text-center">
                  <CardHeader>
                    <img src={avatar} alt="avatar-img" />
                  </CardHeader>
                  <CardBody>
                    <CardTitle tag="h4">Joe Gardner</CardTitle>
                    <FormGroup>
                      <Input type="password" placeholder="Enter Password..." />
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" size="lg" className="btn-round">
                      Unlock
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
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

export default LockScreenPage;
