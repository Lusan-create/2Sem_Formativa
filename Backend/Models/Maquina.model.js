const mongoose = require("mongoose")

const maquinaSchema = new mongoose.Schema({
    descricao: {type: String, required: true},
    marca: {type: String, required: true},
    serie: {type: Number, required: true},
    intervalo: {type: Number, required: true}
})

module.exports = mongoose.model("Maquina", maquinaSchema)