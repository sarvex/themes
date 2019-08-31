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
// react plugin for creating vector maps
import { VectorMap as JVectorMap } from "react-jvectormap";

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

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

class VectorMap extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <h4 className="text-center">
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
              <Card className="card-plain">
                <CardBody>
                  <JVectorMap
                    map={"world_mill"}
                    backgroundColor="transparent"
                    zoomOnScroll={false}
                    containerStyle={{
                      width: "100%",
                      height: "400px"
                    }}
                    containerClassName="map map-big"
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
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default VectorMap;
