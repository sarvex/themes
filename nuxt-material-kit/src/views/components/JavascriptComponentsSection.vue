<template>
  <div class="wrapper">
    <div id="javascriptComponents">
      <div class="title">
        <h2>Javascript components</h2>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100">
          <div class="title">
            <h3>Modal</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-xsmall-size-100">
              <md-button
                class="md-round md-block"
                @click="classicModal = true"
              >
                <md-icon>library_books</md-icon> Classic
              </md-button>
              <div
                class="modal modal-bg"
                :class="{ show: classicModal }"
              >
                <modal
                  v-if="classicModal"
                  @close="classicModal = false"
                >
                  <template slot="header">
                    <h4 class="modal-title">
                      Modal Title
                    </h4>
                    <md-button
                      class="md-simple md-close md-just-icon md-round modal-default-button"
                      @click="classicModal = false"
                    >
                      <md-icon>clear</md-icon>
                    </md-button>
                  </template>

                  <template slot="body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth. Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                  </template>

                  <template slot="footer">
                    <md-button class="md-simple">
                      Nice Button
                    </md-button>
                    <md-button
                      class="md-danger md-simple"
                      @click="classicModal = false"
                    >
                      Close
                    </md-button>
                  </template>
                </modal>
              </div>
            </div>
            <div class="md-layout-item md-size-33 md-xsmall-size-100">
              <md-button
                class="md-round md-block"
                @click="noticeModal = true"
              >
                <md-icon>info_outline</md-icon> Notice Modal
              </md-button>
              <div
                class="modal modal-bg"
                :class="{ show: noticeModal }"
              >
                <modal
                  v-if="noticeModal"
                  @close="noticeModal = false"
                >
                  <template slot="header">
                    <h4 class="modal-title">
                      How Do You Become An Affiliate?
                    </h4>
                    <md-button
                      class="md-simple md-close md-just-icon md-round modal-default-button"
                      @click="noticeModal = false"
                    >
                      <md-icon>clear</md-icon>
                    </md-button>
                  </template>

                  <template slot="body">
                    <div class="instruction">
                      <div class="md-layout">
                        <div class="md-layout-item md-size-66">
                          <strong>1. Register</strong>
                          <p class="description">
                            The first step is to create an account at
                            <a
                              href="https://www.creative-tim.com/"
                            >Creative Tim</a>. You can choose a social network or go for the
                            classic version, whatever works best for you.
                          </p>
                        </div>
                        <div class="md-layout-item">
                          <div class="picture">
                            <img
                              :src="registerImg"
                              alt="Thumbnail Image"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="instruction">
                      <div class="md-layout">
                        <div class="md-layout-item md-size-66">
                          <strong>2. Apply</strong>
                          <p class="description">
                            The first step is to create an account at
                            <a
                              href="https://www.creative-tim.com/"
                            >Creative Tim</a>. You can choose a social network or go for the
                            classic version, whatever works best for you.
                          </p>
                        </div>
                        <div class="md-layout-item">
                          <div class="picture">
                            <img
                              :src="applyImg"
                              alt="Thumbnail Image"
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      If you have more questions, don't hesitate to contact us
                      or send us a tweet @creativetim. We're here to help!
                    </p>
                  </template>

                  <template slot="footer">
                    <md-button class="md-info md-round">
                      Sound Good
                    </md-button>
                  </template>
                </modal>
              </div>
            </div>
            <div class="md-layout-item md-size-33 md-xsmall-size-100">
              <md-button
                class="md-round md-block"
                @click="smallAlert = true"
              >
                <md-icon>notifications</md-icon> Small Alert
              </md-button>
              <div
                class="modal modal-bg"
                :class="{ show: smallAlert }"
              >
                <modal
                  v-if="smallAlert"
                  type="modal-small"
                  @close="smallAlert = false"
                >
                  <template slot="header">
                    <md-button
                      class="md-simple md-close md-just-icon md-round modal-default-button"
                      @click="smallAlert = false"
                    >
                      <md-icon>clear</md-icon>
                    </md-button>
                  </template>

                  <template slot="body">
                    <h5>Are you sure you want to do this?</h5>
                  </template>

                  <template slot="footer">
                    <div class="justify-content-center d-flex">
                      <md-button
                        class="md-simple md-round"
                        @click="smallAlert = false"
                      >
                        Never Mind
                      </md-button>
                      <md-button class="md-success md-simple">
                        Yes
                      </md-button>
                    </div>
                  </template>
                </modal>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <md-button
                class="md-round md-block"
                @click="loginModal = true"
              >
                <md-icon>account_circle</md-icon> Login
              </md-button>
              <div
                class="modal modal-bg"
                :class="{ show: loginModal }"
              >
                <modal
                  v-if="loginModal"
                  modal-with-card
                  header-card-color="green"
                  type="modal-login"
                  card-classes="md-card-login"
                  @close="loginModal = false"
                >
                  <template slot="header">
                    <md-card-header class="md-card-header-green">
                      <md-button
                        class="md-simple md-white md-close md-just-icon md-round modal-default-button"
                        @click="loginModal = false"
                      >
                        <md-icon>clear</md-icon>
                      </md-button>
                      <h4 class="card-title">
                        Login
                      </h4>
                      <div class="social-line">
                        <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple md-white"
                        >
                          <i class="fab fa-facebook-square" />
                        </md-button>
                        <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple md-white"
                        >
                          <i class="fab fa-twitter" />
                        </md-button>
                        <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple md-white"
                        >
                          <i class="fab fa-google-plus-g" />
                        </md-button>
                      </div>
                    </md-card-header>
                  </template>

                  <template slot="body">
                    <p
                      slot="description"
                      class="description"
                    >
                      Or Be Classical
                    </p>
                    <md-field
                      slot="inputs"
                      class="md-form-group"
                    >
                      <md-icon>face</md-icon>
                      <label>First Name...</label>
                      <md-input v-model="firstname" />
                    </md-field>
                    <md-field
                      slot="inputs"
                      class="md-form-group"
                    >
                      <md-icon>email</md-icon>
                      <label>Email...</label>
                      <md-input
                        v-model="email"
                        type="email"
                      />
                    </md-field>
                    <md-field
                      slot="inputs"
                      class="md-form-group"
                    >
                      <md-icon>lock_outline</md-icon>
                      <label>Password...</label>
                      <md-input v-model="password" />
                    </md-field>
                  </template>

                  <template slot="footer">
                    <md-button
                      href="javascript:void(0)"
                      class="md-simple md-success md-lg"
                    >
                      Get Started
                    </md-button>
                  </template>
                </modal>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <md-button
                class="md-round md-block"
                @click="signupModal = true"
              >
                <md-icon>assignment</md-icon> Signup
              </md-button>
              <div
                class="modal modal-bg"
                :class="{ show: signupModal }"
              >
                <modal
                  v-if="signupModal"
                  modal-with-card
                  type="modal-signup"
                  card-classes="md-card-signup"
                  @close="signupModal = false"
                >
                  <template slot="header">
                    <md-button
                      class="md-simple md-close md-just-icon md-round modal-default-button"
                      @click="signupModal = false"
                    >
                      <md-icon>clear</md-icon>
                    </md-button>
                    <h3 class="title text-center">
                      Register
                    </h3>
                  </template>

                  <template slot="body">
                    <div class="md-layout">
                      <div
                        slot="content-left"
                        class="md-layout-item md-size-40 md-medium-size-50 md-small-size-100 ml-auto"
                      >
                        <div
                          v-for="item in contentLeft"
                          :key="item.title"
                          class="info info-horizontal"
                        >
                          <div :class="`icon ${item.colorIcon}`">
                            <md-icon>{{ item.icon }}</md-icon>
                          </div>
                          <div class="description">
                            <h4 class="info-title">
                              {{ item.title }}
                            </h4>
                            <p class="description">
                              {{ item.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        slot="content-right"
                        class="md-layout-item md-size-40 md-medium-size-50 md-small-size-100 mr-auto"
                      >
                        <div class="social-line text-center">
                          <md-button class="md-just-icon md-round md-twitter">
                            <i class="fab fa-twitter" />
                          </md-button>
                          <md-button class="md-just-icon md-round md-dribbble">
                            <i class="fab fa-dribbble" />
                          </md-button>
                          <md-button class="md-just-icon md-round md-facebook">
                            <i class="fab fa-facebook-f" />
                          </md-button>
                          <h4 class="mt-3">
                            or be classical
                          </h4>
                        </div>
                        <form>
                          <md-field
                            v-for="item in inputs"
                            :key="item.name"
                            class="md-form-group"
                          >
                            <md-icon>{{ item.icon }}</md-icon>
                            <label>{{ item.name }}</label>
                            <md-input
                              :v-model="item.nameAttr"
                              :type="item.type"
                              autocomplete="current-password"
                            />
                          </md-field>
                          <md-checkbox
                            v-model="boolean"
                          >
                            I agree to the
                            <a>terms and conditions</a>.
                          </md-checkbox>
                          <div class="button-container justify-content-center">
                            <md-button
                              href="javascript:void(0)"
                              class="md-success md-round mt-3"
                            >
                              Get Started
                            </md-button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </template>
                </modal>
              </div>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66">
              <div class="title">
                <h3>DatePicker</h3>
              </div>

              <md-datepicker v-model="dateLabel">
                <label>With Label</label>
              </md-datepicker>

              <md-datepicker
                v-model="dateClose"
                md-immediately
              >
                <label>Close on Select</label>
              </md-datepicker>

              <md-datepicker v-model="dateSelected">
                <label>Date Selected</label>
              </md-datepicker>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-small-size-100">
          <div class="title">
            <h3>Popovers</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <v-popover
                offset="8"
                placement="left"
              >
                <md-button>On left</md-button>

                <template slot="popover">
                  <h3 class="popover-header">
                    Popover on left
                  </h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
              <v-popover
                offset="4"
                placement="top"
              >
                <md-button>On top</md-button>

                <template slot="popover">
                  <h3 class="popover-header">
                    Popover on top
                  </h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
              <v-popover
                offset="4"
                placement="bottom"
              >
                <md-button>On bottom</md-button>

                <template slot="popover">
                  <h3 class="popover-header">
                    Popover on bottom
                  </h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
              <v-popover
                offset="8"
                placement="right"
              >
                <md-button>On right</md-button>

                <template slot="popover">
                  <h3 class="popover-header">
                    Popover on right
                  </h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
            </div>
          </div>
          <div
            id="tooltips"
            class="md-layout"
          >
            <div class="md-layout-item">
              <div class="title">
                <h3>Tooltips</h3>
              </div>

              <md-button>
                on left
                <md-tooltip md-direction="left">
                  Tooltip on left
                </md-tooltip>
              </md-button>

              <md-button>
                on top
                <md-tooltip md-direction="top">
                  Tooltip on top
                </md-tooltip>
              </md-button>

              <md-button>
                on bottom
                <md-tooltip md-direction="bottom">
                  Tooltip on bottom
                </md-tooltip>
              </md-button>
              <md-button>
                on right
                <md-tooltip md-direction="right">
                  Tooltip on right
                </md-tooltip>
              </md-button>
            </div>
          </div>
        </div>
      </div>
      <br>

      <div class="title">
        <h3>Collapse</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-small-size-100">
          <collapse
            :active-tab="1"
            :collapse="[
              'Collapsible Group Item #1',
              'Collapsible Group Item #2',
              'Collapsible Group Item #3'
            ]"
            icon="keyboard_arrow_down"
            color-collapse="success"
          >
            <template slot="md-collapse-pane-1">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </p>
            </template>
            <template slot="md-collapse-pane-2">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </p>
            </template>
            <template slot="md-collapse-pane-3">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </p>
            </template>
          </collapse>
        </div>
      </div>

      <br>

      <div class="title">
        <h3>File Uploader</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-33 md-xsmall-size-100">
          <h4>Regular Image</h4>
          <file-upload type="image-regular" />
        </div>
        <div class="md-layout-item md-size-33 md-xsmall-size-100">
          <h4>Avatar Image</h4>
          <file-upload type="image-circle" />
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100">
          <h4>Simple Material Inputs</h4>
          <file-upload
            type="input"
            placeholder="Simple Chooser.."
            input-name="fileSimple"
          />
          <file-upload
            type="input"
            placeholder="Single File"
            input-name="fileSimple2"
            btn-icon="attach_file"
            with-button
          />
          <file-upload
            type="input"
            multiple
            placeholder="Multiple File"
            input-name="fileMultiple"
            btn-icon="attach_file"
            with-button
          />
        </div>
      </div>

      <br>
      <div class="title">
        <h3>Carousel</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
          <md-card>
            <el-carousel
              trigger="click"
              :interval="5000"
            >
              <el-carousel-item
                v-for="item in carousel"
                :key="item.image"
              >
                <h4 class="carousel-caption">
                  <md-icon>location_on</md-icon>
                  {{ item.title }}
                </h4>
                <img
                  :src="item.image"
                  alt=""
                >
              </el-carousel-item>
            </el-carousel>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, FileUpload, Collapse } from "@/components";

