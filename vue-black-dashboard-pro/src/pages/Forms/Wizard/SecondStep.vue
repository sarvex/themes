<template>
  <div>
    <h5 class="info-text">Who are you? (Fileinput)</h5>
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <image-upload @change="onFileChange"></image-upload>
      </div>
    </div>
  </div>
</template>
<script>
import { ImageUpload } from 'src/components';

export default {
  components: {
    ImageUpload
  },
  data() {
    return {
      model: {
        file: null
      }
    };
  },
  methods: {
    onFileChange(file) {
      this.file = file;
    },
    validate() {
      this.$emit('on-validated', true, this.model);
      return Promise.resolve(true);
    }
  }
};
</script>
<style></style>
