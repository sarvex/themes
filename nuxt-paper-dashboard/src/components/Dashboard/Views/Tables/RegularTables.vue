<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
              <h4 class="title">Striped table</h4>
              <p class="category">Here is a subtitle for this table</p>
          </div>
          <div class="card-content table-responsive table-full-width">
            <el-table class="table-striped" :data="tableData">
                <el-table-column label="Id" property="id"></el-table-column>
                <el-table-column label="Name" property="name"></el-table-column>
                <el-table-column label="Country" property="country"></el-table-column>
                <el-table-column label="City" property="city"></el-table-column>
                <el-table-column label="Salary" property="salary"></el-table-column>
            </el-table>

          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="card card-plain">
          <div class="card-header">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </div>
          <div class="card-content table-responsive table-full-width">
            <el-table :data="tableData">
              <el-table-column label="Id" property="id"></el-table-column>
              <el-table-column label="Name" property="name"></el-table-column>
              <el-table-column label="Salary" property="salary"></el-table-column>
              <el-table-column label="Country" property="country"></el-table-column>
              <el-table-column label="City" property="city"></el-table-column>
            </el-table>

          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="title">Regular Table with Colors</h4>
            <p class="category">Here is a subtitle for this table</p>
          </div>
          <div class="card-content table-responsive table-full-width">
            <el-table :row-class-name="tableRowClassName"
                      :data="tableData">
              <el-table-column class="success" label="Id" property="id"></el-table-column>
              <el-table-column label="Name" property="name"></el-table-column>
              <el-table-column class="danger" label="Salary" property="salary"></el-table-column>
              <el-table-column class="info" label="Country" property="country"></el-table-column>
              <el-table-column label="City" property="city"></el-table-column>
            </el-table>

          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    data () {
      return {
        tableData: [{
          id: 1,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout'
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas'
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux'
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park'
        },
        {
          id: 5,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten'
        }]
      }
    },
    methods: {
      tableRowClassName (row, index) {
        if (index === 0) {
          return 'success'
        } else if (index === 2) {
          return 'info'
        } else if (index === 4) {
          return 'danger'
        } else if (index === 6) {
          return 'warning'
        }
        return ''
      }
    }
  }

</script>
<style>

</style>
