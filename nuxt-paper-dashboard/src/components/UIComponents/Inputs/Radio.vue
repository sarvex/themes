<template>
  <div class="n-radio radio" :class="radioClasses">
    <input :id="cbId"
           type="radio"
           :disabled="disabled"
           :value="label"
           v-model="model" />
    <label :for="cbId">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'p-radio',
    model: {
      prop: 'value'
    },
    props: {
      label: [String, Number],
      disabled: [Boolean, String],
      value: [String, Boolean],
      inline: Boolean,
      type: {
        type: String,
        default: 'neutral'
      }
    },
    data () {
      return {
        cbId: ''
      }
    },
    computed: {
      model: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      inlineClass () {
        if (this.inline) {
          return `radio-inline`
        }
        return ''
      },
      radioClasses () {
        return `radio-${this.type} ${this.inlineClass}`
      }
    },
    created () {
      this.cbId = Math.random().toString(16).slice(2)
    }
  }
</script>
