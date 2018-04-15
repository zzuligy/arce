import axios from 'axios'
import qs from 'qs'
import ResourceScheme from './resource-scheme'


class Http extends ResourceScheme {
  constructor (url) {
    super()
    this.url = url
  }

  get (params = {}) {
    return axios.get(this.url, params)
  }

  save () {
  }

  update () {
  }

  remove () {
  }
}

Http.createInstance = function createHttpRequestInstance (url) {
  let instance = new Http(url)
  return instance
}
export default Http

/*
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.error("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  if (!res.data.success) {
    // _.toast(res.data.msg);
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  console.error("网络异常", 'fail');
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

////返回一个Promise(发送get请求)
export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}*/
