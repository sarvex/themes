<template>
  <div class="progress">
    <div v-if="values.length === 0" class="progress-bar" :class="`progress-bar-${type}`" role="progressbar"
         :aria-valuenow="value"
         aria-valuemin="0"
         aria-valuemax="100" :style="`width: ${value}%;`">
      <span class="sr-only">
        <slot></slot>
      </span>
    </div>
    <div v-else v-for="progress in values" class="progress-bar" :class="`progress-bar-${progress.type}`"
         :style="`width: ${progress.value}%;`">
      <span class="sr-only"></span>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'p-progress',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      value: {
        type: Number,
        default: 0,
        validator: (value) => {
          return value >= 0 && value <= 100
        }
      },
      values: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<style>
</style>
