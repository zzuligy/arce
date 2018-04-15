<template>
    <el-container class="views-main">
        <el-header ref="header" id="header" v-if="!routeMeta.fullscreen">
            <div class="header-inner">
                <div class="header-menu">
                    <a href="/skyeye/home/index" class="header-logo"></a>
                    <ul id="primary-menu" class="nav nav-pills" role="tablist">
                        <!--一级菜单-->
                        <li role="presentation" @click="setCurActiveLevel1Menu(item1)" v-show="item1.show !== false"
                            v-for="item1 in menuModel.menuArray">
                            <template v-if="item1.children && item1.children.length > 0">
                                <router-link :to="item1.uri || item1.url">{{ item1.cname }}</router-link>
                            </template>
                            <template v-else>
                                <router-link :to="item1.uri">{{ item1.cname }}</router-link>
                            </template>
                        </li>
                    </ul>
                </div>
                <div class="header-control">
                    <div class="user-box">
                        <div class="user" :class="{active: isShowMenu}" @click="isShowMenu = !isShowMenu">
                            <el-icon type="Admin"></el-icon>
                            <!--{{user.username}}-->xiaoming
                            <el-icon type="Angle-down"></el-icon>
                        </div>
                        <ul class="user-menu" v-show="isShowMenu">
                            <li @click="checkPassword">修改密码</li>
                            <li @click="logOut">退出登录</li>
                        </ul>
                    </div>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <div class="minor-menu">
                    <div class="collapse navbar-collapse">
                        <el-row class="nav navbar-nav">
                            <!--二级菜单-->
                            <el-col v-for="item2 in curActiveLevel1Menu.children"
                                :class="{'dropdown' : item2.children && item2.children.length > 0}"
                                    class="grid-content bg-purple-dark"
                                v-if="item2.show !== false">
                                <template v-if="item2.children && item2.children.length > 0">
                                    <router-link :to="item2.uri || item2.url"
                                                 class="dropdown-toggle hover-show">
                                        {{ item2.cname }}<span class="caret"></span>
                                    </router-link>
                                    <ul class="dropdown-menu" role="menu">
                                        <!--三级菜单-->
                                        <li v-for="item3 in item2.children"
                                            v-show="item3.show !== false">
                                            <router-link :to="item3.uri || item3.url">{{item3.cname
                                                }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </template>
                                <template v-else>
                                    <router-link :to="item2.uri">
                                        {{item2.cname}}
                                    </router-link>
                                </template>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-aside>
            <el-main id="app-container" :class="appClassName" :style="appStyle">
                <el-breadcrumb v-if="breadcrumb.length > 1 && !routeMeta.fullscreen" class="app-breadcrumb">
                    <template v-for="(bc, $index) in breadcrumb">
                        <el-breadcrumb-item :href="bc.uri || bc.url" v-if="$index < breadcrumb.length - 1">
                            {{bc.cname}}
                        </el-breadcrumb-item>
                        <el-breadcrumb-item v-else>
                            {{bc.cname}}
                        </el-breadcrumb-item>
                    </template>
                </el-breadcrumb>

                <el-main id="app-comp">

                    <router-view class="main"></router-view>
                </el-main>
                <!-- <div v-if="routeMeta.copyright !== false" id="copyright">
                     {{copyright}}
                 </div>-->
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
  import menuModel from 'ROUTER/util/menuModel'
  //import { base } from 'COMMONS/global'
  export default {
    data () {
      return {
        menuModel,
        curActiveLevel1Menu: menuModel.menuArray[0],
        isShowMenu: false
      }
    },
    computed: {
      routeMeta () {
        return this.$route.meta
      },
      appClassName () {
        let className = []
        let appName = this.$route.name
        className.push('app-' + appName)
        if (this.routeMeta.fullscreen) {
          className.push('app-is-fullscreen')
        }
        return className
      },
      breadcrumb () {
        let vm = this
        let name = this.$route.name
        let menu = this.menuModel.menuObject[name]
        if (!name || !menu || menu.pid === 0) return []
        let breadcrumb = []
        breadcrumb.push(menu)

        function findDeepMenu (pid) {
          let parent = vm.menuModel.sourceData.find(source => {
            return pid === source.id
          })
          if (parent) {
            breadcrumb.unshift(parent)
            if (parent.pid !== 0) {
              findDeepMenu(parent.pid)
            }
          }
        }

        findDeepMenu(menu.pid)
        return breadcrumb
      },
      appStyle () {
        let appStyle
        let $route = this.$route
        let root = menuModel.menuArray.find(menu => $route.path.indexOf(menu.uri) !== -1)
        if (this.routeMeta.fullscreen) {
          appStyle = {
            height: '100%',
            top: '0'
          }
        } else if (root && root.children && root.children.length && root.children.find(child => child.show !== false)) {
          appStyle = {
            height: 'calc(100% - 80px)',
            top: '50px'
          }
        } else {
          appStyle = {
            height: 'calc(100% - 30px)',
            top: '0'
          }
        }
        return appStyle
      }
    },
      /* components: {
       modifyPwdModal
       },*/
    methods: {
      setCurActiveLevel1Menu (activeMenu) {
        this.curActiveLevel1Menu = activeMenu
      },
      handleClose () {
        this.isShowMenu = false
      },
      checkPassword () {
          /*this.isShowMenu = false
           this.toggleModifyPswModal(true)*/
      },

      logOut () {
          /* user.logout()
           .then((res) => {
           location.href = base + '/login'
           })
           .catch(() => {
           //this.$fui.popup({message: '退出失败', type: 'error'})
           })*/
      }
    }
  }
</script>
<style lang="less">
    @import '../common/styles/mixins.less';
    @import '../common/styles/variables.less';
    @import '../common/styles/reset.less';
    @import './style.less';

    #app-comp {
        display: flex;
        height: 100%;
        .sidebar {
            flex: 1;
            flex-basis: 100px;
            border: 1px solid red;
        }
        .main {
            flex: 10;
        }

    }
    .views-main{
        .navbar-nav{
            .grid-content{
                background: #409EFF;
                padding: 10px;
                margin-top: 4px;
                text-align: center;
                color: #fff;
                a{
                    color:#fff;
                    font-size:16px;
                }
            }
        }
    }


</style>