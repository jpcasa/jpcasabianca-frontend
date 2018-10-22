import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _71d400f8 = () => import('../pages/my-tech-stack/index.vue' /* webpackChunkName: "pages/my-tech-stack/index" */).then(m => m.default || m)
const _5c1fd2c6 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _0c6746ae = () => import('../pages/case-studies/index.vue' /* webpackChunkName: "pages/case-studies/index" */).then(m => m.default || m)
const _3db50832 = () => import('../pages/creative-process.vue' /* webpackChunkName: "pages/creative-process" */).then(m => m.default || m)
const _61e9dda9 = () => import('../pages/case-studies/printa-delivery.vue' /* webpackChunkName: "pages/case-studies/printa-delivery" */).then(m => m.default || m)
const _0b01a36c = () => import('../pages/blog/_url.vue' /* webpackChunkName: "pages/blog/_url" */).then(m => m.default || m)
const _eb583224 = () => import('../pages/my-tech-stack/_url.vue' /* webpackChunkName: "pages/my-tech-stack/_url" */).then(m => m.default || m)
const _7363db7e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/my-tech-stack",
			component: _71d400f8,
			name: "my-tech-stack"
		},
		{
			path: "/blog",
			component: _5c1fd2c6,
			name: "blog"
		},
		{
			path: "/case-studies",
			component: _0c6746ae,
			name: "case-studies"
		},
		{
			path: "/creative-process",
			component: _3db50832,
			name: "creative-process"
		},
		{
			path: "/case-studies/printa-delivery",
			component: _61e9dda9,
			name: "case-studies-printa-delivery"
		},
		{
			path: "/blog/:url",
			component: _0b01a36c,
			name: "blog-url"
		},
		{
			path: "/my-tech-stack/:url?",
			component: _eb583224,
			name: "my-tech-stack-url"
		},
		{
			path: "/",
			component: _7363db7e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
