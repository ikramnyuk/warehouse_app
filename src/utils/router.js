import Vue from 'vue';
import VueRouter from 'vue-router';
// import { getToken } from './token';
import Layout from '../views/Layout';
import Users from '../views/Users';
import Companies from '../views/Companies';
import Structures from '../views/Structures';
import Warehouses from '../views/Warehouses';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
		name: 'Layout',
		children: [
            {
                path: '/users',
                component: Users
            },
            {
                path: '/companies',
                component: Companies
            },
            {
                path: '/structures',
                component: Structures
            },
            {
                path: '/warehouses',
                component: Warehouses
            }
        ]
    }
];

const Router = new VueRouter({
    routes
});

// Router.beforeEach((to, from, next) => {
//     if (to.fullPath !== '/login') {

//         if (getToken) {
//             next('/login');
//         }else{
//             next();
//         }
//     }else{
//         next();
//     }
// });

export default Router;