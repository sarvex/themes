<template>
  <div class="wrapper">
    <div class="page-header clear-filter header-filter" filter-color="orange">
      <div class="rellax-header rellax-header-sky" data-rellax-speed="-8">
        <div
          class="page-header-image"
          style="background-image: url('img/presentation-page/nuk-pro-back-sky.jpg')"
        ></div>
      </div>
      <div class="rellax-header rellax-header-buildings" data-rellax-speed="0">
        <div
          class="page-header-image page-header-city"
          style="background-image: url('img/presentation-page/nuk-pro-buildings.png')"
        ></div>
      </div>
      <div class="rellax-text-container">
        <h1 class="h1-seo rellax-text" data-rellax-speed="-2">Components</h1>
      </div>
      <h3 class="h3-description rellax-text" data-rellax-speed="-1">
        A beautiful premium Bootstrap 4 UI
        Kit.
      </h3>
      <h6 class="category category-absolute rellax-text" data-rellax-speed="-2">
        Designed by
        <a href="https:///invisionapp.com/" target="_blank">
          <img v-lazy="'img/invision-white-slim.png'" class="invision-logo" />
        </a>. Coded by
        <a href="https://www.creative-tim.com" target="_blank">
          <img v-lazy="'img/creative-tim-white-slim2.png'" class="creative-tim-logo" alt />
        </a>.
      </h6>
    </div>
    <div class="main">
      <images-section></images-section>
      <basic-elements-section></basic-elements-section>
      <navigation></navigation>
      <tabs-section></tabs-section>
      <pills-section></pills-section>
      <progress-pagination-section></progress-pagination-section>
      <notification-section></notification-section>
      <pre-footer-areas></pre-footer-areas>
      <footer-areas></footer-areas>
      <typography-tables></typography-tables>
      <cards-section></cards-section>
      <javascript-components></javascript-components>
      <carousel-section></carousel-section>
      <nucleo-icons-section></nucleo-icons-section>
    </div>
  </div>
</template>

<script>
import ImagesSection from './components/ImagesSection';
import BasicElementsSection from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import PillsSection from './components/Pills';
import ProgressPaginationSection from './components/ProgressPagination';
import NotificationSection from './components/Notifications';
import PreFooterAreas from './components/PreFooters';
import FooterAreas from './components/Footers';
import TypographyTables from './components/TypographyTables';
import CardsSection from './components/Cards';
const JavascriptComponents = () => import('./components/JavascriptComponents');
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';

export default {
  name: 'home',
  bodyClass: 'index-page',
  components: {
    BasicElementsSection,
    ImagesSection,
    Navigation,
    TabsSection,
    PillsSection,
    ProgressPaginationSection,
    NotificationSection,
    PreFooterAreas,
    FooterAreas,
    TypographyTables,
    CardsSection,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
  },
};
</script>
