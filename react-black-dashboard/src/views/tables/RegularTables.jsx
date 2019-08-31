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
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import SortingTable from "components/SortingTable/SortingTable.jsx";

class RegularTables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="mb-5" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <SortingTable
                    thead={[
                      { text: "Name" },
                      { text: "Country" },
                      { text: "City" },
                      { className: "text-center", text: "Salary" }
                    ]}
                    tbody={[
                      {
                        data: [
                          { text: "Dakota Rice" },
                          { text: "Niger" },
                          { text: "Oud-Turnhout" },
                          { className: "text-center", text: "$36,738" }
                        ]
                      },
                      {
                        data: [
                          { text: "Minerva Hooper" },
                          { text: "Curaçao" },
                          { text: "Sinaai-Waas" },
                          { className: "text-center", text: "$23,789" }
                        ]
                      },
                      {
                        data: [
                          { text: "Sage Rodriguez" },
                          { text: "Netherlands" },
                          { text: "Baileux" },
                          { className: "text-center", text: "$56,142" }
                        ]
                      },
                      {
                        data: [
                          { text: "Philip Chaney" },
                          { text: "Korea, South" },
                          { text: "Overland Park" },
                          { className: "text-center", text: "$38,735" }
                        ]
                      },
                      {
                        data: [
                          { text: "Doris Greene" },
                          { text: "Malawi" },
                          { text: "Feldkirchen in Kärnten" },
                          { className: "text-center", text: "$63,542" }
                        ]
                      },
                      {
                        data: [
                          { text: "Mason Porter" },
                          { text: "Chile" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$78,615" }
                        ]
                      },
                      {
                        data: [
                          { text: "Jon Porter" },
                          { text: "Portugal" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$98,615" }
                        ]
                      }
                    ]}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-5" md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <SortingTable
                    thead={[
                      { text: "Name" },
                      { text: "Country" },
                      { text: "City" },
                      { className: "text-center", text: "Salary" }
                    ]}
                    tbody={[
                      {
                        data: [
                          { text: "Dakota Rice" },
                          { text: "Niger" },
                          { text: "Oud-Turnhout" },
                          { className: "text-center", text: "$36,738" }
                        ]
                      },
                      {
                        data: [
                          { text: "Minerva Hooper" },
                          { text: "Curaçao" },
                          { text: "Sinaai-Waas" },
                          { className: "text-center", text: "$23,789" }
                        ]
                      },
                      {
                        data: [
                          { text: "Sage Rodriguez" },
                          { text: "Netherlands" },
                          { text: "Baileux" },
                          { className: "text-center", text: "$56,142" }
                        ]
                      },
                      {
                        data: [
                          { text: "Philip Chaney" },
                          { text: "Korea, South" },
                          { text: "Overland Park" },
                          { className: "text-center", text: "$38,735" }
                        ]
                      },
                      {
                        data: [
                          { text: "Doris Greene" },
                          { text: "Malawi" },
                          { text: "Feldkirchen in Kärnten" },
                          { className: "text-center", text: "$63,542" }
                        ]
                      },
                      {
                        data: [
                          { text: "Mason Porter" },
                          { text: "Chile" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$78,615" }
                        ]
                      },
                      {
                        data: [
                          { text: "Jon Porter" },
                          { text: "Portugal" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$98,615" }
                        ]
                      }
                    ]}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col className="mb-5" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Regular Table with Colors</CardTitle>
                </CardHeader>
                <CardBody className="table-full-width">
                  <SortingTable
                    thead={[
                      { text: "Name" },
                      { text: "Country" },
                      { text: "City" },
                      { className: "text-center", text: "Salary" }
                    ]}
                    tbody={[
                      {
                        className: "table-success",
                        data: [
                          { text: "Dakota Rice" },
                          { text: "Niger" },
                          { text: "Oud-Turnhout" },
                          { className: "text-center", text: "$36,738" }
                        ]
                      },
                      {
                        data: [
                          { text: "Minerva Hooper" },
                          { text: "Curaçao" },
                          { text: "Sinaai-Waas" },
                          { className: "text-center", text: "$23,789" }
                        ]
                      },
                      {
                        className: "table-info",
                        data: [
                          { text: "Sage Rodriguez" },
                          { text: "Netherlands" },
                          { text: "Baileux" },
                          { className: "text-center", text: "$56,142" }
                        ]
                      },
                      {
                        data: [
                          { text: "Philip Chaney" },
                          { text: "Korea, South" },
                          { text: "Overland Park" },
                          { className: "text-center", text: "$38,735" }
                        ]
                      },
                      {
                        className: "table-danger",
                        data: [
                          { text: "Doris Greene" },
                          { text: "Malawi" },
                          { text: "Feldkirchen in Kärnten" },
                          { className: "text-center", text: "$63,542" }
                        ]
                      },
                      {
                        data: [
                          { text: "Mason Porter" },
                          { text: "Chile" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$78,615" }
                        ]
                      },
                      {
                        className: "table-warning",
                        data: [
                          { text: "Jon Porter" },
                          { text: "Portugal" },
                          { text: "Gloucester" },
                          { className: "text-center", text: "$98,615" }
                        ]
                      }
                    ]}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
