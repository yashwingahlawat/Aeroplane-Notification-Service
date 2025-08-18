const express=require('express')
const amqplib=require('amqplib')

const {ServerConfig,Logger}=require('./config')

const {EmailService}=require('./services')

const apiRoutes=require('./routes')

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

async function connectQueue() {
    const connection=await amqplib.connect('amqp://localhost')
    const channel=await connection.createChannel()
    await channel.assertQueue('Notification queue')
    await channel.consume('Notification queue',async(data)=>{
        const dataToMail=JSON.parse(`${Buffer.from(data.content)}`)
        await EmailService.sendEmail(ServerConfig.GMAIL_EMAIL,dataToMail.recepientEmail,dataToMail.subject,dataToMail.text)
        console.log(`${Buffer.from(data.content)}`)
        channel.ack(data)
    })
}

app.listen(ServerConfig.PORT,async()=>{
    console.log(`Server running on ${ServerConfig.PORT}`)
    await connectQueue()
    Logger.info(`Successfully started the server`,'root',{})
    // try{
    //     const response=await mailSender.sendMail({
    //         from:ServerConfig.GMAIL_EMAIL,
    //         to:'yashwingahlawat29@gmail.com',
    //         subject:'Checking mail',
    //         text:'working fine seems like'
    //     })
    //     console.log(response);
    // }
    // catch(error){
    //     console.log(error);
    // }
})