 import express from 'express'
import morgan from 'morgan'
const app = express()

const port = 3000
// app.use(morgan("dev"));

function loggerMiddleware(req,res, next){
        console.log('this is logger middleware ')
        next()
}    


function secondMiddleware(req,res, next){
    console.log(req.method)

    console.log(req.url)

    next()
}

// app.use(secondMiddleware)
app.use(loggerMiddleware)


app.get('/user',  (req,res)=>{ 
    try {


        consoddle.log('this is main logics')

        res.json({
            message:'this is user page'
        }) 
            
    } catch (error) {

        console.error(error)

        console.log('here is error', error.message)

        res.json({
            message:'something went wrong.....',
            success:false,
            error : error.message
        })
    }
})


app.get('/about', (req,res)=>{
    console.log('this is about logic')
    res.json({
        message:'this is about logic'
    })
})



app.listen(port , ()=>{
    console.log('server had started at port', port)
})



