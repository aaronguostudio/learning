import Base from './Base'
import { tableConfig, baseAPI } from '../config/common'
export default class Product extends Base {
  async searchProducts (page, size, filterStr = '', sortStr = '', isDescending = 1) {
    page = page === 'undefined' ? 2019 : page
    size = size || tableConfig.defaultPageSize
    if (isDescending !== 1 && isDescending !== -1) isDescending = 1
    let url = `${baseAPI}/product-values?year=${page}&month=${size}`
    if (sortStr) url += `&sortBy=${sortStr}&descending=${isDescending}`

    const options = { url }

    try {
      let res = await this.request(options)
      return res
    } catch (err) {
      //
    }
  }
}
