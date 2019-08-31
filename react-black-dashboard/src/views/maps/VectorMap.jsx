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
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class VectorMapView extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <h4 className="text-center map-title">
                    World Map <br />
                    <small>
                      Looks great on any resolution.{" "}
                      <a
                        href="https://www.npmjs.com/package/react-jvectormap"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React wrapper component
                      </a>{" "}
                      of jQuery{" "}
                      <a
                        href="http://jvectormap.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        jVector Map
                      </a>{" "}
                      pluging.
                    </small>
                  </h4>
                  <br />
                </CardHeader>
                <CardBody>
                  <div className="map map-big" id="worldMap">
                    <VectorMap
                      map={"world_mill"}
                      backgroundColor="transparent"
                      zoomOnScroll={false}
                      containerStyle={{
                        width: "100%",
                        height: "420px"
                      }}
                      regionStyle={{
                        initial: {
                          fill: "#e4e4e4",
                          "fill-opacity": 0.9,
                          stroke: "none",
                          "stroke-width": 0,
                          "stroke-opacity": 0
                        }
                      }}
                      series={{
                        regions: [
                          {
                            values: mapData,
                            scale: ["#AAAAAA", "#444444"],
                            normalizeFunction: "polynomial"
                          }
                        ]
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default VectorMapView;
