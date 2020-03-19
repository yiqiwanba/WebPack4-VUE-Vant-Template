/*
 Author: LTY
 Create Time: 2019-10-15 14:29
 Description: 路由集合
*/
'use strict';
export const constantRouterMap = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'page-index',
        component: () => import('sysPage/index'),
        meta: {
            title: '门户首页'
        }
    },
    {
        path: '/login',
        name: 'login-index',
        component: () => import('sysPage/login/index'),
        hidden: true,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/home',
        name: 'page-home',
        component: () => import('sysPage/home/index'),
        meta: {
            title: '登录首页'
        }
    },
    {
        path: '/404',
        component: () => import('sysPage/error-page/404'),
        hidden: true
    }
];
// 需要进入权限判定
export const asyncRouterMap = [];
