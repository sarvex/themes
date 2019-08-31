<template>
  <div class="wrapper">
    <!-- Team 1 -->
    <div class="section section-team-1">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              Our Awesome Team 1
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-25 md-small-size-100">
            <profile-card
              card-plain
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-muted">
                  Ceo/Co-founder
                </h6>
                <p class="card-description">
                  And I love you like Kanye loves Kanye. We need to restart the
                  human foundation.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <profile-card
              card-plain
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Tania Andrew
                </h4>
                <h6 class="card-category text-muted">
                  Designer
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation. And I love you like Kanye loves Kanye.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-simple"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <profile-card
              card-plain
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile3"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Christiana Mike
                </h4>
                <h6 class="card-category text-muted">
                  Web Developer
                </h6>
                <p class="card-description">
                  I love you like Kanye loves Kanye. Don't be scared of the
                  truth because we need to restart the human foundation.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-25 md-small-size-100">
            <profile-card
              card-plain
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile.cardProfile4"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Rebecca Stormvile
                </h4>
                <h6 class="card-category text-muted">
                  Web Developer
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fab fa-google" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Team 1 -->

    <!-- Team 2 -->
    <div class="section section-team-2">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-medium-size-100 mx-auto text-center"
          >
            <h2 class="title">
              The Executive Team 2
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile2.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-muted">
                  Managing Partner
                </h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-round"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile2.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  George West
                </h4>
                <h6 class="card-category text-muted">
                  Backend Hacker
                </h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-round"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-round"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile2.cardProfile3"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Gina Andrew
                </h4>
                <h6 class="card-category text-muted">
                  PHOTOGRAPHER
                </h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Team 2 -->

    <!-- Team 3 -->
    <div class="section section-team-3">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              The Executive Team 3
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-muted">
                  Founder
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Kendall Andrew
                </h4>
                <h6 class="card-category text-muted">
                  GRAPHIC DESIGNER
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-simple"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile3"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Gina Andrew
                </h4>
                <h6 class="card-category text-muted">
                  PHOTOGRAPHER
                </h6>
                <p class="card-description">
                  I love you like Kanye loves Kanye. Don't be scared of the
                  truth.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-youtube md-just-icon md-simple"
                >
                  <i class="fab fa-youtube" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-instagram md-just-icon md-simple"
                >
                  <i class="fab fa-instagram" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile4"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  George West
                </h4>
                <h6 class="card-category text-muted">
                  BACKEND HACKER
                </h6>
                <p class="card-description">
                  I love you like Kanye loves Kanye. Don't be scared of the
                  truth.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-simple"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Team 3 -->

    <!-- Team 4 -->
    <div
      class="section section-team-4 section-image"
      :style="sectionTeam(team4)"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              The Executive Team 4
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-muted">
                  Ceo/Co-Founder
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-round"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile4"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  George West
                </h4>
                <h6 class="card-category text-muted">
                  Backend Hacker
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-avatar
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="cardProfile3.cardProfile3"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Gina Andrew
                </h4>
                <h6 class="card-category text-muted">
                  Web Designer
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-round"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-pinterest md-just-icon md-round"
                >
                  <i class="fab fa-pinterest" />
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Team 4 -->

    <!-- Team 5 -->
    <div
      class="section section-team-5 section-image"
      :style="sectionTeam(team5)"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h2 class="title">
              The Executive Team 5
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              team. Keep you user engaged by providing meaningful information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile1"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Alec Thompson
                </h4>
                <h6 class="card-category text-muted">
                  Founder
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile2"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Kendall Andrew
                </h4>
                <h6 class="card-category text-muted">
                  GRAPHIC DESIGNER
                </h6>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth...
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-simple md-white"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-dribbble md-just-icon md-simple md-white"
                >
                  <i class="fab fa-dribbble" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile3"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  Gina Andrew
                </h4>
                <h6 class="card-category text-muted">
                  PHOTOGRAPHER
                </h6>
                <p class="card-description">
                  I love you like Kanye loves Kanye. Don't be scared of the
                  truth.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-youtube md-just-icon md-simple md-white"
                >
                  <i class="fab fa-youtube" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-twitter md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-instagram md-just-icon md-simple md-white"
                >
                  <i class="fab fa-instagram" />
                </md-button>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <profile-card
              card-plain
              type="horizontal"
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProfile3.cardProfile4"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                  George West
                </h4>
                <h6 class="card-category text-muted">
                  BACKEND HACKER
                </h6>
                <p class="card-description">
                  I love you like Kanye loves Kanye. Don't be scared of the
                  truth.
                </p>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javascript:void(0)"
                  class="md-linkedin md-just-icon md-simple md-white"
                >
                  <i class="fab fa-linkedin" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-facebook md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javascript:void(0)"
                  class="md-google md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Team 5 -->
  </div>
</template>

<script>
import { ProfileCard } from "@/components";
export default {
  name: "Teams",
  components: {
    ProfileCard
  },
  data() {
    return {
      cardProfile: {
        cardProfile1: require("@/assets/img/faces/marc.jpg"),
        cardProfile2: require("@/assets/img/faces/kendall.jpg"),
        cardProfile3: require("@/assets/img/faces/christian.jpg"),
        cardProfile4: require("@/assets/img/faces/avatar.jpg")
      },
      cardProfile2: {
        cardProfile1: require("@/assets/img/examples/card-profile1.jpg"),
        cardProfile2: require("@/assets/img/examples/card-profile2.jpg"),
        cardProfile3: require("@/assets/img/examples/card-profile4.jpg")
      },
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/card-profile1-square.jpg"),
        cardProfile2: require("@/assets/img/faces/card-profile6-square.jpg"),
        cardProfile3: require("@/assets/img/faces/card-profile4-square.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg")
      },
      team4: require("@/assets/img/bg7.jpg"),
      team5: require("@/assets/img/examples/city.jpg")
    };
  },
  methods: {
    sectionTeam(image) {
      return {
        backgroundImage: `url(${image})`
      };
    }
  }
};
</script>

<style lang="scss"></style>
