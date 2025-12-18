import { createRouter, createWebHistory } from 'vue-router'

import Login from "../views/Login.vue"



const routes = [
    {path: '/',
    name:  "Login",
    component: Login
    },
    {path: '/menu', 
     name: "Menu",   
    component: () => import("../views/Menu.vue"),
    },
    {path:'/agenda',
     name: 'Agenda',
     component: () => import("../views/Agendamento.vue"),
    },
    {   path: '/Cadastro',
        name: 'Cadastro',
        component: () => import("../views/Cadastro.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router