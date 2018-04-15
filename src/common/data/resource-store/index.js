/*
 * 规范：
 * 命名空间是全大写。
 * 资源名是小写。
 * */
import {error} from 'UTIL/log'

let resourceList = {
  BASE: {
    menu: {
      url: '/menu',
      get: {
        request: null,
        response: [{
          name: 'system-center',
          cname: '系统中心',
          pid: 0,
          level: 1,
          id: 1,
          order_by: 1,
          perms: ['read', 'write']
        }, {
          name: 'user-manage',
          cname: '用户管理',
          pid: 0,
          level: 1,
          id: 2,
          order_by: 1,
          perms: ['read', 'write']
        },
          {
            name: 'deal-center',
            cname: '交易管理',
            pid: 129,
            level: 1,
            id: 3,
            order_by: 1,
            perms: ['read', 'write']
          }, {
            name: 'deal-center',
            cname: '数据中心',
            pid: 0,
            level: 1,
            id: 4,
            order_by: 1,
            perms: ['read', 'write']
          }, {
            name: 'deal-center',
            cname: '业务管理',
            pid: 0,
            level: 1,
            id: 5,
            order_by: 1,
            perms: ['read', 'write']
          }]
      }
    }
  }
}

class ResourceStore {

}

function getResourceByPaths (resourcePaths, resourceList) {
  let resultResource = resourceList
  try {
    let paths = resourcePaths.split('.')
    paths.forEach((path) => {
      resultResource = resultResource[path]
    })
  } catch (e) {
    console.error(`查找${resourcePaths}对应的资源时，报错`)
  } finally {
    resultResource || console.error(`没有找到${resourcePaths}对应的资源`)
  }

  return resultResource
}

ResourceStore.get = function (id) {
  let resource = getResourceByPaths(id, resourceList)
  return resource
}

ResourceStore.getByUrl = function (url) {

}


export default ResourceStore