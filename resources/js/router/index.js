import { createRouter, createWebHistory } from "vue-router";

import Layout from "../layout/Layout.vue";
import BlogsCreate from "../pages/BlogsCreate.vue";
import BlogsEdit from "../pages/BlogsEdit.vue";
import BlogsIndex from "../pages/BlogsIndex.vue";


const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
    },
    {
        path: '/blog',
        name: 'blogs.index',
        component: BlogsIndex
    },
    {
        path: '/edit-blog',
        name: 'blogs.edit',
        component: BlogsEdit
    },
    {
        path: '/add-blog',
        name: 'blogs.create',
        component: BlogsCreate
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
