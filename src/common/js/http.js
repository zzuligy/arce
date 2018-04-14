import Vue from './vue'
import axios from 'axios'
import qs from 'qs'
import storage from '@/common/localStorage'
import {isLoadding,isToast} from "@/common/state"

 
/* axios配置 */
const instance = axios.create({
   //baseURL:'http://tadmin.95504.net:83/',  //线上接口地址
   baseURL: 'http://172.16.10.148:10086',  //配置接口地址

  timeout: 20000,  //响应时间
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',  //配置请求头
      'Accept': 'application/json'
  }
});
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});
 
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    _.toast("网络异常", 'fail');
    return Promise.reject(error);
});
 
//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
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
export function fetchGet(url, param) {
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
}