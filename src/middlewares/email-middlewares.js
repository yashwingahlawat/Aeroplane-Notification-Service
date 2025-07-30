const { StatusCodes } = require("http-status-codes");

const {ErrorResponse}=require('../utils/common');
const { AppError } = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    if(!req.body || !req.body.content){
        ErrorResponse.message='Something went wrong while creating the ticket.'
        ErrorResponse.error=new AppError(["Content can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
     if(!req.body || !req.body.subject){
        ErrorResponse.message='Something went wrong while creating the ticket.'
        ErrorResponse.error=new AppError(["Subject can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
     if(!req.body || !req.body.recepientEmail){
        ErrorResponse.message='Something went wrong while creating the ticket.'
        ErrorResponse.error=new AppError(["Recepient's Email can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports={
    validateCreateRequest
}