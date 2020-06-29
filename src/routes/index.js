import Home from '../pages/home/index'
import Nav1 from '../pages/Nav1/index'
import Nav2 from '../pages/Nav2/index'
import Nav3 from '../pages/Nav3/index'
// import About from '../pages/page1/views/about/index'
// import Article from '../pages/page1/views/article/index'
export const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
        meta: {
            title: '首页',
        }
    },
    {
        path: "/nav1",
        exact: true,
        component: Nav1,
        meta: {
            title: 'Nav1',
            roles: ['admin', 'user']
        },
    },
    {
        path: "/nav2",
        exact: true,
        component: Nav2,
        meta: {
            title: 'Nav2',
            roles: ['admin', 'user']
        },
    },
    {
        path: '',
        meta: {
            title: 'Nav3',
            roles: ['admin', 'user']
        },
        children:[{
            path: "/nav3",
            exact: true,
            component: Nav3,
            meta: {
                title: 'Nav31',
                roles: ['admin', 'user']
            },
        }]
    }

];
// export const page1MenuList = [
//     {
//         path: "/page1/about",
//         component: About,
//         meta: {
//             roles: ['admin', 'user']
//         }
//     },
//     {
//         path: "/page1/article",
//         component: Article,
//         meta: {
//             roles: ['admin', 'user']
//         }
//     }
// ]