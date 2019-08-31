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
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import {
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9,
  chartExample10
} from "variables/charts.jsx";

class Charts extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <h2 className="text-center">Charts.js</h2>
          <p className="category text-center">
            Simple yet flexible JavaScript charting for designers &amp;
            developers. Made by our friends from{" "}
            <a
              href="http://www.chartjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Charts.js
            </a>
            . Please check{" "}
            <a
              href="http://www.chartjs.org/docs/latest/"
              rel="noopener noreferrer"
              target="_blank"
            >
              the full documentation
            </a>
            .
          </p>
          <Row className="mt-5">
            <Col className="ml-auto" md="5">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Simple With Gradient</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                    10,000
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample5.data}
                      options={chartExample5.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mr-auto" md="5">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">With Numbers and Grid</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-info" /> 750,000€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample6.data}
                      options={chartExample6.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="5">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Gradient Bar Chart</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-shape-star text-danger" />{" "}
                    1,000,000£
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample7.data}
                      options={chartExample7.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="mr-auto" md="5">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">
                    Multiple Bars Chart With Grid
                  </h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-time-alarm text-warning" />{" "}
                    130,000$
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample8.data}
                      options={chartExample8.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="5">
              <Card className="card-chart card-chart-pie">
                <CardHeader>
                  <h5 className="card-category">Simple Pie Chart</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <div className="chart-area">
                        <Pie
                          data={chartExample9.data}
                          options={chartExample9.options}
                        />
                      </div>
                    </Col>
                    <Col xs="6">
                      <CardTitle tag="h4">
                        <i className="tim-icons icon-trophy text-success" />{" "}
                        10.000$
                      </CardTitle>
                      <p className="category">A total of $54000</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="mr-auto" md="5">
              <Card className="card-chart card-chart-pie">
                <CardHeader>
                  <h5 className="card-category">Multiple Pie Chart</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <div className="chart-area">
                        <Pie
                          data={chartExample10.data}
                          options={chartExample10.options}
                        />
                      </div>
                    </Col>
                    <Col xs="6">
                      <CardTitle tag="h4">
                        <i className="tim-icons icon-tag text-warning" />{" "}
                        130,000
                      </CardTitle>
                      <p className="category">Feedback from 20.000 users</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Charts;
