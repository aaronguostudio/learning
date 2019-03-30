export default {
  title: 'Monthly Data',
  actions: [
    {
      label: 'Edit',
      color: 'primary',
      size: '12px'
    }
  ],
  columns: [
    {
      name: 'supplierName',
      required: true,
      label: 'Supplier',
      align: 'left',
      field: 'supplierName',
      sortable: false,
      classes: 'my-class',
      style: 'width: 200px'
    },
    {
      name: 'year',
      required: true,
      label: 'Year',
      align: 'left',
      field: 'year',
      sortable: false,
      classes: 'my-class',
      style: 'width: 200px'
    },
    {
      name: 'month',
      required: true,
      label: 'Month',
      align: 'left',
      field: 'month',
      sortable: false
    },
    {
      name: 'product',
      required: true,
      label: 'Product',
      align: 'left',
      field: 'product',
      sortable: false
    },
    {
      name: 'price',
      required: true,
      label: 'price',
      align: 'left',
      field: 'price',
      sortable: false
    },
    {
      name: 'quantity',
      required: true,
      label: 'Quantity',
      align: 'left',
      field: 'quantity',
      sortable: false,
      style: 'width: 60px'
    }
  ]
}
