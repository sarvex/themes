<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">
              About Us
            </h1>
            <h4>
              Meet the amazing team behind this project and find out more about
              how we work.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-about-description text-center pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-about-team section-team-1 pb-0">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title">
                We are nerd rockstars
              </h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
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
                :card-image="aboutTeam.aboutTeam1"
              >
                <template slot="cardContent">
                  <h4 class="card-title">
                    Alec Thompson
                  </h4>
                  <h6 class="card-category text-muted">
                    Ceo/Co-founder
                  </h6>
                  <p class="card-description">
                    And I love you like Kanye loves Kanye. We need to restart
                    the human foundation.
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
                :card-image="aboutTeam.aboutTeam2"
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
                :card-image="aboutTeam.aboutTeam3"
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
                :card-image="aboutTeam.aboutTeam4"
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
      <div class="section section-about-services section-features-2">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title">
                We build awesome products
              </h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information.
              </h5>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="gesture"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  1. Design
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    The moment you use Material Kit, you know you’ve never felt
                    anything like it. With a single use, this powerfull UI Kit
                    lets you do more than ever before.
                  </p>
                  <a href="javascript:void(0)">Find more...</a>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="build"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  2. Develop
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                  <a href="javascript:void(0)">Find more...</a>
                </div>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                info-horizontal
                icon-color="rose"
                icon="mode_edit"
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  3. Make Edits
                </h4>
                <div
                  slot="content"
                  class="description"
                >
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                  <a href="javascript:void(0)">Find more...</a>
                </div>
              </info-areas>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-about-office pb-0">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title">
                Our office is our second home
              </h2>
              <h4 class="description">
                Here are some pictures from our office. You can see the place
                looks like a palace and is fully equiped with everything you
                need to get the job done.
              </h4>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img
                class="img-raised rounded"
                alt="Raised Image"
                :src="aboutOffice.aboutOffice1"
              >
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img
                class="img-raised rounded"
                alt="Raised Image"
                :src="aboutOffice.aboutOffice2"
              >
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <img
                class="img-raised rounded"
                alt="Raised Image"
                :src="aboutOffice.aboutOffice3"
              >
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img
                class="img-raised rounded"
                alt="Raised Image"
                :src="aboutOffice.aboutOffice4"
              >
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <img
                class="img-raised rounded"
                alt="Raised Image"
                :src="aboutOffice.aboutOffice5"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="section section-about-office">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2 class="title">
                Want to work with us?
              </h2>
              <h4 class="description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will get back to you in a couple of
                hours.
              </h4>
            </div>
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <div class="md-layout">
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label>Your name</label>
                    <md-input v-model="name" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label>Your email</label>
                    <md-input v-model="email" />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100">
                  <md-field>
                    <label for="movie">Speciality</label>
                    <md-select
                      id="speciality"
                      v-model="speciality"
                      name="speciality"
                    >
                      <md-option value="fight-club">
                        I'm Designer
                      </md-option>
                      <md-option value="godfather">
                        I'm Developer
                      </md-option>
                      <md-option value="godfather-ii">
                        I'm a Hero
                      </md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-center">
                  <md-button
                    href="javascript:void(0)"
                    class="md-primary md-round mt-2"
                  >
                    Let's Talk
                  </md-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard, InfoAreas } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    ProfileCard,
    InfoAreas
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "about-us",
  data() {
    return {
      speciality: "",
      name: null,
      email: null,
      image: require("@/assets/img/bg9.jpg"),
      aboutTeam: {
        aboutTeam1: require("@/assets/img/faces/marc.jpg"),
        aboutTeam2: require("@/assets/img/faces/kendall.jpg"),
        aboutTeam3: require("@/assets/img/faces/christian.jpg"),
        aboutTeam4: require("@/assets/img/faces/avatar.jpg")
      },
      aboutOffice: {
        aboutOffice1: require("@/assets/img/examples/office2.jpg"),
        aboutOffice2: require("@/assets/img/examples/office4.jpg"),
        aboutOffice3: require("@/assets/img/examples/office3.jpg"),
        aboutOffice4: require("@/assets/img/examples/office5.jpg"),
        aboutOffice5: require("@/assets/img/examples/office1.jpg")
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 1.5rem;
}
</style>
