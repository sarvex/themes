<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      filter-color="rose"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout title-row">
          <div
            class="md-layout-item md-size-33 md-small-size-100 ml-auto text-right"
          >
            <md-button
              class="md-white"
            >
              <md-icon>shopping_cart</md-icon> 0 Items
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="section">
      <div class="container">
        <div class="main main-raised">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <ProductZoomer
                :base-images="images"
                :base-zoomer-options="zoomerOptions"
              />
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <h2 class="title">
                Becky Silk Blazer
              </h2>
              <h3 class="main-price">
                $335
              </h3>
              <collapse
                :active-tab="1"
                :collapse="[
                  'Description',
                  'Designer Information',
                  'Details and Care'
                ]"
                icon="keyboard_arrow_down"
                color-collapse="rose"
              >
                <template slot="md-collapse-pane-1">
                  <p>
                    Eres' daring 'Grigri Fortune' swimsuit has the fit and
                    coverage of a bikini in a one-piece silhouette. This fuchsia
                    style is crafted from the label's sculpting peau douce
                    fabric and has flattering cutouts through the torso and
                    back. Wear yours with mirrored sunglasses on vacation.
                  </p>
                </template>
                <template slot="md-collapse-pane-2">
                  <p>
                    An infusion of West Coast cool and New York attitude,
                    Rebecca Minkoff is synonymous with It girl style. Minkoff
                    burst on the fashion scene with her best-selling 'Morning
                    After Bag' and later expanded her offering with the Rebecca
                    Minkoff Collection - a range of luxe city staples with a
                    "downtown romantic" theme.
                  </p>
                </template>
                <template slot="md-collapse-pane-3">
                  <ul>
                    <li>Storm and midnight-blue stretch cotton-blend</li>
                    <li>
                      Notch lapels, functioning buttoned cuffs, two front flap
                      pockets, single vent, internal pocket
                    </li>
                    <li>Two button fastening</li>
                    <li>84% cotton, 14% nylon, 2% elastane</li>
                    <li>Dry clean</li>
                  </ul>
                </template>
              </collapse>
              <div class="md-layout pick-size">
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <label>Select Color</label>
                  <md-field>
                    <md-select
                      id="selectColor"
                      v-model="selectColor"
                      name="selectColor"
                    >
                      <md-option value="rose">
                        Rose
                      </md-option>
                      <md-option value="gray">
                        Gray
                      </md-option>
                      <md-option value="white">
                        White
                      </md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <label>Select Size</label>
                  <md-field>
                    <md-select
                      id="selectSize"
                      v-model="selectSize"
                      name="selectSize"
                    >
                      <md-option value="small">
                        Small
                      </md-option>
                      <md-option value="medium">
                        Medium
                      </md-option>
                      <md-option value="large">
                        Large
                      </md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
              <div class="text-right">
                <md-button
                  class="md-rose md-round"
                >
                  Add To Cart <md-icon>shopping_cart</md-icon>
                </md-button>
              </div>
            </div>
          </div>
        </div>
        <div class="features text-center">
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                icon-color="info"
                icon="local_shipping"
                text-center
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  2 Days Delivery
                </h4>
                <p slot="content">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                icon-color="success"
                icon="verified_user"
                text-center
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Refundable Policy
                </h4>
                <p slot="content">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </info-areas>
            </div>
            <div class="md-layout-item md-size-33 md-small-size-100">
              <info-areas
                icon-color="rose"
                icon="favorite"
                text-center
              >
                <h4
                  slot="title"
                  class="info-title"
                >
                  Popular Item
                </h4>
                <p slot="content">
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </info-areas>
            </div>
          </div>
        </div>
        <div class="related-products">
          <h3 class="title text-center">
            You may also be interested in:
          </h3>
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard1"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-rose">
                    Trending
                  </h6>
                  <h4 class="card-title">
                    Dolce & Gabbana
                  </h4>
                  <p class="card-description">
                    Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €1,459</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard2"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">
                    Popular
                  </h6>
                  <h4 class="card-title">
                    Balmain
                  </h4>
                  <p class="card-description">
                    Balmain's mid-rise skinny jeans are cut with stretch to
                    ensure they retain their second-skin fit but move
                    comfortably.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €459</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard3"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-muted">
                    Popular
                  </h6>
                  <h4 class="card-title">
                    Balenciaga
                  </h4>
                  <p class="card-description">
                    Balenciaga's black textured-leather wallet is finished with
                    the label's iconic 'Giant' studs. This is where you can...
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €590</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-rose md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
            <div
              class="md-layout-item md-size-50 md-small-size-100 md-large-size-25 md-xlarge-size-25"
            >
              <product-card
                text-center
                class="mt-3"
                :card-image="productCard.productCard4"
                :shadow-normal="false"
                :no-colored-shadow="false"
              >
                <template slot="cardContent">
                  <h6 class="card-category text-rose">
                    Popular
                  </h6>
                  <h4 class="card-title">
                    Dolce & Gabbana
                  </h4>
                  <p class="card-description">
                    Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </p>
                </template>
                <template slot="cardAction">
                  <div class="price-container">
                    <span class="price"> €1,459</span>
                  </div>
                  <div class="stats ml-auto">
                    <md-button class="md-just-icon md-round md-simple">
                      <md-icon>favorite</md-icon>
                      <md-tooltip
                        md-direction="top"
                      >
                        Save to Wishlist
                      </md-tooltip>
                    </md-button>
                  </div>
                </template>
              </product-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse, InfoAreas, ProductCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    Collapse,
    InfoAreas,
    ProductCard
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "product-page",
  data() {
    return {
      selectColor: "rose",
      selectSize: "small",
      image: require("@/assets/img/examples/bg-product.jpg"),
      productCard: {
        productCard1: require("@/assets/img/examples/card-product1.jpg"),
        productCard2: require("@/assets/img/examples/card-product3.jpg"),
        productCard3: require("@/assets/img/examples/card-product4.jpg"),
        productCard4: require("@/assets/img/examples/card-product2.jpg")
      },
      images: {
        normal_size: [
          {
            id: 1,
            url: require("@/assets/img/examples/product1.jpg")
          },
          {
            id: 2,
            url: require("@/assets/img/examples/product2.jpg")
          },
          {
            id: 3,
            url: require("@/assets/img/examples/product3.jpg")
          },
          {
            id: 4,
            url: require("@/assets/img/examples/product4.jpg")
          }
        ],
        large_size: [
          {
            id: 1,
            url: require("@/assets/img/examples/product1.jpg")
          },
          {
            id: 2,
            url: require("@/assets/img/examples/product2.jpg")
          },
          {
            id: 3,
            url: require("@/assets/img/examples/product3.jpg")
          },
          {
            id: 4,
            url: require("@/assets/img/examples/product4.jpg")
          }
        ]
      },
      zoomerOptions: {
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-container",
        move_by_click: true,
        scroll_items: 4
      }
    };
  }
};
</script>
<style lang="scss">
.inline-container-zoomer-box {
  .preview-box {
    text-align: center;
    margin-bottom: 5vh;
    margin-top: 2vh;

    img {
      max-width: 60%;
    }
  }

  .control-box {
    margin-bottom: 30px;
  }

  .thumb-list img {
    padding: 18px 8px;
    border: 1px solid transparent;
    opacity: 0.8;
    transition: all 0.15s ease;

    &:hover {
      opacity: 1;
      border-color: #ddd;
    }
  }

  .responsive-image {
    max-width: 80%;
    border-radius: 3px;

    &.choosed-thumb {
      box-shadow: none !important;
      border-color: #ddd;
    }
  }

  .control {
    font-size: 14px;

    path {
      fill: #9fa4ab;
    }
  }
}
</style>
