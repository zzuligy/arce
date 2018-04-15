import Vue from 'vue'
import routeMap from '../routeConfig'
import Resource from 'DATA/resource'
import localMenuConfigList from './local-menu-config-list'

let menuResource = Resource.create('BASE.menu')
const empty = r => require(['VIEWS/common/empty/index'], r)
let menuModel = {
  // 属性 菜单数据
  menuArray: [],
  // 属性 菜单对象
  menuObject: {},
  // origin data
  // originData
  originData: [],
  sourceData: [],
  existNameMap: {},
  /**
   * 方法 获取某一个菜单节点
   * @param string name 菜单中文名称
   */
  getMenuItem (name) {
    return name && this.menuObject && this.menuObject[name] || null
  },
  /**
   * 方法 获取菜单子节点
   * @param string pname 菜单父级中文名称
   */
  getMenuChilds (pname) {
    return pname && this.menuObject && this.menuObject[pname] && this.menuObject[pname].children || []
  },
  /**
   * 方法 添加菜单节点
   * @param object $router 路由对象
   */
  async start ($router, isForce) {
    if ((!$router || this.menuArray.length > 0) && !isForce) {
      return Promise.resolve('')
    }
    try {
      let dataSourcePromise = this.getDatasource()
      this.sourceData = await dataSourcePromise
      this.menuArray = this.transOpter(this.sourceData, 'id', 'pid', 'children')
      // 加载本地路由
      //process.ENV === 'dev' && this.setLocalMenu()
      // 渲染路由
      let menuRoutes = []
      if (!this.menuArray || this.menuArray.length === 0) {
        menuRoutes.push({
          path: '/index',
          component: empty
        })
      } else {
        this.generateRoute(this.menuArray, menuRoutes)
        menuRoutes.push({
          path: '/index',
          redirect: $router.__defaultURL ? $router.__defaultURL : this.getDeepChild(this.menuArray).uri
        })
      }
      $router.addRoutes(menuRoutes || [])
      return this
    } catch (err) {
      console.info('errr', err)
      alert('路由加载失败 ' + err.message)
    }
  },
  // 递归渲染路由
  generateRoute (routeArray, menuRoutes) {
    let aVal = null
    let newRoute = null
    for (let j = 0; j < routeArray.length; j++) {
      aVal = routeArray[j]
      newRoute = this.addMenuRoute(aVal)
      if (newRoute) {
        !menuModel.existNameMap[newRoute.name] && menuRoutes.push(newRoute)
        menuModel.existNameMap[newRoute.name] = true
      }
      if (routeArray[j].children) {
        this.generateRoute(routeArray[j].children, menuRoutes)
      }
    }
  },
  /**
   * 方法 动态添加菜单节点
   * @param string menuPath 菜单路径
   * @param object menuModel 节点对象 {cname:'Hello World',uri:'/skyeye/dashboard',component:login,perms:['read','write']}
   * @param string beforeNode 可选，添加位置在某节点前，默认填加到最后
   * @param object $router 可选，传入该对象则路由添加
   */
  addDefineMenu (menuPath, menuModel, beforeNode) {
    // 添加根节点
    if (menuPath.trim() === '/') {
      this.generateMenuModel(menuModel, beforeNode)
      return
    }
    // split menuPath
    let pathArray = menuPath.split('/')
    let leafObj = null
    let pObj = null

    // 目录路径，检测无路径自动生成
    while (pathArray.length > 0) {
      var pathName = pathArray.shift()
      if (!pathName) {
        continue
      }
      leafObj = this.menuObject[pathName]
      // 部分对象从routeConfig加载，存在确没有id pid，使菜单无法显示
      if (leafObj && leafObj['id']) {
        pObj = leafObj
        continue
      }
      let tempModel = {
        cname: pathName,
        perms: ['read', 'write']
      }
      pObj = this.generateMenuModel(tempModel, beforeNode, pObj)
    }
    return this.generateMenuModel(menuModel, beforeNode, pObj)
  },
  addMenuObj (item) {
    // item show=true   __is403=false menuObject[name_id&pid]
    if (!item.name) {
      return
    }
    this.menuObject[item.name] = item
    if (item.cname) {
      this.menuObject[item.cname] = item
    }
  },

  addMenuRoute (item) {
    // 本地没配置的菜单需要URL
    // let routeMapObject = this.sourceData && item['id'] && this.sourceData.find(el => el.id === item['id'])
    if (!item) {
      return null
    }
    let newRoute = {}
    if (item['name']) {
      newRoute['name'] = item['name']
    }
    if (item['component']) {
      newRoute['component'] = item['component']
    }
    if (!item.component && item['children'] && item['children'].length) {
      newRoute['redirect'] = this.getDeepChild(this.sourceData, item).uri || ''
    }
    if (item['uri']) {
      newRoute['path'] = item['uri']
    }
    if (!newRoute['path'] && newRoute['redirect'] && newRoute['redirect'].length > 0) {
      newRoute['path'] = newRoute['redirect'] && newRoute['redirect'].slice(0, newRoute['redirect'].lastIndexOf('/'))
      item['uri'] = newRoute['path'].slice(0, newRoute['redirect'].lastIndexOf('/')) || newRoute['redirect']
    }
    if (item.alias) {
      newRoute.alias = item.alias
    }
    newRoute.meta = item.meta || {}
    if (item.perms && item.perms.length > 0) {
      if (item.perms.includes('read')) {
        newRoute.meta['read'] = true
      }
      if (item.perms && item.perms.length > 0 && item.perms.includes('write')) {
        newRoute.meta['write'] = true
      }
    }
    return newRoute
  },
  getDeepChild (routes, pRoute) {
    pRoute = pRoute || routes[0]
    let route = routes.find(obj => obj.active && obj.pid === pRoute.id && obj.show !== false)
    if (!route) {
      route = routes.find(obj => obj.pid === pRoute.id && obj.show !== false)
    }
    if (!route) {
      return pRoute
    }
    if (routes.find(obj => obj.pid === route.id)) {
      route = this.getDeepChild(routes, route)
    }
    return route
  },
  // Data to Tree
  transOpter (data, idStr, pidStr, chindrenStr) {
    // level<=3 and perms prototype
    let result = []
    let children = chindrenStr
    let len = data.length
    for (let i = 0; i < len; i++) {
      // generate route data and menu data
      let aVal = data[i]
      let hashVP = data.find(obj => obj[idStr] === aVal[pidStr])
      if (hashVP) {
        aVal.pcname = hashVP.cname || ''
        aVal.pname = hashVP.name || ''
        !hashVP[children] && (hashVP[children] = [])
        hashVP[children].push(aVal)
      } else {
        aVal.pcname = ''
        aVal.pname = ''
        result.push(aVal)
      }
      this.addMenuObj(aVal)
    }
    return result
  },
  // api
  async getDatasource () {
    let menuResourcePromise = menuResource.get()
    let response = await menuResourcePromise
    console.log(response)
    let result = response.data
    result.data.push({
      name: 'multilevel_linkage_manage',
      cname: '多级部署',
      pid: 129,
      level: 3,
      id: 999,
      order_by: 1,
      perms: ['read', 'write']
    })
    result = result && result.data.filter(el => el.level <= 3 && el.perms)
    result = this.getMapData(routeMap && routeMap.menuConfig || [], result || [])
    return result
  },
  // init data
  getMapData (menuConfig, dataSource) {
    var res = dataSource.map((item) => {
      let sourceItem = menuConfig.find(el => el.name === item['name'])
      if (sourceItem) {
        // 本地配置覆盖服务器配置(cname采用服务器)
        item = Object.assign({}, item, sourceItem, item.cname && {cname: item.cname} || {})
        return item
      }
      return item
    })
    return res.filter(x => x.uri)
  },
  getUUID () {
    // http://www.broofa.com/Tools/Math.uuid.htm
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    var uuid = new Array(36)
    var rnd = 0
    var r
    return function generateUUID () {
      for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid[i] = '-'
        } else if (i === 14) {
          uuid[i] = '4'
        } else {
          if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0
          r = rnd & 0xf
          rnd = rnd >> 4
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
      return uuid.join('')
    }
  },
  insertData (list, beforeNode, currentObj) {
    // 检测同级别有相同节点，则返回
    let exist = list.find(el => el.name === currentObj.name)
    if (exist) {
      return
    }
    let beforeObj = list.find(el => el.cname === beforeNode)
    let objIndex = beforeObj ? ((list.indexOf(beforeObj) === -1 ? list.length : list.indexOf(beforeObj))) : list.length
    list.splice(objIndex, 0, currentObj)

    this.addMenuObj(currentObj)
  },
  generateMenuModel (currentObj, beforeNode, parentObj) {
    let defaultObj = {
      id: this.getUUID()(),
      name: currentObj && currentObj.name || currentObj.cname,
      cname: '',
      component: '',
      level: parentObj && (parentObj.level + 1) || 1,
      perms: [],
      pid: parentObj && parentObj.id || 0,
      pcname: parentObj && parentObj.cname || '',
      pname: parentObj && parentObj.name || '',
      uri: ''
    }
    currentObj = Object.assign({}, defaultObj, currentObj)
    // 父级为空则为根节点
    if (!parentObj) {
      this.insertData(this.menuArray, beforeNode, currentObj)
      return currentObj
    }
    !parentObj['children'] && (parentObj['children'] = [])
    this.insertData(parentObj['children'], beforeNode, currentObj)
    // 父级不为空 更新redirect bug 子级数据未添加进来，父级为空
    !this.sourceData && (this.sourceData = []) || this.sourceData.push(currentObj)
    // 刷新父级路由
    return currentObj
  },
  /**
   * 设置本地菜单
   */
  setLocalMenu () {
    // 说明一下routeConfig优先级问题
    // routeConfig优先级高于LocalMenu,如果检测routeConfig有相同的配置，则不会覆盖，但是routeConfig中的配置可能会服务端数据过滤掉
    // 所以查看哪边菜单生效时，需要考虑服务端是否匹配，如果匹配，则routeConfig优先，未匹配，则LocalMenu优先
    localMenuConfigList.forEach((menuItem) => {
      this.addDefineMenu('/', menuItem, '')
    })
  }
}
export default menuModel
