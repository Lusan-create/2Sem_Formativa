//Bibliotecas
const express = require("express");
const mongoose = require ("mongoose");

//Modelo
const User = require("../Models/User.model")

//Router
const router = express.Router()

//Rotas:
router.post("/Cadastro", async(req,res)=>{ //Cadastra usuário
    try {
        const {nome, email, senha, cargo} = req.body
        const novoUsuario = await User.create({nome, email, senha, cargo}) 
        res.status(201).json(novoUsuario)
    } catch (error) {
        res.status(400).json({error:"Erro ao cadastrar"})
    }
})

router.get("/Consulta", async(req,res)=>{ // Consulta os usuários
    try {
        const resposta = await User.find()
                res.json(resposta)
    } catch (error) {
        res.status(500).json({error: "Não foi possivel realizar a consulta"})
    }
})

router.get("/Login", async(req,res)=>{
    try {
        const resposta = await User.find(req.body)

        if (resposta[0].email == req.body.email || resposta[0].senha == req.body.senha){
            res.json(0)
        }
        else{
            res.json("Email ou senha incorretos")
        }
                
    } catch (error) {
       res.status(500).json({error: "Erro no login"}) 
    }
})

module.exports = router