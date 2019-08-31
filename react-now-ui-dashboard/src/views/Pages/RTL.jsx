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
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip,
  Badge
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class Widgets extends React.Component {
  constructor(props) {
    super(props);
    document.body.className += " rtl-active";
  }
  componentWillUnmount() {
    document.body.classList.remove("rtl-active");
  }
  render() {
    return (
      <>
        <PanelHeader />
        <div className="content">
          <Row>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">1058</h3>
                          <h6 className="stats-title">رسائل</h6>
                        </Col>
                        <Col xs="5">
                          <div className="icon icon-primary icon-circle">
                            <i className="now-ui-icons ui-2_chat-round" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> تحديث
                    الان
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">
                            <span>$</span>
                            23,685
                          </h3>
                          <h6 className="stats-title">الوديعة</h6>
                        </Col>
                        <Col xs="5">
                          <div className="icon icon-warning icon-circle">
                            <i className="now-ui-icons business_bank" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-1_calendar-60" /> الاسبوع
                    الماضى
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">364</h3>
                          <h6 className="stats-title">لاعبين</h6>
                        </Col>
                        <Col xs="5">
                          <div className="icon icon-danger icon-circle">
                            <i className="now-ui-icons sport_user-run" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" /> في الساعة
                    الماضية
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <div className="statistics statistics-horizontal">
                    <div className="info info-horizontal">
                      <Row>
                        <Col className="text-right" xs="7">
                          <h3 className="info-title">+83K</h3>
                          <h6 className="stats-title">متابعون</h6>
                        </Col>
                        <Col xs="5">
                          <div className="icon icon-info icon-circle">
                            <i className="now-ui-icons ui-2_favourite-28" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
                <hr />
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> تحديث
                    الان
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" lg="6" md="12">
              <Card className="card-contributions">
                <CardBody>
                  <CardTitle tag="h1">3,521</CardTitle>
                  <h3 className="card-category">مجموع المساهمات العامة</h3>
                  <p className="card-description">
                    بعد نجاح ناجح لمدة عامين ، سنقوم بتغيير طريقة عمل المساهمات.
                  </p>
                </CardBody>
                <hr />
                <CardFooter>
                  <Row>
                    <Col xs="6">
                      <div className="card-stats justify-content-center">
                        <Switch offColor="" onColor="" />
                        <span>جميع المساهمات العامة</span>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="card-stats justify-content-center">
                        <Switch defaultValue={false} offColor="" onColor="" />
                        <span>مساهمات الأسبوع</span>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
              <Card className="card-tasks">
                <CardHeader>
                  <h5 className="card-category">تطوير الخلفية</h5>
                  <CardTitle tag="h4">مهام</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper img-raised">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img//emilyz.jpg")}
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          توقيع عقد "ما يخشاه منظمو المؤتمر؟"
                        </td>
                        <td className="td-actions">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip826524404"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip826524404"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip312987118"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip312987118"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper img-raised">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img//james.jpg")}
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          خطوط من الأدب الروسي العظيم؟ أو رسائل البريد
                          الإلكتروني من بلدي بوس؟
                        </td>
                        <td className="td-actions">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip788692563"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip788692563"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip857054871"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip857054871"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="img-row">
                          <div className="img-wrapper img-raised">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img//mike.jpg")}
                            />
                          </div>
                        </td>
                        <td className="text-left">
                          مغمورة: بعد مرور عام ، تقييم ما فقد وما تم العثور عليه
                          عندما اجتاحت الأمطار المدمرة مترو ديترويت
                        </td>
                        <td className="td-actions">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip865313372"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip865313372"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip289647719"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip289647719"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin" />
                    تم التحديث منذ 3 دقائق
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge danger">
                        <i className="now-ui-icons objects_planet" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="danger">بعض العنوان</Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            قدم أفضل وجبة يوم الأب على الإطلاق. ممتن جدا سعيد
                            جدا حتى المباركة. شكراً لك على صنع عائلتي لقد
                            استمتعنا بالموضوع "المستقبلي" !!! كانت ليلة ممتعة كل
                            ذلك معا ... عرض كاني فظ دائما في الساعة 2 صباحا بيعت
                            من مشاهير مشاهدة
                          </p>
                        </div>
                        <h6>
                          <i className="ti-time" />
                          قبل 11 ساعة عبر تويتر
                        </h6>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="now-ui-icons shopping_tag-content" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="success">واحدة أخرى</Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            أيضًا الإشارة إلى أنه أول ألبوم ينتقل إلى رقم 1 من
                            البث المباشر !!! أنا أحبك إلين وأيضا قاعدة بلدي رقم
                            واحد تصميم أي شيء أفعله من الأحذية إلى الموسيقى إلى
                            المنازل هو أن كيم يجب أن ترغب في ذلك
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="now-ui-icons shopping_delivery-fast" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <Badge color="info">عنوان آخر</Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            يسمى أنا أفتقد كاني القديم هذا كل ما كان كاني وأنا
                            أحبك مثل كاني يحب كاني مشاهدة مشاهير @ Figueroa و 12
                            في وسط المدينة LA 11:10 PM
                          </p>
                          <p>
                            ماذا لو قدمت كاني أغنية عن كاني رويير لا تصنع سرير
                            الدب القطبي ولكن الأريكة الدببة القطبية هي قطعة
                            الأثاث المفضلة لدينا التي نملكها. لم يكن أي مجموعة
                            من Kanyes على أهدافه كاني
                          </p>
                          <hr />
                        </div>
                        <div className="timeline-footer">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="info"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="now-ui-icons design_bullet-list-67" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                عمل
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                إجراء آخر
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                شيء آخر هنا
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Row>
                <Col lg="6">
                  <Card className="card-pricing">
                    <h6 className="card-category">حزمة ألفا</h6>
                    <CardBody>
                      <div className="card-icon icon-primary">
                        <i className="now-ui-icons objects_diamond" />
                      </div>
                      <CardTitle tag="h3">69$</CardTitle>
                      <ul>
                        <li>مواد العمل في EPS</li>
                        <li>6 أشهر الوصول إلى المكتبة</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        أضف إلى السلة
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card className="card-pricing card-plain">
                    <h6 className="card-category">برافو باك</h6>
                    <CardBody>
                      <div className="card-icon icon-warning">
                        <i className="now-ui-icons media-1_button-power" />
                      </div>
                      <CardTitle tag="h3">10$</CardTitle>
                      <ul>
                        <li>وثائق كاملة</li>
                        <li>مواد العمل في Sketch</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round btn-neutral"
                        color="warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        أضف إلى السلة
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Card className="card-testimonial">
                <CardHeader className="card-header-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img//james.jpg")}
                    />
                  </a>
                </CardHeader>
                <CardBody>
                  <p className="card-description">
                    إن التشبيك في قمة الويب لا يشبه أي مؤتمر تقني أوروبي آخر.
                  </p>
                  <div className="icon icon-primary">
                    <i className="fa fa-quote-right" />
                  </div>
                </CardBody>
                <CardFooter>
                  <CardTitle tag="h4">ألتون بيكر</CardTitle>
                  <p className="category">@altonbecker</p>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Widgets;
