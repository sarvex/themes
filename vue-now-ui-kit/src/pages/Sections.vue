<template>
  <div class="wrapper">
    <div class="section-space"></div>
    <headers-section></headers-section>
    <features-section></features-section>
    <blog-section></blog-section>
    <teams-section></teams-section>
    <projects-section></projects-section>
    <pricing-section></pricing-section>
    <testimonial-section></testimonial-section>
    <contact-section></contact-section>
  </div>
</template>
<script>
import HeadersSection from './sections/Headers'
import FeaturesSection from './sections/Features'
import BlogSection from './sections/Blogs'
import TeamsSection from './sections/Teams'
import ProjectsSection from './sections/Projects'
import PricingSection from './sections/Pricing'
import TestimonialSection from './sections/Testimonials'
import ContactSection from './sections/Contact'
export default {
  name: 'Sections',
  bodyClass: 'sections-page',
  components: {
    HeadersSection,
    FeaturesSection,
    BlogSection,
    TeamsSection,
    ProjectsSection,
    PricingSection,
    TestimonialSection,
    ContactSection,
  },
}
</script>
<style></style>
