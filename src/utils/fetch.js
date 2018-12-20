
import axios from 'axios'
import qs from 'qs'
const baseURL = 'https://www.medicalsee.com'
// const baseURL = ''

const fetch = config => {
  config.baseURL = baseURL
  const { method } = config

  if (method.toUpperCase() === 'POST') {
    config.data = qs.stringify(config.data)
  }

  return axios(config).then(res => {
    const result = res.data
    if (result.success) {
      return result.data
    } else {
      console.log(1111)
      return Promise.reject(result)
    }
  }).catch(error => {
    console.log(error)
    // debugger
    if (error instanceof Error) {
      alert('发生错误,请检查网络设置或联系技术人员')
    } else {
      alert(error.errorCode)
    }
  })
}

export default fetch