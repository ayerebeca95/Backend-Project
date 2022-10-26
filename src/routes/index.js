const { Router } = require('express')
const UsuariosRouter = require('./usuarios') 

const rutaPrincipal = Router()

rutaPrincipal.use('/usuarios', UsuariosRouter)

module.exports = rutaPrincipal;