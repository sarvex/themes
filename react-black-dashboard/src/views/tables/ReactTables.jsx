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
import React, { Component } from "react";
import classNames from "classnames";
// react component for creating dynamic tables
import ReactTable from "react-table";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

const dataTable = [
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"]
];

class ReactTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked LIKE button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
                }}
                color="info"
                size="sm"
                className={classNames("btn-icon btn-link like", {
                  "btn-neutral": key < 5
                })}
              >
                <i className="tim-icons icon-heart-2" />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find(o => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
                }}
                color="warning"
                size="sm"
                className={classNames("btn-icon btn-link like", {
                  "btn-neutral": key < 5
                })}
              >
                <i className="tim-icons icon-pencil" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className={classNames("btn-icon btn-link like", {
                  "btn-neutral": key < 5
                })}
              >
                <i className="tim-icons icon-simple-remove" />
              </Button>{" "}
            </div>
          )
        };
      })
    };
  }
  render() {
    return (
      <>
        <div className="content">
          <Col md={8} className="ml-auto mr-auto">
            <h2 className="text-center">React Table</h2>
            <p className="text-center">
              A powerful react plugin handcrafted by our friends from{" "}
              <a
                href="https://react-table.js.org/#/story/readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-table
              </a>
              . It is a highly flexible tool, based upon the foundations of
              progressive enhancement on which you can add advanced interaction
              controls. Please check out their{" "}
              <a
                href="https://react-table.js.org/#/story/readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                full documentation.
              </a>
            </p>
          </Col>
          <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">React Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    resizable={false}
                    columns={[
                      {
                        Header: "Name",
                        accessor: "name"
                      },
                      {
                        Header: "Position",
                        accessor: "position"
                      },
                      {
                        Header: "Office",
                        accessor: "office"
                      },
                      {
                        Header: "Age",
                        accessor: "age"
                      },
                      {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false
                      }
                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
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

export default ReactTables;
