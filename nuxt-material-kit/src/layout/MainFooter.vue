<template>
  <footer
    class="footer"
    :class="{
      [`footer-${type}`]: type,
      [`footer-${size}`]: size
    }"
    :data-background-color="backgroundColor"
  >
    <template
      v-if="$route.name !== 'ecommerce-page' && $route.name !== 'presentation'"
    >
      <div class="container">
        <nav>
          <ul>
            <li>
              <a href="https://www.creative-tim.com">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/presentation">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
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
    </template>

    <template v-else-if="$route.name !== 'presentation'">
      <div class="container">
        <div class="content">
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <h5>About Us</h5>
              <p>
                Creative Tim is a startup that creates design tools that make
                the web development process faster and easier.
              </p>
              <p>
                We love the web and care deeply for how users interact with a
                digital product. We power businesses and individuals to create
                better looking web projects around the world.
              </p>
            </div>

            <div class="md-layout-item md-size-33 md-small-size-100">
              <h5>Social Feed</h5>
              <div class="social-feed">
                <div class="feed-line">
                  <i class="fab fa-twitter" />
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div class="feed-line">
                  <i class="fab fa-instagram" />
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div class="feed-line">
                  <i class="fab fa-facebook-square" />
                  <p>
                    A collection of 25 stunning sites that you can use for
                    inspiration.
                  </p>
                </div>
              </div>
            </div>

            <div class="md-layout-item md-size-33 md-small-size-100">
              <h5>Instagram Feed</h5>
              <div class="gallery-feed">
                <img
                  :src="img1"
                  class="img img-raised rounded"
                  alt=""
                >
                <img
                  :src="img2"
                  class="img img-raised rounded"
                  alt=""
                >
                <img
                  :src="img3"
                  class="img img-raised rounded"
                  alt=""
                >
                <img
                  :src="img4"
                  class="img img-raised rounded"
                  alt=""
                >

                <img
                  :src="img5"
                  class="img img-raised rounded"
                  alt=""
                >
                <img
                  :src="img6"
                  class="img img-raised rounded"
                  alt=""
                >
                <img
                  :src="img7"
                  class="img img-raised rounded"
                  alt=""
                >
                <img
                  :src="img8"
                  class="img img-raised rounded"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>

        <hr>

        <div class="flex flex-direction-row space-between">
          <nav>
            <ul>
              <li>
                <a href="javascript:void(0)">
                  Blog
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Presentation
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Discover
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Payment
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            Copyright © {{ year }} Creative Tim All Rights Reserved.
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="container flex-direction-row">
        <a
          class="footer-brand"
          href="http://www.creative-tim.com"
        >Material Kit PRO</a>
        <ul>
          <li>
            <a href="javascript:void(0)">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              About Us
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              Blog
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              Licenses
            </a>
          </li>
        </ul>

        <ul class="social-buttons">
          <li>
            <md-button
              href="https://twitter.com/CreativeTim"
              target="_blank"
              class="md-twitter md-just-icon md-simple"
            >
              <i class="fab fa-twitter" />
            </md-button>
          </li>
          <li>
            <md-button
              href="https://dribbble.com/creativetim"
              target="_blank"
              class="md-dribbble md-just-icon md-simple"
            >
              <i class="fab fa-dribbble" />
            </md-button>
          </li>
          <li>
            <md-button
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              class="md-instagram md-just-icon md-simple"
            >
              <i class="fab fa-instagram" />
            </md-button>
          </li>
        </ul>
      </div>
    </template>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      img1: require("@/assets/img/faces/card-profile6-square.jpg"),
      img2: require("@/assets/img/faces/christian.jpg"),
      img3: require("@/assets/img/faces/card-profile4-square.jpg"),
      img4: require("@/assets/img/faces/card-profile1-square.jpg"),
      img5: require("@/assets/img/faces/marc.jpg"),
      img6: require("@/assets/img/faces/kendall.jpg"),
      img7: require("@/assets/img/faces/card-profile5-square.jpg"),
      img8: require("@/assets/img/faces/card-profile2-square.jpg")
    };
  }
};
</script>
<style></style>
