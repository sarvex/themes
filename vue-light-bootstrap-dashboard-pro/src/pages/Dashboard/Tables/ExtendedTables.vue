<template>
  <div>
    <card>
      <div slot="header">
        <h4 class="card-title">Table with Links</h4>
        <p class="category">Here is a subtitle for this table</p>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <el-table :data="tableData">
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
              label="Actions">
              <div class="td-actions" slot-scope="props">
                <a v-tooltip.top-center="'View Profile'" class="btn btn-info btn-link btn-xs" href="#"
                   @click="handleLike(props.$index, props.row)">
                  <i class="fa fa-user"></i>
                </a>
                <a v-tooltip.top-center="'Edit Profile'" class="btn btn-warning btn-link btn-xs"
                   @click="handleEdit(props.$index, props.row)">
                  <i class="fa fa-edit"></i>
                </a>
                <a v-tooltip.top-center="'Delete'" class="btn btn-danger btn-link btn-xs"
                   @click="handleDelete(props.$index, props.row)">
                  <i class="fa fa-close"></i>
                </a>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
    <card>
      <div slot="header">
        <h4 class="card-title">Table with Switches</h4>
        <p class="category">With some subtitle</p>
      </div>
      <div class="row table-full-width">
        <div class="col-sm-12">
          <el-table class="table-striped"
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
                             label="Salary">
            </el-table-column>
            <el-table-column
              label="Active">
              <template slot-scope="props">
                <l-switch v-model="props.row.active"></l-switch>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </card>
    <div class="row">
      <div class="col-md-12">
        <card>
          <div slot="header">
            <h4 class="card-title">Table Big Boy</h4>
            <p class="category">A table for content management</p>
            <br />
          </div>
          <div class="table-responsive">
            <el-table class="table-bigboy"
                      style="width: 100%"
                      :data="productsTable">
              <el-table-column min-width="220" label="THUMB">
                <template slot-scope="{row}">
                  <div class="img-container">
                    <img :src="row.image" alt="Agenda">
                  </div>
                </template>
              </el-table-column>
              <el-table-column min-width="220" label="BLOG TITLE">
                <template slot-scope="{row}">
                  <p>{{row.title}}</p>
                </template>
              </el-table-column>
              <el-table-column
                min-width="180"
                label="DESCRIPTION" prop="description">
              </el-table-column>
              <el-table-column min-width="100" label="DATE" prop="date">
              </el-table-column>
              <el-table-column  min-width="120">
                <template slot-scope="{row}">
                    <a class="btn-success btn-simple btn-link" v-tooltip.top-center="'View Post'">
                      <i class="fa fa-image"></i>
                    </a>
                    <a class="btn-info btn-simple btn-link" v-tooltip.top-center="'Edit'">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a class="btn-danger btn-simple btn-link" v-tooltip.top-center="'Delete'">
                      <i class="fa fa-times"></i>
                    </a>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import {Table, TableColumn} from 'element-ui'
  import LSwitch from 'src/components/Switch.vue'
  export default{
    components: {
      LSwitch,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
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
            image: 'static/img/blog-1.jpg',
            title: '10 Things that all designers do',
            description: 'Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.',
            date: '30/08/2016',
            views: '1,225'
          },
          {
            image: 'static/img/blog-2.jpg',
            title: 'Back to School Offer',
            description: 'Design is not just what it looks like and feels like. Design is how it works.',
            date: '17/07/2016',
            views: '49,302'
          },
          {
            image: 'static/img/blog-3.jpg',
            title: 'First Dribbble Meetup in Romania',
            description: 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.',
            date: '23/06/2016',
            views: '1,799'
          },
          {
            image: 'static/img/blog-4.jpg',
            title: 'How we created our startup with 0$',
            description: 'A desk is a generally wooded piece of furniture and a type of useful table often used in a school or office setting for various academic or professional activities ...',
            date: '30/08/2016',
            views: '23,030'
          },
          {
            image: 'static/img/blog-5.jpg',
            title: 'To use or not to use Bootstrap',
            description: 'The Office Chair adapts naturally to virtually every body and is a permanent fixture.',
            date: '10/05/2016',
            views: '13,763'
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
<style>
</style>
