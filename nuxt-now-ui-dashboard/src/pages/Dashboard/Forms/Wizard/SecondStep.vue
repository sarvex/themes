<template>
  <div>
    <h5 class="info-text"> What are you doing? (checkboxes) </h5>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-sm-4">
            <icon-checkbox v-model="model.design"
                           icon="now-ui-icons design-2_ruler-pencil"
                           title="Design">
            </icon-checkbox>
          </div>
          <div class="col-sm-4">
            <icon-checkbox v-model="model.code"
                           icon="now-ui-icons business_bulb-63"
                           title="Code">
            </icon-checkbox>
          </div>
          <div class="col-sm-4">
            <icon-checkbox v-model="model.develop"
                           icon="now-ui-icons tech_tv"
                           title="Develop">
            </icon-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IconCheckbox } from 'src/components';

export default {
  components: {
    IconCheckbox
  },
  data() {
    return {
      model: {
        design: true,
        code: false,
        develop: false
      }
    };
  },
  methods: {
    validate() {
      this.$emit('on-validated', true, this.model);
      return Promise.resolve(true);
    }
  }
};
</script>
<style>
</style>
