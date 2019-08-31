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
import { Breadcrumb, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

const preCode = `1. #This is an example of preformatted text.
2. #Here is another line of code.`;

class Typography extends Component {
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Breadcrumb 1</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Breadcrumb 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col md={12}>
              <Card
                title="Light Bootstrap Table Heading"
                category="Created using Roboto Font Family"
                content={
                  <div>
                    <div className="typo-line">
                      <h1>
                        <p className="category">Header 1</p>Light Bootstrap
                        Table Heading{" "}
                      </h1>
                    </div>
                    <div className="typo-line">
                      <h2>
                        <p className="category">Header 2</p>Light Bootstrap
                        Table Heading
                      </h2>
                    </div>
                    <div className="typo-line">
                      <h3>
                        <p className="category">Header 3</p>Light Bootstrap
                        Table Heading
                      </h3>
                    </div>
                    <div className="typo-line">
                      <h4>
                        <p className="category">Header 4</p>Light Bootstrap
                        Table Heading
                      </h4>
                    </div>
                    <div className="typo-line">
                      <h5>
                        <p className="category">Header 5</p>Light Bootstrap
                        Table Heading
                      </h5>
                    </div>
                    <div className="typo-line">
                      <h6>
                        <p className="category">Header 6</p>Light Bootstrap
                        Table Heading
                      </h6>
                    </div>
                    <div className="typo-line">
                      <p>
                        <span className="category">Paragraph</span>Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam.
                      </p>
                    </div>
                    <div className="typo-line">
                      <p className="category">Quote</p>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam.
                        </p>
                        <small>Steve Jobs, CEO Apple</small>
                      </blockquote>
                    </div>

                    <div className="typo-line">
                      <p className="category">Muted Text</p>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.
                      </p>
                    </div>
                    <div className="typo-line">
                      <p className="category">Coloured Text</p>
                      <p className="text-primary">
                        Text Primary - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-info">
                        Text Info - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-success">
                        Text Success - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-warning">
                        Text Warning - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-danger">
                        Text Danger - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                    </div>

                    <div className="typo-line">
                      <h2>
                        <p className="category">Small Tag</p>Header with small
                        subtitle <br />
                        <small>".small" is a tag for the headers</small>{" "}
                      </h2>
                    </div>

                    <div className="typo-line">
                      <p className="category">Lists</p>
                      <Row>
                        <Col md={3}>
                          <h5>Unordered List</h5>
                          <ul>
                            <li>List Item</li>
                            <li>List Item</li>
                            <li className="list-unstyled">
                              <ul>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                              </ul>
                            </li>
                            <li>List Item</li>
                          </ul>
                        </Col>
                        <Col md={3}>
                          <h5>Ordered List</h5>
                          <ol>
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                          </ol>
                        </Col>
                        <Col md={3}>
                          <h5>Unstyled List</h5>
                          <ul className="list-unstyled">
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                          </ul>
                        </Col>
                        <Col md={3}>
                          <h5>Inline List</h5>
                          <ul className="list-inline">
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                    <div className="typo-line">
                      <p className="category">Blockquotes</p>
                      <Row>
                        <Col md={6}>
                          <h5>Default Blockquote</h5>
                          <blockquote>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat a ante.
                            </p>
                          </blockquote>
                        </Col>
                        <Col md={6}>
                          <h5>Blockquote with Citation</h5>
                          <blockquote>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat a ante.
                            </p>
                            <small>
                              Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </small>
                          </blockquote>
                        </Col>
                      </Row>
                    </div>
                    <div className="typo-line">
                      <p className="category">Code</p>
                      <p>
                        This is <code>.css-className-as-code</code>, an example
                        of an inline code element. Wrap inline code within a{" "}
                        <code> &lt;code&gt;...&lt;/code&gt;</code>tag.
                      </p>
                      <pre>{preCode}</pre>
                    </div>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Typography;
