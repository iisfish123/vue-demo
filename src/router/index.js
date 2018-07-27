import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//登陆
// const Bg = r => require.ensure([], () => r(require('../components/common/Bg.vue')), 'Bg');
const LoginPage = r => require.ensure([], () => r(require('../components/page/login/LoginPage.vue')), 'LoginPage');

//首页
const HomePage = r => require.ensure([], () => r(require('../components/page/home/HomePage.vue')), 'HomePage');

//功能页
const Header = r => require.ensure([], () => r(require('../components/common/home.vue')), 'Header');
const User = r => require.ensure([], () => r(require('../components/page/user/User.vue')), 'Header');



export default new Router({
    routes: [
        {
            path: '/',
            component: LoginPage,
            meta: { title: '登陆' },
        },
        {
            path: '/home',
            component: HomePage
        },
        {
            path: '/admin/',
            component: Header,
            children:[
                {
                    path: '/admin/user',
                    component: User,
                    meta: { title: '用户列表' }
                }
            ]
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
