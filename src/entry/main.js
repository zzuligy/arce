//import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//import './assets/theme/theme-green/index.css'
import routerInstance from 'ROUTER'
import menuModel from 'ROUTER/util/menuModel'
//import store from './vuex/store'
//import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
//import routes from './routes'
import Mock from 'MOCK/mock'

Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
//Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });
function createApp () {
  new Vue({
    el: '#app',
    template: '<App></App>',
    router: routerInstance,
    // store
    components: {App}
  }).$mount('#app')
}

const run = async function () {
  try {
    await menuModel.start(routerInstance)
    return createApp()
  }
  catch (err) {
    createApp(err)
  }
}
run()

