<template>
  <div class="table-shopping">
    <el-table style="width: 100%" :data="productsTable">
      <el-table-column min-width="140">
        <div slot-scope="{ row }" class="img-container">
          <img :src="row.image" alt="product image" />
        </div>
      </el-table-column>
      <el-table-column min-width="270" label="Product">
        <div class="td-name" slot-scope="{ row }">
          <a href="#jacket">{{ row.title }}</a> <br />
          <small>{{ row.description }}</small>
        </div>
      </el-table-column>
      <el-table-column
        min-width="120"
        label="Color"
        prop="color"
      ></el-table-column>
      <el-table-column
        min-width="100"
        label="Size"
        prop="size"
      ></el-table-column>
      <el-table-column min-width="100" label="Price" align="center">
        <template slot-scope="{ row }">
          <small>€</small> {{ row.price }}
        </template>
      </el-table-column>
      <el-table-column min-width="160" label="QTY" align="center">
        <template slot-scope="{ row }">
          <div class="btn-group">
            <base-button
              type="info"
              class="btn-simple"
              size="sm"
              @click="decreaseQuantity(row)"
            >
              <i class="tim-icons icon-simple-delete"></i>
            </base-button>
            <base-button type="info" size="sm" @click="increaseQuantity(row)">
              <i class="tim-icons icon-simple-add"></i>
            </base-button>
          </div>
          {{ row.quantity }}
        </template>
      </el-table-column>
      <el-table-column min-width="100" label="Amount" align="right">
        <template slot-scope="{ row }">
          <small>€</small> {{ row.amount }}
        </template>
      </el-table-column>
      <el-table-column min-width="60" label="" align="left">
        <template slot-scope="{ row }">
          <base-button type="primary" class="btn-link">
            <i class="tim-icons icon-simple-remove"></i>
          </base-button>
        </template>
      </el-table-column>

      <div slot="append" class="stats-container">
        <div class="stats-total">
          <div class="stats-total-numbers">
            <div class="td-total">Total</div>
            <div class="td-price mr-2">
              <small>€</small> {{ shoppingTotal }}
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <base-button type="info" round class="float-right" title="">
            Complete Purchase <i class="tim-icons icon-minimal-right"></i>
          </base-button>
        </div>
      </div>
    </el-table>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui';

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      productsTable: [
        {
          image: 'img/jacket.png',
          title: 'Suede Biker Jacket ',
          description: 'by Saint Laurent',
          color: 'Black',
          size: 'M',
          price: 3390,
          quantity: 1,
          amount: 3390
        },
        {
          image: 'img/t-shirt.png',
          title: 'Jersey T-Shirt',
          description: 'by Balmain',
          color: 'Black',
          size: 'M',
          price: 499,
          quantity: 2,
          amount: 998
        },
        {
          image: 'img/gucci.png',
          title: '\tSlim-Fit Swim Short ',
          description: 'by Prada',
          color: 'Red',
          size: 'M',
          price: 200,
          quantity: 1,
          amount: 200
        }
      ]
    };
  },
  computed: {
    shoppingTotal() {
      return this.productsTable.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
    }
  },
  methods: {
    increaseQuantity(row) {
      row.quantity++;
      this.computeAmount(row);
    },
    decreaseQuantity(row) {
      if (row.quantity > 1) {
        row.quantity--;
        this.computeAmount(row);
      }
    },
    computeAmount(row) {
      row.amount = row.quantity * row.price;
    }
  }
};
</script>
<style scoped>
.stats-container {
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.7);
  padding-right: 20px;
}

.stats-total {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.stats-total-numbers {
  min-width: 240px;
  display: flex;
  justify-content: space-between;
}
</style>
