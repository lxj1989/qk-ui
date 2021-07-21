import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`).default))
        return
      }
	  // console.log(require(`../docs/${route.name}.md`))
	  // route.component = ()=> import(`../docs/${route.name}.md`)
      route.component = r => require.ensure([], () =>
        // r(require(`../docs/${route.name}.md`)))
		r(require(`../docs/${route.name}.md`)))
			// r(import(`../docs/${route.name}.md`)))
        // r(demo))
    }
  })
}
 console.log(routes)
addComponent(routes)
export default new Router({
  routes: routes
})
