//axios插件模块


import axios from 'axios'
const MyHttpServer = {}

MyHttpServer.install = function (Vue) {
  // 添加实例方法
  axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
  Vue.prototype.$http = axios
    // 逻辑...
}

export default MyHttpServer
