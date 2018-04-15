<template>
	<!--<div style="height: 100%">
		<div id="wrapper">
			<header ref="header" id="header" v-if="!routeMeta.fullscreen">
				<div class="header-inner">
					<div class="header-menu">
						<a href="/skyeye/home/index" class="header-logo"></a>
						<ul id="primary-menu" class="nav nav-pills" role="tablist">
							&lt;!&ndash;一级菜单&ndash;&gt;
							<li role="presentation" v-show="item1.show !== false" v-for="item1 in menuModel.menuArray">
								<template v-if="item1.children && item1.children.length > 0">
									<router-link :to="item1.uri || item1.url">{{ item1.cname }}</router-link>
									<div class="minor-menu">
										<div class="collapse navbar-collapse">
											<ul class="nav navbar-nav">
												&lt;!&ndash;二级菜单&ndash;&gt;
												<li v-for="item2 in item1.children"
													:class="{'dropdown' : item2.children && item2.children.length > 0}"
													v-if="item2.show !== false">
													<template v-if="item2.children && item2.children.length > 0">
														<router-link :to="item2.uri || item2.url" class="dropdown-toggle hover-show">
															{{ item2.cname }}<span class="caret"></span>
														</router-link>
														<ul class="dropdown-menu" role="menu">
															&lt;!&ndash;三级菜单&ndash;&gt;
															<li v-for="item3 in item2.children" v-show="item3.show !== false">
																<router-link :to="item3.uri || item3.url">{{item3.cname }}</router-link>
															</li>
														</ul>
													</template>
													<template v-else>
														<router-link :to="item2.uri">
															{{item2.cname}}
														</router-link>
													</template>
												</li>
											</ul>
										</div>
									</div>
								</template>
								<template v-else>
									<router-link :to="item1.uri">{{ item1.cname }}</router-link>
								</template>
							</li>
						</ul>
					</div>
					<div class="header-control">
						<div class="user-box" v-clickoutside="handleClose">
							<div class="user" :class="{active: isShowMenu}" @click="isShowMenu = !isShowMenu">
								<fui-icon type="Admin"></fui-icon>
								{{user.username}}
								<fui-icon type="Angle-down"></fui-icon>
							</div>
							<ul class="user-menu" v-show="isShowMenu">
								<li @click="checkPassword">修改密码</li>
								<li @click="logOut">退出登录</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			<div id="app-container" :class="appClassName" :style="appStyle">
				<fui-breadcrumb v-if="breadcrumb.length > 1 && !routeMeta.fullscreen" class="app-breadcrumb">
					<template v-for="(bc, $index) in breadcrumb">
						<fui-breadcrumb-item :href="bc.uri || bc.url" v-if="$index < breadcrumb.length - 1">
							{{bc.cname}}
						</fui-breadcrumb-item>
						<fui-breadcrumb-item v-else>
							{{bc.cname}}
						</fui-breadcrumb-item>
					</template>
				</fui-breadcrumb>
				<div id="app-comp">
					<router-view></router-view>
				</div>
				<div v-if="routeMeta.copyright !== false" id="copyright">
					{{copyright}}
				</div>
			</div>
			&lt;!&ndash;<modify-pwd-modal :isShow="isShowModifyPsw" @close-modal="closeModel"></modify-pwd-modal>&ndash;&gt;
		</div>
	</div>-->
	<h1>Home</h1>
</template>
<style lang="less">

</style>
<script>
/*  import menuModel from 'UTIL/menuModel'
  import user from './userAdmin/userModel'
  import modifyPwdModal from 'COMPONENTS/modifyPwdModal/index.vue'
  import { base } from 'COMMONS/global'*/
  export default {
   /* data () {
      return {
        menuModel,
        isShowMenu: false
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      },
      routeMeta () {
        return this.$route.meta
      },
      copyright () {
        return this.$store.state.user.copyright
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
    components: {
      modifyPwdModal
    },
    methods: {
      handleClose () {
        this.isShowMenu = false
      },
      checkPassword () {
        this.isShowMenu = false
        this.toggleModifyPswModal(true)
      },
      closeModel () {
        this.toggleModifyPswModal(false)
      },
      logOut () {
        user.logout()
          .then((res) => {
            location.href = base + '/login'
          })
          .catch(() => {
            this.$fui.popup({message: '退出失败', type: 'error'})
          })
      }
    }*/
  }
</script>
