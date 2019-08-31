<template>
  <div class="row">
    <div class="col-md-12">
      <h4 class="text-center mb-0">
        World Map
        <br>
        <small>
          Looks great on any resolution. Made by our friends from
          <a target="_blank" rel="noopener" href="http://datamaps.github.io/">Data Maps</a>.
        </small>
      </h4>
      <world-map></world-map>
    </div>
  </div>
</template>
<script>
  import WorldMap from './WorldMap.vue'
  import { Card } from 'src/components/UIComponents';

  export default {
    components: {
      WorldMap,
      Card
    }
  }
</script>
<style>
  #worldMap {
    height: 500px;
  }
</style>
