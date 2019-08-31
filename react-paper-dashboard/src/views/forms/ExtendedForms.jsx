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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Progress,
  Row,
  Col
} from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

class ExtendedForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelect: null,
      multipleSelect: null,
      tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"]
    };
  }
  componentDidMount() {
    var slider1 = this.refs.slider1;
    var slider2 = this.refs.slider2;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  handleTagsinput = tagsinput => {
    this.setState({ tagsinput });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle>Datetimepicker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Datetime Picker Here"
                      }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle>Date Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Date Picker Here"
                      }}
                      timeFormat={false}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle>Time Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <ReactDatetime
                      dateFormat={false}
                      inputProps={{
                        className: "form-control",
                        placeholder: "Time Picker Here"
                      }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <CardTitle tag="h4">Toggle Buttons</CardTitle>
                      <Row>
                        <Col md="4">
                          <p className="category">Default</p>
                          <Switch onColor="default" offColor="default" />{" "}
                          <Switch
                            defaultValue={false}
                            onColor="default"
                            offColor="default"
                          />
                        </Col>
                        <Col md="4">
                          <p className="category">Plain</p>
                          <Switch
                            offColor="primary"
                            offText=""
                            onColor="primary"
                            onText=""
                          />{" "}
                          <Switch
                            defaultValue={false}
                            offColor="primary"
                            offText=""
                            onColor="primary"
                            onText=""
                          />
                        </Col>
                        <Col md="4">
                          <p className="category">With Icons</p>
                          <Switch
                            offColor="success"
                            offText={<i className="nc-icon nc-simple-remove" />}
                            onColor="success"
                            onText={<i className="nc-icon nc-check-2" />}
                          />{" "}
                          <Switch
                            defaultValue={false}
                            offColor="success"
                            offText={<i className="nc-icon nc-simple-remove" />}
                            onColor="success"
                            onText={<i className="nc-icon nc-check-2" />}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <CardTitle tag="h4">Customisable Select</CardTitle>
                      <Row>
                        <Col lg="5" md="6" sm="3">
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
                        <Col lg="5" md="6" sm="3">
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
                  <Row>
                    <Col md="6">
                      <CardTitle tag="h4">Tags</CardTitle>
                      <TagsInput
                        value={this.state.tagsinput}
                        onChange={this.handleTagsinput}
                        tagProps={{ className: "react-tagsinput-tag success" }}
                      />
                    </Col>
                    <Col md="6">
                      <CardTitle tag="h4">Dropdown &amp; Dropup</CardTitle>
                      <Row>
                        <Col lg="6" md="6" sm="3">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              aria-haspopup={true}
                              caret
                              className="btn-round btn-block"
                              color="primary"
                              data-toggle="dropdown"
                              id="dropdownMenuButton"
                              type="button"
                            >
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="dropdownMenuButton"
                              right
                            >
                              <DropdownItem header tag="div">
                                Dropdown header
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                        <Col lg="6" md="6" sm="3">
                          <UncontrolledDropdown direction="up">
                            <DropdownToggle
                              caret
                              className="btn-round btn-block"
                              color="primary"
                              data-toggle="dropdown"
                              type="button"
                            >
                              Dropup
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header tag="div">
                                Dropdown header
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <CardTitle tag="h4">Progress Bars</CardTitle>
                      <Progress max="100" value="25" />
                      <br />
                      <Progress
                        max="100"
                        value="100"
                        barClassName="progress-bar-danger"
                      />
                      <br />
                      <Progress multi>
                        <Progress
                          bar
                          barClassName="progress-bar-success"
                          max="100"
                          value="15"
                        />
                        <Progress
                          bar
                          barClassName="progress-bar-warning"
                          max="100"
                          value="30"
                        />
                        <Progress
                          bar
                          barClassName="progress-bar-info"
                          max="100"
                          value="20"
                        />
                      </Progress>
                    </Col>
                    <Col md="6">
                      <CardTitle tag="h4">Sliders</CardTitle>
                      <div className="slider slider-success" ref="slider1" />
                      <br />
                      <div className="slider slider-primary" ref="slider2" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" sm="4">
                      <CardTitle tag="h4">Regular Image</CardTitle>
                      <ImageUpload />
                    </Col>
                    <Col md="3" sm="4">
                      <CardTitle tag="h4">Avatar</CardTitle>
                      <ImageUpload avatar />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              {/* end card */}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ExtendedForms;
