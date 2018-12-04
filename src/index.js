

// var Msg = require('./msg.vue');
import './msg.css';
import Msg from './msg.vue';

Msg.install = function (Vue, options = {}) {

    Vue.prototype.$Msg = new (Vue.extend(Msg))({ propsData: options })
    
}

export default Msg;