<template>
  <card>
    <template slot="header">
      <h4 class="card-title">Global Sales by Top Locations</h4>
      <p class="card-category">All products that were shipped</p>
    </template>
    <div class="row">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <div class="flag"><img src="img/US.png" alt="US"/></div>
                </td>
                <td>USA</td>
                <td class="text-right">2.920</td>
                <td class="text-right">53.23%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/DE.png" alt="DE"/></div>
                </td>
                <td>Germany</td>
                <td class="text-right">1.300</td>
                <td class="text-right">20.43%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/AU.png" alt="AU"/></div>
                </td>
                <td>Australia</td>
                <td class="text-right">760</td>
                <td class="text-right">10.35%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/GB.png" alt="GB"/></div>
                </td>
                <td>United Kingdom</td>
                <td class="text-right">690</td>
                <td class="text-right">7.87%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/RO.png" alt="RO"/></div>
                </td>
                <td>Romania</td>
                <td class="text-right">600</td>
                <td class="text-right">5.94%</td>
              </tr>
              <tr>
                <td>
                  <div class="flag"><img src="img/BR.png" alt="BR"/></div>
                </td>
                <td>Brasil</td>
                <td class="text-right">550</td>
                <td class="text-right">4.34%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6"><world-map style="height: 300px"></world-map></div>
    </div>
  </card>
</template>
<script>
import Loading from 'src/components/LoadingPanel.vue';

const WorldMap = () => ({
  component: import('src/components/WorldMap/AsyncWorldMap.vue'),
  loading: Loading,
  delay: 200
});
export default {
  name: 'country-map-card',
  components: {
    WorldMap
  }
};
</script>
<style></style>
