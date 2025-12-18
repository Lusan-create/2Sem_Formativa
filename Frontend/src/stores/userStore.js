import { defineStore } from "pinia";
import api from "../services/api";

export const useUserStore = defineStore("user", {
    state:()=>({
        users: [],
        form: {nome: "", email: ""},
    }),

    actions: {

    async login() {
            res = await api.get("/user/Login")
        }
    }
})

