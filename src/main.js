import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './assets/font-awesome/all.css'
import './assets/css/index.scss'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import {Toast, Lazyload, ImagePreview} from 'vant'
import {Loading} from 'element-ui'
import imgError from 'sysStatic/images/error/imgError.png'

Vue.config.productionTip = false;
Toast.setDefaultOptions({duration: 2000});
Vue.use(Lazyload, {
    lazyComponent: true,
    error: imgError
});
Vue.use(Loading, Toast, ImagePreview);
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
