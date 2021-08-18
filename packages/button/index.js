/**
 * @author liuxianjun
 * Date: 2021-08-02
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
