<template>
  <div class="table-shopping">
    <el-table style="width: 100%"
              :data="productsTable">
      <el-table-column min-width="220">
        <div slot-scope="{row}" class="img-container">
          <img :src="row.image" alt="Agenda">
        </div>
      </el-table-column>
      <el-table-column min-width="220" label="Product">
        <div class="td-name" slot-scope="{row}">
          <a href="#jacket">{{row.title}}</a>
          <br>
          <small>{{row.description}}</small>
        </div>
      </el-table-column>
      <el-table-column min-width="180" label="Color" prop="color"></el-table-column>
      <el-table-column min-width="100" label="Size" prop="size"></el-table-column>
      <el-table-column min-width="200" label="Price" header-align="right">
        <div slot-scope="{row}" class="td-number">
          <small>€</small>
          {{row.price}}
        </div>
      </el-table-column>
      <el-table-column min-width="200" label="Quantity" header-align="right">
        <div slot-scope="{row}" class="td-number">
          {{row.quantity}}
          <div class="btn-group">
            <n-button type="info" size="sm" @click.native="decreaseQuantity(row)">
              <i class="now-ui-icons ui-1_simple-delete"></i>
            </n-button>
            <n-button type="info" size="sm" @click.native="increaseQuantity(row)">
              <i class="now-ui-icons ui-1_simple-add"></i>
            </n-button>
          </div>
        </div>
      </el-table-column>
      <el-table-column min-width="200" label="Amount" header-align="right">
        <div slot-scope="{row}" class="td-number">
          <small>€</small>
          {{row.amount}}
        </div>
      </el-table-column>
      <el-table-column min-width="100" label="">
        <div slot-scope="{row}" class="td-actions">
          <n-button type="neutral">
            <i class="now-ui-icons ui-1_simple-remove"></i>
          </n-button>
        </div>
      </el-table-column>
    </el-table>
    <div class="table table-stats">
      <div class="td-total">
        Total
      </div>
      <div class="td-price">
        <small>€</small>
        {{shoppingTotal}}
      </div>
      <div class="text-right">
        <button type="button" rel="tooltip" class="btn btn-info btn-round " data-original-title=""
                title="">
          Complete Purchase
          <i class="now-ui-icons arrows-1_minimal-right"></i>
        </button>
      </div>
    </div>
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
          image: 'img/saint-laurent.jpg',
          title: 'Suede Biker Jacket ',
          description: 'by Saint Laurent',
          color: 'Black',
          size: 'M',
          price: 3390,
          quantity: 1,
          amount: 3390
        },
        {
          image: 'img/balmain.jpg',
          title: 'Jersey T-Shirt',
          description: 'by Balmain',
          color: 'Black',
          size: 'M',
          price: 499,
          quantity: 2,
          amount: 998
        },
        {
          image: 'img/prada.jpg',
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
<style>
.table-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
