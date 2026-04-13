/*
 * @Date: 2024-10-22 19:49:33
 * @LastEditors: ReBeX cswwwx@gmail.com
 * @LastEditTime: 2026-04-10 16:14:53
 * @FilePath: /vite-csw/src/api/request.js
 * @Description: 网络请求 - axios封装
 */

import axios from 'axios'

// 创建一个新的请求实例instance,instance.的用法和axios.的用法一致，可以使用instance({})、instance.get（）、instance.post()
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL || '',
  timeout: 20000, // 超时时间 20秒
})

// 配置请求拦截器,在请求之前的数据处理,比如在请求头添加token,所有的请求都会经过拦截器
instance.interceptors.request.use(
  // config:该参数表示当前请求的配置对象
  (config) => {
    // 示例：设置请求头Token
    // config.headers['zx-token'] = window.Token || config.token || localStorage.getItem('token')

    if (!config.url) {
      console.error('请求地址为空')
      return Promise.reject(new Error('请求地址为空：没有访问权限，请联系管理员'))
    }

    return config
  },
  (err) => {
    return Promise.reject(err) // 将错误消息挂到promise的失败函数上
  },
)

// 配置响应拦截器
// 响应拦截器:在请求响应之后对数据处理，比如:登录失败、请求数据失败的处理
// instance.interceptors.response.use(response=>{l}, err=>{});
// 响应成功:执行回调函数1;响应失败，执行回调函数2
instance.interceptors.response.use(
  (response) => {
    const { code, message } = response.data
    if (response && code && code !== 200) {
      // 请求成功后的报错拦截
      // 可在这里处理特定错误码，如 401 跳转登录
      // if (code === 401) router.push('/login')
      console.error(message)
      return Promise.reject(new Error(message || '请求失败'))
    }
    return response.data // 这里的response就是请求成功后的res , response.data即是请求成功后回调函数内的参数res.data
  },
  (err) => {
    console.log('err: ', err)
    return Promise.reject(err) // 将错误消息挂到promise的失败函数上
  },
)

// 封装请求的api
export function getapi(url, data, config) {
  return instance({ method: 'GET', url, params: data, ...config })
}

export function postapi(url, data, config) {
  return instance({ method: 'POST', url, data, ...config })
}
