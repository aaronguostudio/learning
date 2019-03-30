<template>
  <q-page class="q-pa-md">
    <q-table
      row-key="_id"
      :title="gridConfig.title"
      :data="tableData"
      :columns="gridConfig.columns"
      :pagination.sync="pagination"
      @request="_request"
    >
      <template slot="body" slot-scope="props">
        <q-tr :props="props">
          <q-td key="supplierName" :props="props">
            {{props.row.supplier}}
          </q-td>
          <q-td key="year" :props="props">
            {{props.row.year}}
          </q-td>
          <q-td key="month" :props="props">
            {{props.row.month}}
          </q-td>
          <q-td key="product" :props="props">
            {{props.row.product}}
          </q-td>
          <q-td key="price" :props="props">
            {{props.row.price}}
          </q-td>
          <q-td key="quantity" :props="props">
            {{props.row.quantity}}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import gridConfig from '../grid/dataGenGridConfig'
import tableData from '../grid/dataGenGridData'
import axios from 'axios'
import { commonTableConfig } from '../config/common'

export default {
  components: {
  },
  data: () => ({
    pagination: {
      page: 1,
      rowsPerPage: 20,
      rowsNumber: 0,
    },
    gridConfig,
    tableData: [],
    suppliers: [],
    years: [
      {
        label: '2016',
        value: 2016
      }, {
        label: '2017',
        value: 2017
      }, {
        label: '2018',
        value: 2018
      }, {
        label: '2019',
        value: 2019
      }
    ],
    months: [],
    products: [
      {
        label: 'Rig',
        value: 'Rig'
      }
    ]
  }),
  created () {
    this._initData()
  },
  mounted () {
    // TODO get products and suppliers lookup data.
  },
  methods: {
    _submit () {
      console.log(this.tableData)
      let options = {
        url: 'http://localhost:10010/product-values',
        method: 'PUT',
        responseType: 'json',
        data: this.tableData
      }
      axios(options).then(res => {
        console.log('PUT product values', res)
        this.$q.notify({
          message: 'Records Inserted',
          position: 'top',
          color: 'positive'
        })
      }).catch(err => {
        this.$q.notify({
          message: 'Failed to Insert',
          position: 'top'
        })
        console.log(err)
        throw err
      })
    },
    _addNewRow () {
      this.tableData.push({})
    },
    _initData () {
      this.months.push({ label: 'Janurary', value: 1 })
      this.months.push({ label: 'Feburary', value: 2 })
      this.months.push({ label: 'March', value: 3 })
      this.months.push({ label: 'April', value: 4 })
      this.months.push({ label: 'May', value: 5 })
      this.months.push({ label: 'June', value: 6 })
      this.months.push({ label: 'July', value: 7 })
      this.months.push({ label: 'August', value: 8 })
      this.months.push({ label: 'Septmber', value: 9 })
      this.months.push({ label: 'October', value: 10 })
      this.months.push({ label: 'November', value: 11 })
      this.months.push({ label: 'December', value: 12 })
      let options = {
        url: 'http://localhost:10010/products',
        method: 'GET',
        responseType: 'json'
      }
      let self = this
      axios(options).then(res => {
        let productNames = res.data
        self.products = []
        for (let i = 0; i < productNames.length; i++) {
          self.products.push({
            label: productNames[i],
            value: productNames[i]
          })
        }
      }).catch(err => {
        throw err
      })
      options = {
        url: 'http://localhost:10010/suppliers',
        method: 'GET',
        responseType: 'json'
      }
      axios(options).then(res => {
        let supplierNames = res.data
        self.suppliers = []
        for (let i = 0; i < supplierNames.length; i++) {
          self.suppliers.push({
            label: supplierNames[i],
            value: supplierNames[i]
          })
        }
      }).catch(err => {
        throw err
      })
      options = {
        url: `http://localhost:10010/product-raw-values?page=${this.pagination.page}&pageSize=${this.pagination.rowsPerPage}`,
        method: 'GET',
        responseType: 'json'
      }
      axios(options).then(res => {
        self.pagination.rowsNumber = res.data.totalCount
        self.tableData = res.data.rows
      }).catch(err => {
        throw err
      })
    },
    _getData () {
      let self = this
      let options = {
        url: `http://localhost:10010/product-raw-values?page=${this.pagination.page}&pageSize=${this.pagination.rowsPerPage}`,
        method: 'GET',
        responseType: 'json'
      }
      axios(options).then(res => {
        self.pagination.rowsNumber = res.data.totalCount
        self.tableData = res.data.rows
      }).catch(err => {
        throw err
      })
    },
    async _request ({ pagination }) {
      debugger
      this.pagination = pagination
      this._getData()
    }
  },
  filters: {
  }
}
</script>
