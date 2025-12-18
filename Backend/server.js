// Bibliotecas
const mongoose = require('mongoose');
const express = require('express')
const cors = require("cors")
const router = express.Router()

//Rotas
const RotaMaquina = require("./Routes/Maquinas")
const RotaUsuario = require("./Routes/Users");

// Iniciando o express
const app = express();
app.use(cors())     //Ativa o Cors (Conexao com o frontend)
app.use(express.json())
PORT = 3000

//Conexão com o mongodb
mongoose.connect("mongodb://localhost:27017",{

}).then(()=> console.log("Conectado ao Mongodb")).catch(err=> console.error("erro ao conectar", err))

//Rotas
router.use("/user",RotaUsuario);
router.use("/maquina",RotaMaquina)

//API
app.use("/api", router)

//Inicia o servidor
app.listen(PORT,()=>{
    console.log(`Servidor rodando em //localhost:${PORT}`)
})