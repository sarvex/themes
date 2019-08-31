<template>
  <div id="pricing" class="cd-section">
    <!--     *********    PRICING 1     *********      -->
    <div id="pricing-1" class="pricing-1 section-image" style="background-image: url('img/pricing1.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">Pick the best plan for you</h2>
            <h4 class="description ">You have Free Unlimited Updates and Premium Support on each package.</h4>
            <div class="section-space"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <card type="pricing" plain>
              <h6 class="category ">Bravo Pack</h6>
              <div class="icon icon-warning">
                <i class="now-ui-icons media-1_button-power"></i>
              </div>
              <h3 class="card-title">$10</h3>
              <ul>
                <li>Complete documentation</li>
                <li>Working materials in Sketch</li>
              </ul>
              <n-button type="warning" round class="btn-neutral">Add to Cart</n-button>
            </card>
          </div>
          <div class="col-md-3">
            <card type="pricing">
              <h6 class="category">Alpha Pack</h6>
              <div class="icon icon-primary">
                <i class="now-ui-icons objects_diamond"></i>
              </div>
              <h3 class="card-title">$67</h3>
              <ul>
                <li>Working materials in EPS</li>
                <li>6 months access to the library</li>
              </ul>
              <n-button type="primary" round class="btn-primary">Add to Cart</n-button>
            </card>
          </div>
          <div class="col-md-3">
            <card type="pricing" plain>
              <h6 class="category ">Charlie Pack</h6>
              <div class="icon icon-success">
                <i class="now-ui-icons media-2_sound-wave"></i>
              </div>
              <h3 class="card-title">$69</h3>
              <ul>
                <li>Working materials in PSD</li>
                <li>1 year access to the library</li>
              </ul>
              <n-button type="success" round class="btn-neutral">Add to Cart</n-button>
            </card>
          </div>
          <div class="col-md-3">
            <card type="pricing" plain>
              <h6 class="category ">Extra Pack</h6>
              <div class="icon icon-danger">
                <i class="now-ui-icons education_atom"></i>
              </div>
              <h3 class="card-title">$159</h3>
              <ul>
                <li>Complete documentation</li>
                <li>2GB cloud storage</li>
              </ul>
              <n-button type="danger" round class="btn-neutral">Add to Cart</n-button>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END PRICING 1      *********      -->
    <!--     *********    PRICING 2     *********      -->
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
              <n-button type="primary" round>
                Sign Up
              </n-button>
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
              <a href="#pablo" class="btn btn-neutral btn-round">
                Sign Up
              </a>
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
              <a href="#pablo" class="btn btn-primary btn-round">
                Get Started
              </a>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END PRICING 2      *********      -->
    <!--     *********    PRICING 3     *********      -->
    <div id="pricing-3" class="pricing-3 section-image" style="background-image: url('img/pricing3.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">Pick the best plan for you</h2>
            <h4 class="description">You have Free Unlimited Updates on each package.</h4>
            <div class="section-space"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 ml-auto">
            <card type="pricing">
              <h6 class="category">Freelance</h6>
              <h1 class="card-title">
                <small>$</small>
                29
                <small>/mo</small>
              </h1>
              <ul>
                <li>1 GB of space</li>
                <li>Limited Support</li>
                <li>Support at $25/hour</li>
                <li>Limited cloud access</li>
              </ul>
              <n-button type="primary" round>Get Started</n-button>
            </card>
          </div>
          <div class="col-md-4 mr-auto">
            <card type="pricing" raised color="orange">
              <h6 class="category">Business</h6>
              <h1 class="card-title">
                <small>$</small>
                59
                <small>/mo</small>
              </h1>
              <ul>
                <li>5 GB of space</li>
                <li>UnLimited Support</li>
                <li>Unlimited Downloads</li>
                <li>Full cloud access</li>
              </ul>
              <n-button type="neutral" round>Get Started</n-button>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END PRICING 3      *********      -->
    <!--     *********    PRICING 4     *********      -->
    <div id="pricing-4" class="pricing-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">Pick the best plan for you</h2>
            <h4 class="description">You have Free Unlimited Updates and Premium Support on each package.</h4>
            <div class="section-space"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card type="pricing" plain>
              <h6 class="category">Starter</h6>
              <div class="icon icon-danger">
                <i class="now-ui-icons tech_headphones"></i>
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
              <n-button type="danger" round>Get it Now</n-button>
            </card>
          </div>
          <div class="col-md-4">
            <card type="pricing" color="orange">
              <h6 class="category">Professional</h6>
              <div class="icon icon-primary">
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
              <a href="#pablo" class="btn btn-neutral btn-primary disabled btn-round">
                Current Plan
              </a>
            </card>
          </div>
          <div class="col-md-4">
            <card type="pricing" plain>
              <h6 class="category">Basic</h6>
              <div class="icon icon-warning">
                <i class="now-ui-icons tech_headphones"></i>
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
              <a href="#pablo" class="btn btn-warning btn-round">
                Upgrade Plan
              </a>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END PRICING 4      *********      -->
    <!--     *********    PRICING 5     *********      -->
    <div id="pricing-5" class="pricing-5 section-pricing-5 section-image" style="background-image: url('img/bg31.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="title">Choose a plan for your next project</h2>
            <tabs v-model="pricing5Tab" pills type="primary" no-content-space>
              <tab-pane label="Expensive"></tab-pane>
              <tab-pane label="Cheaper"></tab-pane>
            </tabs>
            <p class="description">
              You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a
              refund if you're not happy with your purchase.
            </p>
          </div>
          <div class="col-md-7 ml-auto mr-auto">
            <div class="tab-content tab-space">
              <div v-if="pricing5Tab === 'Expensive'" id="personal" class="tab-pane active">
                <div class="row">
                  <div class="col-md-6">
                    <card type="pricing" raised>
                      <h6 class="category">Plus</h6>
                      <h1 class="card-title">
                        <small>$</small>
                        100
                      </h1>
                      <ul>
                        <li><b>15</b> Projects</li>
                        <li><b>5GB</b> Storage</li>
                        <li><b>Unlimited</b> users</li>
                        <li><b>No time</b> tracking</li>
                      </ul>
                      <a href="#pablo" class="btn btn-primary btn-round">
                        Buy Now!
                      </a>
                    </card>
                  </div>
                  <div class="col-md-6">
                    <card type="pricing" plain>
                      <h6 class="category">Maximum</h6>
                      <h1 class="card-title">
                        <small>$</small>
                        120
                      </h1>
                      <ul>
                        <li><b>25</b> Projects</li>
                        <li><b>15GB</b> Storage</li>
                        <li><b>Unlimited</b> users</li>
                        <li><b>No time</b> tracking</li>
                      </ul>
                      <a href="#pablo" class="btn btn-primary btn-round">
                        Buy Now!
                      </a>
                    </card>
                  </div>
                </div>
              </div>
              <div v-else id="commercial" class="tab-pane active">
                <div class="row">
                  <div class="col-md-6">
                    <card type="pricing" raised>
                      <h6 class="category">Standard</h6>
                      <h1 class="card-title">
                        <small>$</small>
                        20
                      </h1>
                      <ul>
                        <li><b>5</b> Projects</li>
                        <li><b>2GB</b> Storage</li>
                        <li><b>Unlimited</b> users</li>
                        <li><b>No time</b> tracking</li>
                      </ul>
                      <a href="#pablo" class="btn btn-primary btn-round">
                        Buy Now!
                      </a>
                    </card>
                  </div>
                  <div class="col-md-6">
                    <card type="pricing" plain>
                      <h6 class="category">Premium</h6>
                      <h1 class="card-title">
                        <small>$</small>
                        60
                      </h1>
                      <ul>
                        <li><b>7</b> Projects</li>
                        <li><b>3GB</b> Storage</li>
                        <li><b>Unlimited</b> users</li>
                        <li><b>No time</b> tracking</li>
                      </ul>
                      <a href="#pablo" class="btn btn-primary btn-round">
                        Buy Now!
                      </a>
                    </card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END PRICING 5      *********      -->
  </div>
</template>
<script>
import { Card, Button, Tabs, TabPane } from '@/components'

export default {
  components: {
    Card,
    Tabs,
    TabPane,
    [Button.name]: Button,
  },
  data() {
    return {
      pricing5Tab: 'Expensive',
    }
  },
}
</script>
