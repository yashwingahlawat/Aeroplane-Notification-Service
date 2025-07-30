const {EmailService}=require('../services')

const createTicket=async (req,res) => {
    try {
        const response=await EmailService.createTicket({
            subject:req.body.subject,
            content:req.body.content,
            recepientEmail:req.body.recepientEmail,
        })
        return res.status(201).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

module.exports={
    createTicket
}