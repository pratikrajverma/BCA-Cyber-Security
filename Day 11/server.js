import express from 'express'
import connectDB from './database/mongodb.js'
import router from './routes/router.js'
import marksrouter from './routes/marksRouter.js'

const app = express()
connectDB()

app.use(express.json())

app.use(marksrouter)
 
app.use(router)

const port = 3000

app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})