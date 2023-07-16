//We will make router here
const nodeFarmController = require('./../controllers/nodeFarmController.js')
const express = require('express')

const nodeFarmRouter = express.Router()

nodeFarmRouter.route('')
.get(nodeFarmController.serveOverview)


nodeFarmRouter.route('/overview')
.get(nodeFarmController.serveOverview)

nodeFarmRouter.route('/product/:id')
.get(nodeFarmController.serveProduct)

module.exports = nodeFarmRouter