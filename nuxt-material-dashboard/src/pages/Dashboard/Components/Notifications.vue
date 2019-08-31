<template>
  <div>
    <div class="header text-center">
      <h3 class="title">Notifications</h3>
      <p class="category">
        Handcrafted by our friend
        <a target="_blank" href="https://github.com/mouse0270"
          >Robert McIntosh</a
        >. Please checkout the
        <a href="https://bootstrap-notify.remabledesigns.com/" target="_blank"
          >full documentation.</a
        >
      </p>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-card>
          <md-card-header>
            <h4 class="title">Notifications Style</h4>
          </md-card-header>
          <md-card-content>
            <div class="alert alert-info">
              <span>This is a plain notification</span>
            </div>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span>This is a notification with close button.</span>
            </div>
            <div
              class="alert alert-info alert-with-icon"
              data-notify="container"
            >
              <button type="button" aria-hidden="true" class="close">×</button>
              <i data-notify="icon" class="material-icons">add_alert</i>
              <span data-notify="message"
                >This is a notification with close button and icon and have many
                lines. You can see that the icon and the close button are always
                vertically aligned. This is a beautiful notification. So you
                don't have to worry about the style.</span
              >
            </div>
            <div
              class="alert alert-rose alert-with-icon"
              data-notify="container"
            >
              <button type="button" aria-hidden="true" class="close">×</button>
              <i data-notify="icon" class="material-icons">add_alert</i>
              <span data-notify="message"
                >This is a notification with close button and icon and is made
                with ".alert-rose". You can see that the icon and the close
                button are always vertically aligned. This is a beautiful
                notification. So you don't have to worry about the style.</span
              >
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-card>
          <md-card-header>
            <h4 class="title">Notification states</h4>
          </md-card-header>

          <md-card-content>
            <div class="alert alert-info">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span
                ><b> Info - </b> This is a regular notification made with
                ".alert-info"</span
              >
            </div>
            <div class="alert alert-success">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span
                ><b> Success - </b> This is a regular notification made with
                ".alert-success"</span
              >
            </div>
            <div class="alert alert-warning">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span
                ><b> Warning - </b> This is a regular notification made with
                ".alert-warning"</span
              >
            </div>
            <div class="alert alert-danger">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span
                ><b> Danger - </b> This is a regular notification made with
                ".alert-danger"</span
              >
            </div>
            <div class="alert alert-primary">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span
                ><b> Primary - </b> This is a regular notification made with
                ".alert-primary"</span
              >
            </div>
            <div class="alert alert-rose">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span
                ><b> Rose - </b> This is a regular notification made with
                ".alert-rose"</span
              >
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header>
            <h4 class="title text-center">
              Notifications Places
              <p class="category">Click to view notifications</p>
            </h4>
          </md-card-header>

          <md-card-content>
            <div class="places-buttons text-center">
              <md-button class="md-success" @click="notifyVue('top', 'left')"
                >Top Left</md-button
              >
              <md-button class="md-success" @click="notifyVue('top', 'center')"
                >Top Center</md-button
              >
              <md-button class="md-success" @click="notifyVue('top', 'right')"
                >Top Right</md-button
              >
              <md-button class="md-success" @click="notifyVue('bottom', 'left')"
                >Bottom Left</md-button
              >
              <md-button
                class="md-success"
                @click="notifyVue('bottom', 'center')"
                >Bottom Center</md-button
              >
              <md-button
                class="md-success"
                @click="notifyVue('bottom', 'right')"
                >Bottom Right</md-button
              >
            </div>

            <div class="text-center">
              <h5 class="text-center">Modals</h5>
              <md-button
                class="md-primary md-round classic-modal"
                @click="classicModal = true"
                >Classic Modal</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h4 class="modal-title">Modal Title</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided
                    to leave for the far World of Grammar.
                  </p>
                </template>

                <template slot="footer">
                  <md-button class="md-simple">Nice Button</md-button>
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide"
                    >Close</md-button
                  >
                </template>
              </modal>

              <md-button
                class="md-info md-round notice-modal"
                @click="noticeModal = true"
                >Notice Modal</md-button
              >
              <modal v-if="noticeModal" @close="noticeModalHide">
                <template slot="header">
                  <h4 class="modal-title">How Do You Become An Affiliate?</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="noticeModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <div class="instruction">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-66">
                        <strong>1. Register</strong>
                        <p class="description">
                          The first step is to create an account at
                          <a href="https://www.creative-tim.com/"
                            >Creative Tim</a
                          >. You can choose a social network or go for the
                          classic version, whatever works best for you.
                        </p>
                      </div>
                      <div class="md-layout-item">
                        <div class="picture">
                          <img :src="registerImg" alt="Thumbnail Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="instruction">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-66">
                        <strong>2. Apply</strong>
                        <p class="description">
                          The first step is to create an account at
                          <a href="https://www.creative-tim.com/"
                            >Creative Tim</a
                          >. You can choose a social network or go for the
                          classic version, whatever works best for you.
                        </p>
                      </div>
                      <div class="md-layout-item">
                        <div class="picture">
                          <img :src="applyImg" alt="Thumbnail Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    If you have more questions, don't hesitate to contact us or
                    send us a tweet @creativetim. We're here to help!
                  </p>
                </template>

                <template slot="footer">
                  <md-button class="md-info md-round" @click="noticeModalHide"
                    >Sound Good</md-button
                  >
                </template>
              </modal>

              <md-button
                class="md-rose md-round small-alert-modal"
                @click="smallAlertModal = true"
                >Small Alert Modal</md-button
              >
              <modal v-if="smallAlertModal" @close="smallAlertModalHide">
                <template slot="header">
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="smallAlertModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <p>Are you sure you want to do this?</p>
                </template>

                <template slot="footer">
                  <md-button class="md-simple" @click="smallAlertModalHide"
                    >Never Mind</md-button
                  >
                  <md-button class="md-success md-simple">Yes</md-button>
                </template>
              </modal>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "@/components";
export default {
  components: {
    Modal
  },
  props: {
    registerImg: {
      type: String,
      default: "./img/card-1.jpg"
    },
    applyImg: {
      type: String,
      default: "./img/card-2.jpg"
    }
  },
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      },
      classicModal: false,
      noticeModal: false,
      smallAlertModal: false
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "Welcome to <b>Vue Material Dashboard Pro</b> - a beautiful admin panel for every web developer.",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    },
    classicModalHide: function() {
      this.classicModal = false;
    },
    noticeModalHide: function() {
      this.noticeModal = false;
    },
    smallAlertModalHide: function() {
      this.smallAlertModal = false;
    }
  }
};
</script>
<style lang="scss">
.text-center {
  text-align: center;
}

.places-buttons + div .md-button:not(:last-child) {
  margin-right: 5px;
}
</style>
