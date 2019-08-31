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

// reactstrap components
import { Row, Col } from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

class Wizard extends React.Component {
  render() {
    return (
      <>
        <h5 className="info-text">Who are you? (Fileinput)</h5>
        <Row className="justify-content-center">
          <Col className="text-center" lg="10">
            <ImageUpload
              changeBtnClasses="btn-simple"
              addBtnClasses="btn-simple"
              removeBtnClasses="btn-simple"
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Wizard;
