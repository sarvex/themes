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
// react component to highlight code
import SyntaxHighlighter from "react-syntax-highlighter";
// style for react-syntax-highlighter component;
import { xcode } from "react-syntax-highlighter/dist/styles/hljs";

class GridSystem extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <h4 className="title">
            XS Grid <small>Always Horizontal</small>
          </h4>
          <Row>
            <Col xs={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col xs={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col xs={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col xs={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col xs={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col xs={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>

          <h4 className="title">
            SM Grid <small>Collapsed at 768px</small>
          </h4>
          <Row>
            <Col sm={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col sm={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col sm={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>

          <h4 className="title">
            MD Grid <small>Collapsed at 992px</small>
          </h4>
          <Row>
            <Col md={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col md={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col md={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>

          <h4 className="title">
            LG Grid <small>Collapsed at 1200px</small>
          </h4>
          <Row>
            <Col lg={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col lg={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col lg={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col lg={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col lg={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col lg={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>

          <h4 className="title">
            Mixed Grid{" "}
            <small>Showing different sizes on different screens</small>
          </h4>
          <Row>
            <Col sm={6} lg={3}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={6} lg={3}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={6} lg={3}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={6} lg={3}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col sm={6} lg={3}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>

          <h4 className="title">
            Offset Grid <small>Adding some space when needed</small>
          </h4>
          <Row>
            <Col md={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col md={4} mdOffset={4}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4} mdOffset={4}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col md={4} mdOffset={1}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4} mdOffset={1}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col md={4} mdOffset={2}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={4} mdOffset={2}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
            <Col md={6} mdOffset={3}>
              <div className="content text-center">
                <SyntaxHighlighter language="html" style={xcode}>
                  {`<Col md={6} mdOffset={3}>...</Col>`}
                </SyntaxHighlighter>
              </div>
            </Col>
          </Row>
          <h4 className="title">Paragraphs</h4>

          <div className="card">
            <div className="content">
              <Row>
                <Col sm={6}>
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
                <Col sm={6}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={4}>
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
                <Col sm={8}>
                  <h3>Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment. One morning, when Gregor Samsa woke from troubled
                    dreams, he found himself transformed in his bed into a
                    horrible vermin. He lay on his armour-like back, and if he
                    lifted his head a little he could see his brown belly,
                    slightly domed and divided by arches into stiff sections.
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default GridSystem;
