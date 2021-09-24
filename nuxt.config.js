module.exports = {
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            // !为什么这里重置数组不行
            routes.splice(0);
            // routes = [];
            console.log(routes);
            console.log('routes', routes);
            routes.push(...[
                {   
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/index.vue'),
                    children: [
                        {
                            path: '',
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/index.vue')
                        },
                        {
                            path: '/sign_in',
                            name: 'signIn',
                            component: resolve(__dirname, 'pages/register/index.vue')
                        },
                        {
                            path: '/register',
                            name: 'register',
                            component: resolve(__dirname, 'pages/register/index.vue')
                        },
                        {
                            path: '/setting',
                            name: 'setting',
                            component: resolve(__dirname, 'pages/setting/index.vue')
                        },
                        {
                            path: '/editor',
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/index.vue')
                        },
                        {
                            path: '/article/:slug',
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/index.vue')
                        },
                        {
                            path: '/profile/:username',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/index.vue')
                        },
                    ]
                }
            ])
        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        '~/plugins/request.js'
    ]
}