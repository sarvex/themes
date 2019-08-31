<template>
  <div class="wrapper">
    <div class="page-header page-header-small header-filter" filter-color="orange">
      <parallax class="page-header-image" style="background-image: url('img/bg5.jpg')"></parallax>
      <div class="container">
        <div class="photo-container">
          <img v-lazy="'img/ryan.jpg'" alt />
        </div>
        <h3 class="title">Ryan Scheinder</h3>
        <p class="category">Photographer</p>
        <div class="content">
          <div class="social-description">
            <h2>26</h2>
            <p>Comments</p>
          </div>
          <div class="social-description">
            <h2>26</h2>
            <p>Comments</p>
          </div>
          <div class="social-description">
            <h2>48</h2>
            <p>Bookmarks</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg">Follow</a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <h3 class="title">About me</h3>
        <h5 class="description text-center">
          An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy —
          writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
          structure. An artist of considerable range.
        </h5>
        <div class="row">
          <div class="col-md-12">
            <h4 class="title text-center">My Portfolio</h4>
            <tabs pills type="primary" centered tab-nav-classes="nav-pills-just-icons">
              <tab-pane>
                <i slot="label" class="now-ui-icons design_image"></i>

                <div class="row">
                  <div class="col-md-5 ml-auto mr-auto">
                    <card
                      type="background"
                      raised
                      style="background-image: url('img/bg23.jpg')"
                      class="card-background-product"
                    >
                      <h2 class="card-title">Chair remake.</h2>
                      <p class="card-description text-white">
                        Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun,
                        flexible and rewarding way. It was a great project and I would be more than happy to do it
                        again.
                      </p>
                      <badge type="neutral">Trello</badge>
                    </card>
                  </div>
                  <div class="col-md-5">
                    <info-section
                      type="warning"
                      icon="now-ui-icons users_single-02"
                      title="Work With Any Team"
                      description="Whether it’s for work or even the next family vacation, Trello helps your team."
                    />

                    <info-section
                      type="warning"
                      icon="now-ui-icons business_chart-bar-32"
                      title="A Productivity Platform"
                      description="Integrate the apps your team already uses directly into your workflow."
                    />
                  </div>
                </div>
              </tab-pane>

              <tab-pane>
                <i slot="label" class="now-ui-icons location_world"></i>

                <div class="row">
                  <div class="col-md-5 ml-auto mr-auto">
                    <card
                      type="background"
                      raised
                      style="background-image: url('img/project8.jpg')"
                      class="card-background-product"
                    >
                      <h2 class="card-title">Social Analytics</h2>
                      <p class="card-description text-white">
                        Insight to help you create, connect, and convert. Understand Your Audience's Interests,
                        Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new
                        audiences.
                      </p>
                      <badge type="neutral">Analytics</badge>
                    </card>
                  </div>
                  <div class="col-md-5">
                    <info-section
                      type="danger"
                      icon="now-ui-icons ui-2_chat-round"
                      title="Listen to Social Conversations"
                      description="Gain access to the demographics, psychographics, and location of unique people who talk about your brand."
                    />

                    <info-section
                      type="danger"
                      icon="now-ui-icons design-2_ruler-pencil"
                      title="Social Conversions"
                      description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
                    />
                  </div>
                </div>
              </tab-pane>

              <tab-pane>
                <i slot="label" class="now-ui-icons design-2_ruler-pencil"></i>

                <div class="row">
                  <div class="col-md-5 ml-auto mr-auto">
                    <card
                      type="background"
                      raised
                      style="background-image: url('img/bg25.jpg')"
                      class="card-background-product"
                    >
                      <h2 class="card-title">Interior Redesign</h2>
                      <p class="card-description text-white">
                        Insight to help you create, connect, and convert. Understand Your Audience's Interests,
                        Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new
                        audiences.
                      </p>
                      <badge type="neutral">Interior</badge>
                    </card>
                  </div>
                  <div class="col-md-5">
                    <info-section
                      type="info"
                      icon="now-ui-icons design_palette"
                      title="Colors adjustments"
                      description="Gain access to the demographics, psychographics, and location of unique people who talk about your brand."
                    />

                    <info-section
                      type="info"
                      icon="now-ui-icons design_scissors"
                      title="Performance Clothing"
                      description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
                    />
                  </div>
                </div>
              </tab-pane>
            </tabs>
          </div>
        </div>
      </div>
    </div>

    <div class="contactus-2">
      <gmap-map id="map" class="map" :center="center" :zoom="13" :options="options" map-type-id="terrain">
        <gmap-marker :position="center"></gmap-marker>
      </gmap-map>
      <div class="col-lg-6 col-md-10">
        <card type="contact" raised header-classes="text-center">
          <h4 slot="header" class="card-title">Contact Us</h4>

          <div class="row">
            <div class="col-md-6">
              <info-section type="primary" icon="now-ui-icons tech_mobile">
                <h5 class="info-title">Give us a ring</h5>
                <p>
                  Michael Jordan
                  <br />+40 762 321 762 <br />Mon - Fri, 8:00-22:00
                </p>
              </info-section>
            </div>
            <div class="col-md-6">
              <info-section type="primary" icon="now-ui-icons location_pin">
                <h5 class="info-title">Find us at the office</h5>
                <p>
                  Bld Mihail Kogalniceanu, nr. 8,
                  <br />7652 Bucharest, <br />Romania
                </p>
              </info-section>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 pr-2">
              <label>Full name</label>
              <fg-input
                v-model="form.firstName"
                placeholder="First Name..."
                addon-left-icon="now-ui-icons users_circle-08"
              ></fg-input>
            </div>
            <div class="col-md-6 pl-2">
              <label>Email address</label>
              <fg-input
                v-model="form.email"
                placeholder="Email Here..."
                addon-left-icon="now-ui-icons users_circle-08"
              ></fg-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <n-checkbox v-model="form.notRobot">I'm not a robot</n-checkbox>
            </div>
            <div class="col-md-6">
              <n-button type="primary" round class="pull-right">Send Message</n-button>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Badge, Button, InfoSection, FormGroupInput, Card, Tabs, TabPane, Checkbox } from '@/components'
import { API_KEY } from '@/constants'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
  },
})
export default {
  name: 'ProfilePage',
  bodyClass: 'profile-page',
  components: {
    InfoSection,
    Card,
    Tabs,
    TabPane,
    Badge,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        notRobot: false,
      },
      center: {
        lat: 40.748817,
        lng: -73.985428,
      },
      options: {
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e9e9e9',
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 29,
              },
              {
                weight: 0.2,
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dedede',
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on',
              },
              {
                color: '#ffffff',
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                saturation: 36,
              },
              {
                color: '#333333',
              },
              {
                lightness: 40,
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#f2f2f2',
              },
              {
                lightness: 19,
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#fefefe',
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#fefefe',
              },
              {
                lightness: 17,
              },
              {
                weight: 1.2,
              },
            ],
          },
        ],
      },
    }
  },
}
</script>
