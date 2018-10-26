import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2bd9ef04 = () => import('../pages/my-tech-stack/index.vue' /* webpackChunkName: "pages/my-tech-stack/index" */).then(m => m.default || m)
const _0fa7672e = () => import('../pages/case-studies/index.vue' /* webpackChunkName: "pages/case-studies/index" */).then(m => m.default || m)
const _c06f1974 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _7b8348b2 = () => import('../pages/creative-process.vue' /* webpackChunkName: "pages/creative-process" */).then(m => m.default || m)
const _5ddb5e29 = () => import('../pages/case-studies/printa-delivery.vue' /* webpackChunkName: "pages/case-studies/printa-delivery" */).then(m => m.default || m)
const _5171dd50 = () => import('../pages/case-studies/jpcasabianca.vue' /* webpackChunkName: "pages/case-studies/jpcasabianca" */).then(m => m.default || m)
const _5782f2ec = () => import('../pages/blog/_url.vue' /* webpackChunkName: "pages/blog/_url" */).then(m => m.default || m)
const _e4d7f124 = () => import('../pages/my-tech-stack/_url.vue' /* webpackChunkName: "pages/my-tech-stack/_url" */).then(m => m.default || m)
const _ea39bc7e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _2bd9ef04,
			name: "my-tech-stack"
		},
		{
			path: "/case-studies",
			component: _0fa7672e,
			name: "case-studies"
		},
		{
			path: "/blog",
			component: _c06f1974,
			name: "blog"
		},
		{
			path: "/creative-process",
			component: _7b8348b2,
			name: "creative-process"
		},
		{
			path: "/case-studies/printa-delivery",
			component: _5ddb5e29,
			name: "case-studies-printa-delivery"
		},
		{
			path: "/case-studies/jpcasabianca",
			component: _5171dd50,
			name: "case-studies-jpcasabianca"
		},
		{
			path: "/blog/:url",
			component: _5782f2ec,
			name: "blog-url"
		},
		{
			path: "/my-tech-stack/:url?",
			component: _e4d7f124,
			name: "my-tech-stack-url"
		},
		{
			path: "/",
			component: _ea39bc7e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
