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
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "profile",
      verticalTabs: "profile",
      verticalTabsIcons: "home",
      pageTabs: "home",
      openedCollapses: ["collapseOne"]
    };
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = (e, collapse) => {
    e.preventDefault();
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  // with this function we change the active tab for all the tabs in this page
  changeActiveTab = (e, tabState, tadName) => {
    e.preventDefault();
    this.setState({
      [tabState]: tadName
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5 className="card-category">Navigation Pills</h5>
                  <CardTitle tag="h3">Horizontal Tabs</CardTitle>
                </CardHeader>
                <CardBody>
                  <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.horizontalTabs === "profile"
                            ? "active"
                            : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "horizontalTabs", "profile")
                        }
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.horizontalTabs === "settings"
                            ? "active"
                            : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "horizontalTabs", "settings")
                        }
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.horizontalTabs === "options"
                            ? "active"
                            : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "horizontalTabs", "options")
                        }
                      >
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space"
                    activeTab={this.state.horizontalTabs}
                  >
                    <TabPane tabId="profile">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="settings">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="options">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5 className="card-category">Navigation Pills</h5>
                  <CardTitle tag="h3">Vertical Tabs</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <Nav className="nav-pills-info flex-column" pills>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabs === "profile"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(e, "verticalTabs", "profile")
                            }
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabs === "settings"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(
                                e,
                                "verticalTabs",
                                "settings"
                              )
                            }
                          >
                            Settings
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabs === "options"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(e, "verticalTabs", "options")
                            }
                          >
                            Options
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="8">
                      <TabContent activeTab={this.state.verticalTabs}>
                        <TabPane tabId="profile">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits. <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="settings">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas. <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                        <TabPane tabId="options">
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas. <br />
                          <br />
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5 className="card-category">Collpase example</h5>
                  <CardTitle tag="h3">Collapsible Accordion</CardTitle>
                </CardHeader>
                <div
                  aria-multiselectable={true}
                  className="card-collapse"
                  id="accordion"
                  role="tablist"
                >
                  <Card className="card-plain">
                    <CardHeader role="tab">
                      <a
                        aria-expanded={this.state.openedCollapses.includes(
                          "collapseOne"
                        )}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={e => this.collapsesToggle(e, "collapseOne")}
                      >
                        Collapsible Group Item #1{" "}
                        <i className="tim-icons icon-minimal-down" />
                      </a>
                    </CardHeader>
                    <Collapse
                      role="tabpanel"
                      isOpen={this.state.openedCollapses.includes(
                        "collapseOne"
                      )}
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader role="tab">
                      <a
                        aria-expanded={this.state.openedCollapses.includes(
                          "collapseTwo"
                        )}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={e => this.collapsesToggle(e, "collapseTwo")}
                      >
                        Collapsible Group Item #2{" "}
                        <i className="tim-icons icon-minimal-down" />
                      </a>
                    </CardHeader>
                    <Collapse
                      role="tabpanel"
                      isOpen={this.state.openedCollapses.includes(
                        "collapseTwo"
                      )}
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader role="tab">
                      <a
                        aria-expanded={this.state.openedCollapses.includes(
                          "collapseThree"
                        )}
                        href="#pablo"
                        data-parent="#accordion"
                        data-toggle="collapse"
                        onClick={e => this.collapsesToggle(e, "collapseThree")}
                      >
                        Collapsible Group Item #3{" "}
                        <i className="tim-icons icon-minimal-down" />
                      </a>
                    </CardHeader>
                    <Collapse
                      role="tabpanel"
                      isOpen={this.state.openedCollapses.includes(
                        "collapseThree"
                      )}
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5 className="card-category">Navigation Pills</h5>
                  <CardTitle tag="h3">Vertical Tabs With Icons</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="3" md="6">
                      {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                      <Nav
                        className="nav-pills-info nav-pills-icons flex-column"
                        pills
                      >
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabsIcons === "home"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(
                                e,
                                "verticalTabsIcons",
                                "home"
                              )
                            }
                          >
                            <i className="tim-icons icon-istanbul" />
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={
                              this.state.verticalTabsIcons === "settings"
                                ? "active"
                                : ""
                            }
                            onClick={e =>
                              this.changeActiveTab(
                                e,
                                "verticalTabsIcons",
                                "settings"
                              )
                            }
                          >
                            <i className="tim-icons icon-settings" />
                            Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="8">
                      <TabContent activeTab={this.state.verticalTabsIcons}>
                        <TabPane tabId="home">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits. <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="settings">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas. <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-plain card-subcategories">
                <CardHeader>
                  <CardTitle className="text-center mt-5" tag="h4">
                    Page Subcategories
                  </CardTitle>
                  <br />
                </CardHeader>
                <CardBody>
                  {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                  <Nav
                    className="nav-pills-info nav-pills-icons justify-content-center"
                    pills
                  >
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.pageTabs === "home" ? "active" : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "pageTabs", "home")
                        }
                      >
                        <i className="tim-icons icon-istanbul" />
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.pageTabs === "messages" ? "active" : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "pageTabs", "messages")
                        }
                      >
                        <i className="tim-icons icon-bag-16" />
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          this.state.pageTabs === "settings" ? "active" : ""
                        }
                        onClick={e =>
                          this.changeActiveTab(e, "pageTabs", "settings")
                        }
                      >
                        <i className="tim-icons icon-settings" />
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space tab-subcategories"
                    activeTab={this.state.pageTabs}
                  >
                    <TabPane tabId="home">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="messages">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="settings">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Panels;
