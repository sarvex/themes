<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Filters</li>
        <li class="adjustments-line text-center">
          <span
            v-for="item in sidebarColors"
            :key="item.color"
            class="badge filter"
            :class="[`badge-${item.color}`, { active: item.active }]"
            :data-color="item.color"
            @click="changeSidebarBackground(item)"
          >
          </span>
        </li>
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line text-center">
          <span
            v-for="item in sidebarBg"
            :key="item.colorBg"
            class="badge filter"
            :class="[`badge-${item.colorBg}`, { active: item.active }]"
            :data-color="item.colorBg"
            @click="changeSidebarBg(item)"
          >
          </span>
        </li>
        <li class="adjustments-line sidebar-mini">
          Sidebar Mini
          <md-switch
            :value="!sidebarMini"
            @change="val => updateValue('sidebarMini', val)"
          ></md-switch>
        </li>
        <li class="adjustments-line sidebar-img">
          Sidebar Image
          <md-switch
            :value="!sidebarImg"
            @change="val => updateValueImg('sidebarImg', val)"
          ></md-switch>
        </li>

        <li class="header-title">Images</li>
        <li
          v-for="item in sidebarImages"
          :key="item.image"
          :class="{ active: item.active }"
          @click="changeSidebarImage(item)"
        >
          <a class="img-holder switch-trigger">
            <img :src="item.image" alt="" />
          </a>
        </li>

        <li class="button-container">
          <div class="">
            <md-button
              class="md-success md-block"
              :href="proUrl"
              target="_blank"
              >Buy Now</md-button
            >
          </div>
        </li>

        <li class="button-container">
          <div class="">
            <md-button
              class="md-default md-block"
              :href="documentationLink"
              target="_blank"
              >Documentation</md-button
            >
          </div>
        </li>

        <li class="button-container">
          <div class="">
            <md-button class="md-block md-info" :href="freeUrl" target="_blank"
              >Get Free Demo</md-button
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sidebarMini: Boolean,
    sidebarImg: Boolean
  },
  data() {
    return {
      documentationLink:
        "https://demos.creative-tim.com/vue-material-dashboard-pro/documentation",
      shareUrl:
        "https://www.creative-tim.com/product/vue-material-dashboard-pro",
      buyUrl: "",
      proUrl: "https://www.creative-tim.com/product/vue-material-dashboard-pro",
      freeUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      isOpen: false,
      backgroundImage: "./img/sidebar-2.jpg",
      sidebarColors: [
        { color: "purple", active: false },
        { color: "azure", active: false },
        { color: "green", active: true },
        { color: "orange", active: false },
        { color: "rose", active: false },
        { color: "danger", active: false }
      ],
      sidebarBg: [
        { colorBg: "black", active: true },
        { colorBg: "white", active: false },
        { colorBg: "red", active: false }
      ],
      sidebarImages: [
        { image: "./img/sidebar-1.jpg", active: false },
        { image: "./img/sidebar-2.jpg", active: true },
        { image: "./img/sidebar-3.jpg", active: false },
        { image: "./img/sidebar-4.jpg", active: false }
      ]
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    },
    toggleList(list, itemToActivate) {
      list.forEach(listItem => {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    updateValue(name, val) {
      this.$emit(`update:${name}`, val);
    },
    updateValueImg(name, val) {
      this.$emit(`update:${name}`, val);

      if (this.sidebarImg) {
        document.body.classList.toggle("sidebar-image");
        this.$emit("update:image", "");
      } else {
        document.body.classList.toggle("sidebar-image");
        this.$emit("update:image", this.backgroundImage);
      }
    },
    changeSidebarBackground(item) {
      this.$emit("update:color", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarBg(item) {
      this.$emit("update:colorBg", item.colorBg);
      this.toggleList(this.sidebarBg, item);
    },
    changeSidebarImage(item) {
      if (this.sidebarImg) {
        this.$emit("update:image", item.image);
      }
      this.backgroundImage = item.image;
      this.toggleList(this.sidebarImages, item);
    }
  }
};
</script>
<style>
.centered-row {
  display: flex;
  height: 100%;
  align-items: center;
}

.button-container .btn {
  margin-right: 10px;
}

.centered-buttons {
  display: flex;
  justify-content: center;
}
</style>
