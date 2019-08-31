<template>
  <div class="wrapper">
    <!-- Headers 1 -->
    <div class="section section-header-1 pb-0">
      <md-toolbar
        id="toolbar"
        md-elevation="0"
        class="md-absolute md-transparent"
      >
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">
              Creative Tim
            </h3>
          </div>

          <div class="md-toolbar-section-center">
            <md-list class="ml-auto">
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                Home
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                About Us
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                Products
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                Contact Us
              </md-list-item>
            </md-list>
          </div>

          <div class="md-toolbar-section-end">
            <md-button
              class="md-just-icon md-simple md-toolbar-toggle"
              :class="{ toggled: toggledClass }"
              @click="toggleNavbarMobile()"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </md-button>

            <div class="md-collapse">
              <div class="md-collapse-wrapper">
                <mobile-menu nav-mobile-section="false">
                  <!-- Here you can add your items from the section-start of your toolbar -->
                </mobile-menu>

                <md-list>
                  <md-list-item
                    href="https://twitter.com/CreativeTim"
                    target="_blank"
                  >
                    <i class="fab fa-twitter" />
                  </md-list-item>
                  <md-list-item
                    href="https://www.facebook.com/CreativeTim"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square" />
                  </md-list-item>
                  <md-list-item
                    href="https://www.instagram.com/CreativeTimOfficial"
                    target="_blank"
                  >
                    <i class="fab fa-instagram" />
                  </md-list-item>
                </md-list>
              </div>
            </div>
          </div>
        </div>
      </md-toolbar>
      <div
        class="page-header header-filter"
        :style="header('1')"
      >
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50 md-small-size-100 ml-auto text-right"
            >
              <h1 class="title">
                Forest Brings You A Safer Way To Invest
              </h1>
              <h4>
                Many people don’t invest even when they have the cash, citing
                confusion and the time it takes to weigh all the risks and
                benefits.
              </h4>
              <br>
              <md-button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                class="md-success md-lg"
                target="_blank"
              >
                <i class="fas fa-ticket-alt" />
                <span>Invest Now</span>
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Headers 1 -->

    <!-- Headers 2 -->
    <div class="section section-header-2 pt-0 pb-0">
      <md-toolbar
        id="toolbar"
        md-elevation="0"
        class="md-absolute md-transparent"
      >
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">
              Creative Tim
            </h3>
          </div>

          <div class="md-toolbar-section-center">
            <md-list class="ml-auto">
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                Home
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                About Us
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                Products
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                target="_blank"
              >
                Contact Us
              </md-list-item>
            </md-list>
          </div>

          <div class="md-toolbar-section-end">
            <md-button
              class="md-just-icon md-simple md-toolbar-toggle"
              :class="{ toggled: toggledClass }"
              @click="toggleNavbarMobile()"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </md-button>

            <div class="md-collapse">
              <div class="md-collapse-wrapper">
                <mobile-menu nav-mobile-section="false">
                  <!-- Here you can add your items from the section-start of your toolbar -->
                </mobile-menu>

                <md-list>
                  <md-list-item
                    href="https://twitter.com/CreativeTim"
                    target="_blank"
                  >
                    <i class="fab fa-twitter" />
                  </md-list-item>
                  <md-list-item
                    href="https://www.facebook.com/CreativeTim"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-square" />
                  </md-list-item>
                  <md-list-item
                    href="https://www.instagram.com/CreativeTimOfficial"
                    target="_blank"
                  >
                    <i class="fab fa-instagram" />
                  </md-list-item>
                </md-list>
              </div>
            </div>
          </div>
        </div>
      </md-toolbar>
      <div
        class="page-header header-filter"
        :style="header('2')"
      >
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 md-xlarge-size-80 mx-auto text-center"
            >
              <h1 class="title">
                The Road To Disrupt: The Final Steps
              </h1>
              <h4>
                This is it for the 30 startups involved with Startup
                Battlefield. It’s all on the line and the companies are about to
                see who will take home $50,000 and the Disrupt Cup.
              </h4>
            </div>
            <div class="md-layout-item md-size-66 md-small-100 mx-auto">
              <md-card class="md-card-form-horizontal">
                <md-card-content>
                  <form
                    action=""
                    method=""
                  >
                    <div class="md-layout">
                      <div class="md-layout-item md-size-25 md-small-size-100">
                        <md-field>
                          <md-input
                            v-model="companyName"
                            placeholder="Company Name"
                          />
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-25 md-small-size-100">
                        <md-field>
                          <md-input
                            v-model="companyEmail"
                            placeholder="Company Email"
                          />
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-25 md-small-size-100">
                        <md-field>
                          <md-input
                            v-model="companyPassword"
                            placeholder="Company Password"
                          />
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-25 md-small-size-100">
                        <md-button
                          class="md-success md-block"
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
    <!-- end Headers 2 -->

    <!-- Headers 3 -->
    <div class="section section-header-3 pt-0 pb-0">
      <md-toolbar
        id="toolbar"
        md-elevation="0"
        class="md-absolute md-transparent"
      >
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">
              Creative Tim
            </h3>
          </div>

          <div class="md-toolbar-section-end">
            <md-button
              class="md-just-icon md-simple md-toolbar-toggle"
              :class="{ toggled: toggledClass }"
              @click="toggleNavbarMobile()"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </md-button>

            <div class="md-collapse">
              <div class="md-collapse-wrapper">
                <mobile-menu nav-mobile-section="false">
                  <!-- Here you can add your items from the section-start of your toolbar -->
                </mobile-menu>

                <md-list>
                  <md-list-item
                    href="javascript:void(0)"
                    target="_blank"
                  >
                    Home
                  </md-list-item>
                  <md-list-item
                    href="javascript:void(0)"
                    target="_blank"
                  >
                    About Us
                  </md-list-item>
                  <md-list-item
                    href="javascript:void(0)"
                    target="_blank"
                  >
                    Products
                  </md-list-item>
                  <md-list-item
                    href="javascript:void(0)"
                    target="_blank"
                  >
                    Contact Us
                  </md-list-item>
                </md-list>
              </div>
            </div>
          </div>
        </div>
      </md-toolbar>
      <el-carousel
        indicator-position="none"
        class="no-border no-height"
        trigger="click"
        :interval="5000"
      >
        <el-carousel-item>
          <div
            class="page-header header-filter"
            :style="header('3')"
          >
            <div class="container">
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-66 md-small-size-100 text-left"
                >
                  <h1 class="title">
                    There Will Be Blood-Red Trees
                  </h1>
                  <h4>
                    For weeks now, Romans have been breathlessly awaiting the
                    presentation of the Italian capital’s official Christmas
                    tree, a year after the resounding social media debacle that
                    felled last year’s fir.
                  </h4>
                  <br>
                  <div class="buttons">
                    <md-button
                      href="javascript:void(0)"
                      class="md-danger md-lg"
                    >
                      Read More
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-twitter md-simple md-white md-just-icon"
                    >
                      <i class="fab fa-twitter" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-simple md-white md-just-icon"
                    >
                      <i class="fab fa-facebook-square" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-simple md-white md-just-icon"
                    >
                      <i class="fab fa-get-pocket" />
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div
            class="page-header header-filter"
            :style="header('4')"
          >
            <div class="container">
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
                >
                  <h1 class="title">
                    Material Kit PRO
                  </h1>
                  <h4>
                    While the wildfire, known as the Woolsey Fire, raged through
                    the slopes and canyons over the next two weeks, scorching
                    over 1,500 buildings and killing three people, park rangers
                    in the Santa Monica Mountains.
                  </h4>
                  <br>
                  <h6>Connect with us on:</h6>
                  <div class="buttons">
                    <md-button
                      href="javascript:void(0)"
                      class="md-twitter md-simple md-white md-lg md-just-icon ml-auto"
                    >
                      <i class="fab fa-twitter" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-facebook md-simple md-white md-lg md-just-icon"
                    >
                      <i class="fab fa-facebook-square" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-google md-simple md-white md-lg md-just-icon"
                    >
                      <i class="fab fa-google-plus-g" />
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-instagram md-simple md-white md-lg md-just-icon mr-auto"
                    >
                      <i class="fab fa-instagram" />
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div
            class="page-header header-filter"
            :style="header('5')"
          >
            <div class="container">
              <div class="md-layout">
                <div
                  class="md-layout-item md-size-66 md-small-size-100 ml-auto text-right"
                >
                  <h1 class="title">
                    Mountain Dew throwback bring real sugar back to sodas once
                    again
                  </h1>
                  <h4>
                    They’re baaaack! I just spotted the greatest beverages on
                    Earth in my local Rite Aid while shopping for New Year’s Eve
                    refreshments.
                  </h4>
                  <br>
                  <div class="buttons">
                    <md-button
                      href="javascript:void(0)"
                      class="md-white md-simple md-lg ml-auto"
                    >
                      <md-icon>share</md-icon> Share Offer
                    </md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-danger md-lg"
                    >
                      <md-icon>shopping_cart</md-icon> Shop Now
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- end Headers 3 -->
  </div>
</template>

<script>
export default {
  name: "Headers",
  data() {
    return {
      companyName: null,
      companyEmail: null,
      companyPassword: null,
      toggledClass: false,
      headerImages: {
        Image1: require("@/assets/img/bg12.jpg"),
        Image2: require("@/assets/img/examples/office2.jpg"),
        Image3: require("@/assets/img/dg1.jpg"),
        Image4: require("@/assets/img/dg2.jpg"),
        Image5: require("@/assets/img/dg3.jpg")
      }
    };
  },
  methods: {
    header(nr) {
      return {
        backgroundImage: `url(${this.headerImages[`Image${nr}`]})`
      };
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    }
  }
};
</script>

<style lang="scss">
.buttons {
  display: flex;
  align-items: center;
}

#headers {
  .el-carousel__container {
    height: 100vh !important;
  }
  .el-carousel {
    border-radius: 0 !important;
  }
}

.text-right {
  text-align: right;
}

.border-radius-0 {
  border-radius: 0;
}

.pb-0 {
  padding-bottom: 0 !important;
}
.pt-0 {
  padding-top: 0 !important;
}

@media all and (max-width: 960px) {
  .md-card-form-horizontal .md-layout-item {
    margin-top: 1.5rem;
  }
}
</style>
