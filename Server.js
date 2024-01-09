const express = require('express')

const app = express()

const port = 5000

const middleware=(req,res,next)=>{
    console.log("Walahi rani fi west l middleware")
    next()
}

// app.use(middleware)

// app.get('/Fourat',(req,res)=>{
//     res.send('<h1>A7la Jlag</h1>')
// })

// app.get('/Amine',(req,res)=>{
//     res.send('Dali Bhar lazreg')
// })

// app.get('/Saif',(req,res)=>{
//     // console.log(__dirname)
//     res.sendFile(__dirname+"/public/Home.html")
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+"/public/style.css")
// })

// app.get('/hela',(req,res)=>{
//     res.sendFile(__dirname+'/public/')
// })

app.use(express.static('public'))
app.listen(port,console.log(`Server is running on the port ${port}`))