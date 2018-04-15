// const dashboard = r => require(['APPS/dashboard/index.vue'], r)

export default {
  menuConfig: [
    {
      name: 'system-center',
      uri: '/system-center',
      level: 1,
      show: true,
      component: r => require(['VIEWS/system-center/index.vue'], r)
    }, {
      name: 'user',
      uri: '/system-center/user',
      level: 2,
      show: true,
      component: r => require(['VIEWS/system-center/user/index.vue'], r)
    },
    {
      name: 'role',
      uri: '/system-center/role',
      level: 2,
      show: true,
      component: r => require(['VIEWS/system-center/role/index.vue'], r)
    },
    {
      name: 'user-manage',
      uri: '/user-manage',
      level: 1,
      show: true,
      component: r => require(['VIEWS/user-manage/index.vue'], r)
    }, {
      name: 'business-manage',
      uri: '/business-manage',
      level: 1,
      show: true,
      component: r => require(['VIEWS/business-manage/index.vue'], r)
    }, {
      name: 'deal-center',
      uri: '/deal-center',
      level: 1,
      show: true,
      component: r => require(['VIEWS/deal-center/index.vue'], r)
    }, {
      name: 'data-center',
      uri: '/data-center',
      level: 1,
      show: false,
      component: r => require(['VIEWS/data-center/index.vue'], r)
    }
    /*  {
     name: 'msgcenter',
     uri: '/message',
     level: 1,
     show: false,
     component: r => require(['APPS/message/messageList.vue'], r)
     }, {
     name: 'dashboard',
     uri: '/dashboard',
     level: 1,
     component: r => require(['APPS/dashboard/index.vue'], r)
     }, {
     // 大屏
     name: 'screen_asset_risk',
     uri: '/dashboard/asset_risk',
     level: 2,
     show: false,
     meta: {
     fullscreen: true,
     copyright: false
     },
     component: r => require(['APPS/dashboard/asset_risk/index.vue'], r)
     }, {
     name: 'screen_ti',
     show: false,
     meta: {
     fullscreen: true,
     copyright: false
     },
     uri: '/dashboard/perception',
     level: 2,
     component: r => require(['APPS/dashboard/perception/index.vue'], r)
     }, {
     name: 'scenes',
     uri: '/scenes',
     level: 1,
     component: r => require(['APPS/scene/Scene.vue'], r)
     }, {
     name: 'alarm',
     uri: '/alarm',
     level: 1
     }, {
     name: 'alarm_detail',
     uri: '/alarm/detail',
     level: 2,
     component: r => require(['APPS/alarm/detail/index.vue'], r)
     }, {
     name: 'alarm_action',
     uri: '/alarm/action',
     level: 2,
     component: r => require(['APPS/alarm/action/index.vue'], r)
     }, {
     name: 'association_rules',
     uri: '/alarm/associate',
     level: 2
     }, {
     name: 'rule_list',
     uri: '/alarm/associate/rules',
     level: 3,
     component: r => require(['APPS/alarm/associate/rules/index.vue'], r)
     }, {
     name: 'manual_back_task',
     uri: '/alarm/associate/recall',
     level: 3,
     component: r => require(['APPS/alarm/associate/recall/index.vue'], r)
     }, {
     name: 'filter_management',
     uri: '/alarm/associate/filters',
     level: 3,
     component: r => require(['APPS/alarm/associate/filters/index.vue'], r)
     }, {
     name: 'object_resource',
     uri: '/alarm/associate/resource',
     level: 3,
     component: r => require(['APPS/alarm/associate/resource/index.vue'], r)
     }, {
     name: 'intelligence_sensor_rule',
     uri: '/alarm/intelligence',
     level: 2,
     component: r => require(['APPS/alarm/intelligence/index.vue'], r)
     }, {
     name: 'workorder',
     uri: '/assign',
     level: 1,
     component: r => require(['APPS/assign/index.vue'], r)
     }, {
     name: 'survey',
     uri: '/survey',
     level: 1,
     component: r => require(['APPS/survey/index.vue'], r)
     }, {
     name: 'search',
     uri: '/search',
     level: 1,
     component: r => require(['APPS/search/index.js'], r)
     }, {
     name: 'asset',
     uri: '/asset',
     level: 1
     }, {
     name: 'asset_manager',
     uri: '/asset/asset',
     level: 2
     }, {
     name: 'business_asset',
     uri: '/asset/asset/businessAsset',
     level: 3,
     component: r => require(['APPS/asset/asset/businessAsset/index.vue'], r)
     }, {
     name: 'host_asset',
     uri: '/asset/asset/hostManage',
     level: 3,
     component: r => require(['APPS/asset/asset/hostManage/index.vue'], r)
     }, {
     name: 'asset_detail',
     uri: '/asset/asset/businessAsset/detail',
     level: 4,
     component: r => require(['APPS/asset/asset/businessAsset/detail/index.vue'], r)
     }, {
     name: 'network_segment_page',
     uri: '/asset/asset/netSegment',
     level: 3,
     component: r => require(['APPS/asset/asset/netSegment/index.vue'], r)
     }, {
     name: 'topo',
     uri: '/asset/topo',
     level: 2
     }, {
     name: 'topo_detail_page',
     uri: '/asset/topo/topo-detail',
     level: 3,
     component: r => require(['APPS/asset/topo/topo-detail/index.vue'], r)
     }, {
     name: 'topo_view',
     uri: '/asset/topo/topo-view',
     level: 3,
     component: r => require(['APPS/asset/topo/topo-view/index.vue'], r)
     }, {
     name: 'asset_vul',
     uri: '/asset/leak',
     level: 2
     }, {
     name: 'asset_vul_view',
     uri: '/asset/leak/leak',
     level: 3,
     component: r => require(['APPS/asset/leak/leak/index.vue'], r)
     }, {
     name: 'asset_vul_scanner_manage',
     uri: '/asset/leak/scanner',
     level: 3,
     component: r => require(['APPS/asset/leak/scanner/index.vue'], r)
     }, {
     name: 'asset_vul_parser_page',
     uri: '/asset/leak/parseTemplate',
     level: 3,
     component: r => require(['APPS/asset/leak/parseTemplate/index.vue'], r)
     }, {
     name: 'report',
     uri: '/report',
     router: ['report'],
     level: 1
     }, {
     name: 'quick_report',
     uri: '/report/fastReport',
     level: 2,
     component: r => require(['APPS/report/fastReport/index.vue'], r)
     }, {
     name: 'circle_report',
     uri: '/report/circleReport',
     level: 2,
     component: r => require(['APPS/report/circleReport/index.vue'], r)
     }, {
     name: 'report_template',
     uri: '/report/reportTemplate',
     level: 2,
     component: r => require(['APPS/report/reportTemplate/index.vue'], r)
     }, {
     name: 'system',
     uri: '/system',
     level: 1
     }, {
     name: 'basic_config',
     uri: '/system/config',
     level: 2
     }, {
     name: 'system_infomation',
     uri: '/system/config/info',
     level: 3,
     component: r => require(['APPS/system/config/info/index.vue'], r)
     }, {
     name: 'network_manage',
     uri: '/system/config/network',
     level: 3,
     component: r => require(['APPS/system/config/network/index.vue'], r)
     }, {
     name: 'storage_manage',
     uri: '/system/config/storage',
     level: 3,
     component: r => require(['APPS/system/config/storage/index.vue'], r)
     }, {
     name: 'system_maintenance',
     uri: '/system/config/maintain',
     level: 3,
     component: r => require(['APPS/system/config/maintain/index.vue'], r)
     }, {
     name: 'linkage_management',
     uri: '/system/link',
     level: 2
     }, {
     name: 'component_manage',
     uri: '/system/link/component',
     level: 3,
     component: r => require(['APPS/system/link/component/index.vue'], r)
     }, {
     name: 'alarm_linkage_manage',
     uri: '/system/link/alarm',
     level: 3,
     component: r => require(['APPS/system/link/alarm/index.vue'], r)
     }, {
     name: 'multilevel_linkage_manage',
     uri: '/system/link/multilevel',
     level: 3,
     component: r => require([ 'APPS/system/link/multilevel/index.vue' ], r)
     }, {
     name: 'user_management',
     uri: '/system/userManage',
     level: 2
     }, {
     name: 'user_config_page',
     uri: '/system/userManage/user',
     level: 3,
     component: r => require(['APPS/system/userManage/user/index.vue'], r)
     }, {
     name: 'role_config_page',
     uri: '/system/userManage/role',
     level: 3,
     component: r => require(['APPS/system/userManage/role/index.vue'], r)
     }, {
     name: 'data_config',
     uri: '/system/userManage/permission',
     level: 3,
     component: r => require(['APPS/system/userManage/permission/index.vue'], r)
     }, {
     name: 'audit_manage',
     uri: '/system/audit',
     level: 2
     }, {
     name: 'operate_audit',
     uri: '/system/audit/operate',
     level: 3,
     component: r => require(['APPS/system/audit/operate/index.vue'], r)
     }, {
     name: 'system_audit',
     uri: '/system/audit/system',
     level: 3,
     component: r => require(['APPS/system/audit/system/index.vue'], r)
     }, {
     name: 'security_config',
     uri: '/system/security',
     level: 2,
     component: r => require(['APPS/system/security/index.vue'], r)
     }, {
     name: 'data_manager',
     uri: '/system/dataSets',
     level: 2
     }, {
     name: 'field_manager',
     uri: '/system/dataSets/field',
     level: 3,
     component: r => require(['APPS/system/dataSets/field/index.vue'], r)
     }, {
     name: 'category_manager',
     uri: '/system/dataSets/asset',
     level: 3,
     component: r => require(['APPS/system/dataSets/asset/index.vue'], r)
     }, {
     name: 'knowledgebase_category_manager',
     uri: '/system/dataSets/repository',
     level: 3,
     component: r => require(['APPS/system/dataSets/repository/index.vue'], r)
     }, {
     name: 'knowledgebase',
     uri: '/system/knowledge',
     level: 2,
     component: r => require(['APPS/system/knowledge/index.vue'], r)
     }, {
     name: 'plugin_management',
     uri: '/system/plugin',
     level: 2,
     component: r => require(['APPS/system/plugin/index.vue'], r)
     }*/
  ]
}
