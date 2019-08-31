<template>
  <div
    class="slider"
    :class="[`slider-${type}`]"
    :disabled="disabled"
  />
</template>
<script>
import noUiSlider from "nouislider";

export default {
  name: "Slider",
  props: {
    value: [String, Array, Number],
    disabled: Boolean,
    start: {
      type: [Number, Array],
      default: 0
    },
    connect: {
      type: [Boolean, Array],
      default: () => [true, false]
    },
    range: {
      type: Object,
      default: () => {
        return {
          min: 0,
          max: 100
        };
      }
    },
    type: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      slider: null
    };
  },
  watch: {
    value(newValue, oldValue) {
      const slider = this.$el.noUiSlider;
      const sliderValue = slider.get();
      if (newValue !== oldValue && sliderValue !== newValue) {
        if (Array.isArray(sliderValue) && Array.isArray(newValue)) {
          if (
            oldValue.length === newValue.length &&
            oldValue.every((v, i) => v === newValue[i])
          ) {
            slider.set(newValue);
          }
        } else {
          slider.set(newValue);
        }
      }
    }
  },
  mounted() {
    this.createSlider();
  },
  methods: {
    createSlider() {
      noUiSlider.create(this.$el, {
        start: this.value || this.start,
        connect: this.connect,
        range: this.range,
        ...this.options
      });
      const slider = this.$el.noUiSlider;
      slider.on("slide", () => {
        let value = slider.get();
        if (value !== this.value) {
          this.$emit("input", value);
        }
      });
    }
  }
};
</script>
<style></style>
