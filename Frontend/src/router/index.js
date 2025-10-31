import { createRouter, createWebHistory } from 'vue-router'

import Login from "../views/Login.vue"



const routes = [
    {path: '/',
    name:  "Login",
    component: Login
    },

    {path: '/menu', 
     name: "Menu",   
    component: () => import("../views/Login.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router