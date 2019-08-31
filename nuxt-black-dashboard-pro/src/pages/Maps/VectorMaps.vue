<template>
  <div class="col-md-12">
    <h4 slot="header" class="text-center">
      World Map <br />
      <small>
        Looks great on any resolution. Made by our friends from
        <a target="_blank" rel="noopener" href="http://datamaps.github.io"
          >Data Maps</a
        >.
      </small>
    </h4>
    <card type="plain">
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
