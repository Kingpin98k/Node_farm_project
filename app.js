//Express Section (use routers as middlewares(mounting) and export them and handle some other stuff...) 
const express = require('express')
const app = express()

//--------------------------------------------------------------------------------
//importing the routers
const nodeFarmRouter = require('./routes/nodeFarmRoutes.js')

//
app.use(express.json())

app.use('/',nodeFarmRouter)

//Export for the server to use
module.exports = app
