// import Toast from './src/toast'

// Toast.install = function(Vue) {
// 	Vue.component(Toast.name, Toast)
// }
// export default Toast

import QkToast from './src/toast'
QkToast.install = function(Vue) {
	Vue.component(QkToast.name, QkToast);
	Vue.prototype.$qkToast = function(options,o) {
		let Constructor = Vue.extend(QkToast),
			node;
		if (typeof options === 'object' && options instanceof Object) {
			node = new Constructor({
				propsData: options
			});
			node.$slots.default = [options.message];
		} else if (typeof options === 'string') {
			node = new Constructor();
			node.$slots.default = [options];
		}
		node.vm = node.$mount();
		node.vm.visible = true
		document.body.appendChild(node.$el);
	};
};

import QkToastC from './src/toast-c'
QkToastC.install = function(Vue) {
	Vue.component(QkToastC.name, QkToastC);
	Vue.prototype.$qkToastC = function(options) {
		let Constructor = Vue.extend(QkToastC),
			node;
		if (typeof options === 'object' && options instanceof Object) {
			node = new Constructor({
				propsData: options
			});
			node.$slots.default = [options.message];
		} else if (typeof options === 'string') {
			node = new Constructor();
			node.$slots.default = [options];
		}
		node.vm = node.$mount();
		node.vm.visible = true
		document.body.appendChild(node.$el);
	};
};
export {
	QkToast,QkToastC
};