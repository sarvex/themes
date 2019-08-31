<template>
  <div>
    <div class="row"><route-bread-crumb /></div>
    <card>
      <div slot="header"><h4 class="card-title">Table with Links</h4></div>
      <div class="row">
        <div class="col-sm-12">
          <el-table :data="tableData">
            <el-table-column min-width="50" label="#" align="center">
              <div class="photo" slot-scope="{ row }">
                <img :src="row.img" alt="Table image" />
              </div>
            </el-table-column>
            <el-table-column min-width="150" prop="name" label="Name">
            </el-table-column>
            <el-table-column min-width="200" prop="job" label="Job Position">
            </el-table-column>
            <el-table-column
              min-width="150"
              prop="since"
              align="center"
              label="Since"
            >
            </el-table-column>
            <el-table-column
              min-width="150"
              prop="salary"
              align="right"
              label="Salary"
            >
            </el-table-column>
            <el-table-column
              min-width="150"
              header-align="right"
              align="right"
              label="Actions"
            >
              <div
                slot-scope="{ row, $index }"
                class="text-right table-actions"
              >
                <el-tooltip
                  content="Refresh"
                  effect="light"
                  :open-delay="300"
                  placement="top"
                >
                  <base-button
                    :type="$index > 2 ? 'success' : 'neutral'"
                    icon
                    size="sm"
                    class="btn-link"
                  >
                    <i class="tim-icons icon-refresh-01"></i>
                  </base-button>
                </el-tooltip>
                <el-tooltip
                  content="Delete"
                  effect="light"
                  :open-delay="300"
                  placement="top"
                >
                  <base-button
                    :type="$index > 2 ? 'danger' : 'neutral'"
                    icon
                    size="sm"
                    class="btn-link"
                  >
                    <i class="tim-icons icon-simple-remove"></i>
                  </base-button>
                </el-tooltip>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
    <card>
      <div slot="header">
        <h4 class="card-title">Striped Table with Checkboxes</h4>
      </div>
      <div class="row table-full-width">
        <div class="col-sm-12">
          <el-table :data="secondTableData">
            <el-table-column width="60" label="#" align="center">
              <div slot-scope="{ row }" class="checkbox-cell">
                <base-checkbox v-model="row.checked"></base-checkbox>
              </div>
            </el-table-column>
            <el-table-column prop="name" min-width="180" label="Product Name">
            </el-table-column>
            <el-table-column prop="type" min-width="180" label="Type">
            </el-table-column>
            <el-table-column label="Milestone" min-width="130">
              <div slot-scope="{ row }">
                <base-progress
                  :value="row.progress"
                  :label="row.progressText"
                  value-position="right"
                />
              </div>
            </el-table-column>
            <el-table-column
              prop="quantity"
              min-width="80"
              align="center"
              label="QTY"
            >
            </el-table-column>
            <el-table-column
              prop="price"
              min-width="120"
              align="right"
              label="Price"
            >
            </el-table-column>
            <el-table-column
              prop="amount"
              min-width="120"
              align="right"
              label="Amount"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
    <div class="row">
      <div class="col-md-12">
        <card>
          <div slot="header">
            <h4 class="card-title">Shopping Cart Table</h4>
            <br />
          </div>
          <shopping-table></shopping-table>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui';
import { BaseCheckbox, BaseProgress, RouteBreadCrumb } from 'src/components';
import ShoppingTable from './ExtendedTables/ShoppingTable';

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseCheckbox,
    RouteBreadCrumb,
    BaseProgress,
    ShoppingTable
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          img: 'img/tania.jpg',
          name: 'Tania Mike',
          job: 'Develop',
          progress: 25,
          since: 2013,
          salary: '€ 99,225'
        },
        {
          id: 2,
          img: 'img/robi.jpg',
          name: 'John Doe',
          job: 'CEO',
          progress: 77,
          since: 2012,
          salary: '€ 89,241'
        },
        {
          id: 3,
          img: 'img/lora.jpg',
          name: 'Alexa Mike',
          job: 'Design',
          progress: 41,
          since: 2010,
          salary: '€ 92,144'
        },
        {
          id: 4,
          img: 'img/jana.jpg',
          name: 'Jana Monday',
          job: 'Marketing',
          progress: 50,
          since: 2013,
          salary: '€ 49,990'
        },
        {
          id: 5,
          img: 'img/mike.jpg',
          name: 'Paul Dickens',
          job: 'Develop',
          progress: 100,
          since: 2015,
          salary: '€ 69,201'
        },
        {
          id: 6,
          img: 'img/emilyz.jpg',
          name: 'Manuela Rico',
          job: 'Manager',
          progress: 15,
          since: 2012,
          salary: '€ 99,201'
        }
      ],
      secondTableData: [
        {
          id: 1,
          name: 'Moleskine Agenda',
          checked: true,
          type: 'Office',
          progress: 25,
          progressText: 'V1.2.0',
          quantity: 25,
          price: '€ 49',
          amount: '€ 1,225'
        },
        {
          id: 2,
          name: 'Stabilo Pen',
          checked: false,
          type: 'Office',
          progress: 45,
          progressText: 'V1.4.0',
          quantity: 30,
          price: '€ 10',
          amount: '€ 300'
        },
        {
          id: 3,
          name: 'A4 Paper Pack',
          checked: true,
          type: 'Office',
          progress: 10,
          progressText: 'V2.0.0',
          quantity: 10,
          price: '€ 10.99',
          amount: '€ 109'
        },
        {
          id: 4,
          name: 'Apple iPad',
          checked: false,
          type: 'Meeting',
          progress: 80,
          progressText: 'V1.5.0',
          quantity: 10,
          price: '€ 499.00',
          amount: '€ 4,990'
        },
        {
          id: 5,
          name: 'Apple iPhone',
          checked: true,
          type: 'Communication',
          progress: 50,
          progressText: 'V1.0.0',
          quantity: 10,
          price: '€ 599.00',
          amount: '€ 5,990'
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.checkbox-cell {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
