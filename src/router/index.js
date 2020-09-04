import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const home = () => import('views/home/Home');
const classify = () => import('views/classify/Classify');
const profile = () => import('views/profile/Profile');
const shop = () => import('views/shop/Shop');


const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/shop',
        component:shop
    },
    {
        path:'/classify',
        component:classify
    },
    {
        path:'/profile',
        component:profile
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;
