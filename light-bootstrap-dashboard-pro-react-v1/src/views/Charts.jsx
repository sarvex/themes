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
import { Grid, Row, Col } from "react-bootstrap";
// react component used to create charts
import ChartistGraph from "react-chartist";

import Card from "components/Card/Card.jsx";

import { charts } from "variables/chartsVariables.jsx";

class Charts extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            {charts.map((prop, key) => {
              return (
                <Col md={6} key={key}>
                  <Card
                    title={prop.chart.title}
                    category={prop.chart.category}
                    content={
                      <ChartistGraph
                        data={prop.chart.chart.data}
                        type={prop.chart.chart.type}
                        options={prop.chart.chart.options}
                        responsiveOptions={prop.chart.chart.responsiveOptions}
                      />
                    }
                    legend={prop.chart.legend}
                  />
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Charts;
