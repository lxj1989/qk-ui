/**
 * @author autumnLeaves0
 * Date: 2021-08-02
 */
import Alert from './src/alert.vue';

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
