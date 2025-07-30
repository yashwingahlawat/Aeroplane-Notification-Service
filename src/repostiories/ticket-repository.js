const {CrudRepository}=require('./crud-repository')
const {Ticket}=require('../models')
const {Enums}=require('../utils/common')
const {PENDING}=Enums.TICKET_STATUS
class TicketRepositor extends CrudRepository{
    constructor(){
        super(Ticket)
    }
    async getPendingTicket(){
        try {
            const response=await Ticket.findAll({
                where:{
                    status:PENDING
                }
            })
            return response
        } catch (error) {
            console.log(error);
            throw error
        }
        
    }
}

module.exports=TicketRepositor