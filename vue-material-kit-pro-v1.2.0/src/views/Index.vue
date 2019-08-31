<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter clear-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img
              v-show="leafShow"
              :src="leaf4"
              alt="leaf4"
              class="leaf4"
            >
            <img
              v-show="leafShow"
              :src="leaf3"
              alt="leaf3"
              class="leaf3"
            >
            <img
              v-show="leafShow"
              :src="leaf2"
              alt="leaf2"
              class="leaf2"
            >
            <img
              v-show="leafShow"
              :src="leaf1"
              alt="leaf1"
              class="leaf1"
            >
            <div class="brand">
              <h1>
                Vue Material Kit
              </h1>
              <span class="pro-badge">
                Pro
              </span>
              <h3 class="title">
                All components
                <div>&nbsp;</div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div
      id="main-panel"
      class="main main-raised"
    >
      <div
        id="basic-elements"
        class="cd-section section section-basic"
      >
        <div class="container">
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <basic-elements />
        </div>
      </div>
      <div
        id="navigation"
        class="cd-section section section-navbars"
      >
        <div class="container">
          <small-navigation />
        </div>
        <navigation />
      </div>
      <div class="section section-tabs">
        <div class="container">
          <tabs />
        </div>
      </div>
      <div class="section section-white mb-0">
        <div class="container">
          <nav-pills />
        </div>
      </div>
      <div
        id="notifications"
        class="cd-section section section-notifications"
      >
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <notifications />
      </div>
      <div
        id="footers"
        class="cd-section"
      >
        <div class="section section-gray">
          <div class="container">
            <div class="title">
              <h3>Pre-Footer Areas</h3>
            </div>
          </div>
          <pre-footer-areas />
        </div>
        <div class="section section-gray">
          <div class="container">
            <div class="title">
              <h3>Footer Areas</h3>
            </div>
          </div>
          <footer-areas />
        </div>
      </div>
      <div
        id="typography"
        class="cd-section section"
      >
        <div class="container">
          <typography-images />
        </div>
      </div>
      <div
        id="content-areas"
        class="cd-section section"
      >
        <div class="container">
          <tables />
        </div>
      </div>
      <div class="section">
        <div class="container">
          <comments />
        </div>
      </div>
      <div class="cd-section">
        <div
          id="cards"
          class="section section-gray pb-0"
        >
          <div class="container">
            <cards />
          </div>
        </div>
        <div
          id="morphing-cards"
          class="cd-section section section-gray"
        >
          <div class="container">
            <cards section-morphing-cards />
          </div>
        </div>
        <div class="section">
          <div class="container">
            <cards section-card-plain />
          </div>
        </div>
      </div>
      <div
        id="javascript"
        class="cd-section section section-javascript"
      >
        <div class="container">
          <javascript-components />
        </div>
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
            @click="scrollToElement('basic-elements')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Basic Elements</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="2"
            @click="scrollToElement('navigation')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Navigation</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="3"
            @click="scrollToElement('notifications')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Notifications</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="4"
            @click="scrollToElement('footers')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Footers</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="5"
            @click="scrollToElement('typography')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Typography</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="6"
            @click="scrollToElement('content-areas')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Content Areas</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="7"
            @click="scrollToElement('cards')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Cards</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="8"
            @click="scrollToElement('morphing-cards')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Morphing Cards</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            data-number="9"
            @click="scrollToElement('javascript')"
          >
            <span class="cd-dot" />
            <span class="cd-label">Javascript</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import PreFooterAreas from "./components/PreFooterSection";
import FooterAreas from "./components/FooterSection";
import Tables from "./components/TablesSection";
import Comments from "./components/CommentsSection";
import Cards from "./components/CardsSection";
import Mixins from "@/plugins/basicMixins";

export default {
  name: "Index",
  components: {
    BasicElements,
    Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,
    JavascriptComponents,
    PreFooterAreas,
    FooterAreas,
    Tables,
    Comments,
    Cards
  },
  mixins: [Mixins.VerticalNav, Mixins.HeaderImage],
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
    document.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

.vertical-nav-active {
  display: block;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
@media all and (max-width: 768px) {
  .vertical-nav-active {
    display: none;
  }
}

.mb-0 {
  padding-bottom: 0 !important;
}

#morphing-cards {
  padding-top: 70px;
}
</style>
