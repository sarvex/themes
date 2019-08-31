<template>
  <div class="wrapper">
    <!-- Projects 1 -->
    <div class="section section-projects-1">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h2 class="title">
              Some of Our Awesome Products - 1
            </h2>
            <tabs
              pills-align="center"
              :tab-active="1"
              :tab-name="[
                'All',
                'Marketing',
                'Development',
                'Productivity',
                'Web Design'
              ]"
              plain
              color-button="rose"
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
                  Productivy
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
                  <md-icon>content_copy</md-icon> View App
                </md-button>
              </template>
            </full-bg-card>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <full-bg-card :card-image="cardProject.cardProject2">
              <template slot="cardContent">
                <h6 class="card-category text-info">
                  Design
                </h6>
                <a href="javascript:void(0)">
                  <h3 class="card-title">The Sculpture Where Details Matter</h3>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <md-button
                  href="javascript:void(0)"
                  class="md-info md-round"
                >
                  <md-icon>build</md-icon> View Project
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
                  <h3 class="card-title">0 to 100.000 Customers in 6 months</h3>
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
                  <md-icon>subject</md-icon> Case Study
                </md-button>
              </template>
            </full-bg-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Projects 1 -->

    <!-- Projects 2 -->
    <div class="section section-projects-2">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h6 class="text-muted">
              Our work
            </h6>
            <h2 class="title">
              Some of Our Awesome Products - 2
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              projects. Keep you user engaged by providing meaningful
              information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              image-link="https://www.creative-tim.com/product/material-kit"
              :card-image="cardProject2.cardProject1"
            >
              <template slot="cardContent">
                <a
                  href="https://www.creative-tim.com/product/material-kit"
                  target="_blank"
                >
                  <h4 class="card-title">Material Kit Free</h4>
                </a>
                <h6 class="card-category text-muted">
                  Free UI Kit
                </h6>
                <p class="card-description">
                  Material Kit is a Free Bootstrap UI Kit with a fresh, new
                  design inspired by Google's material design. It's a great
                  pleasure to introduce to you the material concepts in an easy
                  to use and beautiful set of components.
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              image-link="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro"
              :card-image="cardProject2.cardProject2"
            >
              <template slot="cardContent">
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro"
                  target="_blank"
                >
                  <h4 class="card-title">Light Bootstrap Dashboard</h4>
                </a>
                <h6 class="card-category text-muted">
                  Premium Template
                </h6>
                <p class="card-description">
                  Light Bootstrap Dashboard PRO is a Bootstrap Admin Theme
                  designed to look simple and beautiful. Forget about boring
                  dashboards and grab yourself a copy to kickstart new project!
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="false"
              image-link="http://www.creative-tim.com/product/get-shit-done-pro"
              :card-image="cardProject2.cardProject3"
            >
              <template slot="cardContent">
                <a
                  href="http://www.creative-tim.com/product/get-shit-done-pro"
                  target="_blank"
                >
                  <h4 class="card-title">Get Shit Done Kit PRO</h4>
                </a>
                <h6 class="card-category text-muted">
                  Premium UI Kit
                </h6>
                <p class="card-description">
                  Get Shit Done Kit Pro it's a Bootstrap Kit that comes with a
                  huge number of customisable components. They are pixel
                  perfect, light and easy to use and combine with other
                  elements.
                </p>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Projects 2 -->

    <!-- Projects 3 -->
    <div class="section section-projects-3 section-dark">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h6 class="text-muted">
              Our work
            </h6>
            <h2 class="title">
              Some of Our Awesome Products - 3
            </h2>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProject3.cardProject1"
            >
              <template slot="cardContent">
                <h6 class="card-category text-muted">
                  Web Design
                </h6>
                <h4 class="card-title">
                  Famous Website Redesign
                </h4>

                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProject3.cardProject2"
            >
              <template slot="cardContent">
                <h6 class="card-category text-muted">
                  Productivity Tools
                </h6>
                <h4 class="card-title">
                  Beautiful Desktop for Designers
                </h4>

                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProject3.cardProject3"
            >
              <template slot="cardContent">
                <h6 class="card-category text-muted">
                  Android App
                </h6>
                <h4 class="card-title">
                  Analytics for Android
                </h4>

                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </template>
            </profile-card>
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
            <profile-card
              card-plain
              :shadow-normal="false"
              :no-colored-shadow="true"
              :card-image="cardProject3.cardProject4"
            >
              <template slot="cardContent">
                <h6 class="card-category text-muted">
                  Website
                </h6>
                <h4 class="card-title">
                  Behance Redesign
                </h4>

                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </template>
            </profile-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Projects 3 -->

    <!-- Projects 4 -->
    <div class="section section-projects-4">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-small-size-100 justify-content-center mx-auto text-center"
          >
            <h2 class="title">
              Some of Our Awesome Products - 4
            </h2>
            <h5 class="description">
              This is the paragraph where you can write more details about your
              projects. Keep you user engaged by providing meaningful
              information.
            </h5>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
            <full-bg-card :card-image="cardProject3.cardProject2">
              <template slot="cardContent">
                <badge type="rose">
                  Client: Apple
                </badge>

                <a href="javascript:void(0)">
                  <h2 class="card-title">Beautiful Project</h2>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </template>
            </full-bg-card>
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
            <info-areas
              info-horizontal
              icon-color="info"
              icon="format_paint"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Graphic Design
              </h4>
              <p slot="content">
                We've created the design of the website using modern
                Technologies like Sketch. It was a very interesting
                collaboration.
              </p>
            </info-areas>
            <info-areas
              info-horizontal
              icon-color="primary"
              icon="code"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Fully Coded in HTML5
              </h4>
              <p slot="content">
                We've developed the website with HTML5 and CSS3. The client has
                access to the code using GitHub.
              </p>
            </info-areas>
            <info-areas
              info-horizontal
              icon-color="danger"
              icon="dashboard"
            >
              <h4
                slot="title"
                class="info-title"
              >
                CMS Admin Dashboard
              </h4>
              <p slot="content">
                There is also a Fully Customizable CMS Admin Dashboard for this
                product.
              </p>
            </info-areas>
          </div>
        </div>
        <hr>
        <div class="md-layout">
          <div class="md-layout-item md-size-40 md-small-size-100 ml-auto">
            <info-areas
              info-horizontal
              icon-color="rose"
              icon="timeline"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Marketing
              </h4>
              <p slot="content">
                We've created the marketing campaign of the website. It was a
                very interesting collaboration.
              </p>
            </info-areas>
            <info-areas
              info-horizontal
              icon-color="success"
              icon="code"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Fully Coded in HTML5
              </h4>
              <p slot="content">
                We've developed the website with HTML5 and CSS3. The client has
                access to the code using GitHub.
              </p>
            </info-areas>
            <info-areas
              info-horizontal
              icon-color="info"
              icon="group"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Build Audience
              </h4>
              <p slot="content">
                There is also a Fully Customizable CMS Admin Dashboard for this
                product.
              </p>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-40 md-small-size-100 mr-auto">
            <full-bg-card :card-image="cardProject4.cardProject1">
              <template slot="cardContent">
                <badge type="rose">
                  Client: Dj Khaled
                </badge>

                <a href="javascript:void(0)">
                  <h2 class="card-title">Another One</h2>
                </a>
                <p class="card-description">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </template>
            </full-bg-card>
          </div>
        </div>
      </div>
    </div>
    <!-- end Projects 4 -->
  </div>
