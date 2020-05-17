import axios from 'axios'

// axios 配置
var instance = axios.create({
  timeout: 3000000,
  //baseURL: 'http://127.0.0.1:9999',   //接口请求地址
})

export default instance
