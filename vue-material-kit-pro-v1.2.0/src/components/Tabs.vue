<template>
  <md-card
    class="md-card-tabs"
    :class="[
      { 'flex-column': flexColumn },
      { 'nav-pills-icons': navPillsIcons },
      { 'md-card-plain': plain }
    ]"
  >
    <md-card-header slot="header-title" />

    <md-card-content>
      <md-list
        class="nav-tabs"
        :class="{
          'justify-content-center': pillsAlign === 'center',
          'justify-content-right': pillsAlign === 'right'
        }"
      >
        <md-list-item
          v-for="(item, index) in tabName"
          :key="item"
          :class="[
            { active: isActivePanel(tabName[index]) },
            { [getColorButton(colorButton)]: isActivePanel(tabName[index]) }
          ]"
          @click="switchPanel(tabName[index])"
        >
          {{ tabName[index] }}
          <md-icon v-if="navPillsIcons">
            {{ tabIcon[index] }}
          </md-icon>
        </md-list-item>
      </md-list>

      <transition
        name="fade"
        mode="out-in"
      >
        <div class="tab-content">
          <template v-for="(item, index) in tabName">
            <template v-if="isActivePanel(tabName[index])">
              <div
                :key="item"
                :class="getTabContent(index + 1)"
              >
                <slot :name="getTabContent(index + 1)" />
              </div>
            </template>
          </template>
        </div>
      </transition>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    pillsAlign: String,
    flexColumn: Boolean,
    navPillsIcons: Boolean,
    plain: Boolean,
    tabName: Array,
    tabIcon: Array,
    colorButton: {
      type: String,
      default: ""
    },
    tabActive: Number,
    onChange: Function
  },
  data() {
    return {
      activePanel: this.tabName[this.tabActive - 1]
    };
  },
  methods: {
    switchPanel(panel) {
      if (this.activePanel !== panel && this.onChange !== undefined) {
        this.onChange();
      }
      this.activePanel = panel;
    },
    isActivePanel(panel) {
      return this.activePanel == panel;
    },
    getColorButton: function(colorButton) {
      return "md-" + colorButton + "";
    },
    getTabContent: function(index) {
      return "tab-pane-" + index + "";
    }
  }
};
</script>

<style lang="css" scoped>
.justify-content-right {
  justify-content: flex-end;
}
</style>
