## router使用

### 目录文件用法介绍
   1. router/index.js  路由主文件，前端路由前缀，路由生命周期
   2. router/routes.js 全局默认路由
   3. router/routeConfig.js 
   4. routeConfig.js文件为路由映射文件，主要用于匹配服务端_perms返回的权限菜单，进行匹配
   
```json
{
    name: 'msgcenter',
    uri: '/message',
    level: 1,
    show: false,
    component: r => require(['APPS/message/messageList.vue'], r)
}
```

>- name（必须）: 必须字段，匹配键值
>- uri（可选）: 以后端url为主，若无url则使用uri
>- level（可选）: 以后端level为主, 配置此项主要是为了理解
>- show （可选）: 默认为true
>- component: 对应组件

5. util/menuModel.js 路由逻辑处理主类
   

|    属性    | 描述  |
| ---------- | --- |
| menuArray |  权限菜单数组 |
| menuObject       |  权限菜单对象 |
| originData       |  - |
| sourceData       |  - |
| existNameMap       |  - |

|    方法    | 描述  |
| ---------- | --- |
| getMenuItem |  获取某一个菜单节点 |
| getMenuChilds       |  获取菜单子节点 |
| addDefineMenu       |  动态添加菜单节点 |
   
6. util/local-menu-config-list.js
> *本地路由*配置，应用于服务端未出配置路由时本地要访问的路由可以通过本地配置来添加，当process.SkyEye.ENV === 'dev'时自动启用本地路由

