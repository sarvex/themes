<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <signup-card>
        <h2 class="title text-center" slot="title">Register</h2>
        <div
          class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 ml-auto"
          slot="content-left"
        >
          <div
            class="info info-horizontal"
            v-for="item in contentLeft"
            :key="item.title"
          >
            <div :class="`icon ${item.colorIcon}`">
              <md-icon>{{ item.icon }}</md-icon>
            </div>
            <div class="description">
              <h4 class="info-title">{{ item.title }}</h4>
              <p class="description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 mr-auto"
          slot="content-right"
        >
          <div class="social-line text-center">
            <md-button class="md-just-icon md-round md-twitter">
              <i class="fab fa-twitter"></i>
            </md-button>
            <md-button class="md-just-icon md-round md-dribbble">
              <i class="fab fa-dribbble"></i>
            </md-button>
            <md-button class="md-just-icon md-round md-facebook">
              <i class="fab fa-facebook-f"></i>
            </md-button>
            <h4 class="mt-3">or be classical</h4>
          </div>
          <md-field
            class="md-form-group"
            v-for="item in inputs"
            :key="item.name"
          >
            <md-icon>{{ item.icon }}</md-icon>
            <label>{{ item.name }}</label>
            <md-input :v-model="item.nameAttr" :type="item.type"></md-input>
          </md-field>
          <md-checkbox v-model="boolean"
            >I agree to the <a>terms and conditions</a>.</md-checkbox
          >
          <div class="button-container">
            <md-button href class="md-success md-round mt-4" slot="footer"
              >Get Started</md-button
            >
          </div>
        </div>
      </signup-card>
    </div>
  </div>
</template>
<script>
import { SignupCard } from "@/components";
export default {
  components: {
    SignupCard
  },
  data() {
    return {
      firstname: null,
      boolean: false,
      email: null,
      password: null,
      contentLeft: [
        {
          colorIcon: "icon-success",
          icon: "timeline",
          title: "Marketing",
          description:
            "We've created the marketing campaign of the website. It was a very interesting collaboration."
        },

        {
          colorIcon: "icon-danger",
          icon: "code",
          title: "Fully Coded in HTML5",
          description:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
        },

        {
          colorIcon: "icon-info",
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
<style></style>
