import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _189252f6 = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "" */))
const _603d21fa = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "" */))
const _ec50d284 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "" */))
const _c971eeaa = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "" */))
const _090b4508 = () => interopDefault(import('../pages/editor/index.vue' /* webpackChunkName: "" */))
const _4211a05e = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "" */))
const _6dca2e78 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _189252f6,
    children: [{
      path: "",
      component: _603d21fa,
      name: "home"
    }, {
      path: "/sign_in",
      component: _ec50d284,
      name: "signIn"
    }, {
      path: "/register",
      component: _ec50d284,
      name: "register"
    }, {
      path: "/setting",
      component: _c971eeaa,
      name: "setting"
    }, {
      path: "/editor",
      component: _090b4508,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4211a05e,
      name: "article"
    }, {
      path: "/profile/:username",
      component: _6dca2e78,
      name: "profile"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
