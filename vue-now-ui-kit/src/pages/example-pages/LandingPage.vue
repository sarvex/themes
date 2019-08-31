<template>
  <div class="wrapper landing-page">
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image: url('img/bg26.jpg')"></parallax>
      <div class="content-center">
        <h1 class="title">This is our great company.</h1>
        <div class="text-center">
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-google-plus"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts
              the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a
              late drop in ice extent in the Barents Sea.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <!-- First image on the left side -->
              <div class="image-container image-left" style="background-image: url('img/bg38.jpg')">
                <p class="blockquote blockquote-primary">
                  "Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice
                  in the Antarctichas increased very slightly"
                  <br />
                  <br />
                  <small>-NOAA</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div class="image-container image-left-bottom" style="background-image: url('img/bg24.jpg')"></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div class="image-container image-right" style="background-image: url('img/bg39.jpg')"></div>
              <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process
                will continue whatever happens with climate change. Even if the Arctic continues to be one of the
                fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every
                winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the
                ice.
              </p>
              <p>
                For a start, it does not automatically follow that a record amount of ice will melt this summer. More
                important for determining the size of the annual thaw is the state of the weather as the midnight sun
                approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have
                observed a clear pattern of decline, decade-by-decade.
              </p>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process
                will continue whatever happens with climate change. Even if the Arctic continues to be one of the
                fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every
                winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the
                ice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonials-1 section-image" style="background-image: url('img/bg19.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">What is ALPHA?</h2>
            <h4 class="description text-white">
              If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and
              Mentor Hours and much more all for €850.
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card type="testimonial">
              <img slot="avatar" class="img img-raised" src="img/michael.jpg" />
              <p class="card-description">The networking at Web Summit is like no other European tech conference.</p>
              <template slot="raw-content">
                <div class="icon icon-primary">
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="card-footer">
                  <h4 class="card-title">Michael Elijah</h4>
                  <p class="category">@michaelelijah</p>
                </div>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial">
              <img slot="avatar" class="img img-raised" src="img/olivia.jpg" />
              <p class="card-description">
                The connections you make at Web Summit are unparalleled, we met users all over the world.
              </p>
              <template slot="raw-content">
                <div class="icon icon-primary">
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="card-footer">
                  <h4 class="card-title">Olivia Harper</h4>
                  <p class="category">@oliviaharper</p>
                </div>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial">
              <img slot="avatar" class="img img-raised" src="img/james.jpg" />
              <p class="card-description">
                Web Summit will increase your appetite, your inspiration, and your network.
              </p>
              <template slot="raw-content">
                <div class="icon icon-primary">
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="card-footer">
                  <h4 class="card-title">James Logan</h4>
                  <p class="category">@jameslogan</p>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-2">
      <div id="pricing-2" class="pricing-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <h2 class="title">Pick the best plan for you</h2>
              <tabs pills type="primary" centered>
                <tab-pane label="Legal Entity"></tab-pane>
                <tab-pane label="Individual"></tab-pane>
              </tabs>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">Enterprise</h6>
                <h1 class="card-title">
                  <small>$</small>
                  59
                </h1>
                <ul>
                  <li><b>10GB</b> Disk Space</li>
                  <li><b>100GB</b> Monthly Bandwidth</li>
                  <li><b>20</b> Email Accounts</li>
                  <li><b>Unlimited</b> subdomains</li>
                </ul>
                <n-button type="primary" round>Sign Up</n-button>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" raised class="card-background" style="background-image: url('img/pricing2.jpg')">
                <h6 class="category text-info">Professional</h6>
                <h1 class="card-title">
                  <small>$</small>
                  29
                </h1>
                <ul>
                  <li><b>5GB</b> Disk Space</li>
                  <li><b>50GB</b> Monthly Bandwidth</li>
                  <li><b>10</b> Email Accounts</li>
                  <li><b>Unlimited</b> subdomains</li>
                </ul>
                <a href="#pablo" class="btn btn-neutral btn-round">Sign Up</a>
              </card>
            </div>
            <div class="col-md-4">
              <card type="pricing" plain>
                <h6 class="category">Standard</h6>
                <h1 class="card-title">
                  <small>$</small>
                  17
                </h1>
                <ul>
                  <li><b>2GB</b> Disk Space</li>
                  <li><b>25GB</b> Monthly Bandwidth</li>
                  <li><b>5</b> Email Accounts</li>
                  <li><b>Unlimited</b> subdomains</li>
                </ul>
                <a href="#pablo" class="btn btn-primary btn-round">Get Started</a>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              v-model="form.firstName"
              class="input-lg"
              placeholder="First Name..."
              addon-left-icon="now-ui-icons users_circle-08"
            ></fg-input>
            <fg-input
              v-model="form.email"
              class="input-lg"
              placeholder="Email Here..."
              addon-left-icon="now-ui-icons ui-1_email-85"
            ></fg-input>
            <div class="textarea-container">
              <textarea
                v-model="form.message"
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg">Send Message</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Tabs, TabPane } from '@/components'

export default {
  name: 'LandingPage',
  bodyClass: 'landing-page',
  components: {
    Card,
    Tabs,
    TabPane,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: '',
      },
    }
  },
}
</script>
