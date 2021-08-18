/**
 * @author liuxianjun
 * Date: 2021-08-02
 */
import Skeleton from './src/skeleton.vue'

Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton)
}

export default Skeleton
