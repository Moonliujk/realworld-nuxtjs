import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e8dbea0 = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "" */))
const _71dc0a36 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "" */))
const _57700229 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "" */))
const _368e03e0 = () => interopDefault(import('../pages/setting/index.vue' /* webpackChunkName: "" */))
const _0e0d8f33 = () => interopDefault(import('../pages/editor/index.vue' /* webpackChunkName: "" */))
const _7a3e2b06 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "" */))
const _6461e3f9 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "" */))

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
    component: _0e8dbea0,
    children: [{
      path: "",
      component: _71dc0a36,
      name: "home"
    }, {
      path: "/sign_in",
      component: _57700229,
      name: "signIn"
    }, {
      path: "/register",
      component: _57700229,
      name: "register"
    }, {
      path: "/setting",
      component: _368e03e0,
      name: "setting"
    }, {
      path: "/editor",
      component: _0e0d8f33,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _7a3e2b06,
      name: "article"
    }, {
      path: "/profile/:username",
      component: _6461e3f9,
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
