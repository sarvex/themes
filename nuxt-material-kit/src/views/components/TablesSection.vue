<template>
  <div class="wrapper">
    <h2>Content Areas</h2>
    <div id="tables">
      <div class="title">
        <h3>Tables</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-100">
          <h4>Simple Table</h4>
        </div>
        <div class="md-layout-item md-large-size-66 md-medium-size-80 mx-auto">
          <h4><small>Simple With Actions</small></h4>
          <md-table v-model="tableData">
            <md-table-row
              slot="md-table-row"
              slot-scope="{ item }"
            >
              <md-table-cell md-label="#">
                {{ item.id }}
              </md-table-cell>
              <md-table-cell md-label="Name">
                {{ item.name }}
              </md-table-cell>
              <md-table-cell md-label="Country">
                {{
                  item.country
                }}
              </md-table-cell>
              <md-table-cell md-label="City">
                {{ item.city }}
              </md-table-cell>
              <md-table-cell md-label="Salary">
                {{ item.salary }}
              </md-table-cell>
              <md-table-cell md-label="Actions">
                <md-button
                  class="md-just-icon md-sm"
                  :class="getClass(item.icon1, item.id)"
                >
                  <md-icon>{{ item.icon1 }}</md-icon>
                </md-button>
                <md-button
                  class="md-just-icon md-sm"
                  :class="getClass(item.icon2, item.id)"
                >
                  <md-icon>{{ item.icon2 }}</md-icon>
                </md-button>
                <md-button
                  class="md-just-icon md-sm"
                  :class="getClass(item.icon3, item.id)"
                >
                  <md-icon>{{ item.icon3 }}</md-icon>
                </md-button>
              </md-table-cell>
            </md-table-row>
          </md-table>
          <h4><small>Striped with Checkboxes</small></h4>
          <md-table
            v-model="tableDataStriped"
            class="table-striped"
          >
            <md-table-row
              slot="md-table-row"
              slot-scope="{ item }"
              md-selectable="multiple"
              md-auto-select
            >
              <md-table-cell md-label="#">
                {{ item.id }}
              </md-table-cell>
              <md-table-cell md-label="Product Name">
                {{
                  item.name
                }}
              </md-table-cell>
              <md-table-cell md-label="Type">
                {{ item.type }}
              </md-table-cell>
              <md-table-cell md-label="Qty">
                {{ item.qty }}
              </md-table-cell>
              <md-table-cell md-label="Price">
                {{ item.price }}
              </md-table-cell>
              <md-table-cell md-label="Amount">
                {{ item.amount }}
              </md-table-cell>
            </md-table-row>
          </md-table>
          <div class="table table-stats table-striped">
            <div class="td-price">
              <div class="td-total">
                Total
              </div>
              <span>
                €12,999
              </span>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-100">
          <h4>Shopping Cart Table</h4>
        </div>
        <div class="md-layout-item md-size-100">
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
                {{ item.color }}
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
                    @click.native="increaseQuantity(item)"
                  >
                    <md-icon>add</md-icon>
                  </md-button>
                  <md-button
                    class="md-round md-info md-sm"
                    @click.native="decreaseQuantity(item)"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from "@/plugins/basicMixins";

export default {
  mixins: [Mixins.ShoppingCart],
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: "$36.738",
          country: "Niger",
          city: "Oud-Turnhout",
          icon1: "person",
          icon2: "edit",
          icon3: "close"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: "$23,789",
          country: "Curaçao",
          city: "Sinaai-Waas",
          icon1: "person",
          icon2: "edit",
          icon3: "close"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: "$56,142",
          country: "Netherlands",
          city: "Baileux",
          icon1: "person",
          icon2: "edit",
          icon3: "close"
        },
        {
          id: 4,
          name: "Philip Chaney",
          salary: "$38,735",
          country: "Korea, South",
          city: "Overland Park",
          icon1: "person",
          icon2: "edit",
          icon3: "close"
        },
        {
          id: 5,
          name: "Doris Greene",
          salary: "$63,542",
          country: "Malawi",
          city: "Feldkirchen in Kärnten",
          icon1: "person",
          icon2: "edit",
          icon3: "close"
        }
      ],
      tableDataStriped: [
        {
          id: 1,
          name: "Moleskine Agenda",
          type: "Office",
          qty: "25",
          price: "€ 49",
          amount: "€ 1,225"
        },
        {
          id: 2,
          name: "Stabilo Pen",
          type: "Office",
          qty: "30",
          price: "€ 10",
          amount: "€ 300"
        },
        {
          id: 3,
          name: "A4 Paper Pack",
          type: "Office",
          qty: "50",
          price: "€ 10.99",
          amount: "€ 109"
        },
        {
          id: 4,
          name: "Apple Ipad",
          type: "Meeting",
          qty: "10",
          price: "€ 499.00",
          amount: "€ 4,990"
        },
        {
          id: 5,
          name: "Apple Iphone",
          type: "Communication",
          qty: "10",
          price: "€ 599.00",
          amount: "€ 5,990"
        }
      ],
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
  },
  methods: {
    getClass: function(item, id) {
      let classes = "";
      switch (item) {
        case "person": {
          classes = "md-info";
          break;
        }
        case "edit": {
          classes = "md-success";
          break;
        }
        case "close": {
          classes = "md-danger";
          break;
        }
      }
      switch (id) {
        case 1:
        case 5: {
          break;
        }
        case 2:
        case 4: {
          classes = `${classes} md-round`;
          break;
        }
        case 3: {
          classes = `${classes} md-simple`;
          break;
        }
      }
      return classes;
    }
  }
};
</script>

<style lang="scss">
.table-stats {
  display: flex;
  align-items: center;
  text-align: right;
  flex-flow: row wrap;

  .td-price .td-total {
    display: inline-flex;
    font-weight: 500;
    font-size: 1.0625rem;
    margin-right: 50px;
  }

  .td-price {
    font-size: 26px;
    border-top: 1px solid #ddd;
  }

  .td-price,
  > div {
    flex: 0 0 100%;
    padding: 12px 8px;
  }
}
</style>
