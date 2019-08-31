<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>today</md-icon>
          </div>
          <h4 class="title">Datepicker - <small>labeled</small></h4>
        </md-card-header>

        <md-card-content>
          <md-datepicker v-model="selectedLabeled">
            <label>Select date</label>
          </md-datepicker>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>today</md-icon>
          </div>
          <h4 class="title">Datepicker - <small>date selected</small></h4>
        </md-card-header>

        <md-card-content>
          <md-datepicker v-model="selectedDate" />
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-small-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>today</md-icon>
          </div>
          <h4 class="title">Datepicker - <small>close on select</small></h4>
        </md-card-header>

        <md-card-content>
          <md-datepicker v-model="selectedClose" md-immediately />
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="card-title">Switches</h4>
              <md-switch v-model="switch1">Toogle is on</md-switch>
              <md-switch v-model="switch2">Toogle is off</md-switch>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="card-title">Customisable Select</h4>
              <div class="md-layout">
                <div class="md-layout-item">
                  <md-field>
                    <label for="movie">Movie</label>
                    <md-select v-model="movie" name="movie" id="movie">
                      <md-option value="fight-club">Fight Club</md-option>
                      <md-option value="godfather">Godfather</md-option>
                      <md-option value="godfather-ii">Godfather II</md-option>
                      <md-option value="godfather-iii">Godfather III</md-option>
                      <md-option value="godfellas">Godfellas</md-option>
                      <md-option value="pulp-fiction">Pulp Fiction</md-option>
                      <md-option value="scarface">Scarface</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item">
                  <md-field>
                    <label for="movies">Movies</label>
                    <md-select
                      v-model="selectedMovies"
                      name="movies"
                      id="movies"
                      multiple
                    >
                      <md-option value="fight-club">Fight Club</md-option>
                      <md-option value="godfather">Godfather</md-option>
                      <md-option value="godfather-ii">Godfather II</md-option>
                      <md-option value="godfather-iii">Godfather III</md-option>
                      <md-option value="godfellas">Godfellas</md-option>
                      <md-option value="pulp-fiction">Pulp Fiction</md-option>
                      <md-option value="scarface">Scarface</md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="card-title">Tags</h4>
              <md-chips
                v-model="fruits"
                class="md-primary"
                md-placeholder="Add city..."
              ></md-chips>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="card-title">Dropdown & Dropup</h4>
              <div class="md-layout">
                <div class="md-layout-item md-size-50 md-xsmall-size-100">
                  <drop-down direction="down" multiLevel>
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
                          >Submenu</a
                        >
                        <ul class="dropdown-menu">
                          <li><a href="#">Submenu action</a></li>
                          <li><a href="#">Submenu action</a></li>
                          <li>
                            <a
                              class="dropdown-toggle"
                              :class="{ open: multiLevel2 }"
                              @click="toggleMultiLevel2()"
                              >Subsubmenu</a
                            >
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
                              >Second Subsubmenu</a
                            >
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
                  <drop-down direction="down">
                    <md-button
                      slot="title"
                      class="md-button md-success md-round md-block dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Dropdown
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
                    </ul>
                  </drop-down>
                </div>
                <div
                  class="md-layout-item md-size-50 mx-auto md-xsmall-size-100"
                >
                  <drop-down direction="up">
                    <md-button
                      slot="title"
                      class="md-button md-success md-round md-block dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Dropup
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="#">Mike John responded to your email</a></li>
                      <li><a href="#">You have 5 new tasks</a></li>
                      <li><a href="#">You're now friend with Andrew</a></li>
                      <li><a href="#">Another Notification</a></li>
                      <li><a href="#">Another One</a></li>
                    </ul>
                  </drop-down>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="card-title">Progress Bar</h4>
              <md-progress-bar
                class="md-primary"
                :md-value="amount"
              ></md-progress-bar>
              <md-progress-bar
                class="md-info"
                :md-value="amount2"
              ></md-progress-bar>
              <md-progress-bar
                class="md-warning"
                md-mode="buffer"
                :md-value="buffer"
                :md-buffer="buffer"
              ></md-progress-bar>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h4 class="card-title">Sliders</h4>
              <slider v-model="sliders.simple"> </slider>
              <br />
              <slider v-model="sliders.rangeSlider" type="info" :connect="true">
              </slider>
            </div>
            <div class="md-layout-item md-size-30 md-xsmall-size-100">
              <h4 class="card-title">Regular Image</h4>
              <div class="file-input">
                <div v-if="!imageRegular">
                  <div class="image-container">
                    <img :src="regularImg" title="" />
                  </div>
                </div>
                <div class="image-container" v-else>
                  <img :src="imageRegular" />
                </div>
                <div class="button-container">
                  <md-button
                    class="md-danger md-round"
                    @click="removeImage"
                    v-if="imageRegular"
                    ><i class="fa fa-times"></i>Remove</md-button
                  >
                  <md-button class="md-success md-round md-fileinput">
                    <template v-if="!imageRegular"
                      >Select image</template
                    >
                    <template v-else
                      >Change</template
                    >
                    <input type="file" @change="onFileChange" />
                  </md-button>
                </div>
              </div>
            </div>
            <div class="md-layout-item md-size-25">
              <h4 class="card-title">Avatar Image</h4>
              <div class="file-input img-circle">
                <template v-if="!imageCircle">
                  <div class="image-container">
                    <img :src="avatarImg" title="" />
                  </div>
                </template>
                <div class="image-container" v-else>
                  <img :src="imageCircle" />
                </div>
                <div class="button-container">
                  <md-button
                    class="md-danger md-round"
                    @click="removeImage('circle')"
                    v-if="imageCircle"
                    ><i class="fa fa-times"></i>Remove</md-button
                  >
                  <md-button class="md-success md-round md-fileinput">
                    <template v-if="!imageCircle"
                      >Add Photo</template
                    >
                    <template v-else
                      >Change</template
                    >
                    <input type="file" name="circle" @change="onFileChange" />
                  </md-button>
                </div>
              </div>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import { Slider } from "@/components";
export default {
  components: {
    Slider
  },
  props: {
    regularImg: {
      type: String,
      default: "./img/image_placeholder.jpg"
    },
    avatarImg: {
      type: String,
      default: "./img/placeholder.jpg"
    }
  },
  data() {
    return {
      responsive: false,
      imageRegular: "",
      imageCircle: "",
      amount: 30,
      amount2: 60,
      buffer: 40,
      multiLevel: false,
      multiLevel2: false,
      multiLevel3: false,
      selectedLabeled: null,
      selectedDate: new Date("2018/03/26"),
      selectedClose: null,
      switch1: true,
      switch2: null,
      movie: "godfather",
      selectedMovies: [],
      fruits: ["Amsterdam", "Washington", "Sydney", "Beijing"],
      sliders: {
        simple: 40,
        rangeSlider: [20, 60]
      }
    };
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
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (e.target.name) {
        this.createImage(files[0], "circle");
      } else {
        this.createImage(files[0]);
      }
    },
    createImage(file, type) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        if (type === "circle") {
          vm.imageCircle = e.target.result;
        } else {
          vm.imageRegular = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(type) {
      if (type === "circle") {
        this.imageCircle = "";
      } else {
        this.imageRegular = "";
      }
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="scss"></style>
