<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="title">Pick your Color</h4>
              <md-button>Default</md-button>
              <md-button class="md-primary">Primary</md-button>
              <md-button class="md-info">Info</md-button>
              <md-button class="md-success">Success</md-button>
              <md-button class="md-warning">Warning</md-button>
              <md-button class="md-danger">Danger</md-button>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="title">Buttons with Label</h4>
              <md-button>
                <span class="md-label">
                  <md-icon class="material-icons">keyboard_arrow_left</md-icon>
                </span>
                Left
              </md-button>
              <md-button>
                Right
                <span class="md-label md-label-right">
                  <md-icon class="material-icons">keyboard_arrow_right</md-icon>
                </span>
              </md-button>
              <md-button class="md-info">
                <span class="md-label">
                  <md-icon class="material-icons">priority_high</md-icon>
                </span>
                Info
              </md-button>
              <md-button class="md-success">
                <span class="md-label">
                  <md-icon class="material-icons">check</md-icon>
                </span>
                Success
              </md-button>
              <md-button class="md-warning">
                <md-icon class="material-icons">warning</md-icon> Warning
              </md-button>
              <md-button class="md-danger">
                <md-icon class="material-icons">close</md-icon> Danger
              </md-button>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="title">Pick your Size</h4>
              <div class="button-container">
                <md-button class="md-primary md-sm">Small</md-button>
                <md-button class="md-primary">Normal</md-button>
                <md-button class="md-primary md-lg">Large</md-button>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="title">Pick your Style</h4>
              <md-button class="md-primary">Default</md-button>
              <md-button class="md-primary md-round">Round</md-button>
              <md-button class="md-primary"
                ><md-icon>favorite</md-icon> With Icon</md-button
              >
              <md-button class="md-primary md-just-icon md-round"
                ><md-icon>favorite</md-icon></md-button
              >
              <md-button class="md-primary md-simple">Simple</md-button>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="title">Pagination</h4>
              <pagination no-arrows v-model="defaultPagination" :page-count="5">
              </pagination>
              <pagination v-model="infoPagination" :page-count="3">
              </pagination>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="title">Button Group</h4>
              <div class="md-group">
                <md-button class="md-info">Left</md-button>
                <md-button class="md-info">Middle</md-button>
                <md-button class="md-info">Right</md-button>
              </div>
              <br />
              <br />
              <div class="md-group">
                <md-button class="md-round md-info">1</md-button>
                <md-button class="md-round md-info">2</md-button>
                <md-button class="md-round md-info">3</md-button>
                <md-button class="md-round md-info">4</md-button>
              </div>
              <div class="md-group">
                <md-button class="md-round md-info">5</md-button>
                <md-button class="md-round md-info">6</md-button>
                <md-button class="md-round md-info">7</md-button>
              </div>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <h4 class="title">Social buttons</h4>
            </div>
          </div>
          <div class="social-buttons">
            <div
              class="md-layout"
              v-for="item in socialButtons"
              :key="item.button"
            >
              <div
                class="md-layout-item md-size-25 md-xsmall-size-100 md-medium-size-40"
              >
                <p class="category">Default</p>
                <md-button :class="`${item.button}`">
                  <i :class="`${item.icon}`"></i> {{ item.name }}
                </md-button>
              </div>
              <div
                class="md-layout-item md-size-10 md-xsmall-size-100 md-medium-size-15"
              >
                <p class="category">&nbsp;</p>
                <md-button :class="`md-just-icon ${item.button}`">
                  <i :class="`${item.icon}`"></i>
                </md-button>
              </div>
              <div
                class="md-layout-item md-size-10 md-xsmall-size-100 md-medium-size-15"
              >
                <p class="category">&nbsp;</p>
                <md-button :class="`md-round md-just-icon ${item.button}`">
                  <i :class="`${item.icon}`"></i>
                </md-button>
              </div>
              <div
                class="md-layout-item md-size-10 md-xsmall-size-100 md-medium-size-35"
              >
                <p class="category">Neutral</p>
                <md-button :class="`md-simple md-just-icon ${item.button}`">
                  <i :class="`${item.icon}`"></i>
                </md-button>
              </div>
              <div class="md-layout-item md-size-25 md-xsmall-size-100">
                <p class="category">&nbsp;</p>
                <md-button :class="`md-simple ${item.button}`">
                  <i :class="`${item.icon}`"></i> {{ item.name }}
                </md-button>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
import { Pagination } from "@/components";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      defaultPagination: 1,
      infoPagination: 2,
      socialButtons: [
        {
          name: "connect with twitter",
          button: "md-twitter",
          icon: "fab fa-twitter"
        },
        {
          name: "share · 2.2k",
          button: "md-facebook",
          icon: "fab fa-facebook"
        },
        {
          name: "share on google+",
          button: "md-google",
          icon: "fab fa-google-plus-g"
        },
        {
          name: "connect with linkedin",
          button: "md-linkedin",
          icon: "fab fa-linkedin-in"
        },
        {
          name: "pin it · 212",
          button: "md-pinterest",
          icon: "fab fa-pinterest"
        },
        {
          name: "view on youtube",
          button: "md-youtube",
          icon: "fab fa-youtube"
        },
        {
          name: "repost",
          button: "md-tumblr",
          icon: "fab fa-tumblr-square"
        },
        {
          name: "connect with gitub",
          button: "md-github",
          icon: "fab fa-github"
        },
        {
          name: "follow us",
          button: "md-behance",
          icon: "fab fa-behance"
        },
        {
          name: "find us on dribbble",
          button: "md-dribbble",
          icon: "fab fa-dribbble"
        },
        {
          name: "repost · 232",
          button: "md-reddit",
          icon: "fab fa-reddit"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.social-buttons {
  .md-layout:not(:first-child) .category {
    display: none;
  }
}

.button-container {
  justify-content: flex-start;
}

.title {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

@media all and (max-width: 450px) {
  .button-container {
    flex-direction: column;
  }
}
</style>
