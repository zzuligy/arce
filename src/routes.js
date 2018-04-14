import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import personal from './views/mine/personal.vue'
import accountSet from './views/mine/accountSet.vue'
import loginLog from './views/mine/loginLog.vue'
import Page4 from './views/administrator/Page4.vue'
import Page5 from './views/administrator/Page5.vue'
import Page6 from './views/configure/Page6.vue'
import Page7 from './views/user/Page7.vue'
import Page8 from './views/account/Page8.vue'
import Page9 from './views/message/Page9.vue'
import Page10 from './views/query/Page10.vue'
import Page11 from './views/identify/Page11.vue'
import Page12 from './views/broadcast/Page12.vue'
import Page13 from './views/content/Page13.vue'
import Page14 from './views/withdraw/Page14.vue'
import Page15 from './views/recharge/Page15.vue'
import Page16 from './views/realTime/Page16.vue'
import Page17 from './views/data/Page17.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    
        {
        path: '/',
        component: Home,
        name: '我的',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/personal', component: personal, name: '个人中心' },
            { path: '/accountSet', component: accountSet, name: '账户设置' },
            { path: '/loginLog', component: loginLog, name: '登陆日志' },
        ]
    },
    
    {
        path: '/',
        component: Home,
        name: '管理员',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '待审核' },
            { path: '/page5', component: Page5, name: '已审核' }
        ]
    },
   {
        path: '/',
        component: Home,
        name: '配置',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page6', component: Page6, name: '页面6' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page7', component: Page7, name: '页面7' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '账号',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page8', component: Page8, name: '页面8' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统消息',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page9', component: Page9, name: '页面9' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据查询',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page10', component: Page10, name: '页面10' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '认证',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page11', component: Page11, name: '页面11' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '直播',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page12', component: Page12, name: '页面12' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '内容',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page13', component: Page13, name: '页面13  ' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '提现',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page14', component: Page14, name: '页面14  ' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '充值',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page15', component: Page15, name: '页面15  ' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '实时数据',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page16', component: Page16, name: '页面16  ' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page17', component: Page17, name: '页面17  ' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;