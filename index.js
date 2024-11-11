require('dotenv').config()

const cors = require('cors')
const express = require('express')
require('./dbConnections/connection')
const qaServer = new express()
const router = require('./routes/router')

qaServer.use(cors())
qaServer.use(express.json())
qaServer.use(router)

const PORT = 3000 || process.env.PORT

qaServer.listen(PORT,()=>{
    console.log(`qaServer running succesfully at ${PORT}`);
})
