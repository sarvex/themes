<template>
  <div class="wrapper">
    <div id="buttons">
      <div class="title">
        <h3>
          Buttons <br>
          <small>Pick your style</small>
        </h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto">
          <md-button class="md-success">
            Default
          </md-button>
          <md-button class="md-success md-round">
            Round
          </md-button>
          <md-button
            class="md-success"
          >
            <md-icon>favorite</md-icon> With Icon
          </md-button>
          <md-button
            class="md-success md-just-icon md-round"
          >
            <md-icon>favorite</md-icon>
          </md-button>
          <md-button class="md-success md-simple">
            Simple
          </md-button>
        </div>
      </div>
      <div class="title">
        <h3><small>Pick your size</small></h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-xsmall-size-100">
          <div class="vertical-center">
            <md-button class="md-success md-sm">
              Small
            </md-button>
            <md-button class="md-success">
              Regular
            </md-button>
            <md-button class="md-success md-lg">
              Large
            </md-button>
          </div>
        </div>
      </div>
      <div class="title">
        <h3><small>Pick your color</small></h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto">
          <md-button>Default</md-button>
          <md-button class="md-primary">
            Primary
          </md-button>
          <md-button class="md-info">
            Info
          </md-button>
          <md-button class="md-success">
            Success
          </md-button>
          <md-button class="md-warning">
            Warning
          </md-button>
          <md-button class="md-danger">
            Danger
          </md-button>
          <md-button class="md-rose">
            Rose
          </md-button>
        </div>
      </div>
    </div>
    <!-- end buttons -->
    <div class="space-50" />

    <!-- Social Buttons -->
    <div
      id="social-buttons"
      class="social-buttons-demo"
    >
      <div class="title">
        <h3>Social Buttons</h3>
      </div>
      <div
        v-for="color in colors"
        :key="color.name"
        class="md-layout"
      >
        <div
          class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100"
        >
          <h3 v-if="color.name === 'twitter'">
            <small>Default</small>
          </h3>
          <md-button
            :class="'md-' + color.name"
          >
            <i :class="'fab fa-' + color.icon" />
            {{ color.btnText }}
          </md-button>
        </div>
        <div
          class="md-layout-item md-size-10 md-small-size-10 md-xsmall-size-100"
        >
          <h3 v-if="color.name === 'twitter' && socialBtn">
            <small>&nbsp;</small>
          </h3>
          <md-button
            :class="'md-just-icon md-' + color.name"
          >
            <i :class="'fab fa-' + color.icon" />
          </md-button>
        </div>
        <div
          class="md-layout-item md-size-10 md-small-size-40 md-xsmall-size-100"
        >
          <h3 v-if="color.name === 'twitter' && socialBtn">
            <small>&nbsp;</small>
          </h3>
          <md-button
            :class="'md-just-icon md-round md-' + color.name"
          >
            <i :class="'fab fa-' + color.icon" />
          </md-button>
        </div>
        <div
          class="md-layout-item md-size-10 md-small-size-10 md-xsmall-size-100"
        >
          <h3 v-if="color.name === 'twitter'">
            <small>Simple</small>
          </h3>
          <md-button
            :class="'md-just-icon md-simple md-' + color.name"
          >
            <i :class="'fab fa-' + color.iconSquare" />
          </md-button>
        </div>
        <div
          class="md-layout-item md-size-25 md-small-size-25 md-xsmall-size-100"
        >
          <h3 v-if="color.name === 'twitter' && socialBtn">
            <small>&nbsp;</small>
          </h3>
          <md-button
            :class="'md-simple md-' + color.name"
          >
            <i :class="'fab fa-' + color.iconSquare" />
            {{ color.btnText }}
          </md-button>
        </div>
      </div>
    </div>
    <!-- end Social Buttons -->

    <!-- Inputs -->
    <div id="inputs">
      <div class="title">
        <h3>Inputs</h3>
      </div>
      <div class="md-layout">
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <md-field>
            <md-input
              v-model="initial"
              placeholder="Regular"
            />
          </md-field>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <md-field>
            <label>With Floating Label</label>
            <md-input
              v-model="floatingLabel"
              type="text"
            />
          </md-field>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <md-field class="md-valid">
            <label>Success Input</label>
            <md-input
              v-model="success"
              type="text"
            />
            <md-icon>done</md-icon>
          </md-field>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <md-field class="md-error">
            <label>Error Input</label>
            <md-input
              v-model="error"
              type="text"
            />
            <md-icon>clear</md-icon>
          </md-field>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <md-field class="md-form-group">
            <md-icon>face</md-icon>
            <md-input
              v-model="withMIcon"
              placeholder="With Material Icons"
            />
          </md-field>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <md-field class="md-form-group">
            <i class="fas fa-users" />
            <md-input
              v-model="withFaIcon"
              placeholder="With Font Awesome Icons"
            />
          </md-field>
        </div>
      </div>
    </div>
    <!-- end inputs -->

    <div class="space-50" />

    <!-- Checkboxes/Radios/Toggle -->
    <div id="checkRadios">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <div class="title">
            <h3>Checkboxes</h3>
          </div>
          <div class="flex-column">
            <md-checkbox v-model="checkbox1">
              Checked
            </md-checkbox>
            <md-checkbox v-model="checkbox2">
              Unchecked
            </md-checkbox>
            <md-checkbox
              v-model="checkbox3"
              disabled
            >
              Disabled Checked
            </md-checkbox>
            <md-checkbox
              v-model="checkbox4"
              disabled
            >
              Disabled Unchecked
            </md-checkbox>
          </div>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <div class="title">
            <h3>Radios</h3>
          </div>
          <div class="flex-column">
            <md-radio
              v-model="radio1"
              :value="true"
            >
              Radio is on
            </md-radio>
            <md-radio
              v-model="radio1"
              :value="false"
            >
              Radio is off
            </md-radio>
            <md-radio
              v-model="radio2"
              :value="true"
              disabled
            >
              Disabled Radio is on
            </md-radio>
            <md-radio
              v-model="radio2"
              :value="false"
              disabled
            >
              Disabled Radio is off
            </md-radio>
          </div>
        </div>
        <div
          class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
        >
          <div class="title">
            <h3>Toggle Buttons</h3>
          </div>
          <div class="flex-column">
            <md-switch v-model="switch1">
              Toogle is on
            </md-switch>
            <md-switch v-model="switch2">
              Toogle is off
            </md-switch>
          </div>
        </div>
      </div>
    </div>
    <!-- end Checkboxes/Radios/Toggle -->

    <div class="space-50" />

    <!-- Customizable Select & Dropdowns -->
    <div id="customizableSelect">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Customizable Select</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <label for="movie">Movie</label>
                <md-select
                  id="movie"
                  v-model="movie"
                  name="movie"
                >
                  <md-option value="fight-club">
                    Fight Club
                  </md-option>
                  <md-option value="godfather">
                    Godfather
                  </md-option>
                  <md-option value="godfather-ii">
                    Godfather II
                  </md-option>
                  <md-option value="godfather-iii">
                    Godfather III
                  </md-option>
                  <md-option value="godfellas">
                    Godfellas
                  </md-option>
                  <md-option value="pulp-fiction">
                    Pulp Fiction
                  </md-option>
                  <md-option value="scarface">
                    Scarface
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label for="movies">Movies</label>
                <md-select
                  id="movies"
                  v-model="selectedMovies"
                  name="movies"
                  multiple
                >
                  <md-option value="fight-club">
                    Fight Club
                  </md-option>
                  <md-option value="godfather">
                    Godfather
                  </md-option>
                  <md-option value="godfather-ii">
                    Godfather II
                  </md-option>
                  <md-option value="godfather-iii">
                    Godfather III
                  </md-option>
                  <md-option value="godfellas">
                    Godfellas
                  </md-option>
                  <md-option value="pulp-fiction">
                    Pulp Fiction
                  </md-option>
                  <md-option value="scarface">
                    Scarface
                  </md-option>
                </md-select>
              </md-field>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <div class="title">
            <h3>Dropdown & Dropup</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <drop-down
                direction="down"
                multi-level
              >
                <md-button
                  slot="title"
                  class="md-button md-success md-round md-block dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Multilevel Dropdown
                </md-button>
                <ul
                  class="dropdown-menu"
                  :class="{ 'dropdown-menu-right': responsive }"
                >
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another Action</a></li>
                  <li>
                    <a
                      class="dropdown-toggle"
                      :class="{ open: multiLevel }"
                      @click="toggleMultiLevel"
                    >Submenu</a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Submenu action</a></li>
                      <li><a href="#">Submenu action</a></li>
                      <li>
                        <a
                          class="dropdown-toggle"
                          :class="{ open: multiLevel2 }"
                          @click="toggleMultiLevel2()"
                        >Subsubmenu</a>
                        <ul
                          class="dropdown-menu"
                          :class="{ 'dropdown-menu-right': responsive }"
                        >
                          <li><a href="#">Subsubmenu action 1</a></li>
                          <li><a href="#">Subsubmenu action 2</a></li>
                        </ul>
                      </li>
                      <li>
                        <a
                          class="dropdown-toggle"
                          :class="{ open: multiLevel3 }"
                          @click="toggleMultiLevel3"
                        >Second Subsubmenu</a>
                        <ul
                          class="dropdown-menu"
                          :class="{ 'dropdown-menu-right': responsive }"
                        >
                          <li><a href="#">Subsubmenu action 1</a></li>
                          <li><a href="#">Subsubmenu action 2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </drop-down>
            </div>
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <drop-down direction="up">
                <md-button
                  slot="title"
                  class="md-button md-success md-round md-block dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropup
                </md-button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <h6 class="dropdown-header">
                    Dropdown header
                  </h6>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another Action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><div class="dropdown-divider" /></li>
                  <li><a href="#">Separated Link</a></li>
                  <li><div class="dropdown-divider" /></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </drop-down>
            </div>
            <div class="md-layout-item md-size-50 mx-auto md-xsmall-size-100">
              <drop-down direction="down">
                <md-button
                  slot="title"
                  class="md-button md-success md-round md-block dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropdown
                </md-button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <h6 class="dropdown-header">
                    Dropdown header
                  </h6>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another Action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><div class="dropdown-divider" /></li>
                  <li><a href="#">Separated Link</a></li>
                  <li><div class="dropdown-divider" /></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </drop-down>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Customizable Select & Dropdowns -->

    <div class="space-70" />

    <div id="textarea">
      <div class="md-layout">
        <div class="md-layout-item md-size-50">
          <div class="title">
            <h3>Textarea</h3>
          </div>
          <md-field maxlength="5">
            <label>You can write your text here..</label>
            <md-textarea v-model="aboutme" />
          </md-field>
        </div>
        <div class="md-layout-item md-size-50">
          <div class="title">
            <h3>Tags</h3>
          </div>
          <md-chips
            v-model="fruits"
            class="md-primary"
            md-placeholder="Add city..."
          />
        </div>
      </div>
    </div>

    <!-- Progress/Pagination -->
    <div id="progress-pagination">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Progress</h3>
          </div>
          <md-progress-bar
            class="md-primary"
            :md-value="amount"
          />
          <md-progress-bar
            class="md-info"
            :md-value="amount2"
          />
          <md-progress-bar
            class="md-warning"
            md-mode="buffer"
            :md-value="buffer"
            :md-buffer="buffer"
          />
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Pagination</h3>
          </div>
          <pagination
            v-model="defaultPagination"
            no-arrows
            :page-count="5"
          />
          <pagination
            v-model="infoPagination"
            class="pagination-info"
            with-text
            :page-count="5"
          />
        </div>
      </div>
    </div>
    <!-- end progress/pagination -->

    <div class="space-50" />

    <!-- Sliders -->
    <div id="sliders">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Sliders</h3>
          </div>
          <slider v-model="sliders.simple" />

          <slider
            v-model="sliders.rangeSlider"
            type="info"
            :connect="true"
          />
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Badges</h3>
          </div>
          <badge
            type="default"
            class="badge-pill"
          >
            Default
          </badge>
          <badge
            type="primary"
            class="badge-pill"
          >
            Primary
          </badge>
          <badge
            type="info"
            class="badge-pill"
          >
            Info
          </badge>
          <badge
            type="success"
            class="badge-pill"
          >
            Success
          </badge>
          <badge
            type="warning"
            class="badge-pill"
          >
            Warning
          </badge>
          <badge
            type="danger"
            class="badge-pill"
          >
            Danger
          </badge>
          <badge
            type="rose"
            class="badge-pill"
          >
            Rose
          </badge>
        </div>
      </div>
    </div>
    <!-- end sliders -->
  </div>
