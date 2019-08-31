<template>
  <div class="wrapper">
    <div
      id="main-panel"
      class="main"
    >
      <!-- Headers Section -->
      <div
        id="headers"
        class="cd-section"
      >
        <headers />
      </div>

      <!-- Features Section -->
      <div
        id="features"
        class="cd-section"
      >
        <features />
      </div>

      <!-- Blogs Section -->
      <div
        id="blogs"
        class="cd-section"
      >
        <blogs />
      </div>

      <!-- Teams Section -->
      <div
        id="teams"
        class="cd-section"
      >
        <teams />
      </div>

      <!-- Projects Section -->
      <div
        id="projects"
        class="cd-section"
      >
        <projects />
      </div>

      <!-- Pricing Section -->
      <div
        id="pricing"
        class="cd-section"
      >
        <pricing />
      </div>

      <!-- Testimonials Section -->
      <div
        id="testimonials"
        class="cd-section"
      >
        <testimonials />
      </div>

      <!-- ContactUs Section -->
      <div
        id="contacts"
        class="cd-section"
      >
        <contact-us />
      </div>
    </div>
    <nav
      id="cd-vertical-nav"
      class="vertical-nav-active"
    >
      <ul>
        <li>
          <a
            href="javascript:void(0)"
            data-number="1"
            @click="scrollToElement('headers')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Headers</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="2"
            @click="scrollToElement('features')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Features</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="3"
            @click="scrollToElement('blogs')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Blogs</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="4"
            @click="scrollToElement('teams')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Teams</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="5"
            @click="scrollToElement('projects')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Projects</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="6"
            @click="scrollToElement('pricing')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Pricing</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="7"
            @click="scrollToElement('testimonials')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Testimonials</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="8"
            @click="scrollToElement('contactus')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Contact Us</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Headers from "./sections/Headers";
import Features from "./sections/Features";
import Blogs from "./sections/Blogs";
import Teams from "./sections/Teams";
import Projects from "./sections/Projects";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Headers,
    Features,
    Blogs,
    Teams,
    Projects,
    Pricing,
    Testimonials,
    ContactUs
  },
  mixins: [Mixins.VerticalNav]
};
</script>

<style lang="scss">
.vertical-nav-active {
  display: block;
}

@media all and (max-width: 768px) {
  .vertical-nav-active {
    display: none;
  }
}
</style>
