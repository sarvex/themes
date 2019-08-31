<template>
  <div class="wrapper">
    <div id="footer-areas">
      <!-- Simple Footer With Social & Brand -->
      <footer class="footer footer-white">
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
                href="javascript:void(0)"
                target="_blank"
                class="md-dribbble md-just-icon md-simple"
              >
                <i class="fab fa-dribbble" />
              </md-button>
            </li>
            <li>
              <md-button
                href="javascript:void(0)"
                target="_blank"
                class="md-google md-just-icon md-simple"
              >
                <i class="fab fa-google-plus-g" />
              </md-button>
            </li>
          </ul>
        </div>
      </footer>
      <!-- end Simple Footer With Social & Brand -->

      <br>
      <br>

      <!-- Simple Footer -->
      <footer class="footer">
        <div class="container flex-direction-row">
          <nav>
            <ul>
              <li>
                <a href="http://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="http://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright">
            © {{ year }}, made with <md-icon>favorite</md-icon> by Creative Tim
            for a better web.
          </div>
        </div>
      </footer>
      <!-- end Simple Footer -->

      <br>
      <br>

      <!-- Black Simple Footer With Social & Brand -->
      <footer class="footer footer-black">
        <div class="container flex-direction-row">
          <a
            class="footer-brand"
            href="javascript:void(0)"
          >Material Kit PRO</a>
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

          <ul class="social-buttons">
            <li>
              <md-button
                href="https://twitter.com/CreativeTim"
                target="_blank"
                class="md-twitter md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter" />
              </md-button>
            </li>
            <li>
              <md-button
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
                class="md-facebook md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook" />
              </md-button>
            </li>
            <li>
              <md-button
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
                class="md-instagram md-just-icon md-simple md-white"
              >
                <i class="fab fa-instagram" />
              </md-button>
            </li>
          </ul>
        </div>
      </footer>
      <!-- end Black Simple Footer With Social & Brand -->

      <br>
      <br>

      <!-- Big Footer -->
      <footer class="footer footer-black footer-big">
        <div class="container">
          <div class="content">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
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

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <h5>Social Feed</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <i class="fab fa-twitter" />
                    <p>
                      How to handle ethical disagreements with your clients.
                    </p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-instagram" />
                    <p>
                      The tangible benefits of designing at 1x pixel density.
                    </p>
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

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
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
      </footer>
      <!-- end Big Footer -->

      <br>
      <br>

      <!-- Big White Footer -->
      <footer class="footer footer-white footer-big">
        <div class="container">
          <div class="content">
            <div class="md-layout">
              <div
                class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
              >
                <h5>About Us</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="#pablo">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
              >
                <h5>Market</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="#pablo">
                      Sales FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Sell Goods
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Receive Payment
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Transactions Issues
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Affiliates Program
                    </a>
                  </li>
                </ul>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <h5>Social Feed</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <i class="fab fa-twitter" />
                    <p>
                      How to handle ethical disagreements with your clients.
                    </p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-instagram" />
                    <p>
                      The tangible benefits of designing at 1x pixel density.
                    </p>
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

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <h5>Follow Us</h5>
                <ul class="social-buttons">
                  <li>
                    <md-button
                      href="javascript:void(0)"
                      target="_blank"
                      class="md-twitter md-just-icon md-simple"
                    >
                      <i class="fab fa-twitter" />
                    </md-button>
                  </li>
                  <li>
                    <md-button
                      href="javascript:void(0)"
                      target="_blank"
                      class="md-facebook md-just-icon md-simple"
                    >
                      <i class="fab fa-facebook-square" />
                    </md-button>
                  </li>
                  <li>
                    <md-button
                      href="javascript:void(0)"
                      target="_blank"
                      class="md-dribbble md-just-icon md-simple"
                    >
                      <i class="fab fa-dribbble" />
                    </md-button>
                  </li>
                  <li>
                    <md-button
                      href="javascript:void(0)"
                      target="_blank"
                      class="md-google md-just-icon md-simple"
                    >
                      <i class="fab fa-google" />
                    </md-button>
                  </li>
                  <li>
                    <md-button
                      href="javascript:void(0)"
                      target="_blank"
                      class="md-instagram md-just-icon md-simple"
                    >
                      <i class="fab fa-instagram" />
                    </md-button>
                  </li>
                </ul>

                <h5>Numbers Don't Lie</h5>
                <h4>14.521 <small>Freelancers</small></h4>
                <h4>1.423.183 <small>Transactions</small></h4>
              </div>
            </div>
          </div>

          <hr>

          <div class="copyright">
            Copyright © {{ year }} Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!-- end Big White Footer -->

      <br>
      <br>

      <!-- Big White Footer V2 -->
      <footer class="footer footer-white footer-big">
        <div class="container">
          <div class="content">
            <div class="md-layout">
              <div
                class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100"
              >
                <a href="javascript:void(0)"><h5>Material Kit PRO</h5></a>
                <p>
                  Probably the best UI Kit in the world! We know you've been
                  waiting for it, so don't be shy!
                </p>
              </div>
              <div
                class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
              >
                <h5>About</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="javascript:void(0)">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
              >
                <h5>Market</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="javascript:void(0)">
                      Sales FAQ
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Sell Goods
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Receive Payment
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Transactions Issues
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="md-layout-item md-medium-size-15 md-large-size-15 md-small-size-100"
              >
                <h5>Legal</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="javascript:void(0)">
                      Transactions FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Licenses
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="md-layout-item md-medium-size-25 md-large-size-25 md-small-size-100"
              >
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
                <form
                  class="form-newsletter"
                  action=""
                  method=""
                >
                  <div class="md-layout">
                    <div class="md-layout-item md-large-size-66 medium-size-50">
                      <md-field>
                        <md-input
                          v-model="email"
                          placeholder="Your Email.."
                        />
                      </md-field>
                    </div>
                    <div class="md-layout-item md-large-size-33 medium-size-50">
                      <md-button
                        class="md-primary md-just-icon md-block"
                      >
                        <md-icon>mail</md-icon>
                      </md-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <hr>

          <ul class="social-buttons">
            <li>
              <md-button
                href="javascript:void(0)"
                target="_blank"
                class="md-twitter md-just-icon md-simple"
              >
                <i class="fab fa-twitter" />
              </md-button>
            </li>
            <li>
              <md-button
                href="javascript:void(0)"
                target="_blank"
                class="md-facebook md-just-icon md-simple"
              >
                <i class="fab fa-facebook" />
              </md-button>
            </li>
            <li>
              <md-button
                href="javascript:void(0)"
                target="_blank"
                class="md-dribbble md-just-icon md-simple"
              >
                <i class="fab fa-dribbble" />
              </md-button>
            </li>
            <li>
              <md-button
                href="javascript:void(0)"
                target="_blank"
                class="md-google md-just-icon md-simple"
              >
                <i class="fab fa-google" />
              </md-button>
            </li>
            <li>
              <md-button
                href="javascript:void(0)"
                target="_blank"
                class="md-youtube md-just-icon md-simple"
              >
                <i class="fab fa-youtube" />
              </md-button>
            </li>
          </ul>

          <div class="copyright">
            Copyright © {{ year }} Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!-- end Big White Footer V2 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("@/assets/img/faces/card-profile6-square.jpg"),
      img2: require("@/assets/img/faces/christian.jpg"),
      img3: require("@/assets/img/faces/card-profile4-square.jpg"),
      img4: require("@/assets/img/faces/card-profile1-square.jpg"),
      img5: require("@/assets/img/faces/marc.jpg"),
      img6: require("@/assets/img/faces/kendall.jpg"),
      img7: require("@/assets/img/faces/card-profile5-square.jpg"),
      img8: require("@/assets/img/faces/card-profile2-square.jpg"),
      email: null
    };
  },
  computed: {
    year() {
      const year = new Date().getFullYear();
      return year;
    }
  }
};
</script>
