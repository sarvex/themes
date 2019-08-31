<template>
  <div>
    <div
      :class="[
        'md-collapse',
        activeCollapse(index + 1),
        { [getColorCollapse(colorCollapse)]: true }
      ]"
      v-for="(item, index) in collapse"
      :key="item"
    >
      <div class="md-collapse-label" @click="toggle(index + 1)">
        <h5 class="md-collapse-title">
          {{ item }}
          <md-icon>{{ icon }}</md-icon>
        </h5>
      </div>

      <collapse-transition>
        <div class="md-collapse-content" v-show="getActiveCollapse(index + 1)">
          <slot :name="getCollapseContent(index + 1)"></slot>
        </div>
      </collapse-transition>
    </div>
  </div>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";

export default {
  name: "collapse",
  components: {
    CollapseTransition
  },
  props: {
    collapse: Array,
    icon: String,
    colorCollapse: String
  },
  data() {
    return {
      isActive: 1
    };
  },
  methods: {
    getActiveCollapse(index) {
      return this.isActive == index;
    },
    activeCollapse(index) {
      return {
        "is-active": this.isActive == index
      };
    },
    toggle(index) {
      if (index == this.isActive) {
        this.isActive = 0;
      } else {
        this.isActive = index;
      }
    },
    getCollapseContent: function(index) {
      return "md-collapse-pane-" + index + "";
    },
    getColorCollapse: function(colorCollapse) {
      return "md-" + colorCollapse + "";
    }
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  display: flex;
}
</style>
