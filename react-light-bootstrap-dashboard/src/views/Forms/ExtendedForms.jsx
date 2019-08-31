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
import { Grid, Row, Col, FormGroup, ProgressBar } from "react-bootstrap";
// react component that creates a dropdown menu for selecting a date
import Datetime from "react-datetime";
// react component that creates a switch button that changes from on to off mode
import Switch from "react-bootstrap-switch";
// react component that creates an input in which you add words that become like tags
import TagsInput from "react-tagsinput";
// plugin used to create sliders
import noUiSlider from "nouislider";
// plugin that makes numbers in a speciffic format
import wNumb from "wnumb";
// react component that creates a dropdown menu for selection
import Select from "react-select";

import Card from "components/Card/Card.jsx";

class ExtendedForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regularTags: ["pizza", "pasta", "parmesan"],
      filledTags: ["pizza", "pasta", "parmesan"],
      singleSelect: null,
      multipleSelect: null
    };
    this.handleRegularTags = this.handleRegularTags.bind(this);
    this.handleFilledTags = this.handleFilledTags.bind(this);
  }
  handleRegularTags(regularTags) {
    this.setState({ regularTags });
  }
  handleFilledTags(filledTags) {
    this.setState({ filledTags });
  }
  componentDidMount() {
    var slider1 = document.getElementById("slider1");
    noUiSlider.create(slider1, {
      start: 40,
      connect: "lower",
      tooltips: true,
      step: 1,
      range: {
        min: 0,
        max: 100
      },
      format: wNumb({
        decimals: 0
      })
    });
    var slider2 = document.getElementById("slider2");
    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      tooltips: true,
      step: 1,
      range: {
        min: 0,
        max: 100
      },
      format: wNumb({
        decimals: 0
      })
    });
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Card
            content={
              <div>
                <Row>
                  <Col md={4}>
                    <h4 className="title">Datetime Picker</h4>
                    <FormGroup>
                      <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                        defaultValue={new Date()}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <h4 className="title">Date Picker</h4>
                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Date Picker Here" }}
                        defaultValue={new Date()}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <h4 className="title">Time Picker</h4>
                    <FormGroup>
                      <Datetime
                        dateFormat={false}
                        inputProps={{ placeholder: "Time Picker Here" }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col md={6}>
                    <legend>Switches</legend>
                    <Col md={4}>
                      <p className="category">Default</p>
                      <Switch defaultValue={false} /> <Switch />
                    </Col>
                    <Col md={4}>
                      <p className="category">Plain</p>
                      <Switch onText="" offText="" defaultValue={false} />{" "}
                      <Switch onText="" offText="" />
                    </Col>
                    <Col md={4}>
                      <p className="category">With Icons</p>
                      <Switch
                        onText="✔"
                        offText="✘"
                        defaultValue={false}
                      />{" "}
                      <Switch onText="✔" offText="✘" />
                    </Col>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col md={6}>
                    <legend>Tags</legend>
                    Regular
                    <TagsInput
                      value={this.state.regularTags}
                      onChange={this.handleRegularTags}
                      tagProps={{ className: "react-tagsinput-tag tag-azure" }}
                    />
                    Filled
                    <TagsInput
                      value={this.state.filledTags}
                      onChange={this.handleFilledTags}
                      tagProps={{
                        className: "react-tagsinput-tag tag-fill tag-azure"
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <legend>Customisable Select</legend>
                    <Row>
                      <Col md={6}>
                        <Select
                          className="react-select primary"
                          classNamePrefix="react-select"
                          name="singleSelect"
                          value={this.state.singleSelect}
                          onChange={value =>
                            this.setState({ singleSelect: value })
                          }
                          options={[
                            {
                              value: "",
                              label: "Single Option",
                              isDisabled: true
                            },
                            { value: "2", label: "Foobar" },
                            { value: "3", label: "Is great" }
                          ]}
                          placeholder="Single Select"
                        />
                      </Col>
                      <Col md={6}>
                        <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          placeholder="Choose City"
                          name="multipleSelect"
                          closeMenuOnSelect={false}
                          isMulti
                          value={this.state.multipleSelect}
                          onChange={value =>
                            this.setState({ multipleSelect: value })
                          }
                          options={[
                            {
                              value: "",
                              label: " Multiple Options",
                              isDisabled: true
                            },
                            { value: "2", label: "Paris " },
                            { value: "3", label: "Bucharest" },
                            { value: "4", label: "Rome" },
                            { value: "5", label: "New York" },
                            { value: "6", label: "Miami " },
                            { value: "7", label: "Piatra Neamt" },
                            { value: "8", label: "Paris " },
                            { value: "9", label: "Bucharest" },
                            { value: "10", label: "Rome" },
                            { value: "11", label: "New York" },
                            { value: "12", label: "Miami " },
                            { value: "13", label: "Piatra Neamt" },
                            { value: "14", label: "Paris " },
                            { value: "15", label: "Bucharest" },
                            { value: "16", label: "Rome" },
                            { value: "17", label: "New York" },
                            { value: "18", label: "Miami " },
                            { value: "19", label: "Piatra Neamt" }
                          ]}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col md={6}>
                    <legend>Progress Bars</legend>
                    <ProgressBar
                      now={30}
                      className="progress-line-primary"
                      label="30% Complete"
                      srOnly
                    />
                    <ProgressBar
                      bsStyle="info"
                      now={60}
                      className="progress-line-info"
                      label="60% Complete"
                      srOnly
                    />
                    <ProgressBar>
                      <ProgressBar
                        bsStyle="success"
                        now={35}
                        key={1}
                        label="35% Complete (success)"
                        srOnly
                      />
                      <ProgressBar
                        bsStyle="warning"
                        now={20}
                        key={2}
                        label="20% Complete (warning)"
                        srOnly
                      />
                      <ProgressBar
                        active
                        bsStyle="danger"
                        now={10}
                        key={3}
                        label="10% Complete (danger)"
                        srOnly
                      />
                    </ProgressBar>
                  </Col>
                  <Col md={6}>
                    <legend>Sliders</legend>
                    <div id="slider1" className="slider-info" />
                    <br />
                    <div id="slider2" className="slider-success" />
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

export default ExtendedForms;
