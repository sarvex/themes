<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    />
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  >
                </div>
                <div class="name">
                  <h3 class="title">
                    Carla Hortensia
                  </h3>
                  <h6>Designer</h6>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                  >
                    <i class="fab fa-dribbble" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                  >
                    <i class="fab fa-twitter" />
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                  >
                    <i class="fab fa-pinterest" />
                  </md-button>
                </div>
                <div class="follow">
                  <md-button class="md-success md-just-icon md-round">
                    <md-icon>add</md-icon>
                    <md-tooltip md-direction="top">
                      Follow this user
                    </md-tooltip>
                  </md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-active="1"
              :tab-name="['Studio', 'Work', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout work">
                  <div
                    class="md-layout-item md-size-60 md-small-size-100 mx-auto"
                  >
                    <h4 class="title">
                      Latest Collections
                    </h4>
                    <div class="md-layout collections">
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg1">
                          <template slot="cardContent">
                            <badge type="warning">
                              Spring 2016
                            </badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">Espace</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg2">
                          <template slot="cardContent">
                            <badge type="info">
                              Spring 2016
                            </badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">Portland Rose</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg3">
                          <template slot="cardContent">
                            <badge type="danger">
                              Summer 2016
                            </badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">Canberra</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                      <div class="md-layout-item md-size-50 md-small-size-100">
                        <full-bg-card :card-image="cardFullBg.fullBg4">
                          <template slot="cardContent">
                            <badge type="success">
                              Winter 2015
                            </badge>
                            <a href="javascript:void(0)">
                              <h2 class="card-title">Floralia</h2>
                            </a>
                          </template>
                        </full-bg-card>
                      </div>
                    </div>
                  </div>
                  <div
                    class="md-layout-item md-size-20 md-small-size-100 mx-auto stats"
                  >
                    <h4 class="title title-margin">
                      Stats
                    </h4>
                    <ul class="list-unstyled">
                      <li><b>60</b> Products</li>
                      <li><b>4</b> Collections</li>
                      <li><b>331</b> Influencers</li>
                      <li><b>1.2K</b> Likes</li>
                    </ul>
                    <hr>
                    <h4 class="title title-margin">
                      About his Work
                    </h4>
                    <p class="description">
                      French luxury footwear and fashion. The footwear has
                      incorporated shiny, red-lacquered soles that have become
                      his signature.
                    </p>
                    <hr>
                    <h4 class="title title-margin">
                      Focus
                    </h4>
                    <badge type="primary">
                      Footwear
                    </badge>
                    <badge type="rose">
                      Luxury
                    </badge>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile1"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Gigi Hadid
                        </h4>
                        <h6 class="card-category text-muted">
                          Model
                        </h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile2"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Marc Jacobs
                        </h4>
                        <h6 class="card-category text-muted">
                          Designer
                        </h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                </div>
                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
                    <profile-card
                      card-plain
                      type="horizontal"
                      :shadow-normal="false"
                      :no-colored-shadow="false"
                      :card-image="cardProfile3.cardProfile3"
                    >
                      <template slot="cardContent">
                        <h4 class="card-title">
                          Kendall Jenner
                        </h4>
                        <h6 class="card-category text-muted">
                          Model
                        </h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                  <div
                    class="md-layout-item md-size-40 md-small-size-100 mx-auto"
                  >
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
                          Model/Dj
                        </h6>
                        <p class="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                      </template>
                    </profile-card>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-25 md-small-size-100 ml-auto"
                  >
                    <img
                      :src="tabPane3[0].image"
                      class="rounded"
                    >
                    <img
                      :src="tabPane3[1].image"
                      class="rounded"
                    >
                  </div>
                  <div
                    class="md-layout-item md-size-25 md-small-size-100 mr-auto"
                  >
                    <img
                      :src="tabPane3[2].image"
                      class="rounded"
                    >
                    <img
                      :src="tabPane3[3].image"
                      class="rounded"
                    >
                    <img
                      :src="tabPane3[4].image"
                      class="rounded"
                    >
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, FullBgCard, ProfileCard, Badge } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Tabs,
    FullBgCard,
    ProfileCard,
    Badge
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  data() {
    return {
      image: require("@/assets/img/city-profile.jpg"),
      img: require("@/assets/img/faces/christian.jpg"),
      cardFullBg: {
        fullBg1: require("@/assets/img/examples/mariya-georgieva.jpg"),
        fullBg2: require("@/assets/img/examples/clem-onojeghuo.jpg"),
        fullBg3: require("@/assets/img/examples/olu-eletu.jpg"),
        fullBg4: require("@/assets/img/examples/floralia.jpg")
      },
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/avatar.jpg"),
        cardProfile2: require("@/assets/img/faces/marc.jpg"),
        cardProfile3: require("@/assets/img/faces/kendall.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg")
      },
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs /deep/ {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img:not(.img) {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
