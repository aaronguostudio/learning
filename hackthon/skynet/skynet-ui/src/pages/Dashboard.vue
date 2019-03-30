<template>
  <q-page class="q-pa-md">
    <q-table
      row-key="_id"
      :title="gridConfig.title"
      :data="tableData"
      :columns="gridConfig.columns"
      :pagination.sync="serverPagination"
      :rows-per-page-options="tableConfig.rowsPerPage"
      :loading="tableLoading"
      :filter="filter"
      :separator="tableConfig.separator"
      :no-data-label="tableConfig.noDataLabel"
      :loading-label="tableConfig.loadingLabel"
      :rows-per-page-label="tableConfig.rowsPerPageLabel"
      @request="_request"
    >
      <template slot="top-right" slot-scope="props" :id="props">
        <!--
        <q-search
          class="search-input"
          v-model="filter"
          :debounce="600"
          placeholder="Search"
        />
        <q-btn
          class="q-ml-md"
          label="Refresh"
          icon="refresh"
          color="primary"
          size="12px"
          outline
          @click="_getData()"
        />
        -->
        <img src="assets/blue1.png" class="q-pr-xl">
        <q-select
          style="width: 100px"
          v-model="year"
          radio
          :options="yearOptions"
          @input="_submit"
        />
        <q-select
          style="width: 100px"
          class="q-ml-md"
          v-model="month"
          radio
          :options="monthOptions"
          @input="_submit"
        />
      </template>
      <template slot="body" slot-scope="props">
        <q-tr :props="props">
          <q-td key="productName" :props="props">
            {{props.row.productName}}
          </q-td>
          <q-td
            key="BAKER HUGHES CANADA COMPANY"
            :props="props"
            :style= "`background: ${
              props.row.suppliers['BAKER HUGHES CANADA COMPANY'] ?
              props.row.suppliers['BAKER HUGHES CANADA COMPANY'].color : 'white'
            }`"
          >
            $ {{
              props.row.suppliers['BAKER HUGHES CANADA COMPANY'] ?
              props.row.suppliers['BAKER HUGHES CANADA COMPANY'].value : 0
            }}
          </q-td>
          <q-td
            key="BUNCH WELDING LTD"
            :props="props"
            :style= "`background: ${
              props.row.suppliers['BUNCH WELDING LTD'] ?
              props.row.suppliers['BUNCH WELDING LTD'].color : 'white'
            }`"
          >
            $ {{
              props.row.suppliers['BUNCH WELDING LTD'] ?
              props.row.suppliers['BUNCH WELDING LTD'].value : 0
            }}
          </q-td>
          <q-td
            key="Ken's Oilfield Construction 2000 Lt"
            :props="props"
            :style= "`background: ${
              props.row.suppliers[`Ken's Oilfield Construction 2000 Lt`] ?
              props.row.suppliers[`Ken's Oilfield Construction 2000 Lt`].color : 'white'
            }`"
          >
            $ {{
              props.row.suppliers[`Ken's Oilfield Construction 2000 Lt`] ?
              props.row.suppliers[`Ken's Oilfield Construction 2000 Lt`].value : 0
            }}
          </q-td>
          <q-td
            key="Enertia Tech"
            :props="props"
            :style= "`background: ${
              props.row.suppliers['Enertia Tech'] ?
              props.row.suppliers['Enertia Tech'].color : 'white'
            }`"
          >
            $ {{
              props.row.suppliers['Enertia Tech'] ?
              props.row.suppliers['Enertia Tech'].value : 0
            }}
          </q-td>
          <q-td
            key="Insignia Energy"
            :props="props"
            :style= "`background: ${
              props.row.suppliers['Insignia Energy'] ?
              props.row.suppliers['Insignia Energy'].color : 'white'
            }`"
          >
            $ {{
              props.row.suppliers['Insignia Energy'] ?
              props.row.suppliers['Insignia Energy'].value : 0
            }}
          </q-td>
          <q-td
            key="average"
            :props="props"
            style="background: rgba(126,208,255, .4)"
          >
            $ {{props.row.average.toFixed(2)}}
          </q-td>
          <q-td
            key="roles"
            :props="props"
          >
            <span
              v-for="item in props.row.roles"
              :key="item"
            >
              {{item | roleValToLabel}}
            </span>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import Product from '../controllers/Product'

import gridConfig from '../grid/buyer'
import { tableConfig } from '../config/common'
import { roleValToLabel } from '../helpers/mapping'

const yearOptions = [
  {
    label: '2015',
    value: 2015
  },
  {
    label: '2016',
    value: 2016
  },
  {
    label: '2017',
    value: 2017
  },
  {
    label: '2018',
    value: 2018
  }
]

const monthOptions = [
  // {
  //   label: 'All',
  //   value: 0
  // },
  {
    label: 'Jan',
    value: 1
  },
  {
    label: 'Feb',
    value: 2
  },
  {
    label: 'Mar',
    value: 3
  },
  {
    label: 'Apr',
    value: 4
  },
  {
    label: 'May',
    value: 5
  },
  {
    label: 'Jun',
    value: 6
  },
  {
    label: 'Jul',
    value: 7
  },
  {
    label: 'Aug',
    value: 8
  },
  {
    label: 'Sept',
    value: 9
  },
  {
    label: 'Oct',
    value: 10
  },
  {
    label: 'Nov',
    value: 11
  },
  {
    label: 'Dec',
    value: 12
  }
]

export default {
  components: {
  },
  data: () => ({
    yearOptions,
    monthOptions,
    year: 2018,
    month: 3,
    filter: '',
    sortStr: '',
    isDescending: true,
    gridConfig,
    tableConfig,
    tableLoading: false,
    productController: null,
    serverPagination: {
      page: 1,
      rowsNumber: 1000,
      rowsPerPage: tableConfig.defaultPageSize
    },
    tableData: []
  }),
  created () {
    this.productController = new Product()
  },
  mounted () {
    this._getData(
      this.year,
      this.month,
      this.filter,
      this.sortStr,
      this.isDescending
    )
  },
  methods: {
    async _getData (page, size) {
      try {
        this.tableLoading = true
        let _isDescending
        if (this.isDescending === true) _isDescending = 1
        else if (this.isDescending === false) _isDescending = -1
        else _isDescending = 1
        let data = await this.productController.searchProducts(
          this.year,
          this.month,
          this.filter,
          this.sortStr,
          _isDescending
        )
        this.tableData = this.refactorData(data)
        console.log('>>>this.tableData', this.tableData)
        // this.serverPagination.page = data.currentPage
        // this.serverPagination.rowsNumber = data.count
      } catch (err) {
        console.log('> err', err)
      } finally {
        this.tableLoading = false
      }
    },
    refactorData (data) {
      data.forEach(function(element) {
        this.toValueWithColor(element)
      }, this)
      return data
    },
    toValueWithColor (element) {
      var suppliers = {};
      let normalized = 100 / (element.average * element.suppliers.length)
      for (var i = 0; i < element.suppliers.length; ++i) {
        let item = {}
        let diff = element.suppliers[i].price - element.average
        let weightedValue = (diff * 0.01)
        console.log('>weightedValue', weightedValue)
        item['value'] = (element.suppliers[i].price).toFixed(2)
        item['color'] = `rgba(126,208,255,  ${0.4 + weightedValue})`
        suppliers[element.suppliers[i].name] = item
      }
      element.suppliers = suppliers
    },
    _submit () {
      this._getData(
        this.year,
        this.month,
        this.filter,
        this.sortStr,
        this.isDescending
      )
    },
    async _request ({ pagination }) {
      this.sortStr = pagination.sortBy
      this.isDescending = pagination.descending
      this.serverPagination = pagination
      await this._getData(
        this.year,
        this.month,
        this.filter,
        this.sortStr,
        this.isDescendingroleOptions
      )
    }
  },
  filters: {
    roleValToLabel
  }
}
</script>
