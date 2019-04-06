import Request from './Request'

class Api {
  static instance({
    headers,
    showLoading = true,
    showError = true,
    timeout = Api.timeOut
  }) {
    if (!Api.baseUrl) {
      throw new Error('请先设置基础路由baseUrl')
    }
    headers = { ...Api.headers, ...headers }
    return new Request({
      baseUrl: Api.baseUrl,
      timeout,
      headers,
      showLoading,
      showError,
      requestInterceptors: Api.requestInterceptors,
      responseInterceptors: Api.responseInterceptors
    })
  }
  static get({ url, params, showLoading, showError, timeout, headers = {} }) {
    let api = Api.instance({
      showLoading,
      showError,
      timeout,
      headers
    })
    return new Promise((resolve, reject) => {
      api.fly
        .get(url, {
          ...Api.baseParam,
          ...params
        })
        .then(rep => {
          resolve(rep)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static post({ url, params, showLoading, showError, timeout, headers = {} }) {
    let api = Api.instance({
      showLoading,
      showError,
      timeout,
      headers
    })
    return new Promise((resolve, reject) => {
      api.fly
        .post(url, {
          ...Api.baseParam,
          ...params
        })
        .then(rep => {
          resolve(rep)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static put({ url, params, showLoading, showError, timeout, headers = {} }) {
    let api = Api.instance({
      showLoading,
      showError,
      timeout,
      headers
    })
    return new Promise((resolve, reject) => {
      api.fly
        .put(url, {
          ...Api.baseParam,
          ...params
        })
        .then(rep => {
          resolve(rep)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static delete({
    url,
    params,
    showLoading,
    showError,
    timeout,
    headers = {}
  }) {
    let api = Api.instance({
      showLoading,
      showError,
      timeout,
      headers
    })
    return new Promise((resolve, reject) => {
      api.fly
        .delete(url, {
          ...Api.baseParam,
          ...params
        })
        .then(rep => {
          resolve(rep)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
Api.baseUrl = ''
Api.timeOut = 20000
Api.headers = {}
Api.baseParam = {}
Api.requestInterceptors = {}
Api.responseInterceptors = {}
export default Api
