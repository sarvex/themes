<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Table with Links</h5>
      </div>
      <div class="card-body row">
        <div class="col-sm-12">
          <el-table :data="tableData" header-row-class-name="text-primary">
            <el-table-column type="index">

            </el-table-column>
            <el-table-column prop="name"
                             label="Name">
            </el-table-column>
            <el-table-column prop="job"
                             label="Job Position">
            </el-table-column>
            <el-table-column prop="salary"
                             label="Salary">
            </el-table-column>
            <el-table-column
              class-name="action-buttons td-actions"
              align="right"
              label="Actions">
              <template slot-scope="props">
                <p-button type="info" size="sm" icon @click="handleLike(props.$index, props.row)">
                  <i class="fa fa-user"></i>
                </p-button>
                <p-button type="success" size="sm" icon @click="handleEdit(props.$index, props.row)">
                  <i class="fa fa-edit"></i>
                </p-button>
                <p-button type="danger" size="sm" icon @click="handleDelete(props.$index, props.row)">
                  <i class="fa fa-times"></i>
                </p-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Table with Switches</h5>
      </div>
      <div class="card-body row table-full-width">
        <div class="col-sm-12">
          <el-table class="table-striped"
                    header-row-class-name="text-primary"
                    :data="tableData">
            <el-table-column type="index">

            </el-table-column>
            <el-table-column prop="name"
                             label="Name">
            </el-table-column>
            <el-table-column prop="job"
                             label="Job Position">
            </el-table-column>
            <el-table-column prop="salary"
                             align="center"
                             label="Salary">
            </el-table-column>
            <el-table-column
              align="right"
              label="Active">
              <template slot-scope="props">
                <p-switch v-model="props.row.active"></p-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Shopping Cart Table</h5>
          </div>
          <div class="table-responsive">
            <el-table class="table-shopping"
                      :summary-method="getSummaries"
                      show-summary
                      style="width: 100%"
                      :data="productsTable">
              <el-table-column min-width="120">
                <template slot-scope="props">
                  <div class="img-container">
                    <img :src="props.row.image" alt="Agenda">
                  </div>
                </template>
              </el-table-column>
              <el-table-column min-width="220" class-name="td-name">
                <template slot-scope="{row}">
                  <a>{{row.title}}</a>
                  <br>
                  <small>{{row.subTitle}}</small>
                </template>
              </el-table-column>
              <el-table-column
                class-name="td-number"
                min-width="80"
                class="td-price"
                label="Price">
                <template slot-scope="props">
                  <small>&euro;</small> {{props.row.price}}
                </template>
              </el-table-column>
              <el-table-column
                class-name="td-number"
                min-width="150"
                label="QTY"
                class="td-number td-quantity">
                <template slot-scope="props">
                  {{props.row.quantity}}
                  <div class="btn-group btn-group-sm">
                    <p-button type="default" round outline size="sm" @click="props.row.quantity > 0 ? props.row.quantity-- : 0">
                      <i class="nc-icon nc-simple-delete"></i>
                    </p-button>
                    <p-button type="default" round outline size="sm" @click="props.row.quantity++">
                      <i class="nc-icon nc-simple-add"></i>
                    </p-button>
                  </div>
                </template>
              </el-table-column>
              <el-table-column class-name="td-number" label="Total"  min-width="100">
                <template slot-scope="props">
                  <strong><small>&euro;</small> {{props.row.quantity * props.row.price}} </strong>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default{
    components: {
      PSwitch
    },
    data () {
      return {
        tableData: [{
          name: 'Andrew Mike',
          job: 'Develop',
          salary: '€ 99,225',
          active: false
        }, {
          name: 'John Doe',
          job: 'Design',
          salary: '€ 89,241',
          active: false
        }, {
          name: 'Alex Mike',
          job: 'Design',
          salary: '€ 92,144',
          active: false
        }, {
          name: 'Mike Monday',
          job: 'Marketing',
          salary: '€ 49,990',
          active: true
        },
        {
          name: 'Paul dickens',
          job: 'Communication',
          salary: '€ 69,201',
          active: true
        }],
        productsTable: [
          {
            image: 'static/img/tables/agenda.png',
            title: 'Notebook',
            subTitle: 'Most beautiful agenda for the office.',
            price: 49,
            quantity: 1
          },
          {
            image: 'static/img/tables/stylus.jpg',
            title: 'Stylus',
            subTitle: 'Design is not just what it looks like and feels like. Design is how it works.',
            price: 499,
            quantity: 2
          },
          {
            image: 'static/img/tables/evernote.png',
            title: 'Evernote iPad Stander',
            subTitle: 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.',
            price: 799,
            quantity: 1
          }
        ]
      }
    },
    methods: {
      handleLike (index, row) {
        alert(`Your clicked on Like button`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        alert(`Your want to delete ${row.name}`)
      },
      getSummaries (param) {
        const { columns } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total'
          } else if (index < columns.length - 1) {
            sums[index] = ''
          } else {
            let sum = 0
            this.productsTable.forEach((obj) => {
              sum += obj.quantity * obj.price
            })
            sums[index] = `€ ${sum}`
          }
        })
        return sums
      }
    }
  }
</script>
<style lang="scss">
  .el-table .td-actions{
    button.btn {
      margin-right: 5px;
    }
  }
</style>
