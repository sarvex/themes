<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-medium-size-66 ml-auto mr-auto text-center"
          >
            <h2 class="title">
              Shopping Page
            </h2>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section pb-0 pt-0">
        <div class="container">
          <md-card class="md-card-plain">
            <md-card-content>
              <h3 class="card-title">
                Shopping Cart
              </h3>
              <md-table
                v-model="shoppingCartTable"
                class="table-shopping"
              >
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                >
                  <md-table-cell md-label="">
                    <div class="img-container">
                      <img
                        :src="item.image"
                        alt="products"
                      >
                    </div>
                  </md-table-cell>
                  <md-table-cell
                    md-label="Product"
                    class="td-name"
                  >
                    <a href="javascript:void(0)">{{ item.product }}</a>
                    <br>
                    <small>{{ item.category }}</small>
                  </md-table-cell>
                  <md-table-cell md-label="Color">
                    {{
                      item.color
                    }}
                  </md-table-cell>
                  <md-table-cell md-label="Size">
                    {{ item.size }}
                  </md-table-cell>
                  <md-table-cell
                    md-label="Price"
                    class="td-number"
                  >
                    <small>€</small>
                    {{ item.price }}
                  </md-table-cell>
                  <md-table-cell
                    md-label="Qty"
                    class="td-number"
                  >
                    {{ item.qty }}
                    <div class="md-group">
                      <md-button
                        class="md-round md-info md-sm"
                        @click="increaseQuantity(item)"
                      >
                        <md-icon>add</md-icon>
                      </md-button>
                      <md-button
                        class="md-round md-info md-sm"
                        @click="decreaseQuantity(item)"
                      >
                        <md-icon>remove</md-icon>
                      </md-button>
                    </div>
                  </md-table-cell>
                  <md-table-cell
                    md-label="Amount"
                    class="td-number"
                  >
                    <small>€</small>
                    {{ item.amount }}
                  </md-table-cell>
                  <md-table-cell>
                    <md-button
                      class="md-just-icon md-round md-simple"
                    >
                      <md-icon>close</md-icon>
                    </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
              <div class="table table-stats">
                <div class="td-price">
                  <div class="td-total">
                    Total
                  </div>
                  <span>
                    <small>€</small>
                    {{ shoppingTotal }}
                  </span>
                </div>
                <div class="text-right">
                  <md-button class="md-info md-round">
                    Complete Purchase
                    <md-icon>keyboard_arrow_right</md-icon>
                  </md-button>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  mixins: [Mixins.ShoppingCart, Mixins.HeaderImage],
  data() {
    return {
      image: require("@/assets/img/examples/bg2.jpg"),
      shoppingCartTable: [
        {
          image: require("@/assets/img/product1.jpg"),
          product: "Spring Jacket",
          category: "by Dolce&Gabbana",
          color: "Red",
          size: "M",
          price: 549,
          qty: 1,
          amount: 549
        },
        {
          image: require("@/assets/img/product2.jpg"),
          product: "Short Pants",
          category: "by Gucci",
          color: "Purple",
          size: "M",
          price: 499,
          qty: 2,
          amount: 998
        },
        {
          image: require("@/assets/img/product3.jpg"),
          product: "Pencil Skirt",
          category: "by Valentino",
          color: "Red",
          size: "M",
          price: 799,
          qty: 1,
          amount: 799
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
