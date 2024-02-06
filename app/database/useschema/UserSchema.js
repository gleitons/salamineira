import { Schema, Model, models } from "mongoose";


const useSchema = Schema({
    nome: String,
    cpf: String,
    rg: String,
    nasc: String,
    sexo: Number,
    active: Boolean
})

export default Use = models.Use || models('Use', useSchema)

