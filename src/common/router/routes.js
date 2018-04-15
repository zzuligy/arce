/* eslint-disable */
// const login = r => require(['APP/common/userAdmin/login/index.vue'], r)
const _403Page = r => require(['VIEWS/common/403Page/index.vue'], r)
const _404Page = r => require(['VIEWS/common/404Page/index.js'], r)
// const docs = r => require(['APP/docs/index'], r)
let defaultRoutes = [{
  path: '/',
  redirect: '/system-center'
}, {
  path: '/403',
  component: _403Page,
  name: '403'
}, {
  path: '/404',
  component: _404Page,
  name: '404',
  alias: []
}, /*{
 path: '/login',
 component: login,
 name: 'login',
 meta: {
 fullscreen: true
 }
 }, {
 path: '/docs',
 component: docs,
 name: 'docs',
 meta: {
 fullscreen: true
 }
 }*/
]

export default defaultRoutes
