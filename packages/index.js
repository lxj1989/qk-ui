/**
 * @author liuxianjun
 * Date: 17/11/9
 */
import QkButton from './button/index.js';
import QkRow from './row/index'
import QkCol from './col/index'
import QkTag from './tag/index'
import QkShowmore from './show-more/index'
import QkLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import QkAlert from './alert/index'
import QkLoadingBar from './loading-bar/index'
import QkSkeleton from './skeleton/index'

import QkDialog from './dialog/index'

const components = [
  QkButton,
  QkRow,
  QkCol,
  QkTag,
  QkShowmore,
  QkLimitTextArea,
  QkAlert,
  QkSkeleton,
  QkDialog
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = QkLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default {
  install,
  QkButton,
  QkRow,
  QkCol,
  QkTag,
  QkShowmore,
  QkLimitTextArea,
  MetaInfo,
  QkAlert,
  QkLoadingBar,
  QkSkeleton,
  QkDialog
}
