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
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

// core components
var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" }
];

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null
    };
  }
  render() {
    return (
      <>
        <h5 className="info-text"> Are you living in a nice area? </h5>
        <Row className="justify-content-center">
          <Col xs={12} sm={7}>
            <FormGroup>
              <Label>Street Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col xs={12} sm={3}>
            <FormGroup>
              <Label>Street No.</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col xs={12} sm={5}>
            <FormGroup>
              <Label>City</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
          <Col xs={12} sm={5}>
            <Label>Country</Label>
            <Select
              className="primary react-select"
              classNamePrefix="react-select"
              placeholder="Single Select"
              name="singleSelect"
              value={this.state.select}
              options={selectOptions}
              onChange={value => this.setState({ select: value })}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Step3;
