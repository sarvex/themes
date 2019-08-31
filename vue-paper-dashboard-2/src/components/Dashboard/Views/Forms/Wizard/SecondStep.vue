<template>
  <div>
    <h5 class="info-text"> What are you doing? (checkboxes) </h5>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-sm-4">
            <icon-checkbox v-model="model.design"
                           icon="nc-icon nc-ruler-pencil"
                           title="Design">
            </icon-checkbox>
          </div>
          <div class="col-sm-4">
            <icon-checkbox v-model="model.code"
                           icon="nc-icon nc-laptop"
                           title="Code">
            </icon-checkbox>
          </div>
          <div class="col-sm-4">
            <icon-checkbox v-model="model.develop"
                           icon="nc-icon nc-atom"
                           title="Develop">
            </icon-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {IconCheckbox} from 'src/components/UIComponents'

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
        },
      }
    },
    methods: {
      validate() {
        this.$emit('on-validated', true, this.model)
        return Promise.resolve(true)
      }
    }
  }
</script>
<style>
</style>
