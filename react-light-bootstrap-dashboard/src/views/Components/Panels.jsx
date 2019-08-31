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
import {
  Grid,
  Row,
  Col,
  PanelGroup,
  Panel,
  Nav,
  NavItem,
  Tab
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

class Panels extends Component {
  componentDidUpdate(e) {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this._reactInternalInstance._currentElement._owner._instance._reactInternalInstance._currentElement._owner._instance.componentDidUpdate(
        e
      );
    }
  }
  isMac() {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
      navigator.platform.toUpperCase().indexOf("IPAD") >= 0
    ) {
      bool = true;
    }
    return bool;
  }
  render() {
    const defaultPanel = (
      <PanelGroup id="panels" ref="panels" onClick={() => this.forceUpdate()}>
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>
              Collapsible Group Item #1
              <b className="caret" />
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>
              Collapsible Group Item #2
              <b className="caret" />
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Panel.Body>
        </Panel>
        <Panel eventKey="3">
          <Panel.Heading>
            <Panel.Title toggle>
              Collapsible Group Item #3
              <b className="caret" />
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Panel.Body>
        </Panel>
      </PanelGroup>
    );
    const accordionPanel = (
      <PanelGroup
        accordion
        id="panels"
        ref="panels"
        onClick={() => this.forceUpdate()}
      >
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>Accordion Item #1</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>Accordion Item #2</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Panel.Body>
        </Panel>
        <Panel eventKey="3">
          <Panel.Heading>
            <Panel.Title toggle>Accordion Item #3</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Panel.Body>
        </Panel>
      </PanelGroup>
    );
    const tabs = (
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="info">
        <Row className="clearfix">
          <Col sm={12}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="info">Info</NavItem>
              <NavItem eventKey="account">Account</NavItem>
              <NavItem eventKey="style">Style</NavItem>
              <NavItem eventKey="settings">Settings</NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="info">
                Agency is a group of professional individuals looking to create
                amazing pieces of clothing. We have studied at the best schools
                of design, we have tailored the suits for the most stylish men
                in the industry, we are what you need!
              </Tab.Pane>
              <Tab.Pane eventKey="account">
                We are Houses Inc., a group of architects and interior designers
                based in Chicago and operating for clients worldwide. We’ve been
                designing stunningly beautiful houses and making clients happy
                for years.
              </Tab.Pane>
              <Tab.Pane eventKey="style">
                Explore a wide variety of styles, personalise your finishes, and
                let us design the perfect home for you. It's what we do best and
                you can see proof in the products and reviews below.
              </Tab.Pane>
              <Tab.Pane eventKey="settings">
                Explore a wide Houses Inc., a group of architects and interior
                designers based in Chicago and operating for clients worldwide.
                We’ve been designing stunningly beautiful houses and making
                clients happy for years.
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
    const tabsIcons = (
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="info">
        <Row className="clearfix">
          <Col sm={12}>
            <Nav bsStyle="tabs">
              <NavItem eventKey="info">
                <i className="fa fa-info" /> Info
              </NavItem>
              <NavItem eventKey="account">
                <i className="fa fa-user" /> Account
              </NavItem>
              <NavItem eventKey="style">
                <i className="fa fa-cube" /> Style
              </NavItem>
              <NavItem eventKey="settings">
                <i className="fa fa-cog" /> Settings
              </NavItem>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content animation>
              <Tab.Pane eventKey="info">
                Agency is a group of professional individuals looking to create
                amazing pieces of clothing. We have studied at the best schools
                of design, we have tailored the suits for the most stylish men
                in the industry, we are what you need!
              </Tab.Pane>
              <Tab.Pane eventKey="account">
                We are Houses Inc., a group of architects and interior designers
                based in Chicago and operating for clients worldwide. We’ve been
                designing stunningly beautiful houses and making clients happy
                for years.
              </Tab.Pane>
              <Tab.Pane eventKey="style">
                Explore a wide variety of styles, personalise your finishes, and
                let us design the perfect home for you. It's what we do best and
                you can see proof in the products and reviews below.
              </Tab.Pane>
              <Tab.Pane eventKey="settings">
                Explore a wide Houses Inc., a group of architects and interior
                designers based in Chicago and operating for clients worldwide.
                We’ve been designing stunningly beautiful houses and making
                clients happy for years.
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
    const pageSubcategories = (
      <Tab.Container id="nav-with-icons" defaultActiveKey="description">
        <div>
          <div className="nav-container">
            <Nav bsStyle="tabs" bsClass="nav nav-icons">
              <NavItem eventKey="description">
                <i className="fa fa-info-circle" />
                <br /> Description
              </NavItem>
              <NavItem eventKey="location">
                <i className="fa fa-map-marker" />
                <br /> Location
              </NavItem>
              <NavItem eventKey="legal">
                <i className="fa fa-legal" />
                <br /> Legal Info
              </NavItem>
              <NavItem eventKey="help">
                <i className="fa fa-life-ring" />
                <br /> Help Center
              </NavItem>
            </Nav>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="description">
              <Card
                title="Description about product"
                category="More information here"
                content={
                  <div>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient. With a smooth metal surface
                      that seamlessly meets the new Retina HD display.
                    </p>
                    <p>
                      The first thing you notice when you hold the phone is how
                      great it feels in your hand. There are no distinct edges.
                      No gaps. Just a smooth, seamless bond of metal and glass
                      that feels like one continuous surface.
                    </p>
                  </div>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="location">
              <Card
                title="Location of product"
                category="Here is some text"
                content={
                  <div>
                    <p>
                      Another Text. The first thing you notice when you hold the
                      phone is how great it feels in your hand. The cover glass
                      curves down around the sides to meet the anodized aluminum
                      enclosure in a remarkable, simplified design.
                    </p>
                    <p>
                      Larger, yet dramatically thinner.It’s one continuous form
                      where hardware and software function in perfect unison,
                      creating a new generation of phone that’s better by any
                      measure.
                    </p>
                  </div>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="legal">
              <Card
                title="Legal items"
                category="More information here"
                content={
                  <div>
                    <p>
                      The first thing you notice when you hold the phone is how
                      great it feels in your hand. The cover glass curves down
                      around the sides to meet the anodized aluminum enclosure
                      in a remarkable, simplified design.
                    </p>
                    <p>
                      Larger, yet dramatically thinner.It’s one continuous form
                      where hardware and software function in perfect unison,
                      creating a new generation of phone that’s better by any
                      measure.
                    </p>
                  </div>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="help">
              <Card
                title="Help center"
                category="More information here"
                content={
                  <div>
                    <p>
                      From the seamless transition of glass and metal to the
                      streamlined profile, every detail was carefully considered
                      to enhance your experience. So while its display is
                      larger, the phone feels just right.
                    </p>
                    <p>
                      Another Text. The first thing you notice when you hold the
                      phone is how great it feels in your hand. The cover glass
                      curves down around the sides to meet the anodized aluminum
                      enclosure in a remarkable, simplified design.
                    </p>
                  </div>
                }
              />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    );
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Multiple Expandable Panels"
                category="Bootstrap default style"
                content={defaultPanel}
              />
            </Col>
            <Col md={6}>
              <Card
                title="Collapsible Accordion"
                category="With full width"
                ctFullWidth
                content={accordionPanel}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card title="Tabs" category="Plain text tabs" content={tabs} />
            </Col>
            <Col md={6}>
              <Card
                title="Tabs & Icons"
                category="Tabs with icons and full width"
                ctFullWidth
                content={tabsIcons}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <h4 className="title text-center">Page Subcategories</h4>
              <br />
              {pageSubcategories}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Panels;
