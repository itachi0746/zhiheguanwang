/* eslint-disable */
import axios from 'axios';
import cookie from './cookie.js'
// 默认配置
axios.defaults.timeout = 100000; // 超时
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 不同环境下的BASE_URL
console.log(axios.defaults.baseURL)
axios.defaults.transformRequest = [function (data) {
  let ret = '';
  for (let key in data) {
    ret += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
  }
  return ret
}]

// 请求拦截
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

// get请求
export async function get(url, params = {}) {
    try {
        let res = await axios.get(url, params);
        return new Promise((resolve, reject) => {
            resolve(res.data);
        })
    } catch (err) {
        console.log(err);
    }
}
const os = {
    windows: /Windows/ig.test(navigator.userAgent),
    macos: /Mac OS/ig.test(navigator.userAgent)
}

// post 请求
export async function post(url, params = {}) {
  let theUrl = url
  try {
        console.log(`开始访问: ${theUrl}`)
        let res = await axios.post(url, params);
        return new Promise((resolve, reject) => { // 返回promise对象
          // console.log(res)
          if (!res.data.Success) {
            reject(res.data.ErrMsg) // 把错误信息传下去
          } else {
            resolve(res.data) // 把数据传下去
          }

        })
    } catch (err) {
        console.log(`请求出错: ${theUrl}`)
        console.log(err);
    }
}

// 封装axios的post请求
let postData = function (url, params = {}) {
  let theRequestUrl = url
  console.log('开始访问:' + theRequestUrl)
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        console.log(theRequestUrl + ':请求出错')
        reject(error)
      })
  })
}

export { postData }
