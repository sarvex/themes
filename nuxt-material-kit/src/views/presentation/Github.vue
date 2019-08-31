<template>
  <div class="section section-free-demo">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
          <div class="icon-github">
            <i class="fab fa-github" />
          </div>
          <div class="section-description">
            <h2 class="title">
              Free Demo
            </h2>
            <h5 class="description">
              Do you want to test and see the benefits of this kit before
              purchasing it? You can give the demo version a try. It features
              enough basic components for you to get a feel of the design and
              also test the quality of the code. Get it free on GitHub!
            </h5>
          </div>
          <div class="github-section">
            <div class="git-demo">
              <md-button
                class="md-rose md-round"
                href="https://github.com/creativetimofficial/ct-vue-material-kit-pro"
                target="_blank"
              >
                View Demo on Github
              </md-button>
            </div>
            <div class="git-button">
              <!-- Star on GitHub -->
              <gh-btns-star
                slug="creativetimofficial/ct-vue-material-kit-pro"
                show-count
              />

              <!-- Fork on GitHub -->
              <gh-btns-fork
                slug="creativetimofficial/ct-vue-material-kit-pro"
                show-count
              />
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100 ml-auto">
          <div class="md-layout">
            <div class="md-layout-item md-size-45 md-small-size-100 ml-auto">
              <md-card class="md-card-pricing md-card-plain">
                <md-card-content>
                  <h3 class="card-title">
                    Free Demo
                  </h3>
                  <ul>
                    <li><b>60</b> Components</li>
                    <li><b>3</b> Example Pages</li>
                    <li>
                      <md-icon class="text-danger">
                        close
                      </md-icon>
                      Unconventional Cards
                    </li>
                    <li>
                      <md-icon class="text-danger">
                        close
                      </md-icon> Sections
                    </li>
                    <li>
                      <md-icon class="text-danger">
                        close
                      </md-icon> Photoshop for
                      Prototype
                    </li>
                    <li>
                      <md-icon class="text-danger">
                        close
                      </md-icon> Premium
                      Support
                    </li>
                  </ul>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-45 md-small-size-100 ml-auto">
              <md-card class="md-card-pricing md-card-plain">
                <md-card-content>
                  <h3 class="card-title">
                    PRO Version
                  </h3>
                  <ul>
                    <li><b>1000+</b> Components</li>
                    <li><b>10</b> Example Pages</li>
                    <li>
                      <md-icon class="text-success">
                        check
                      </md-icon>
                      Unconventional Cards
                    </li>
                    <li>
                      <md-icon class="text-success">
                        check
                      </md-icon> Sections
                    </li>
                    <li>
                      <md-icon class="text-success">
                        check
                      </md-icon> Photoshop
                      for Prototype
                    </li>
                    <li>
                      <md-icon class="text-success">
                        check
                      </md-icon> Premium
                      Support
                    </li>
                  </ul>
                </md-card-content>
              </md-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Github"
};
</script>

<style lang="scss">
.github-section {
  display: flex;
  justify-content: space-between;
}
</style>
