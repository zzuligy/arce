webpackJsonp([11],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _views = __webpack_require__(209);

var _views2 = _interopRequireDefault(_views);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'app',
  components: { viewEntry: _views2.default }
}; //
//
//
//

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menuModel = __webpack_require__(23);

var _menuModel2 = _interopRequireDefault(_menuModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { base } from 'COMMONS/global'
exports.default = {
  data: function data() {
    return {
      menuModel: _menuModel2.default,
      curActiveLevel1Menu: _menuModel2.default.menuArray[0],
      isShowMenu: false
    };
  },

  computed: {
    routeMeta: function routeMeta() {
      return this.$route.meta;
    },
    appClassName: function appClassName() {
      var className = [];
      var appName = this.$route.name;
      className.push('app-' + appName);
      if (this.routeMeta.fullscreen) {
        className.push('app-is-fullscreen');
      }
      return className;
    },
    breadcrumb: function breadcrumb() {
      var vm = this;
      var name = this.$route.name;
      var menu = this.menuModel.menuObject[name];
      if (!name || !menu || menu.pid === 0) return [];
      var breadcrumb = [];
      breadcrumb.push(menu);

      function findDeepMenu(pid) {
        var parent = vm.menuModel.sourceData.find(function (source) {
          return pid === source.id;
        });
        if (parent) {
          breadcrumb.unshift(parent);
          if (parent.pid !== 0) {
            findDeepMenu(parent.pid);
          }
        }
      }

      findDeepMenu(menu.pid);
      return breadcrumb;
    },
    appStyle: function appStyle() {
      var appStyle = void 0;
      var $route = this.$route;
      var root = _menuModel2.default.menuArray.find(function (menu) {
        return $route.path.indexOf(menu.uri) !== -1;
      });
      if (this.routeMeta.fullscreen) {
        appStyle = {
          height: '100%',
          top: '0'
        };
      } else if (root && root.children && root.children.length && root.children.find(function (child) {
        return child.show !== false;
      })) {
        appStyle = {
          height: 'calc(100% - 80px)',
          top: '50px'
        };
      } else {
        appStyle = {
          height: 'calc(100% - 30px)',
          top: '0'
        };
      }
      return appStyle;
    }
  },
  /* components: {
   modifyPwdModal
   },*/
  methods: {
    setCurActiveLevel1Menu: function setCurActiveLevel1Menu(activeMenu) {
      this.curActiveLevel1Menu = activeMenu;
    },
    handleClose: function handleClose() {
      this.isShowMenu = false;
    },
    checkPassword: function checkPassword() {
      /*this.isShowMenu = false
       this.toggleModifyPswModal(true)*/
    },
    logOut: function logOut() {
      /* user.logout()
       .then((res) => {
       location.href = base + '/login'
       })
       .catch(() => {
       //this.$fui.popup({message: '退出失败', type: 'error'})
       })*/
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(134);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * 规范：
                                                                                                                                                           * 命名空间是全大写。
                                                                                                                                                           * 资源名是小写。
                                                                                                                                                           * */


var resourceList = {
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
        }, {
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
};

var ResourceStore = function ResourceStore() {
  _classCallCheck(this, ResourceStore);
};

function getResourceByPaths(resourcePaths, resourceList) {
  var resultResource = resourceList;
  try {
    var paths = resourcePaths.split('.');
    paths.forEach(function (path) {
      resultResource = resultResource[path];
    });
  } catch (e) {
    console.error('\u67E5\u627E' + resourcePaths + '\u5BF9\u5E94\u7684\u8D44\u6E90\u65F6\uFF0C\u62A5\u9519');
  } finally {
    resultResource || console.error('\u6CA1\u6709\u627E\u5230' + resourcePaths + '\u5BF9\u5E94\u7684\u8D44\u6E90');
  }

  return resultResource;
}

ResourceStore.get = function (id) {
  var resource = getResourceByPaths(id, resourceList);
  return resource;
};

ResourceStore.getByUrl = function (url) {};

exports.default = ResourceStore;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(204);

var _qs2 = _interopRequireDefault(_qs);

var _resourceScheme = __webpack_require__(133);

var _resourceScheme2 = _interopRequireDefault(_resourceScheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Http = function (_ResourceScheme) {
  _inherits(Http, _ResourceScheme);

  function Http(url) {
    _classCallCheck(this, Http);

    var _this = _possibleConstructorReturn(this, (Http.__proto__ || Object.getPrototypeOf(Http)).call(this));

    _this.url = url;
    return _this;
  }

  _createClass(Http, [{
    key: 'get',
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _axios2.default.get(this.url, params);
    }
  }, {
    key: 'save',
    value: function save() {}
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'remove',
    value: function remove() {}
  }]);

  return Http;
}(_resourceScheme2.default);

Http.createInstance = function createHttpRequestInstance(url) {
  var instance = new Http(url);
  return instance;
};
exports.default = Http;

/*
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.error("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  if (!res.data.success) {
    // _.toast(res.data.msg);
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  console.error("网络异常", 'fail');
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

////返回一个Promise(发送get请求)
export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}*/

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(131);

var _http2 = _interopRequireDefault(_http);

var _resourceStore = __webpack_require__(130);

var _resourceStore2 = _interopRequireDefault(_resourceStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource(activeAdapter) {
  _classCallCheck(this, Resource);

  this.activeAdapter = _http2.default;
};

Resource.create = function (resourceID) {
  var resource = _resourceStore2.default.get(resourceID);
  var resourceExecutorInstance = void 0;

  resourceExecutorInstance = _http2.default.createInstance(resource.url);
  return resourceExecutorInstance;
};

exports.default = Resource;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceScheme = function () {
  function ResourceScheme() {
    _classCallCheck(this, ResourceScheme);
  }

  _createClass(ResourceScheme, [{
    key: "get",
    value: function get() {}
  }, {
    key: "save",
    value: function save() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "remove",
    value: function remove() {}
  }]);

  return ResourceScheme;
}();

exports.default = ResourceScheme;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(135);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logTpl = function logTpl(msg, type) {
  var TYPE_COLOR_PAIRS = { 'warn': 'yellow', error: 'red', print: '#aaa' };
  var bgColor = TYPE_COLOR_PAIRS[type];
  return '[c="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; color: #fff; font-size: 20px; padding: 15px 20px; background: ' + bgColor + '; border-radius: 4px; line-height: 100px; text-shadow: 0 1px #000"]' + msg + '[c]';
};
var logObject = {
  warn: function warn(msg) {
    var warnString = logTpl(msg, 'warn');
    (0, _log2.default)(warnString);
  },
  error: function error(msg) {
    var warnString = logTpl(msg, 'error');
    (0, _log2.default)(warnString);
  }
};

exports.default = logObject;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var exportedLog, ffSupport, formats, getOrderedMatches, hasMatches, isFF, isIE, isOpera, isSafari, log, makeArray, operaSupport, safariSupport, stringToArgs, _log;

  if (!(window.console && window.console.log)) {
    return;
  }

  log = function log() {
    var args;
    args = [];
    makeArray(arguments).forEach(function (arg) {
      if (typeof arg === 'string') {
        return args = args.concat(stringToArgs(arg));
      } else {
        return args.push(arg);
      }
    });
    return _log.apply(window, args);
  };

  _log = function _log() {
    return Function.prototype.apply.call(console.log, console, makeArray(arguments));
  };

  makeArray = function makeArray(arrayLikeThing) {
    return Array.prototype.slice.call(arrayLikeThing);
  };

  formats = [{
    regex: /\*([^\*]+)\*/,
    replacer: function replacer(m, p1) {
      return "%c" + p1 + "%c";
    },
    styles: function styles() {
      return ['font-style: italic', ''];
    }
  }, {
    regex: /\_([^\_]+)\_/,
    replacer: function replacer(m, p1) {
      return "%c" + p1 + "%c";
    },
    styles: function styles() {
      return ['font-weight: bold', ''];
    }
  }, {
    regex: /\`([^\`]+)\`/,
    replacer: function replacer(m, p1) {
      return "%c" + p1 + "%c";
    },
    styles: function styles() {
      return ['background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)', ''];
    }
  }, {
    regex: /\[c\=(?:\"|\')?((?:(?!(?:\"|\')\]).)*)(?:\"|\')?\]((?:(?!\[c\]).)*)\[c\]/,
    replacer: function replacer(m, p1, p2) {
      return "%c" + p2 + "%c";
    },
    styles: function styles(match) {
      return [match[1], ''];
    }
  }];

  hasMatches = function hasMatches(str) {
    var _hasMatches;
    _hasMatches = false;
    formats.forEach(function (format) {
      if (format.regex.test(str)) {
        return _hasMatches = true;
      }
    });
    return _hasMatches;
  };

  getOrderedMatches = function getOrderedMatches(str) {
    var matches;
    matches = [];
    formats.forEach(function (format) {
      var match;
      match = str.match(format.regex);
      if (match) {
        return matches.push({
          format: format,
          match: match
        });
      }
    });
    return matches.sort(function (a, b) {
      return a.match.index - b.match.index;
    });
  };

  stringToArgs = function stringToArgs(str) {
    var firstMatch, matches, styles;
    styles = [];
    while (hasMatches(str)) {
      matches = getOrderedMatches(str);
      firstMatch = matches[0];
      str = str.replace(firstMatch.format.regex, firstMatch.format.replacer);
      styles = styles.concat(firstMatch.format.styles(firstMatch.match));
    }
    return [str].concat(styles);
  };

  isSafari = function isSafari() {
    return (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
    );
  };

  isOpera = function isOpera() {
    return (/OPR/.test(navigator.userAgent) && /Opera/.test(navigator.vendor)
    );
  };

  isFF = function isFF() {
    return (/Firefox/.test(navigator.userAgent)
    );
  };

  isIE = function isIE() {
    return (/MSIE/.test(navigator.userAgent)
    );
  };

  safariSupport = function safariSupport() {
    var m;
    m = navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/);
    if (!m) {
      return false;
    }
    return 537.38 <= parseInt(m[1], 10) + parseInt(m[2], 10) / 100;
  };

  operaSupport = function operaSupport() {
    var m;
    m = navigator.userAgent.match(/OPR\/(\d+)\./);
    if (!m) {
      return false;
    }
    return 15 <= parseInt(m[1], 10);
  };

  ffSupport = function ffSupport() {
    return window.console.firebug || window.console.exception;
  };

  if (isIE() || isFF() && !ffSupport() || isOpera() && !operaSupport() || isSafari() && !safariSupport()) {
    exportedLog = _log;
  } else {
    exportedLog = log;
  }

  exportedLog.l = _log;

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return exportedLog;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined') {
    module.exports = exportedLog;
  } else {
    window.log = exportedLog;
  }
}).call(undefined);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = exports.LoginUsers = undefined;

var _mockjs = __webpack_require__(198);

var _mockjs2 = _interopRequireDefault(_mockjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginUsers = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
}];

var Users = [];

for (var i = 0; i < 86; i++) {
  Users.push(_mockjs2.default.mock({
    id: _mockjs2.default.Random.guid(),
    name: _mockjs2.default.Random.cname(),
    addr: _mockjs2.default.mock('@county(true)'),
    'age|18-60': 1,
    birth: _mockjs2.default.Random.date(),
    sex: _mockjs2.default.Random.integer(0, 1)
  }));
}

exports.LoginUsers = LoginUsers;
exports.Users = Users;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menu = [{
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
}, {
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
}];

exports.default = menu;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// const dashboard = r => require(['APPS/dashboard/index.vue'], r)

exports.default = {
  menuConfig: [{
    name: 'system-center',
    uri: '/system-center',
    level: 1,
    show: true,
    component: function component(r) {
      return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(222)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    name: 'user',
    uri: '/system-center/user',
    level: 2,
    show: true,
    component: function component(r) {
      return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(224)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    name: 'role',
    uri: '/system-center/role',
    level: 2,
    show: true,
    component: function component(r) {
      return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(223)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    name: 'user-manage',
    uri: '/user-manage',
    level: 1,
    show: true,
    component: function component(r) {
      return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(225)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    name: 'business-manage',
    uri: '/business-manage',
    level: 1,
    show: true,
    component: function component(r) {
      return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(218)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    name: 'deal-center',
    uri: '/deal-center',
    level: 1,
    show: true,
    component: function component(r) {
      return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(221)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
  }, {
    name: 'data-center',
    uri: '/data-center',
    level: 1,
    show: false,
    component: function component(r) {
      return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(220)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
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
  }]
};

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// const login = r => require(['APP/common/userAdmin/login/index.vue'], r)
var _403Page = function _403Page(r) {
  return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(219)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var _404Page = function _404Page(r) {
  return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(216)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
// const docs = r => require(['APP/docs/index'], r)
var defaultRoutes = [{
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
}];

exports.default = defaultRoutes;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [
  /*  {
   // 大屏
   name: 'intranet-perception',
   uri: '/dashboard/intranetPerception',
   level: 2,
   show: false,
   meta: {
   fullscreen: true,
   copyright: false
   },
   perms: ['read', 'write'],
   component: r => require(['APPS/dashboard/intranet-perception/index.vue'], r)
   }*/
];

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(84);

var _App2 = _interopRequireDefault(_App);

var _elementUi = __webpack_require__(81);

var _elementUi2 = _interopRequireDefault(_elementUi);

__webpack_require__(82);

var _ROUTER = __webpack_require__(80);

var _ROUTER2 = _interopRequireDefault(_ROUTER);

var _menuModel = __webpack_require__(23);

var _menuModel2 = _interopRequireDefault(_menuModel);

var _mock = __webpack_require__(79);

var _mock2 = _interopRequireDefault(_mock);

__webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mock2.default.bootstrap();
//import store from './vuex/store'
//import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
//import routes from './routes'


//import './assets/theme/theme-green/index.css'
//import babelpolyfill from 'babel-polyfill'


_vue2.default.use(_elementUi2.default);
//Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });
function createApp() {
  new _vue2.default({
    el: '#app',
    template: '<App></App>',
    router: _ROUTER2.default,
    // store
    components: { App: _App2.default }
  }).$mount('#app');
}

var run = function run() {
  try {
    var promise = _menuModel2.default.start(_ROUTER2.default);
    promise.then(function () {
      return createApp();
    });
  } catch (err) {
    createApp(err);
  }
};
run();

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(197)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(211),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view-entry')
},staticRenderFns: []}

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-container', {
    staticClass: "views-main"
  }, [(!_vm.routeMeta.fullscreen) ? _c('el-header', {
    ref: "header",
    attrs: {
      "id": "header"
    }
  }, [_c('div', {
    staticClass: "header-inner"
  }, [_c('div', {
    staticClass: "header-menu"
  }, [_c('a', {
    staticClass: "header-logo",
    attrs: {
      "href": "/skyeye/home/index"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "nav nav-pills",
    attrs: {
      "id": "primary-menu",
      "role": "tablist"
    }
  }, _vm._l((_vm.menuModel.menuArray), function(item1) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item1.show !== false),
        expression: "item1.show !== false"
      }],
      attrs: {
        "role": "presentation"
      },
      on: {
        "click": function($event) {
          _vm.setCurActiveLevel1Menu(item1)
        }
      }
    }, [(item1.children && item1.children.length > 0) ? [_c('router-link', {
      attrs: {
        "to": item1.uri || item1.url
      }
    }, [_vm._v(_vm._s(item1.cname))])] : [_c('router-link', {
      attrs: {
        "to": item1.uri
      }
    }, [_vm._v(_vm._s(item1.cname))])]], 2)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "header-control"
  }, [_c('div', {
    staticClass: "user-box"
  }, [_c('div', {
    staticClass: "user",
    class: {
      active: _vm.isShowMenu
    },
    on: {
      "click": function($event) {
        _vm.isShowMenu = !_vm.isShowMenu
      }
    }
  }, [_c('el-icon', {
    attrs: {
      "type": "Admin"
    }
  }), _vm._v(" "), _vm._v("xiaoming\n                        "), _c('el-icon', {
    attrs: {
      "type": "Angle-down"
    }
  })], 1), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowMenu),
      expression: "isShowMenu"
    }],
    staticClass: "user-menu"
  }, [_c('li', {
    on: {
      "click": _vm.checkPassword
    }
  }, [_vm._v("修改密码")]), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.logOut
    }
  }, [_vm._v("退出登录")])])])])])]) : _vm._e(), _vm._v(" "), _c('el-container', [_c('el-aside', {
    attrs: {
      "width": "200px"
    }
  }, [_c('div', {
    staticClass: "minor-menu"
  }, [_c('div', {
    staticClass: "collapse navbar-collapse"
  }, [_c('el-row', {
    staticClass: "nav navbar-nav"
  }, _vm._l((_vm.curActiveLevel1Menu.children), function(item2) {
    return (item2.show !== false) ? _c('el-col', {
      staticClass: "grid-content bg-purple-dark",
      class: {
        'dropdown': item2.children && item2.children.length > 0
      }
    }, [(item2.children && item2.children.length > 0) ? [_c('router-link', {
      staticClass: "dropdown-toggle hover-show",
      attrs: {
        "to": item2.uri || item2.url
      }
    }, [_vm._v("\n                                    " + _vm._s(item2.cname)), _c('span', {
      staticClass: "caret"
    })]), _vm._v(" "), _c('ul', {
      staticClass: "dropdown-menu",
      attrs: {
        "role": "menu"
      }
    }, _vm._l((item2.children), function(item3) {
      return _c('li', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (item3.show !== false),
          expression: "item3.show !== false"
        }]
      }, [_c('router-link', {
        attrs: {
          "to": item3.uri || item3.url
        }
      }, [_vm._v(_vm._s(item3.cname) + "\n                                        ")])], 1)
    }))] : [_c('router-link', {
      attrs: {
        "to": item2.uri
      }
    }, [_vm._v("\n                                    " + _vm._s(item2.cname) + "\n                                ")])]], 2) : _vm._e()
  }))], 1)])]), _vm._v(" "), _c('el-main', {
    class: _vm.appClassName,
    style: (_vm.appStyle),
    attrs: {
      "id": "app-container"
    }
  }, [(_vm.breadcrumb.length > 1 && !_vm.routeMeta.fullscreen) ? _c('el-breadcrumb', {
    staticClass: "app-breadcrumb"
  }, [_vm._l((_vm.breadcrumb), function(bc, $index) {
    return [($index < _vm.breadcrumb.length - 1) ? _c('el-breadcrumb-item', {
      attrs: {
        "href": bc.uri || bc.url
      }
    }, [_vm._v("\n                        " + _vm._s(bc.cname) + "\n                    ")]) : _c('el-breadcrumb-item', [_vm._v("\n                        " + _vm._s(bc.cname) + "\n                    ")])]
  })], 2) : _vm._e(), _vm._v(" "), _c('el-main', {
    attrs: {
      "id": "app-comp"
    }
  }, [_c('router-view', {
    staticClass: "main"
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routeConfig = __webpack_require__(138);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _resource = __webpack_require__(132);

var _resource2 = _interopRequireDefault(_resource);

var _localMenuConfigList = __webpack_require__(140);

var _localMenuConfigList2 = _interopRequireDefault(_localMenuConfigList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuResource = _resource2.default.create('BASE.menu');
var empty = function empty(r) {
  return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(217)]; (r.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

var menuModel = {
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
  getMenuItem: function getMenuItem(name) {
    return name && this.menuObject && this.menuObject[name] || null;
  },

  /**
   * 方法 获取菜单子节点
   * @param string pname 菜单父级中文名称
   */
  getMenuChilds: function getMenuChilds(pname) {
    return pname && this.menuObject && this.menuObject[pname] && this.menuObject[pname].children || [];
  },

  /**
   * 方法 添加菜单节点
   * @param object $router 路由对象
   */
  start: async function start($router, isForce) {
    if ((!$router || this.menuArray.length > 0) && !isForce) {
      return Promise.resolve('');
    }
    try {
      var dataSourcePromise = this.getDatasource();
      this.sourceData = await dataSourcePromise;
      this.menuArray = this.transOpter(this.sourceData, 'id', 'pid', 'children');
      // 加载本地路由
      //process.ENV === 'dev' && this.setLocalMenu()
      // 渲染路由
      var menuRoutes = [];
      if (!this.menuArray || this.menuArray.length === 0) {
        menuRoutes.push({
          path: '/index',
          component: empty
        });
      } else {
        this.generateRoute(this.menuArray, menuRoutes);
        menuRoutes.push({
          path: '/index',
          redirect: $router.__defaultURL ? $router.__defaultURL : this.getDeepChild(this.menuArray).uri
        });
      }
      $router.addRoutes(menuRoutes || []);
      return this;
    } catch (err) {
      console.info('errr', err);
      alert('路由加载失败 ' + err.message);
    }
  },

  // 递归渲染路由
  generateRoute: function generateRoute(routeArray, menuRoutes) {
    var aVal = null;
    var newRoute = null;
    for (var j = 0; j < routeArray.length; j++) {
      aVal = routeArray[j];
      newRoute = this.addMenuRoute(aVal);
      if (newRoute) {
        !menuModel.existNameMap[newRoute.name] && menuRoutes.push(newRoute);
        menuModel.existNameMap[newRoute.name] = true;
      }
      if (routeArray[j].children) {
        this.generateRoute(routeArray[j].children, menuRoutes);
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
  addDefineMenu: function addDefineMenu(menuPath, menuModel, beforeNode) {
    // 添加根节点
    if (menuPath.trim() === '/') {
      this.generateMenuModel(menuModel, beforeNode);
      return;
    }
    // split menuPath
    var pathArray = menuPath.split('/');
    var leafObj = null;
    var pObj = null;

    // 目录路径，检测无路径自动生成
    while (pathArray.length > 0) {
      var pathName = pathArray.shift();
      if (!pathName) {
        continue;
      }
      leafObj = this.menuObject[pathName];
      // 部分对象从routeConfig加载，存在确没有id pid，使菜单无法显示
      if (leafObj && leafObj['id']) {
        pObj = leafObj;
        continue;
      }
      var tempModel = {
        cname: pathName,
        perms: ['read', 'write']
      };
      pObj = this.generateMenuModel(tempModel, beforeNode, pObj);
    }
    return this.generateMenuModel(menuModel, beforeNode, pObj);
  },
  addMenuObj: function addMenuObj(item) {
    // item show=true   __is403=false menuObject[name_id&pid]
    if (!item.name) {
      return;
    }
    this.menuObject[item.name] = item;
    if (item.cname) {
      this.menuObject[item.cname] = item;
    }
  },
  addMenuRoute: function addMenuRoute(item) {
    // 本地没配置的菜单需要URL
    // let routeMapObject = this.sourceData && item['id'] && this.sourceData.find(el => el.id === item['id'])
    if (!item) {
      return null;
    }
    var newRoute = {};
    if (item['name']) {
      newRoute['name'] = item['name'];
    }
    if (item['component']) {
      newRoute['component'] = item['component'];
    }
    if (!item.component && item['children'] && item['children'].length) {
      newRoute['redirect'] = this.getDeepChild(this.sourceData, item).uri || '';
    }
    if (item['uri']) {
      newRoute['path'] = item['uri'];
    }
    if (!newRoute['path'] && newRoute['redirect'] && newRoute['redirect'].length > 0) {
      newRoute['path'] = newRoute['redirect'] && newRoute['redirect'].slice(0, newRoute['redirect'].lastIndexOf('/'));
      item['uri'] = newRoute['path'].slice(0, newRoute['redirect'].lastIndexOf('/')) || newRoute['redirect'];
    }
    if (item.alias) {
      newRoute.alias = item.alias;
    }
    newRoute.meta = item.meta || {};
    if (item.perms && item.perms.length > 0) {
      if (item.perms.includes('read')) {
        newRoute.meta['read'] = true;
      }
      if (item.perms && item.perms.length > 0 && item.perms.includes('write')) {
        newRoute.meta['write'] = true;
      }
    }
    return newRoute;
  },
  getDeepChild: function getDeepChild(routes, pRoute) {
    pRoute = pRoute || routes[0];
    var route = routes.find(function (obj) {
      return obj.active && obj.pid === pRoute.id && obj.show !== false;
    });
    if (!route) {
      route = routes.find(function (obj) {
        return obj.pid === pRoute.id && obj.show !== false;
      });
    }
    if (!route) {
      return pRoute;
    }
    if (routes.find(function (obj) {
      return obj.pid === route.id;
    })) {
      route = this.getDeepChild(routes, route);
    }
    return route;
  },

  // Data to Tree
  transOpter: function transOpter(data, idStr, pidStr, chindrenStr) {
    var _this = this;

    // level<=3 and perms prototype
    var result = [];
    var children = chindrenStr;
    var len = data.length;

    var _loop = function _loop(i) {
      // generate route data and menu data
      var aVal = data[i];
      var hashVP = data.find(function (obj) {
        return obj[idStr] === aVal[pidStr];
      });
      if (hashVP) {
        aVal.pcname = hashVP.cname || '';
        aVal.pname = hashVP.name || '';
        !hashVP[children] && (hashVP[children] = []);
        hashVP[children].push(aVal);
      } else {
        aVal.pcname = '';
        aVal.pname = '';
        result.push(aVal);
      }
      _this.addMenuObj(aVal);
    };

    for (var i = 0; i < len; i++) {
      _loop(i);
    }
    return result;
  },

  // api
  getDatasource: async function getDatasource() {
    var menuResourcePromise = menuResource.get();
    var response = await menuResourcePromise;
    console.log(response);
    var result = response.data;
    result.data.push({
      name: 'multilevel_linkage_manage',
      cname: '多级部署',
      pid: 129,
      level: 3,
      id: 999,
      order_by: 1,
      perms: ['read', 'write']
    });
    result = result && result.data.filter(function (el) {
      return el.level <= 3 && el.perms;
    });
    result = this.getMapData(_routeConfig2.default && _routeConfig2.default.menuConfig || [], result || []);
    return result;
  },

  // init data
  getMapData: function getMapData(menuConfig, dataSource) {
    var res = dataSource.map(function (item) {
      var sourceItem = menuConfig.find(function (el) {
        return el.name === item['name'];
      });
      if (sourceItem) {
        // 本地配置覆盖服务器配置(cname采用服务器)
        item = Object.assign({}, item, sourceItem, item.cname && { cname: item.cname } || {});
        return item;
      }
      return item;
    });
    return res.filter(function (x) {
      return x.uri;
    });
  },
  getUUID: function getUUID() {
    // http://www.broofa.com/Tools/Math.uuid.htm
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = new Array(36);
    var rnd = 0;
    var r;
    return function generateUUID() {
      for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid[i] = '-';
        } else if (i === 14) {
          uuid[i] = '4';
        } else {
          if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
          r = rnd & 0xf;
          rnd = rnd >> 4;
          uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
        }
      }
      return uuid.join('');
    };
  },
  insertData: function insertData(list, beforeNode, currentObj) {
    // 检测同级别有相同节点，则返回
    var exist = list.find(function (el) {
      return el.name === currentObj.name;
    });
    if (exist) {
      return;
    }
    var beforeObj = list.find(function (el) {
      return el.cname === beforeNode;
    });
    var objIndex = beforeObj ? list.indexOf(beforeObj) === -1 ? list.length : list.indexOf(beforeObj) : list.length;
    list.splice(objIndex, 0, currentObj);

    this.addMenuObj(currentObj);
  },
  generateMenuModel: function generateMenuModel(currentObj, beforeNode, parentObj) {
    var defaultObj = {
      id: this.getUUID()(),
      name: currentObj && currentObj.name || currentObj.cname,
      cname: '',
      component: '',
      level: parentObj && parentObj.level + 1 || 1,
      perms: [],
      pid: parentObj && parentObj.id || 0,
      pcname: parentObj && parentObj.cname || '',
      pname: parentObj && parentObj.name || '',
      uri: ''
    };
    currentObj = Object.assign({}, defaultObj, currentObj);
    // 父级为空则为根节点
    if (!parentObj) {
      this.insertData(this.menuArray, beforeNode, currentObj);
      return currentObj;
    }
    !parentObj['children'] && (parentObj['children'] = []);
    this.insertData(parentObj['children'], beforeNode, currentObj);
    // 父级不为空 更新redirect bug 子级数据未添加进来，父级为空
    !this.sourceData && (this.sourceData = []) || this.sourceData.push(currentObj);
    // 刷新父级路由
    return currentObj;
  },

  /**
   * 设置本地菜单
   */
  setLocalMenu: function setLocalMenu() {
    var _this2 = this;

    // 说明一下routeConfig优先级问题
    // routeConfig优先级高于LocalMenu,如果检测routeConfig有相同的配置，则不会覆盖，但是routeConfig中的配置可能会服务端数据过滤掉
    // 所以查看哪边菜单生效时，需要考虑服务端是否匹配，如果匹配，则routeConfig优先，未匹配，则LocalMenu优先
    _localMenuConfigList2.default.forEach(function (menuItem) {
      _this2.addDefineMenu('/', menuItem, '');
    });
  }
};
exports.default = menuModel;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(24);

var _axios2 = _interopRequireDefault(_axios);

var _axiosMockAdapter = __webpack_require__(108);

var _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);

var _user = __webpack_require__(136);

var _menu = __webpack_require__(137);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Users = _user.Users;

exports.default = {
  /**
   * mock bootstrap
   */
  bootstrap: function bootstrap() {
    var mock = new _axiosMockAdapter2.default(_axios2.default);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(function (config) {
      var _JSON$parse = JSON.parse(config.data),
          username = _JSON$parse.username,
          password = _JSON$parse.password;

      return new Promise(function (resolve, reject) {
        var user = null;
        setTimeout(function () {
          var hasUser = _user.LoginUsers.some(function (u) {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user: user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(function (config) {
      var name = config.params.name;

      var mockUsers = _Users.filter(function (user) {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(function (config) {
      var _config$params = config.params,
          page = _config$params.page,
          name = _config$params.name;

      var mockUsers = _Users.filter(function (user) {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      var total = mockUsers.length;
      mockUsers = mockUsers.filter(function (u, index) {
        return index < 20 * page && index >= 20 * (page - 1);
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(function (config) {
      var id = config.params.id;

      _Users = _Users.filter(function (u) {
        return u.id !== id;
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(function (config) {
      var ids = config.params.ids;

      ids = ids.split(',');
      _Users = _Users.filter(function (u) {
        return !ids.includes(u.id);
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(function (config) {
      var _config$params2 = config.params,
          id = _config$params2.id,
          name = _config$params2.name,
          addr = _config$params2.addr,
          age = _config$params2.age,
          birth = _config$params2.birth,
          sex = _config$params2.sex;

      _Users.some(function (u) {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(function (config) {
      var _config$params3 = config.params,
          name = _config$params3.name,
          addr = _config$params3.addr,
          age = _config$params3.age,
          birth = _config$params3.birth,
          sex = _config$params3.sex;

      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

    mock.onGet('/menu').reply(function (config) {

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve([200, {
            code: 200,
            data: _menu2.default
          }]);
        }, 500);
      });
    });
  }
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(212);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(139);

var _routes2 = _interopRequireDefault(_routes);

var _menuModel = __webpack_require__(23);

var _menuModel2 = _interopRequireDefault(_menuModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
var routerConfig = {
  routes: _routes2.default,
  mode: 'history',
  base: '/peiwo/'
};

var router = new _vueRouter2.default(routerConfig);

router.beforeEach(function (to, from, next) {
  var is404 = to.matched.length === 0 || !_menuModel2.default && _menuModel2.default.menuObject && _menuModel2.default.menuObject[to.name];
  var is403 = _menuModel2.default && _menuModel2.default.menuObject && _menuModel2.default.menuObject[to.name] && _menuModel2.default.menuObject[to.name].perms && !_menuModel2.default.menuObject[to.name].perms.includes('read');
  if (is404) {
    next({ path: '/404' });
    return;
  }
  if (is403) {
    next({ path: '/403' });
    return;
  }
  next();
});
exports.default = router;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(196)

var Component = __webpack_require__(48)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(210),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},[141]);
//# sourceMappingURL=app.2404da8ff0805208a1d3.js.map