/**
 * @author liuxianjun
 * Date: 2021-08-02
 */
import tabs from './src/tabs.vue'
import tabsPane from './src/tabs-pane.vue'
import tabsItem from './src/tabs-item.vue'
import tabsHead from './src/tabs-head.vue'
import tabsBody from './src/tabs-body.vue'

tabs.install = function(Vue) {
  Vue.component(tabs.name, tabs)
}

tabsPane.install = function(Vue) {
  Vue.component(tabsPane.name, tabsPane)
}

tabsItem.install = function(Vue) {
  Vue.component(tabsItem.name, tabsItem)
}

tabsHead.install = function(Vue) {
  Vue.component(tabsHead.name, tabsHead)
}

tabsBody.install = function(Vue) {
  Vue.component(tabsBody.name, tabsBody)
}

export {
	tabs,
	tabsPane,
	tabsItem,
	tabsHead,
	tabsBody
}
