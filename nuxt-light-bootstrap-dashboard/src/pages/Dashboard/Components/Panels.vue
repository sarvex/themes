<template>
  <div>
    <div class="row">
      <div class="col-xl-6 col-lg-12">
        <card>
          <template slot="header">
            <h4 class="card-title">Collapsible Accordion</h4>
            <p class="card-category">On white card</p>
          </template>
          <el-collapse>
            <el-collapse-item title="Default Collapsible Item 1" name="1">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Default Collapsible Item 1" name="2">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Default Collapsible Item 1" name="3">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
          </el-collapse>
        </card>
      </div>


      <div class="col-xl-6 col-lg-12">
        <card class="card-plain">
          <template slot="header">
            <h4 class="card-title">Collapsible Accordion</h4>
            <p class="card-category">On plain card</p>
          </template>
          <el-collapse>
            <el-collapse-item title="Default Collapsible Item 1" name="1">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Default Collapsible Item 1" name="2">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Default Collapsible Item 1" name="3">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
          </el-collapse>
        </card>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6 col-lg-12">

        <card title="Tabs" subTitle="Plain text tabs">
          <vue-tabs value="Description">
            <v-tab title="Info">
              <p>Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!</p>
            </v-tab>
            <v-tab title="Account">
              <p>We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.</p>
            </v-tab>
            <v-tab title="Style">
              <p>Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.</p>
            </v-tab>
            <v-tab title="Settings">
              Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
            </v-tab>
          </vue-tabs>
        </card>
      </div>
      <div class="col-xl-6 col-lg-12">
        <card title="Tabs & Icons" subTitle="Tabs with icons">
          <vue-tabs>
            <v-tab title="Info" icon="nc-icon nc-single-copy-04">
              <p>Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!</p>
            </v-tab>
            <v-tab title="Account" icon="nc-icon nc-circle-09">
              <p>We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.</p>
            </v-tab>
            <v-tab title="Style" icon="nc-icon nc-ruler-pencil">
              <p>Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.</p>
            </v-tab>
            <v-tab title="Settings" icon="nc-icon nc-settings-90">
              Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
            </v-tab>
          </vue-tabs>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Collapse, CollapseItem } from 'element-ui'
  import VueTabs from 'vue-nav-tabs'

  Vue.use(VueTabs)
  export default {
    components: {
      [Collapse.name]: Collapse,
      [CollapseItem.name]: CollapseItem
    },
    data () {
      return {
        activeName: 'first'
      }
    }
  }
</script>
<style lang="scss">
  // css transition for tabs
  .vue-tabs .tab-content {
    padding-top: 10px;
    min-height: 100px;
    display: flex; // to avoid horizontal scroll when animating
    .tab-container {
      animation: fadeIn 0.5s;
    }
  }
</style>
