<template>
  <div class="col-md-12">
    <card>
      <async-world-map class="map map-big" :data="mapData"></async-world-map>
    </card>
  </div>
</template>
<script>
import AsyncWorldMap from 'src/components/WorldMap/AsyncWorldMap.vue';

export default {
  components: {
    AsyncWorldMap
  },
  data() {
    return {
      mapData: {
        AU: 760,
        BR: 550,
        CA: 120,
        DE: 1300,
        FR: 540,
        GB: 690,
        GE: 200,
        IN: 200,
        RO: 600,
        RU: 300,
        US: 2920
      }
    };
  }
};
</script>
<style>
#worldMap {
  width: 100%;
}
</style>
