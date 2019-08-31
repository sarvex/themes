<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-warning">
          <div class="card-text">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </div>
        </md-card-header>
        <md-card-content>
          <md-table v-model="users" table-header-color="orange">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
              <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
              <md-table-cell md-label="Salary">{{ item.salary }}</md-table-cell>
              <md-table-cell md-label="Country">{{
                item.country
              }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >

      <nav-tabs-card>
        <template slot="content">
          <span class="md-nav-tabs-title">Tasks:</span>
          <md-tabs class="md-rose" md-alignment="left">
            <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report" >
              <md-table v-model="firstTabs" @md-selected="onSelect">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ item.tab }}</md-table-cell>
                  <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>

            <md-tab id="tab-pages" md-label="Website" md-icon="code">
              <md-table v-model="firstTabs" @md-selected="onSelect">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ item.tab }}</md-table-cell>
                  <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>

            <md-tab id="tab-posts" md-label="server" md-icon="cloud">
              <md-table v-model="firstTabs" @md-selected="onSelect">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  md-selectable="multiple"
                  md-auto-select
                >
                  <md-table-cell>{{ item.tab }}</md-table-cell>
                  <md-table-cell>
                    <md-button class="md-just-icon md-simple md-primary">
                      <md-icon>edit</md-icon>
                      <md-tooltip md-direction="top">Edit</md-tooltip>
                    </md-button>
                    <md-button class="md-just-icon md-simple md-danger">
                      <md-icon>close</md-icon>
                      <md-tooltip md-direction="top">Close</md-tooltip>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </md-tab>
          </md-tabs>
        </template>
      </nav-tabs-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <pricing-card icon-color="icon-success">
            <h6 slot="category" class="category">Small Company</h6>
            <md-icon slot="icon">home</md-icon>
            <h3 slot="title" class="title">29$</h3>
            <p slot="description" class="card-description">
              This is good if your company size is between 2 and 10 Persons.
            </p>
            <md-button slot="footer" class="md-success md-round"
              >Choose Plan</md-button
            >
          </pricing-card>
        </div>
        <div class="md-layout-item">
          <pricing-card card-class="md-card-plain" icon-color="icon-black">
            <h6 slot="category" class="category">Freelancer</h6>
            <md-icon slot="icon">weekend</md-icon>
            <h3 slot="title" class="title black-color">FREE</h3>
            <p slot="description" class="card-description">
              This is good if your company size is between 2 and 10 Persons.
            </p>
            <md-button slot="footer" class="md-white md-round"
              >Choose Plan</md-button
            >
          </pricing-card>
        </div>
        <div class="md-layout-item md-size-90">
          <testimonial-card>
            <template slot="header-icon"
              >format_quote</template
            >
            <template slot="content">
              <h5 class="description">
                Your products, all the kits that I have downloaded from your
                site and worked with are sooo cool! I love the color mixtures,
                cards... everything. Keep up the great work!
              </h5>
            </template>
            <template slot="footer">
              <h4 class="title">Alec Thompson</h4>
              <h6 class="category">@alecthompson</h6>
              <div class="avatar">
                <a href="#pablo">
                  <img class="img" :src="profileCard" />
                </a>
              </div>
            </template>
          </testimonial-card>
        </div>
      </div>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
    >
      <time-line plain type="simple">
        <time-line-item inverted badge-type="danger" badge-icon="card_travel">
          <span slot="header" class="badge badge-danger">Some title</span>
          <p slot="content">
            Wifey made the best Father's Day meal ever. So thankful so happy so
            blessed. Thank you for making my family We just had fun with the
            “future” theme !!! It was a fun night all together ... The always
            rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th
            in downtown.
          </p>

          <h6 slot="footer">
            <i class="ti-time"></i>
            11 hours ago via Twitter
          </h6>
        </time-line-item>

        <time-line-item inverted badge-type="success" badge-icon="extension">
          <span slot="header" class="badge badge-success">Another Title</span>
          <p slot="content">
            Thank God for the support of my wife and real friends. I also wanted
            to point out that it’s the first album to go number 1 off of
            streaming!!! I love you Ellen and also my number one design rule of
            anything I do from shoes to music to homes is that Kim has to like
            it....
          </p>
        </time-line-item>

        <time-line-item inverted badge-type="info" badge-icon="fingerprint">
          <span slot="header" class="badge badge-info">Another Title</span>
          <div slot="content">
            <p>
              Called I Miss the Old Kanye That’s all it was Kanye And I love you
              like Kanye loves Kanye Famous viewing @ Figueroa and 12th in
              downtown LA 11:10PM
            </p>
            <p>
              What if Kanye made a song about Kanye Royère doesn't make a Polar
              bear bed but the Polar bear couch is my favorite piece of
              furniture we own It wasn’t any Kanyes Set on his goals Kanye
            </p>
            <hr />
            <drop-down>
              <md-button
                slot="title"
                class="md-button md-info md-round dropdown-toggle"
                data-toggle="dropdown"
              >
                <md-icon>build</md-icon>
              </md-button>
              <ul
                class="dropdown-menu"
                :class="{ 'dropdown-menu-right': !responsive }"
              >
                <li><a href="#">Mike John responded to your email</a></li>
                <li><a href="#">You have 5 new tasks</a></li>
                <li><a href="#">You're now friend with Andrew</a></li>
                <li><a href="#">Another Notification</a></li>
                <li><a href="#">Another One</a></li>
              </ul>
            </drop-down>
          </div>
        </time-line-item>
      </time-line>
    </div>
  </div>
</template>

<script>
import {
  NavTabsCard,
  TimeLine,
  TimeLineItem,
  PricingCard,
  TestimonialCard
} from "@/components";

export default {
  components: {
    NavTabsCard,
    PricingCard,
    TimeLine,
    TimeLineItem,
    TestimonialCard
  },
  props: {
    profileCard: {
      type: String,
      default: "./img/faces/card-profile1-square.jpg"
    }
  },
  data() {
    return {
      selected: [],
      responsive: false,
      firstTabs: [
        {
          tab: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          tab: "Lines From Great Russian Literature? Or E-mails From My Boss?"
        },
        {
          tab:
            "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
        }
      ],
      secondTabs: [
        {
          tab: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          tab: "Lines From Great Russian Literature? Or E-mails From My Boss?"
        },
        {
          tab:
            "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
        }
      ],
      thirdTabs: [
        {
          tab: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          tab: "Lines From Great Russian Literature? Or E-mails From My Boss?"
        },
        {
          tab:
            "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
        }
      ],
      users: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,738",
          country: "Curaçao"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South"
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>
