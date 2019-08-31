<template>
  <div id="cards" class="section section-cards" data-background-color="gray">
    <blog-cards></blog-cards>
    <profile-cards></profile-cards>
    <full-background-cards></full-background-cards>
    <pricing-cards></pricing-cards>
    <plain-cards></plain-cards>
  </div>
</template>
<script>
import BlogCards from './Cards/BlogCards'
import FullBackgroundCards from './Cards/FullbackgroundCards'
import PlainCards from './Cards/PlainCards'
import PricingCards from './Cards/PricingCards'
import ProfileCards from './Cards/ProfileCards'
export default {
  components: {
    BlogCards,
    FullBackgroundCards,
    ProfileCards,
    PricingCards,
    PlainCards,
  },
}
</script>
