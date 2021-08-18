/**
 * @author liuxianjun
 * Date: 2021-08-02
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
import QkTree from './tree/index'

import QkMessage from './message/index'

import {
	tabs,
	tabsPane,
	tabsItem,
	tabsHead,
	tabsBody
} from './tabs/index.js'

import {QkToast,QkToastC} from './toast/index.js'

const components = [
	QkButton,
	QkRow,
	QkCol,
	QkTag,
	QkShowmore,
	QkLimitTextArea,
	QkAlert,
	QkSkeleton,
	QkDialog,
	QkTree,

	tabs,
	tabsPane,
	tabsItem,
	tabsHead,
	tabsBody,
	
	QkToast,
	QkToastC
]

const install = function(Vue) {
	if (install.installed) return
	components.map(component => Vue.component(component.name, component))
	MetaInfo.install(Vue)
	Vue.prototype.$loading = QkLoadingBar
	Vue.prototype.$qkMessage = QkMessage;
	// Vue.prototype.$qktoast = QkToast
	QkToast.install(Vue)
	QkToastC.install(Vue)
	
	// components.forEach(component => {
		
	// 	if(component.name){
	// 		Vue.component(component.name, component);
	// 	}
	// });
	
	// alert.install(Vue)
	// loading.install(Vue)
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
	QkDialog,
	QkTree,

	tabs,
	tabsPane,
	tabsItem,
	tabsHead,
	tabsBody,
	QkToast
}
