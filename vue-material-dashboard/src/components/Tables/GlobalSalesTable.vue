<template>
  <div>
    <md-table v-model="users" class="md-table-global-sales">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="">
          <div class="flag">
            <img :src="item.flag" />
          </div>
        </md-table-cell>
        <md-table-cell>{{ item.country }}</md-table-cell>
        <md-table-cell>{{ item.sales }}</md-table-cell>
        <md-table-cell>{{ item.percent }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "global-sales-table",
  data() {
    return {
      selected: [],
      users: [
        {
          flag: "./img/flags/US.png",
          country: "USA",
          sales: "2.920",
          percent: "53.23%"
        },
        {
          flag: "./img/flags/DE.png",
          country: "Germany",
          sales: "1.300",
          percent: "20.43%"
        },
        {
          flag: "./img/flags/AU.png",
          country: "Australia",
          sales: "760",
          percent: "10.35%"
        },
        {
          flag: "./img/flags/GB.png",
          country: "United Kingdom",
          sales: "690",
          percent: "7.87%"
        },
        {
          flag: "./img/flags/RO.png",
          country: "Romania",
          sales: "600",
          percent: "5.94%"
        },
        {
          flag: "./img/flags/BR.png",
          country: "Brasil",
          sales: "550",
          percent: "4.34%"
        }
      ]
    };
  }
};
</script>
