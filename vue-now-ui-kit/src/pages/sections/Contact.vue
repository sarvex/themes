<template>
  <div id="contactus" class="cd-section">
    <!--     *********    CONTACT US 1     *********      -->
    <div class="contactus-1 section-image" style="background-image: url('img/contact1.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h2 class="title">Get in Touch</h2>
            <h4 class="description">
              You need more information? Check what other persons are saying about our product. They are very happy with
              their purchase.
            </h4>
            <info-section type="primary" icon="now-ui-icons location_pin">
              <h4 class="info-title">Find us at the office</h4>
              <p class="description">
                Bld Mihail Kogalniceanu, nr. 8,
                <br />7652 Bucharest, <br />Romania
              </p>
            </info-section>

            <info-section type="primary" icon="now-ui-icons tech_mobile">
              <h4 class="info-title">Give us a ring</h4>
              <p class="description">
                Michael Jordan
                <br />+40 762 321 762 <br />Mon - Fri, 8:00-22:00
              </p>
            </info-section>
          </div>
          <div class="col-md-5 ml-auto mr-auto">
            <card type="contact" raised header-classes="text-center">
              <h4 slot="header" class="card-title">Contact Us</h4>

              <div class="row">
                <div class="col-md-6 pr-2">
                  <label>First Name</label>
                  <fg-input placeholder="First Name..." addon-left-icon="now-ui-icons users_circle-08"></fg-input>
                </div>
                <div class="col-md-6 pl-2">
                  <label>Last Name</label>
                  <fg-input placeholder="Last Name..." addon-left-icon="now-ui-icons text_caps-small"></fg-input>
                </div>
              </div>
              <div class="form-group">
                <label>Email address</label>
                <fg-input placeholder="Email Here..." addon-left-icon="now-ui-icons ui-1_email-85"></fg-input>
              </div>
              <div class="form-group">
                <label>Your message</label>
                <textarea id="message" name="message" class="form-control" rows="6"></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <n-checkbox>I'm not a robot</n-checkbox>
                </div>
                <div class="col-md-6">
                  <n-button type="primary" round class="pull-right">Send Message</n-button>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END CONTACT US 1      *********      -->
    <!--     *********    CONTACT US 2     *********      -->
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
              <fg-input placeholder="First Name..." addon-left-icon="now-ui-icons users_circle-08"></fg-input>
            </div>
            <div class="col-md-6 pl-2">
              <label>Email address</label>
              <fg-input placeholder="Email Here..." addon-left-icon="now-ui-icons users_circle-08"></fg-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <n-checkbox>I'm not a robot</n-checkbox>
            </div>
            <div class="col-md-6">
              <n-button type="primary" round class="pull-right">Send Message</n-button>
            </div>
          </div>
        </card>
      </div>
    </div>
    <!--     *********    END CONTACT US 2      *********      -->
  </div>
</template>
<script>
import { Card, Button, InfoSection, FormGroupInput, Checkbox } from '@/components'
import { Carousel, CarouselItem } from 'element-ui'
import { API_KEY } from '@/constants'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
  },
})
export default {
  components: {
    Card,
    InfoSection,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
  data() {
    return {
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
