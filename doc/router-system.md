# 系统结构
    工具：webpack，es6，less
    系统基于vue
    组件：使用ElementUI
    数据：请求使用axios
    数据管理：使用vuex
    
# 文件结构
    
    build webpack配置文件夹
    dist  生成文件夹
    doc   项目文档
    src   项目源文件 
        assets 项目静态资源路径
        common 公用逻辑目录
            router 系统逻辑逻辑
        entry 项目入口配置文件
        views 项目视图文件
            user-manage 用户管理模块   
            system-manage 系统管理模块   
            ...
            
# 项目路由系统

系统通过后端动态返回菜单配置项，和前端本地的菜单配置项对接
启动整个系统。

    common/router/routeConfig.js
    本地路由配置文件，
    数据结构：
    {
          name: 'system-center', 路由名称和后端返回的对应
          uri: '/system-center', 对应路由
          level: 1,     菜单级别
          show: true,   是否显示
          component: r => require(['VIEWS/system-center/index.vue'], r) 对应的组件
    }            
            
            
后端返回的菜单数据结构是：

    {
      name: 'system-center', 和前端本地配置名对应
      cname: '系统中心',        前端菜单显示的名字
      pid: 0,                  菜单父亲id
      level: 1,                 菜单级别
      id: 1,                    菜单id
      order_by: 1,              菜单先后顺序
      perms: ['read', 'write']  菜单权限
    }
            
            
            
    
