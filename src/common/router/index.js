import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import menuModel from './util/menuModel'

Vue.use(VueRouter)
let routerConfig = {
  routes,
  mode: 'history',
  base: '/peiwo/'
}

const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
  const is404 = to.matched.length === 0 || !menuModel && menuModel.menuObject && menuModel.menuObject[to.name]
  const is403 = menuModel && menuModel.menuObject && menuModel.menuObject[to.name] && menuModel.menuObject[to.name].perms && !menuModel.menuObject[to.name].perms.includes('read')
  if (is404) {
    next({path: '/404'})
    return
  }
  if (is403) {
    next({path: '/403'})
    return
  }
  next()
})
export default router
