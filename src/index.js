

// var Msg = require('./msg.vue');
import './msg.css';
import Msg from './msg.vue';

Msg.install = function (Vue, options = {}) {

    Vue.prototype.$msg = new (Vue.extend(Msg))({ propsData: options })
    // Vue.toaster = Vue.prototype.$toaster
}

// module.exports = Msg

export default Msg;