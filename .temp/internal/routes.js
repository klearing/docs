/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\pargrammer\\blog\\docs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-004c6c70",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-004c6c70").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-f305f212",
    path: "/about1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f305f212").then(next)
    },
  },
  {
    name: "v-7acfa34d",
    path: "/css/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7acfa34d").then(next)
    },
  },
  {
    path: "/css/index.html",
    redirect: "/css/"
  },
  {
    name: "v-86b6649a",
    path: "/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-86b6649a").then(next)
    },
  },
  {
    name: "v-5116baa6",
    path: "/css/c-aaa.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5116baa6").then(next)
    },
  },
  {
    name: "v-9d0fadf4",
    path: "/css/c-bbb.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9d0fadf4").then(next)
    },
  },
  {
    name: "v-11d99766",
    path: "/css/c-ccc.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-11d99766").then(next)
    },
  },
  {
    name: "v-453f239a",
    path: "/quanxue.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-453f239a").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]