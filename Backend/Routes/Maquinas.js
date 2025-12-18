//Bibliotecas
const express = require("express");
const mongoose = require ("mongoose");

//Modelo
const Maquina = require("../Models/Maquina.model")

//Router
const router = express.Router()


//Rotas:
router.post("/Cadastro", async(req,res)=>{
    try {
        const {descricao, marca, serie, intervalo} = req.body
        const novaMaquina = await Maquina.create({descricao, marca, serie, intervalo}) 
        res.status(201).json(novaMaquina)
    } catch (error) {
        res.status(400).json({error:err.message})
    }
})

router.get("/Consulta", async(req,res)=>{
    try {
        const resposta = await Maquina.find()
                res.json(resposta)
    } catch (error) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router