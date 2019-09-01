<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-sm-6 text-center">
        <card
          type="tasks"
          class="text-left"
          :header-classes="{ 'text-right': $rtl.isRTL }"
        >
          <template slot="header">
            <h6 class="title d-inline">Tasks (5)</h6>
            <p class="card-category d-inline">Today</p>

            <base-dropdown
              menu-on-right=""
              tag="div"
              title-classes="btn btn-link btn-icon"
              :class="{ 'float-left': $rtl.isRTL }"
            >
              <i slot="title" class="tim-icons icon-settings-gear-63"></i>
              <a class="dropdown-item" href="#pablo">Action</a>
              <a class="dropdown-item" href="#pablo">Another action</a>
              <a class="dropdown-item" href="#pablo">Something else</a>
            </base-dropdown>
          </template>
          <div class="table-full-width table-responsive">
            <task-list></task-list>
          </div>
        </card>

        <card type="contributions">
          <h1 class="card-title">6,332</h1>
          <h3 class="card-category">Total Public Contributions</h3>
          <p class="card-description">
            After a very successful two-year run, we’re going to be changing the
            way that contributions work.
          </p>
          <hr />

          <template slot="footer">
            <div class="row">
              <div class="col-lg-6 col-md-8 ml-auto mr-auto">
                <div class="card-stats justify-content-center">
                  <base-switch
                    v-model="allContributions"
                    on-text="ON"
                    off-text="ON"
                  ></base-switch>
                  <span>All public contributions</span>
                </div>
              </div>
              <div class="col-lg-6 col-md-8 ml-auto mr-auto">
                <div class="card-stats justify-content-center">
                  <base-switch
                    v-model="pastWeekContributions"
                    on-text="ON"
                    off-text="ON"
                  ></base-switch>
                  <span>Past week contributions</span>
                </div>
              </div>
            </div>
          </template>
        </card>
      </div>

      <div class="col-lg-6 col-sm-6">
        <card type="timeline" class="card-plain">
          <time-line type="simple">
            <time-line-item
              inverted
              badge-type="danger"
              badge-icon="tim-icons icon-bag-16"
            >
              <span slot="header" class="badge badge-danger">Some title</span>
              <p slot="content">
                Wifey made the best Father's Day meal ever. So thankful so happy
                so blessed. Thank you for making my family We just had fun with
                the “future” theme !!! It was a fun night all together ... The
                always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa
                and 12th in downtown.
              </p>

              <h6 slot="footer">
                <i class="ti-time"></i> 11 hours ago via Twitter
              </h6>
            </time-line-item>

            <time-line-item
              inverted
              badge-type="success"
              badge-icon="tim-icons icon-gift-2"
            >
              <span slot="header" class="badge badge-success"
                >Another Title</span
              >
              <p slot="content">
                Thank God for the support of my wife and real friends. I also
                wanted to point out that it’s the first album to go number 1 off
                of streaming!!! I love you Ellen and also my number one design
                rule of anything I do from shoes to music to homes is that Kim
                has to like it....
              </p>
            </time-line-item>

            <time-line-item
              inverted
              badge-type="info"
              badge-icon="tim-icons icon-planet"
            >
              <span slot="header" class="badges badge-info">Another Title</span>

              <template slot="content">
                <p>
                  Called I Miss the Old Kanye That’s all it was Kanye And I love
                  you like Kanye loves Kanye Famous viewing @ Figueroa and 12th
                  in downtown LA 11:10PM
                </p>
                <p>
                  What if Kanye made a song about Kanye Royère doesn't make a
                  Polar bear bed but the Polar bear couch is my favorite piece
                  of furniture we own It wasn’t any Kanyes Set on his goals
                  Kanye
                </p>
                <hr />
              </template>

              <base-dropdown
                slot="footer"
                title-classes="btn btn-round btn-info"
              >
                <i slot="title" class="tim-icons icon-bullet-list-67"></i>

                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </base-dropdown>
            </time-line-item>
          </time-line>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6">
        <card
          type="pricing"
          class="card-primary card-white"
          footer-classes="text-center mb-3 mt-3"
        >
          <h1 class="card-title">pro</h1>
          <img class="card-img" src="img/card-primary.png" alt="Image" />
          <ul class="list-group">
            <li class="list-group-item">300 messages</li>
            <li class="list-group-item">150 emails</li>
            <li class="list-group-item">24/7 Support</li>
          </ul>
          <div class="card-prices">
            <h3 class="text-on-front"><span>$</span>95</h3>
            <h5 class="text-on-back">95</h5>
            <p class="plan">Professional plan</p>
          </div>
          <base-button slot="footer" round type="primary" class="btn-just-icon">
            Get started
          </base-button>
        </card>
      </div>

      <div class="col-lg-3 col-md-6">
        <card
          type="pricing"
          class="card-primary"
          footer-classes="text-center mb-3 mt-3"
        >
          <h1 class="card-title">pro</h1>
          <img class="card-img" src="img/card-primary.png" alt="Image" />
          <ul class="list-group">
            <li class="list-group-item">300 messages</li>
            <li class="list-group-item">150 emails</li>
            <li class="list-group-item">24/7 Support</li>
          </ul>
          <div class="card-prices">
            <h3 class="text-on-front"><span>$</span>95</h3>
            <h5 class="text-on-back">95</h5>
            <p class="plan">Professional plan</p>
          </div>
          <base-button slot="footer" round type="primary" class="btn-just-icon">
            Get started
          </base-button>
        </card>
      </div>

      <div class="col-md-6">
        <card type="testimonial" header-classes="card-header-avatar">
          <a slot="header" href="#pablo">
            <img class="img img-raised" src="img/james.jpg" alt="Card image" />
          </a>

          <p class="card-description">
            The networking at Web Summit is like no other European tech
            conference.
          </p>
          <div class="icon icon-primary"><i class="fa fa-quote-right"></i></div>

          <template slot="footer">
            <h4 class="card-title">Robert Priscen</h4>
            <p class="category">@robertpriscen</p>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import TaskList from './Dashboard/TaskList';
import {
  BaseSwitch,
  TimeLine,
  TimeLineItem,
  BaseCheckbox
} from 'src/components';

export default {
  components: {
    BaseSwitch,
    TimeLine,
    TimeLineItem,
    TaskList,
    BaseCheckbox
  },
  data() {
    return {
      allContributions: true,
      pastWeekContributions: false
    };
  }
};
</script>
<style></style>
