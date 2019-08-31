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
import React from "react";

// reactstrap components
import { Card, CardBody, CardHeader, Row, Col, CardTitle } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class GridSystem extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Card>
            <CardBody>
              <CardTitle tag="h4" className="pl-3">
                XS Grid <small>Always Horizontal</small>
              </CardTitle>
              <Row>
                <Col xs={4}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={4}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={4}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={4}`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardTitle tag="h4" className="pl-3">
                SM Grid <small>Collapsed at 576px</small>
              </CardTitle>
              <Row>
                <Col sm={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`sm={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`sm={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`sm={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardTitle tag="h4" className="pl-3">
                MD Grid <small>Collapsed at 768px</small>
              </CardTitle>
              <Row>
                <Col md={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`md={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`md={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`md={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardTitle tag="h4" className="pl-3">
                LG Grid <small>Collapsed at 992px</small>
              </CardTitle>
              <Row>
                <Col lg={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`lg={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`lg={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`lg={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardTitle tag="h4" className="pl-3">
                XL Grid <small>Collapsed at 1200px</small>
              </CardTitle>
              <Row>
                <Col xl={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`lg={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xl={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={4} xs={12}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xl={4} xs={12}`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardTitle tag="h4" className="pl-3">
                Mixed Grid{" "}
                <small>Showing different sizes on different screens</small>
              </CardTitle>
              <Row>
                <Col xs={12} sm={6} lg={3}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} sm={6} lg={3}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} sm={6} lg={3}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} sm={6} lg={3}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} sm={6} lg={3}`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CardTitle tag="h4" className="pl-3">
                Offset Grid <small>Adding some space when needed</small>
              </CardTitle>
              <Row>
                <Col xs={12} md={3}>
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} md={3}`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12} md={3} className="ml-auto">
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} md={3} className="ml-auto"`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4} className="ml-auto mr-auto">
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} md={4} className="ml-auto mr-auto"`}</code>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={12} md={4} className="ml-auto mr-auto">
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} md={4} className="ml-auto mr-auto"`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6} className="ml-auto mr-auto">
                  <Card>
                    <CardBody className="text-center">
                      <code>{`xs={12} md={6} className="ml-auto mr-auto"`}</code>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <h3 className="title mt-4 text-center">Paragraphs</h3>
          <Card>
            <CardHeader />
            <CardBody>
              <Row>
                <Col xs={12} sm={6}>
                  <h3>Some Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment. His many legs, pitifully thin compared with the size
                    of the rest of him, waved about helplessly as he looked.
                    "What's happened to me?" he thought.
                  </p>
                </Col>
                <Col xs={12} sm={6}>
                  <h3>Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment. His many legs, pitifully thin compared with the size
                    of the rest of him, waved about helplessly as he looked.
                    "What's happened to me?" he thought.
                  </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} sm={4}>
                  <h3>Some Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
                <Col xs={12} sm={4}>
                  <h3>Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
                <Col xs={12} sm={4}>
                  <h3>Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} sm={4}>
                  <h3>Some Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
                <Col xs={12} sm={8}>
                  <h3>Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a
                    horrible vermin. He lay on his armour-like back, and if he
                    lifted his head a little he could see his brown belly,
                    slightly domed and divided by arches into stiff sections.
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment.
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default GridSystem;
