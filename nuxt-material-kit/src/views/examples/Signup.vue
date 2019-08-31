<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter"
      parallax-active="false"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-80 md-small-size-100 mx-auto text-center"
          >
            <md-card class="md-card md-card-signup">
              <md-card-content>
                <h2 class="card-title text-center">
                  Register
                </h2>
                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-50 md-small-size-100 ml-auto"
                  >
                    <template v-for="item in contentLeft">
                      <info-areas
                        :key="item.title"
                        text-left
                        info-horizontal
                        :icon-color="item.colorIcon"
                        :icon="item.icon"
                      >
                        <h4
                          slot="title"
                          class="info-title"
                        >
                          {{ item.title }}
                        </h4>
                        <div
                          slot="content"
                          class="description"
                        >
                          <p>{{ item.description }}</p>
                        </div>
                      </info-areas>
                    </template>
                  </div>
                  <div
                    class="md-layout-item md-size-40 md-medium-size-50 md-small-size-100 mr-auto"
                  >
                    <div class="social-line text-center">
                      <md-button class="md-just-icon md-round md-twitter">
                        <i class="fab fa-twitter" />
                      </md-button>
                      <md-button class="md-just-icon md-round md-dribbble">
                        <i class="fab fa-dribbble" />
                      </md-button>
                      <md-button class="md-just-icon md-round md-facebook">
                        <i class="fab fa-facebook-f" />
                      </md-button>
                      <h4 class="mt-3">
                        or be classical
                      </h4>
                    </div>
                    <form>
                      <md-field
                        v-for="item in inputs"
                        :key="item.name"
                        class="md-form-group"
                      >
                        <md-icon>{{ item.icon }}</md-icon>
                        <label>{{ item.name }}</label>
                        <md-input
                          :value="item.nameAttr"
                          :v-model="item.nameAttr"
                          :type="item.type"
                          autocomplete="current-password"
                        />
                      </md-field>
                      <md-checkbox
                        v-model="boolean"
                      >
                        I agree to the
                        <a>terms and conditions</a>.
                      </md-checkbox>
                      <div class="button-container justify-content-center">
                        <md-button
                          href="javascript:void(0)"
                          class="md-success md-round mt-3"
                        >
                          Get Started
                        </md-button>
                      </div>
                    </form>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container flex-direction-row">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="https:///presentation.creative-tim.com">
                  About Us
                </a>
              </li>
              <li>
                <a href="https:///blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright">
            &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
            <a
              href="https://www.creative-tim.com/"
              target="_blank"
            >Creative Tim</a>
            for a better web.
          </div>
        </div>
      </footer>
    </parallax>
  </div>
</template>

<script>
import { InfoAreas } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    InfoAreas
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "signup-page",
  data() {
    return {
      boolean: null,
      image: require("@/assets/img/bg7.jpg"),
      year: new Date().getFullYear(),
      contentLeft: [
        {
          colorIcon: "success",
          icon: "timeline",
          title: "Marketing",
          description:
            "We've created the marketing campaign of the website. It was a very interesting collaboration."
        },

        {
          colorIcon: "danger",
          icon: "code",
          title: "Fully Coded in HTML5",
          description:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
        },

        {
          colorIcon: "info",
          icon: "group",
          title: "Built Audience",
          description:
            "There is also a Fully Customizable CMS Admin Dashboard for this product."
        }
      ],
      inputs: [
        {
          icon: "face",
          name: "First Name...",
          nameAttr: "firstname",
          type: "text"
        },

        {
          icon: "email",
          name: "Email...",
          nameAttr: "email",
          type: "email"
        },

        {
          icon: "lock_outline",
          name: "Password..",
          nameAttr: "password",
          type: "password"
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
