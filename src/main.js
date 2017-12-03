import vue from 'vue';
import axios from 'axios';
import vueRouter from 'vue-router'
import Mint from 'mint-ui'

axios.defaults.baseURL='http://127.0.0.1:8899';
vue.prototype.$ajax=axios;


import home from './Home.vue'
import message from './message.vue'
var router =new vueRouter({
    routes:[
        {name:'default',path:'/',redirect:'/home'},
        {name:'home',path:'/home',component:home},
        {name:message,path:'/message',component:message}
    ]
})

vue.use(vueRouter)
vue.use(Mint);
import '../statics/mui/css/mui.css'
import 'mint-ui/lib/style.css'
import App from './App.vue'
new vue({
    el:"#app",
    router,
    render:c=>c(App)
})