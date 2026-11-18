import express from 'express'

const app = express()


app.use(express.json())



app.post('/user', (req,res)=>{ 


    console.log(req.url)

    console.log(req.method)

    console.log(req.body)

    // console.log(req.params)

    // console.log(req.query)

    // console.log(req.headers.name)

    // res.send('<h1>welcome to backend</h1>')

    res.status(403)

    res.json({
        message:'this is backend '
    })
})



// app.get('/', (req,res)=>{
//     res.send('<h1>this is backend</h1>')
// })

const port = 3000

app.listen(port, ()=>{
    console.log('server has started at port :', port)
})