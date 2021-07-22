/**
 * @author liuxianjun
 * Date: 17/11/9
 */
import Dialog from './src/dialog';

/* istanbul ignore next */
Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog);
};

export default Dialog;

