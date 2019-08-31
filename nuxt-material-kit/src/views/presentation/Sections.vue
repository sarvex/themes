<template>
  <div class="section section-sections">
    <div class="container">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
        >
          <div class="section-description">
            <h2 class="title">
              Ready to Use Sections
            </h2>
            <h5 class="description">
              Build your page section by section! We have created multiple
              options for you to put together and customise into pixel perfect
              pages. From headers to footers, you will be able to choose the
              best combination for your project.
            </h5>
            <md-button class="md-rose md-round">
              View All Sections
            </md-button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div
        v-for="item in sections"
        :key="item.key"
        class="md-layout"
      >
        <div class="md-layout-item md-size-25 md-small-size-100">
          <img
            :src="item.rowSection1"
            alt=""
          >
        </div>
        <div class="md-layout-item md-size-25 md-small-size-100">
          <img
            :src="item.rowSection2"
            alt=""
          >
        </div>
        <div class="md-layout-item md-size-25 md-small-size-100">
          <img
            :src="item.rowSection3"
            alt=""
          >
        </div>
        <div class="md-layout-item md-size-25 md-small-size-100">
          <img
            :src="item.rowSection4"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sections",
  data() {
    return {
      sections: [
        {
          rowSection1: require("@/assets/img/sections/h_1.jpg"),
          rowSection2: require("@/assets/img/sections/h_2.jpg"),
          rowSection3: require("@/assets/img/sections/h_3.jpg"),
          rowSection4: require("@/assets/img/sections/h_4.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/f_1.jpg"),
          rowSection2: require("@/assets/img/sections/f_2.jpg"),
          rowSection3: require("@/assets/img/sections/f_3.jpg"),
          rowSection4: require("@/assets/img/sections/f_4.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/f_5.jpg"),
          rowSection2: require("@/assets/img/sections/b_2.jpg"),
          rowSection3: require("@/assets/img/sections/b_3.jpg"),
          rowSection4: require("@/assets/img/sections/b_4.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/b_1.jpg"),
          rowSection2: require("@/assets/img/sections/p_2.jpg"),
          rowSection3: require("@/assets/img/sections/p_3.jpg"),
          rowSection4: require("@/assets/img/sections/p_4.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/p_5.jpg"),
          rowSection2: require("@/assets/img/sections/p_1.jpg"),
          rowSection3: require("@/assets/img/sections/pro_2.jpg"),
          rowSection4: require("@/assets/img/sections/pro_3.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/m_1.jpg"),
          rowSection2: require("@/assets/img/sections/pro_1.jpg"),
          rowSection3: require("@/assets/img/sections/t_2.jpg"),
          rowSection4: require("@/assets/img/sections/t_3.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/team_5.jpg"),
          rowSection2: require("@/assets/img/sections/team_1.jpg"),
          rowSection3: require("@/assets/img/sections/team_2.jpg"),
          rowSection4: require("@/assets/img/sections/team_3.jpg")
        },
        {
          rowSection1: require("@/assets/img/sections/t_1.jpg"),
          rowSection2: require("@/assets/img/sections/team_4.jpg"),
          rowSection3: require("@/assets/img/sections/pro_4.jpg"),
          rowSection4: require("@/assets/img/sections/m_2.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
