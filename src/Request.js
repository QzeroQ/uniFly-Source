import UTILS from './utils.js'
import Fly from 'flyio/dist/npm/wx'
class Request {
  constructor({
    baseUrl,
    timeout,
    headers,
    showLoading,
    showError,
    requestInterceptors,
    responseInterceptors
  }) {
    Request.headers = headers
    Request.showLoading = showLoading
    Request.showError = showError
    let fly = new Fly()
    fly.config.baseURL = baseUrl
    fly.config.timeout = timeout
    requestInterceptors = {
      ...Request.requestInterceptors,
      ...requestInterceptors
    }
    responseInterceptors = {
      ...Request.responseInterceptors,
      ...responseInterceptors
    }
    // 请求拦截
    fly.interceptors.request.use(
      requestInterceptors.success,
      requestInterceptors.error
    )
    // 响应拦截
    fly.interceptors.response.use(
      responseInterceptors.success,
      responseInterceptors.error
    )
    // 对象赋值
    this.fly = fly
  }
}
Request.headers = {}
Request.showLoading = true
Request.showError = true
Request.requestInterceptors = {
  success: function(request) {
    console.log('请求拦截')
    //配置基本信息
    request.headers = Request.headers
    if (Request.showLoading == true) {
      UTILS.showLoading()
    }
    return request
  },
  error: function(err) {
    UTILS.hideLoading()
    if (Request.showError) {
      UTILS.showToast({
        title: '请求拦截失败'
      })
    }
    return Promise.reject(err)
  }
}
Request.responseInterceptors = {
  success: function(response) {
    if (Request.showLoading) {
      UTILS.hideLoading()
    }
    console.log('响应拦截')
    return Promise.resolve(response)
  },
  error: function(err) {
    UTILS.hideLoading()
    if (Request.showError) {
      UTILS.showToast({
        title: '响应拦截失败'
      })
    }
    return Promise.reject(err)
  }
}
export default Request
