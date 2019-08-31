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
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  ListGroupItem,
  ListGroup,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Rtl extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="text-center" lg="6" sm="6">
              <Card className="card-tasks text-left">
                <CardHeader>
                  <h6 className="title d-inline">تتبع</h6>
                  <p className="card-category d-inline">اليوم</p>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="link"
                      data-toggle="dropdown"
                      id="dropdownMenuLink"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
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
                        عمل آخر
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        شيء آخر هنا
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-right">
                            <p className="title">مركز معالجة موقع محور</p>
                            <p className="text-muted">نص آخر هناالوثائق</p>
                          </td>
                          <td className="td-actions">
                            <Button
                              color="link"
                              id="tooltip141118598"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-settings" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip141118598"
                            >
                              مهمة تحرير
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-right">
                            <p className="title">لامتثال GDPR</p>
                            <p className="text-muted">
                              الناتج المحلي الإجمالي هو نظام يتطلب من الشركات
                              حماية البيانات الشخصية والخصوصية لمواطني أوروبا
                              بالنسبة للمعاملات التي تتم داخل الدول الأعضاء في
                              الاتحاد الأوروبي.
                            </p>
                          </td>
                          <td className="td-actions">
                            <Button
                              color="link"
                              id="tooltip167064857"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-settings" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip167064857"
                            >
                              مهمة تحرير
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-right">
                            <p className="title">القضاياالقضايا</p>
                            <p className="text-muted">
                              سيكونونقال 50٪ من جميع المستجيبين أنهم سيكونون
                              أكثر عرضة للتسوق في شركة
                            </p>
                          </td>
                          <td className="td-actions">
                            <Button
                              color="link"
                              id="tooltip844573982"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-settings" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip844573982"
                            >
                              مهمة تحرير
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-right">
                            <p className="title">
                              تصدير الملفات التي تمت معالجتها
                            </p>
                            <p className="text-muted">
                              كما يبين التقرير أن المستهلكين لن يغفروا شركة
                              بسهولة بمجرد حدوث خرق يعرض بياناتهم الشخصية.
                            </p>
                          </td>
                          <td className="td-actions">
                            <Button
                              color="link"
                              id="tooltip509041436"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-settings" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip509041436"
                            >
                              مهمة تحرير
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-right">
                            <p className="title">الوصول إلى عملية التصدير</p>
                            <p className="text-muted">
                              سياسة السيء إنطلاق في قبل, مساعدة والمانيا أخذ قد.
                              بل أما أمام ماشاء الشتاء،, تكاليف الإقتصادي بـ
                              حين. ٣٠ يتعلّق للإتحاد ولم, وتم هناك مدينة بتحدّي
                              إذ, كان بل عمل
                            </p>
                          </td>
                          <td className="td-actions">
                            <Button
                              color="link"
                              id="tooltip665486771"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-settings" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip665486771"
                            >
                              مهمة تحرير
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td className="text-right">
                            <p className="title">الافراج عن v2.0.0</p>
                            <p className="text-muted">
                              عن رئيس طوكيو البولندي لمّ, مايو مرجع وباءت قبل
                              هو, تسمّى الطريق الإقتصادي ذات أن. لغات الإطلاق
                              الفرنسية دار ان, بين بتخصيص الساحة اقتصادية أم. و
                              الآخ
                            </p>
                          </td>
                          <td className="td-actions">
                            <Button
                              color="link"
                              id="tooltip458666133"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-settings" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip458666133"
                            >
                              مهمة تحرير
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-contributions">
                <CardBody>
                  <CardTitle tag="h1">6,332</CardTitle>
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
                        <Switch
                          offColor=""
                          offText="إيقاف"
                          onColor=""
                          onText="على"
                        />
                        <span>جميع المساهمات العامة</span>
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="card-stats justify-content-center">
                        <Switch
                          defaultValue={false}
                          offColor=""
                          offText="إيقاف"
                          onColor=""
                          onText="على"
                        />
                        <span>مساهمات الأسبوع الماضي</span>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" sm="6">
              <Card className="card-timeline card-plain">
                <CardBody>
                  <ul className="timeline timeline-simple">
                    <li className="timeline-inverted">
                      <div className="timeline-badge danger">
                        <i className="tim-icons icon-bag-16" />
                      </div>
                      <div className="timeline-panel text-right">
                        <div className="timeline-heading">
                          <Badge color="danger" pill>
                            بعض العنوان
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            ل Wifey قدم أفضل وجبة يوم الأب على الإطلاق. ممتن جدا
                            سعيد جدا حتى المباركة. شكراً لك على صنع عائلتي لقد
                            استمتعنا بالموضوع "المستقبلي" !!! كانت ليلة ممتعة
                            معًا ...
                          </p>
                        </div>
                        <h6>
                          <i className="ti-time" />
                          قبل ساعتين عبر تويتر
                        </h6>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="tim-icons icon-gift-2" />
                      </div>
                      <div className="timeline-panel text-right">
                        <div className="timeline-heading">
                          <Badge color="success" pill>
                            واحدة أخرى
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            أشكر الله على دعم زوجتي وأصدقائي الحقيقيين. أود
                            أيضًا الإشارة إلى أنه أول ألبوم ينتقل إلى رقم 1 من
                            البث المباشر !!! أنا أحبك إلين وأيضا قاعدة بلدي رقم
                            واحد تصميم أي شيء أفعله من الأحذية إلى الموسيقى إلى
                            المنازل.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge info">
                        <i className="tim-icons icon-planet" />
                      </div>
                      <div className="timeline-panel text-right">
                        <div className="timeline-heading">
                          <Badge color="info" pill>
                            عنوان آخر
                          </Badge>
                        </div>
                        <div className="timeline-body">
                          <p>
                            يطلق عليه أنا أفتقد كاني القديم هذا كل ما كان كاني
                            وأنا أحبك مثل كانيي يحب كاني الشهير مشاهدة فيجويروا
                            والثاني عشر في وسط المدينة LA 11:10 PM
                          </p>
                          <p>
                            ماذا لو قدمت كاني أغنية عن كاني رويير لا تصنع سرير
                            الدب القطبي ولكن الأريكة الدببة القطبية هي قطعة
                            الأثاث المفضلة لدينا التي نملكها. لم يكن أي مجموعة
                            من على أهدافه كاني
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
                              <i className="tim-icons icon-bullet-list-67" />
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
                                عمل آخر
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
            <Col lg="3" md="6">
              <Card className="card-pricing card-primary">
                <CardBody>
                  <CardTitle tag="h1">طليعة</CardTitle>
                  <CardImg
                    alt="..."
                    src={require("assets/img/card-primary.png")}
                  />
                  <ListGroup>
                    <ListGroupItem>300 رسائل</ListGroupItem>
                    <ListGroupItem>150 رسائل البريد الإلكتروني</ListGroupItem>
                    <ListGroupItem>24/7 الدعم</ListGroupItem>
                  </ListGroup>
                  <div className="card-prices">
                    <h3 className="text-on-front">
                      <span>$</span>
                      95
                    </h3>
                    <h5 className="text-on-back">95</h5>
                    <p className="plan">خطة مهنية</p>
                  </div>
                </CardBody>
                <CardFooter className="text-center mb-3 mt-3">
                  <Button className="btn-round btn-just-icon" color="primary">
                    البدء
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-pricing card-primary card-white">
                <CardBody>
                  <CardTitle tag="h1">طليعة</CardTitle>
                  <CardImg
                    alt="..."
                    src={require("assets/img/card-primary.png")}
                  />
                  <ListGroup>
                    <ListGroupItem>300 رسائل</ListGroupItem>
                    <ListGroupItem>150 رسائل البريد الإلكتروني</ListGroupItem>
                    <ListGroupItem>24/7 الدعم</ListGroupItem>
                  </ListGroup>
                  <div className="card-prices">
                    <h3 className="text-on-front">
                      <span>$</span>
                      95
                    </h3>
                    <h5 className="text-on-back">95</h5>
                    <p className="plan">خطة مهنية</p>
                  </div>
                </CardBody>
                <CardFooter className="text-center mb-3 mt-3">
                  <Button className="btn-round btn-just-icon" color="primary">
                    البدء
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-testimonial">
                <CardHeader className="card-header-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/james.jpg")}
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
                  <CardTitle tag="h4">روبرت بريسن</CardTitle>
                  <p className="category">@خطةطليعة</p>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Rtl;
