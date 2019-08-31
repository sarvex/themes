<template>
  <div>
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <stats-card
          type="danger"
          title="1058"
          subTitle="Messages"
          icon="now-ui-icons ui-2_chat-round">
          <span slot="footer">
            <i class="now-ui-icons arrows-1_refresh-69"></i>
            Update now
          </span>
        </stats-card>
      </div>

      <div class="col-xl-3 col-md-6">
        <stats-card
          type="warning"
          title="$23,685"
          subTitle="Deposit"
          icon="now-ui-icons business_bank">
          <span slot="footer">
            <i class="now-ui-icons ui-1_calendar-60"></i>
            Last week
          </span>
        </stats-card>
      </div>

      <div class="col-xl-3 col-md-6">
        <stats-card
          type="danger"
          title="363"
          subTitle="Players"
          icon="now-ui-icons sport_user-run">
          <span slot="footer">
            <i class="now-ui-icons ui-2_time-alarm"></i>
            In the last hour
          </span>
        </stats-card>
      </div>

      <div class="col-xl-3 col-md-6">
        <stats-card
          type="info"
          title="+83K"
          subTitle="Followers"
          icon="now-ui-icons ui-2_favourite-28">
          <span slot="footer">
            <i class="now-ui-icons arrows-1_refresh-69"></i>
            Update now
          </span>
        </stats-card>
      </div>

    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 text-center">
        <card class="card-contributions"
              title="3,521"
              sub-title="Total Public Contributions"
              description="After a very successful two-year run, we’re going to be changing the way that contributions work.">

          <div class="row" slot="footer">
            <div class="col-6">
              <div class="card-stats justify-content-center">
                <n-switch v-model="allContributions" on-text="ON" off-text="OFF"></n-switch>
                <span>All public contributions</span>
              </div>
            </div>
            <div class="col-6">
              <div class="card-stats justify-content-center">
                <n-switch v-model="pastWeekContributions" on-text="ON" off-text="OFF"></n-switch>
                <span>Past week contributions</span>
              </div>
            </div>
          </div>

        </card>

        <card class="card-tasks" no-footer-line>
          <template slot="header">
            <h5 class="title">Tasks</h5>
            <p class="category">Backend Development</p>
          </template>

          <div class="table-full-width table-responsive">
            <n-table :data="taskData">
              <template slot-scope="{row}">
                <td>
                  <checkbox v-model="row.done"></checkbox>
                </td>
                <td class="img-row">
                  <div class="img-wrapper img-raised">
                    <img :src="row.image" class="img-raised">
                  </div>
                </td>
                <td class="text-left">{{row.message}}</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" title=""
                          class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                          data-original-title="Edit Task">
                    <i class="now-ui-icons ui-2_settings-90"></i>
                  </button>
                  <button type="button" rel="tooltip" title=""
                          class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                          data-original-title="Remove">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                </td>
              </template>
            </n-table>
          </div>

          <template slot="footer">
            <hr>
            <i class="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
          </template>
        </card>
      </div>

      <div class="col-lg-6 col-md-12">
        <time-line type="simple">
          <time-line-item inverted
                          badge-icon="now-ui-icons objects_planet"
                          badge-type="danger">
            <span slot="header" class="badge badge-danger">Some Title</span>
            <p slot="content">Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for
              making
              my family We just had fun with the “future” theme !!! It was a fun night all together ... The
              always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
            <span slot="footer">
                11 hours ago via Twitter
              </span>
          </time-line-item>

          <time-line-item inverted
                          badge-icon="now-ui-icons shopping_tag-content"
                          badge-type="success">
            <span slot="header" class="badge badge-success">Another One</span>
            <p slot="content">Thank God for the support of my wife and real friends.
              I also wanted to point out that it’s the first album to go number 1 off of streaming!!!
              I love you Ellen and also my number one design rule of anything
              I do from shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>

          <time-line-item inverted
                          badge-icon="now-ui-icons shopping_delivery-fast"
                          badge-type="info">
            <span slot="header" class="badge badge-info">Another Title</span>
            <template slot="content">
              <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous
                viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
              <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear
                couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
              <hr>
            </template>
            <span slot="footer">
                <drop-down>
                   <n-button slot="title" type="info" round class="dropdown-toggle">
                        <i class="now-ui-icons design_bullet-list-67"></i>
                      </n-button>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </drop-down>
              </span>
          </time-line-item>

        </time-line>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-lg-6">
            <card class="card-pricing"
                  no-footer-line
                  category="Alpha Pack">
              <div class="card-icon icon-primary">
                <i class="now-ui-icons objects_diamond"></i>
              </div>
              <h3 class="card-title">69$</h3>
              <ul>
                <li>Working materials in EPS</li>
                <li>6 months access to the library</li>
              </ul>
              <n-button slot="footer" type="primary" round>Add to Cart</n-button>

            </card>
          </div>

          <div class="col-lg-6">

            <card class="card-pricing"
                  plain
                  no-footer-line
                  category="Bravo Pack">
              <div class="card-icon icon-warning">
                <i class="now-ui-icons media-1_button-power"></i>
              </div>
              <h3 class="card-title">10$</h3>
              <ul>
                <li>Complete documentation</li>
                <li>Working materials in Sketch</li>
              </ul>

              <n-button slot="footer" type="primary" round>Add to Cart</n-button>
            </card>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <card class="card-testimonial" no-footer-line header-classes="card-header-avatar">

          <template slot="header">
            <a href="#pablo">
              <img class="img img-raised" src="img/james.jpg">
            </a>
          </template>

          <p class="card-description">
            The networking at Web Summit is like no other European tech conference.
          </p>
          <div class="icon icon-primary">
            <i class="fa fa-quote-right"></i>
          </div>

          <template slot="footer">
            <h4 class="card-title">Alton becker</h4>
            <p class="category">@altonbecker</p>
          </template>

        </card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  StatsCard,
  Switch,
  TimeLine,
  TimeLineItem,
  Table as NTable,
  Checkbox
} from 'src/components';

export default {
  components: {
    StatsCard,
    [Switch.name]: Switch,
    TimeLine,
    TimeLineItem,
    NTable,
    Checkbox
  },
  data() {
    return {
      allContributions: true,
      pastWeekContributions: false,
      taskData: [
        {
          message:
            'Sign contract for "What are conference organizers afraid of?"',
          done: true,
          image: 'img/emilyz.jpg'
        },
        {
          message:
            'Lines From Great Russian Literature? Or E-mails From My Boss?',
          done: false,
          image: 'img/james.jpg'
        },
        {
          message:
            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
          done: true,
          image: 'img/mike.jpg'
        }
      ]
    };
  }
};
</script>
<style>
</style>
