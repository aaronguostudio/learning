<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md">
      <div class="flex flex-center q-mb-lg flex justify-between items-center">
        <q-select
          style="width: 100%; max-width: 800px;"
          v-model="selectedProducts"
          float-label="Select Products"
          multiple
          :options="products"
          @input="_onSelectionChanged()"
        />
        <q-toggle
          v-model="showPrediction"
          left-label
          label="Prediction"
          @input="_onToggleChange"
        />
      </div>
      <div class="row items-center">
      <template v-for="item in items">
        <div
          class="q-pa-lg col-md-6 col-sm-12"
          v-if="item.isShow"
          :key="item.id"
        >
          <div>
            <bar-control :data="item" :options="options"/>
          </div>
        </div>
      </template>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import BarControl from '../components/BarControl.js'
const colors = [
  'rgba(69,60,210,0.4)',
  'rgba(113,113,255,0.4)',
  'rgba(113,176,255,0.4)',
  'rgba(113,216,255,0.4)',
  'rgba(14,144,237,0.4)',
]

export default {
  components: {
    BarControl
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    items: [],
    selectedProducts: [],
    products: [],
    showPrediction: false,
    predictColor: 'rgba(33,128,218,0)'
  }),
  async created () {

    this.products.push({label: 'Drill Pipe', value: 'Drill Pipe'})
    this.products.push({label: 'Drill Pipe Thread Protectors', value: 'Drill Pipe Thread Protectors'})
    this.products.push({label: 'Well Monitoring Services', value: 'Well Monitoring Services'})
    this.products.push({label: 'Mineral', value: 'Mineral'})
    this.products.push({label: 'Rosanline dyes', value: 'Rosanline dyes'})
    this.selectedProducts.push('Drill Pipe')
    this.selectedProducts.push('Drill Pipe Thread Protectors')
    this.selectedProducts.push('Well Monitoring Services')
    this.selectedProducts.push('Mineral')
    this.selectedProducts.push('Rosanline dyes')
    this._plot()
  },
  mounted () {
    // TODO get products and suppliers lookup data.
  },
  methods: {
    _plot () {
      this.items = []
      this.products.forEach(async (product, index) => {
        let data = await this._search(product.value)
        let predictData = await this._predict(product.value)
        let dataArr = []
        for (let prop in data) {
          if (data.hasOwnProperty(prop)) dataArr.push(data[prop])
        }
        this.items.push({
          id: product.value,
          isShow: true,
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [{
              label: product.value,
              backgroundColor: colors[index],
              data: dataArr
            },
            {
              label: '2019 Prediction',
              backgroundColor: this.predictColor,
              data: predictData.predict.data
            }
          ]
        })
      })
    },
    _submit () {
      console.log(this.tableData)
    },
    _onToggleChange () {
      if (this.showPrediction) {
        this.predictColor = 'rgba(33,128,218,1)'
      } else {
        this.predictColor = 'rgba(33,128,218,0)'
      }
      this._plot()
    },
    async _search (product) {
      let options = {
        url: `http://localhost:10010/transactions/report?year=2018&product=${encodeURI(product)}`,
      }
      let res = await this.$axios(options)
      return res.data
    },
    async _predict (product) {
      let options = {
        url: `http://localhost:5000/predict/2018/${encodeURI(product)}`,
      }
      let res = await this.$axios(options)
      return res.data
    },
    _onSelectionChanged () {
      for (let i = 0; i < this.items.length; i++) {
        let prd = this.items[i]
        prd.isShow = this.selectedProducts.includes(prd.id)
      }
    }
  },
  filters: {
  }
}
</script>

<style>
  .small {
    margin-left: 50px;
    margin-right: 150px;
  }
</style>
