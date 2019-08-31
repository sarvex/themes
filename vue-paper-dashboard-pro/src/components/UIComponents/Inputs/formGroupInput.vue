<template>
  <div class="form-group">
    <label v-if="label">
      {{label}}
    </label>
    <input class="form-control border-input"
           v-bind="$attrs"
           :value="value"
           @input="$emit('input',$event.target.value)">
  </div>
</template>
<script>
  export default {
    name: 'fg-input',
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: ''
      },
      label: String
    }
  }
</script>
<style>

</style>
