const express=require('express')

const {ServerConfig,Logger}=require('./config')

const apiRoutes=require('./routes')

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

const mailSender=require('./config/email-config')

app.listen(ServerConfig.PORT,async()=>{
    console.log(`Server running on ${ServerConfig.PORT}`)
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