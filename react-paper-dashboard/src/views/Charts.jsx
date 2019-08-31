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
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample4,
  chartExample9,
  chartExample10,
  chartExample11,
  chartExample12
} from "variables/charts.jsx";

class Charts extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <p>
            Simple yet flexible React charting for designers &amp; developers.
            Made by our friends from{" "}
            <a
              target="_blank"
              href="https://jerairrest.github.io/react-chartjs-2/"
              rel="noopener noreferrer"
            >
              react-chartjs-2
            </a>
            , a react based wrapper over{" "}
            <a
              target="_blank"
              href="https://www.chartjs.org"
              rel="noopener noreferrer"
            >
              Chart.js
            </a>
            . Please check{" "}
            <a
              target="_blank"
              href="https://github.com/jerairrest/react-chartjs-2"
              rel="noopener noreferrer"
            >
              react-chartjs-2 documentation
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://www.chartjs.org/docs/latest/"
              rel="noopener noreferrer"
            >
              Chart.js documentation
            </a>{" "}
            .
          </p>
          <Row>
            <Col md="6">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle>24 Hours Performance</CardTitle>
                  <p className="card-category">Line Chart</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle>NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={chartExample9.data}
                    options={chartExample9.options}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle>Views</CardTitle>
                  <p className="card-category">Bar Chart</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample10.data}
                    options={chartExample10.options}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="car-chart">
                <CardHeader>
                  <CardTitle>Activity</CardTitle>
                  <p className="card-category">Multiple Bars Chart</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle>Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={chartExample11.data}
                    options={chartExample11.options}
                    width={456}
                    height={300}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-info" />
                    Open
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <CardTitle>Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={chartExample12.data}
                    options={chartExample12.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" />
                    Updated 3 minutes ago
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
