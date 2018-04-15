let menu = [{
  name: 'system-center',
  cname: '系统中心',
  pid: 0,
  level: 1,
  id: 1,
  order_by: 1,
  perms: ['read', 'write']
}, {
  name: 'user',
  cname: '用户',
  pid: 1,
  level: 2,
  id: 10,
  order_by: 1,
  perms: ['read', 'write']
}, {
  name: 'role',
  cname: '角色',
  pid: 1,
  level: 1,
  id: 11,
  order_by: 2,
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
    name: 'data-center',
    cname: '数据中心',
    pid: 0,
    level: 1,
    id: 4,
    order_by: 1,
    perms: ['read', 'write']
  }, {
    name: 'business-manage',
    cname: '业务管理',
    pid: 0,
    level: 1,
    id: 5,
    order_by: 1,
    perms: ['read', 'write']
  }]

export default menu