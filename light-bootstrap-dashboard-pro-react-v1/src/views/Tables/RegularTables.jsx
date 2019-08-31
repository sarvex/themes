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
import { Table, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import { thArray, tdArray } from "variables/Variables.jsx";

class RegularTables extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                tableFullWidth
                content={
                  <Table striped hover responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                plain
                title="Table on Plain Background"
                category="Here is a subtitle for this table"
                tableFullWidth
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={12}>
              <Card
                title="Regular Table with Colors"
                category="Here is a subtitle for this table"
                tableFullWidth
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        var type = "";
                        switch (key) {
                          case 0:
                            type = "success";
                            break;
                          case 2:
                            type = "info";
                            break;
                          case 4:
                            type = "danger";
                            break;
                          case 6:
                            type = "warning";
                            break;
                          default:
                        }
                        return (
                          <tr key={key} className={type}>
                            <td>{key + 1}</td>
                            {prop.map((prop, key) => {
                              return (
                                <td key={key}>
                                  {prop}
                                  {key === 0 && type !== ""
                                    ? " (" + type + ")"
                                    : null}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RegularTables;
