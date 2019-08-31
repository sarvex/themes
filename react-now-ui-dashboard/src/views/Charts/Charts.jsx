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
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import {
  chartsLine1,
  chartsLine2,
  chartsBar1,
  chartsBar2
} from "variables/charts";

class Charts extends React.Component {
  render() {
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">React Chartjs 2</h2>
              <p className="category">
                Simple yet flexible React charting for designers &amp;
                developers. Made by our friends from{" "}
                <a
                  target="_blank"
                  href="https://jerairrest.github.io/react-chartjs-2/"
                >
                  react-chartjs-2
                </a>
                , a react based wrapper over{" "}
                <a target="_blank" href="https://www.chartjs.org">
                  Chart.js
                </a>
                . Please check{" "}
                <a
                  target="_blank"
                  href="https://github.com/jerairrest/react-chartjs-2"
                >
                  react-chartjs-2 documentation
                </a>{" "}
                and{" "}
                <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                  Chart.js documentation
                </a>{" "}
                .
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={5} className="ml-auto">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Simple With Gradient</h5>
                  <CardTitle tag="h4">Line Chart</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-icon"
                      color="default"
                      outline
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartsLine1.data}
                      options={chartsLine1.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={5} className="mr-auto">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">With Numbers And Grid</h5>
                  <CardTitle tag="h4">Line Chart 2</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-icon"
                      color="default"
                      outline
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartsLine2.data}
                      options={chartsLine2.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5} className="ml-auto">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">
                    Simple With Grids And Numbers
                  </h5>
                  <CardTitle tag="h4">Bar Chart</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar data={chartsBar1.data} options={chartsBar1.options} />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={5} className="mr-auto">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Multiple Bars No Gradient</h5>
                  <CardTitle tag="h4">Bar Chart 2</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar data={chartsBar2.data} options={chartsBar2.options} />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Charts;
