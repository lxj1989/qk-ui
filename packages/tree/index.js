/**
 * @author liuxianjun
 * Date: 17/11/12
 */
import Tree from './src/tree.vue'

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree)
}

export default Tree