</template>

<script>
import { Pagination } from "@/components";
import { Slider } from "@/components";
import { Badge } from "@/components";

export default {
  components: {
    Pagination,
    Slider,
    Badge
  },
  data() {
    return {
      aboutme: null,
      responsive: false,
      socialBtn: false,
      defaultPagination: 3,
      infoPagination: 3,
      initial: null,
      floatingLabel: null,
      success: null,
      error: null,
      multiLevel: false,
      multiLevel2: false,
      multiLevel3: false,
      withMIcon: null,
      withFaIcon: null,
      checkbox1: true,
      checkbox2: null,
      checkbox3: true,
      checkbox4: null,
      radio1: true,
      radio2: false,
      switch1: true,
      switch2: null,
      amount: 30,
      amount2: 60,
      buffer: 40,
      movie: "godfather",
      selectedMovies: [],
      sliders: {
        simple: 40,
        rangeSlider: [20, 60]
      },
      fruits: ["Amsterdam", "Washington", "Sydney", "Beijing"],
      colors: [
        {
          name: "twitter",
          icon: "twitter",
          iconSquare: "twitter",
          btnText: "connect with twitter"
        },
        {
          name: "facebook",
          icon: "facebook-f",
          iconSquare: "facebook-square",
          btnText: "share · 2.2k"
        },
        {
          name: "google",
          icon: "google-plus-g",
          iconSquare: "google-plus-square",
          btnText: "share on google+"
        },
        {
          name: "linkedin",
          icon: "linkedin",
          iconSquare: "linkedin",
          btnText: "connect with linkedin"
        },
        {
          name: "pinterest",
          icon: "pinterest-p",
          iconSquare: "pinterest",
          btnText: "pin it · 212"
        },
        {
          name: "youtube",
          icon: "youtube",
          iconSquare: "youtube",
          btnText: "view on youtube"
        },
        {
          name: "repost",
          icon: "tumblr",
          iconSquare: "tumblr-square",
          btnText: "repost"
        },
        {
          name: "github",
          icon: "github",
          iconSquare: "github",
          btnText: "connect with github"
        },
        {
          name: "behance",
          icon: "behance-square",
          iconSquare: "behance-square",
          btnText: "follow us"
        },
        {
          name: "dribbble",
          icon: "dribbble",
          iconSquare: "dribbble",
          btnText: "find us on dribbble"
        },
        {
          name: "reddit",
          icon: "reddit",
          iconSquare: "reddit",
          btnText: "repost · 232"
        }
      ]
    };
  },
  mounted() {
    this.onResponsiveInverted();
    this.onResponsiveSocialButtons();
    window.addEventListener("resize", this.onResponsiveInverted);
    window.addEventListener("resize", this.onResponsiveSocialButtons);
  },
  beforeDestroy() {
    window.addEventListener("resize", this.onResponsiveInverted);
    window.addEventListener("resize", this.onResponsiveSocialButtons);
  },

  methods: {
    toggleMultiLevel() {
      this.multiLevel = !this.multiLevel;
    },
    toggleMultiLevel2() {
      this.multiLevel2 = !this.multiLevel2;
      this.multiLevel3 = false;
    },
    toggleMultiLevel3() {
      this.multiLevel3 = !this.multiLevel3;
      this.multiLevel2 = false;
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },

    onResponsiveSocialButtons() {
      if (window.innerWidth < 600) {
        this.socialBtn = false;
      } else {
        this.socialBtn = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vertical-center {
  display: flex;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
</style>
