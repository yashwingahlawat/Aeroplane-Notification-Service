const {TicketRepositor}=require('../repostiories')
const {MAILER}=require('../config')
const ticketRepository=new TicketRepositor()

const sendEmail=async (from,to,subject,text) => {
    try {
        const response=await MAILER.sendMail({
            from,to,subject,text
        })
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

const createTicket=async (data) => {
    try {
        const response=await ticketRepository.create(data)
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

const getPendingEmails=async (params) => {
    try {
        const response=await ticketRepository.getPendingTicket()
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports={
    sendEmail,
    createTicket,
    sendEmail
}