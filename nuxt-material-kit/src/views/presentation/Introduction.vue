<template>
  <div class="section">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-medium-size-66 md-small-size-100 mx-auto">
          <h4 class="description text-center">
            Vue Material Kit PRO is a VueMaterial UI Kit with a fresh, new
            design inspired by Google's Material Design. You asked for it, so we
            built it. It's a great pleasure to introduce to you the material
            concepts in an easy to use and beautiful set of components.
          </h4>
        </div>
      </div>
      <div class="features-1">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon-color="rose"
              icon="apps"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Huge Number of Components
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  Every element that you need in a product comes built in as a
                  component. All components fit perfectly with each other and
                  can take variations in colour.
                </p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon-color="info"
              icon="view_day"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Multi-Purpose Sections
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  Putting together a page has never been easier than matching
                  together sections. From team presentation to pricing options,
                  you can easily customise and built your pages.
                </p>
              </div>
            </info-areas>
          </div>
          <div class="md-layout-item md-size-33 md-small-size-100">
            <info-areas
              text-center
              icon-color="success"
              icon="view_carousel"
            >
              <h4
                slot="title"
                class="info-title"
              >
                Example Pages
              </h4>
              <div
                slot="content"
                class="description"
              >
                <p>
                  If you want to get inspiration or just show something directly
                  to your clients, you can jump start your development with our
                  pre-built example pages.
                </p>
              </div>
            </info-areas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InfoAreas } from "@/components";

export default {
  name: "Introduction",
  components: {
    InfoAreas
  }
};
</script>

<style lang="css"></style>
