import axios from 'axios'

export default class Base {
  constructor () {
    this.token = localStorage.getItem('token') || null
  }
  request = (options) => {
    if (!options) return
    options.method = options.method || 'GET'
    options.responseType = options.responseType || 'json'
    options.headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }

    return axios(options)
      .then(res => {
        // Update token when header contains a token field
        if (res.headers.token) localStorage.setItem('token', res.headers.token)
        return res.data
      })
      .catch(err => {
        // Fource user logout when get 401 Unauthorized
        if (err.response.status === 401) {
          const userSession = JSON.parse(localStorage.getItem('userSession')) || null
          if (userSession && userSession.orgId) location.replace(`/login/${userSession.orgId}`)
          else location.replace(`/`)
        }
        throw err
      })
  }
}
