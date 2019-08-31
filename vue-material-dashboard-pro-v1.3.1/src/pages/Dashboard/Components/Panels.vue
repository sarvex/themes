<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-50 md-medium-size-100">
      <tabs
        :tab-name="['Profile', 'Settings', 'Options']"
        color-button="warning"
      >
        <h4 class="title" slot="header-title">
          Navigation Pills - <small class="description">Horizontal Tabs</small>
        </h4>

        <!-- here you can add your content for tab-content -->
        <template slot="tab-pane-1">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits.
          <br /><br />
          Dramatically visualize customer directed convergence without
          revolutionary ROI. Collaboratively administrate empowered markets via
          plug-and-play networks. Dynamically procrastinate B2C users after
          installed base benefits.
        </template>
        <template slot="tab-pane-2">
          Efficiently unleash cross-media information without cross-media value.
          Quickly maximize timely deliverables for real-time schemas.
          <br /><br />
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
        </template>
        <template slot="tab-pane-3">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
          <br /><br />
          Dynamically innovate resource-leveling customer service for state of
          the art customer service.
        </template>
      </tabs>
    </div>
    <div class="md-layout-item md-size-50 md-medium-size-100">
      <tabs
        :tab-name="['Profile', 'Settings', 'Options']"
        flex-column
        color-button="success"
      >
        <h4 class="title" slot="header-title">
          Navigation Pills - <small class="description">Vertical Tabs</small>
        </h4>

        <!-- here you can add your content for tab-content -->
        <template slot="tab-pane-1">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits.
          <br /><br />
          Dramatically visualize customer directed convergence without
          revolutionary ROI. Collaboratively administrate empowered markets via
          plug-and-play networks. Dynamically procrastinate B2C users after
          installed base benefits.
        </template>
        <template slot="tab-pane-2">
          Efficiently unleash cross-media information without cross-media value.
          Quickly maximize timely deliverables for real-time schemas.
          <br /><br />
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
        </template>
        <template slot="tab-pane-3">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
          <br /><br />
          Dynamically innovate resource-leveling customer service for state of
          the art customer service.
        </template>
      </tabs>
    </div>

    <div class="md-layout-item md-size-50 md-medium-size-100">
      <md-card>
        <md-card-header>
          <h4 class="title">Collapsible Accordion</h4>
        </md-card-header>
        <md-card-content>
          <collapse
            :collapse="[
              'Collapsible Group Item #1',
              'Collapsible Group Item #2',
              'Collapsible Group Item #3'
            ]"
            icon="keyboard_arrow_down"
            color-collapse="success"
          >
            <template slot="md-collapse-pane-1">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </p>
            </template>
            <template slot="md-collapse-pane-2">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </p>
            </template>
            <template slot="md-collapse-pane-3">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </p>
            </template>
          </collapse>
        </md-card-content>
      </md-card>
    </div>

    <div class="md-layout-item md-size-50 md-medium-size-100">
      <tabs
        :tab-name="['Home', 'Settings']"
        :tab-icon="['dashboard', 'schedule']"
        flex-column
        nav-pills-icons
        color-button="success"
      >
        <h4 class="title" slot="header-title">
          Navigation Pills Icons -
          <small class="description">Vertical Tabs</small>
        </h4>

        <!-- here you can add your content for tab-content -->
        <template slot="tab-pane-1">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits.
          <br /><br />
          Dramatically visualize customer directed convergence without
          revolutionary ROI. Collaboratively administrate empowered markets via
          plug-and-play networks. Dynamically procrastinate B2C users after
          installed base benefits.
        </template>
        <template slot="tab-pane-2">
          Efficiently unleash cross-media information without cross-media value.
          Quickly maximize timely deliverables for real-time schemas.
          <br /><br />
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
        </template>
      </tabs>
    </div>

    <div class="md-layout-item md-size-66 mx-auto md-medium-size-100">
      <tabs
        :tab-name="['Description', 'Location', 'Legal Info', 'Help Center']"
        :tab-icon="['info', 'location_on', 'gavel', 'help_outline']"
        class="page-subcategories"
        nav-pills-icons
        plain
        color-button="warning"
      >
        <h3 class="title text-center" slot="header-title">
          Page Subcategories
        </h3>

        <!-- here you can add your content for tab-content -->
        <template slot="tab-pane-1">
          <md-card>
            <md-card-header>
              <h4 class="title">Description about product</h4>
              <p class="category">More information here</p>
            </md-card-header>

            <md-card-content>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </md-card-content>
          </md-card>
        </template>
        <template slot="tab-pane-2">
          <md-card>
            <md-card-header>
              <h4 class="title">Location of the product</h4>
              <p class="category">More information here</p>
            </md-card-header>

            <md-card-content>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </md-card-content>
          </md-card>
        </template>
        <template slot="tab-pane-3">
          <md-card>
            <md-card-header>
              <h4 class="title">Legal info of the product</h4>
              <p class="category">More information here</p>
            </md-card-header>

            <md-card-content>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
            </md-card-content>
          </md-card>
        </template>
        <template slot="tab-pane-4">
          <md-card>
            <md-card-header>
              <h4 class="title">Help center</h4>
              <p class="category">More information here</p>
            </md-card-header>

            <md-card-content>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
            </md-card-content>
          </md-card>
        </template>
      </tabs>
    </div>
  </div>
</template>
<script>
import { Tabs } from "@/components";
import { Collapse } from "@/components";

export default {
  components: {
    Tabs,
    Collapse
  }
};
</script>
