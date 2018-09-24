// Format Date
export function formatDate (datetimeStr) {
  let d = new Date(datetimeStr)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  let year = d.getFullYear()
  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  return [year, month, day].join('-')
}

export function yearMonthDay (value) {
  if (!value) return ''
  let date = new Date(value)
  let year = date.getFullYear()
  let month = addLeadingZero(date.getMonth() + 1)
  let day = addLeadingZero(date.getDate())
  return year + '-' + month + '-' + day
}

export function yearMonthDayTime (value) {
  if (!value) return ''
  let date = new Date(value)
  let year = date.getFullYear()
  let month = addLeadingZero(date.getMonth() + 1)
  let day = addLeadingZero(date.getDate())
  let hour = addLeadingZero(date.getHours())
  let minute = addLeadingZero(date.getMinutes())
  let second = addLeadingZero(date.getSeconds())
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}

export async function request (options, token) {
  token = token || ''
  let extra = {
    headers: {
      'Content-Type': 'application/json',
      'token': token
    }
  }
  let config = Object.assign(options, extra)
  return await axios(config)
}
