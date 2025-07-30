const express=require('express')
const router=express.Router()
const {InfoController,EmailController}=require('../../controllers')
const { EmailMiddleware } = require('../../middlewares')
router.get('/info',InfoController.info)

router.post('/tickets',EmailMiddleware.validateCreateRequest,EmailController.createTicket)

module.exports=router