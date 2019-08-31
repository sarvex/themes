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
            <h2 class="title">
              A Place for Entrepreneurs to Share and Discover New Stories
            </h2>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <tabs
                pills-align="center"
                :tab-active="1"
                :tab-name="['All', 'World', 'Arts', 'Tech', 'Business']"
                plain
                color-button="success"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1" />
                <template slot="tab-pane-2" />
                <template slot="tab-pane-3" />
                <template slot="tab-pane-4" />
                <template slot="tab-pane-5" />
              </tabs>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject1">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    Worlds
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      The Best Productivity Apps on Market
                    </h3>
                  </a>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-danger md-round"
                  >
                    <md-icon>format_align_left</md-icon> Read Article
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <full-bg-card :card-image="cardProject.cardProject2">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    Business
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      Working on Wallstreet is Not So Easy
                    </h3>
                  </a>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-primary md-round"
                  >
                    <md-icon>format_align_left</md-icon> Read Article
                  </md-button>
                </template>
              </full-bg-card>
            </div>
            <div class="md-layout-item md-size-100">
              <full-bg-card :card-image="cardProject.cardProject3">
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    Marketing
                  </h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">
                      0 to 100.000 Customers in 6 months
                    </h3>
                  </a>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <md-button
                    href="javascript:void(0)"
                    class="md-warning md-round"
                  >
                    <md-icon>format_align_left</md-icon> Read Case Study
                  </md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-simple md-just-icon md-white"
                  >
                    <i class="fab fa-get-pocket" />
                    <md-tooltip md-direction="top">
                      Save to Pocket
                    </md-tooltip>
                  </md-button>
                </template>
              </full-bg-card>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <h3 class="title text-center">
            You may also be interested in
          </h3>
          <br>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <blog-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="cardBlog.cardBlog1"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-info">
                    ENTERPRISE
                  </h6>
                  <h4 class="card-title">
                    <a
                      href="javasript:void(0)"
                    >Autodesk looks to future of 3D printing with Project
                      Escher</a>
                  </h4>
                  <p class="card-description">
                    Like so many organizations these days, Autodesk is a company
                    in transition. It was until recently a traditional boxed
                    software company selling licenses.
                    <a href="javascript:void(0)">Read More</a>
                  </p>
                </template>
              </blog-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <blog-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="cardBlog.cardBlog2"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-success">
                    Startups
                  </h6>
                  <h4 class="card-title">
                    <a
                      href="javasript:void(0)"
                    >Lyft launching cross-platform service this week</a>
                  </h4>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                    <a href="javascript:void(0)">Read More</a>
                  </p>
                </template>
              </blog-card>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <blog-card
                card-plain
                :shadow-normal="false"
                :no-colored-shadow="false"
                :card-image="cardBlog.cardBlog3"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-danger">
                    <md-icon class="text-danger">
                      trending_up
                    </md-icon> Fashion
                  </h6>
                  <h4 class="card-title">
                    <a
                      href="javasript:void(0)"
                    >6 insights into the French Fashion landscape</a>
                  </h4>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                    <a href="javascript:void(0)">Read More</a>
                  </p>
                </template>
              </blog-card>
            </div>
          </div>
        </div>
      </div>
      <div
        class="section section-team-5 section-image"
        :style="headerStyle"
      >
        <div class="container">
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
                    Author of the month
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
                    Author of the week
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
          </div>
        </div>
      </div>
      <div class="section">
        <div class="subscribe-line subscribe-line-white pb-0 pt-0">
          <div class="container">
            <div class="md-layout">
              <div class="md-layout-item md-size-50 md-small-size-100">
                <h3 class="title">
                  Get Tips &amp; Tricks every Week!
                </h3>
                <p class="description">
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <div
                class="md-layout-item md-size-50 md-small-size-100 d-flex-center"
              >
                <md-card class="md-card-form-horizontal md-card-plain">
                  <md-card-content>
                    <form
                      action=""
                      method=""
                    >
                      <div class="md-layout">
                        <div
                          class="md-layout-item md-size-66 md-xsmall-size-100 md-medium-size-50"
                        >
                          <md-field class="md-form-group">
                            <md-icon>mail</md-icon>
                            <md-input
                              v-model="subscribe"
                              placeholder="Subscribe"
                            />
                          </md-field>
                        </div>
                        <div
                          class="md-layout-item md-size-33 md-medium-size-50 md-xsmall-size-100"
                        >
                          <md-button
                            class="md-primary md-round md-block"
                          >
                            Subscribe
                          </md-button>
                        </div>
                      </div>
                    </form>
                  </md-card-content>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, FullBgCard, BlogCard, ProfileCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Tabs,
    FullBgCard,
    BlogCard,
    ProfileCard
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      subscribe: null,
      image: require("@/assets/img/examples/bg-blog-posts.jpg"),
      cardProject: {
        cardProject1: require("@/assets/img/examples/office2.jpg"),
        cardProject2: require("@/assets/img/examples/blog8.jpg"),
        cardProject3: require("@/assets/img/examples/card-project6.jpg")
      },
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/card-profile1-square.jpg"),
        cardProfile2: require("@/assets/img/faces/card-profile4-square.jpg")
      },
      cardBlog: {
        cardBlog1: require("@/assets/img/bg5.jpg"),
        cardBlog2: require("@/assets/img/examples/blog5.jpg"),
        cardBlog3: require("@/assets/img/examples/blog6.jpg")
      }
    };
  }
};
</script>

<style lang="scss"></style>