</template>

<script>
import { Tabs, FullBgCard, InfoAreas, Badge, ProfileCard } from "@/components";

export default {
  name: "Projects",
  components: {
    Tabs,
    FullBgCard,
    ProfileCard,
    InfoAreas,
    Badge
  },
  data() {
    return {
      cardProject: {
        cardProject1: require("@/assets/img/examples/office2.jpg"),
        cardProject2: require("@/assets/img/examples/card-blog3.jpg"),
        cardProject3: require("@/assets/img/examples/card-project6.jpg")
      },
      cardProject2: {
        cardProject1:
          "https://s3.amazonaws.com/creativetim_bucket/products/38/original/opt_mk_thumbnail.jpg",
        cardProject2:
          "https://s3.amazonaws.com/creativetim_bucket/products/34/original/opt_lbd_pro_thumbnail.jpg",
        cardProject3:
          "http://s3.amazonaws.com/creativetim_bucket/products/26/original/opt_gsdk_new_thumbnail.jpg"
      },
      cardProject3: {
        cardProject1: require("@/assets/img/examples/card-project1.jpg"),
        cardProject2: require("@/assets/img/examples/card-project2.jpg"),
        cardProject3: require("@/assets/img/examples/card-project3.jpg"),
        cardProject4: require("@/assets/img/examples/card-project4.jpg")
      },
      cardProject4: {
        cardProject1: require("@/assets/img/examples/card-project5.jpg")
      }
    };
  }
};
</script>

<style lang="css"></style>
