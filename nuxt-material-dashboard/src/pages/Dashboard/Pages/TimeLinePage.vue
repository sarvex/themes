<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <time-line plain :type="simpleTimeline">
        <time-line-item inverted badge-type="danger" badge-icon="card_travel">
          <badge slot="header" type="danger">Another Title</badge>
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

        <time-line-item
          :class="{ 'timeline-inverted': responsive }"
          badge-type="success"
          badge-icon="extension"
        >
          <badge slot="header" type="success">Another Title</badge>
          <p slot="content">
            Thank God for the support of my wife and real friends. I also wanted
            to point out that it’s the first album to go number 1 off of
            streaming!!! I love you Ellen and also my number one design rule of
            anything I do from shoes to music to homes is that Kim has to like
            it....
          </p>
        </time-line-item>

        <time-line-item inverted badge-type="info" badge-icon="fingerprint">
          <badge slot="header" type="info">Another Title</badge>
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
            <drop-down direction="down">
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

        <time-line-item
          :class="{ 'timeline-inverted': responsive }"
          badge-type="warning"
          badge-icon="flight_land"
        >
          <badge slot="header" type="warning">Another Title</badge>
          <p slot="content">
            Tune into Big Boy's 92.3 I'm about to play the first single from
            Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first
            single from Cruel Winter also to Kim’s hair and makeup Lorraine
            jewelry and the whole style squad at Balmain and the Yeezy team.
            Thank you Anna for the invite thank you to the whole Vogue team
          </p>
        </time-line-item>
      </time-line>
    </div>
  </div>
</template>
<script>
import { TimeLine, TimeLineItem, Badge } from "@/components";
export default {
  components: {
    TimeLine,
    TimeLineItem,
    Badge
  },
  data() {
    return {
      responsive: false
    };
  },
  computed: {
    simpleTimeline() {
      if (this.responsive) {
        return "simple";
      }
      return "";
    }
  },
  methods: {
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
<style></style>