export default {
  components: {
    Modal,
    Collapse,
    FileUpload
  },
  data() {
    return {
      classicModal: false,
      noticeModal: false,
      smallAlert: false,
      loginModal: false,
      signupModal: false,
      firstname: null,
      email: null,
      password: null,
      boolean: null,
      dateLabel: null,
      dateSelected: new Date("2018/10/2"),
      dateClose: null,
      registerImg: require("@/assets/img/dg1.jpg"),
      applyImg: require("@/assets/img/dg2.jpg"),
      carousel: [
        {
          image: require("@/assets/img/nature-2.jpg"),
          title: "Somewhere Beyond, United States"
        },
        {
          image: require("@/assets/img/nature.jpg"),
          title: "Yellowstone National Park, United States"
        },
        {
          image: require("@/assets/img/nature-3.jpg"),
          title: "National Park, United States"
        }
      ],
      contentLeft: [
        {
          colorIcon: "icon-success",
          icon: "timeline",
          title: "Marketing",
          description:
            "We've created the marketing campaign of the website. It was a very interesting collaboration."
        },

        {
          colorIcon: "icon-danger",
          icon: "code",
          title: "Fully Coded in HTML5",
          description:
            "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
        },

        {
          colorIcon: "icon-info",
          icon: "group",
          title: "Built Audience",
          description:
            "There is also a Fully Customizable CMS Admin Dashboard for this product."
        }
      ],
      inputs: [
        {
          icon: "face",
          name: "First Name...",
          nameAttr: "firstname",
          type: "text"
        },

        {
          icon: "email",
          name: "Email...",
          nameAttr: "email",
          type: "email"
        },

        {
          icon: "lock_outline",
          name: "Password..",
          nameAttr: "password",
          type: "password"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  width: 100%;
}
.justify-content-center {
  justify-content: center;
}

.button-container .mt-3 {
  margin-top: 3rem;
}
</style>
