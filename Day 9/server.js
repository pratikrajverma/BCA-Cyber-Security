import express from 'express'

const app = express()
 
import connectDB from './database/mongodb.js'

app.use(express.json())

import router from './routes/userRoute.js'
app.use(router)

connectDB()


const port  = 3000

app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})

