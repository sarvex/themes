<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10">
        <card class="card-calendar">
          <calendar></calendar>
        </card>
      </div>
    </div>
  </div>

</template>
<script>
import Loading from 'src/pages/Dashboard/Layout/LoadingMainPanel.vue';

const Calendar = () => ({
  component: import('./Calendar.vue'),
  loading: Loading,
  delay: 100
});
export default {
  components: {
    Calendar
  }
};
</script>
<style>
.card-calendar {
  min-height: 400px;
}
</style>
