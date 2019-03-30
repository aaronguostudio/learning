let bypassAuth = false
let baseAPI = 'http://localhost:10010'

let tableConfig = {
  rowsPerPage: [10, 20, 30, 40, 50],
  noDataLabel: 'No Data',
  loadingLabel: 'Loading...',
  rowsPerPageLabel: 'Page',
  separator: 'cell',
  defaultPageSize: 20
}

if (process.env.STAGE === 'dev') {
  //
}

if (process.env.STAGE === 'prod') {
  //
}

export {
  bypassAuth,
  baseAPI,
  roleOptions,
  tableConfig
}
