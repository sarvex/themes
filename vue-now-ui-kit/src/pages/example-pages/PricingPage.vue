<template>
  <div class="wrapper pricing">
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image: url('img/bg37.jpg')"></parallax>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h1 class="title">Let's get started</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="pricing-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <h4 class="description">
                To get started, you will need to choose a plan for your needs. You have Free Unlimited Updates and
                Premium Support on each package.
              </h4>
              <div class="section-space"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">Starter</h6>
                <div class="icon icon-info">
                  <i class="now-ui-icons business_briefcase-24"></i>
                </div>
                <h3 class="card-title">
                  <small>$</small>
                  10
                </h3>
                <ul>
                  <li>1000 MB</li>
                  <li>3 email</li>
                  <li>5 Databases</li>
                </ul>
                <n-button type="info" round>Get it Now</n-button>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" color="black">
                <h6 class="category">Professional</h6>
                <div class="icon icon-success">
                  <i class="now-ui-icons tech_headphones"></i>
                </div>
                <h3 class="card-title">
                  <small>$</small>
                  40
                </h3>
                <ul>
                  <li>Unlimited MB</li>
                  <li>Unlimited emails</li>
                  <li>Full Support</li>
                </ul>
                <n-button type="default" round>Current Plan</n-button>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">Basic</h6>
                <div class="icon icon-danger">
                  <i class="now-ui-icons design_palette"></i>
                </div>
                <h3 class="card-title">
                  <small>$</small>
                  20
                </h3>
                <ul>
                  <li>1000 MB</li>
                  <li>3 email</li>
                  <li>No Support</li>
                </ul>
                <n-button type="danger" round>Upgrade Plan</n-button>
              </card>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-frequently">
        <div class="container">
          <div class="text-center">
            <h3 class="title">Frequently Asked Questions</h3>
          </div>
          <div class="row">
            <div class="col-md-4 ml-auto">
              <info-section
                type="info"
                icon="now-ui-icons shopping_credit-card"
                title="Can I cancel my subscription?"
                description="Yes, you can cancel and perform other actions on your subscriptions via the My Account page. "
              />
            </div>
            <div class="col-md-4 mr-auto">
              <info-section
                type="success"
                icon="now-ui-icons shopping_box"
                title="Is there any discount for an annual subscription?"
                description="Yes, we offer a 40% discount if you choose annual subscription for any plan."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 ml-auto">
              <info-section
                type="success"
                icon="now-ui-icons business_money-coins"
                title="Which payment methods do you take?"
                description="WooCommerce comes bundled with PayPal (for accepting credit card and PayPal account). "
              />
            </div>
            <div class="col-md-4 mr-auto">
              <info-section
                type="primary"
                icon="now-ui-icons business_bulb-63"
                title="Any other questions we can answer?"
                description="We are happy to help you. Contact us."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="contactus-1 section-image" style="background-image: url('img/contact1.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <h2 class="title">Get in Touch</h2>
              <h4 class="description">
                You need more information? Check what other persons are saying about our product. They are very happy
                with their purchase.
              </h4>
              <info-section type="primary" icon="now-ui-icons location_pin">
                <h4 class="info-title">Find us at the office</h4>
                <p class="description">
                  Bld Mihail Kogalniceanu, nr. 8,
                  <br />7652 Bucharest, <br />Romania
                </p>
              </info-section>

              <info-section type="primary" icon="now-ui-icons tech_mobile">
                <h4 class="info-title">Give us a ring</h4>
                <p class="description">
                  Michael Jordan
                  <br />+40 762 321 762 <br />Mon - Fri, 8:00-22:00
                </p>
              </info-section>
            </div>
            <div class="col-md-5 ml-auto mr-auto">
              <card type="contact" raised header-classes="text-center">
                <h4 slot="header" class="card-title">Contact Us</h4>

                <div class="row">
                  <div class="col-md-6 pr-2">
                    <label>First Name</label>
                    <fg-input placeholder="First Name..." addon-left-icon="now-ui-icons users_circle-08"></fg-input>
                  </div>
                  <div class="col-md-6 pl-2">
                    <label>Last Name</label>
                    <fg-input placeholder="Last Name..." addon-left-icon="now-ui-icons text_caps-small"></fg-input>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <fg-input placeholder="Email Here..." addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>
                </div>
                <div class="form-group">
                  <label>Your message</label>
                  <textarea id="message" name="message" class="form-control" rows="6"></textarea>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <n-checkbox>I'm not a robot</n-checkbox>
                  </div>
                  <div class="col-md-6">
                    <n-button type="primary" round class="pull-right">Send Message</n-button>
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, InfoSection, FormGroupInput, Checkbox } from '@/components'

export default {
  name: 'PricingPage',
  bodyClass: 'pricing',
  components: {
    Card,
    InfoSection,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
  },
}
</script>
