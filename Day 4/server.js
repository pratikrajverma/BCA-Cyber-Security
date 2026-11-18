import express from 'express'
 

const app =  express()

app.use(express.json())

app.get('/'  , (req,res)=>{

    res.send('<h1>welcome to express backend</h1>')

})

app.get('/about', (req,res)=>{
    // res.send('<h1>This is about page</h1>')


    res.json({
        message:'this is about page...',
        success:true
    })
})


// app.post('/user', (req,res)=>{

//     let name = req.body.name


//     console.log(name)
 

//     res.status(200).json({
//         message:'data received  successfully...',
//         success:true,
//         name
//     })

// })
 
let users = ['rahul', 'ankit', 'ritesh', 'manshi']
 
app.get('/getuser' , (req,res)=>{
    res.status(200).json({
        message:'data fetched successfully....',
        users
    })
})

app.post('/createuser', (req,res)=>{
    let name = req.body.name

    if(!name){
       return  res.status(404).json({
            message: 'data not found',
            success:false
        })
    }

    users.push(name)

    res.status(200).json({
        message:'data created successfully...',
        success:true,
        data:users
    })
})


app.put('/updateuser', (req,res)=>{
    let {name, newname} = req.body

    if(!name){
        return res.status(404).json({ 
            message:'name has not received'
        })
    }

    let index = users.indexOf(name)

    users[index] = newname

    res.status(200).json({
        success:true,
        message:'data updated successfully...',
        users
    })





})


app.delete('/deleteuser', (req,res)=>{
    let name = req.body.name

    let index = users.indexOf(name)

    users.splice(index, 1)

    res.status(200).json({
        message:'user deleted successfully....',
        success:true,
        users
    })


    
})

app.listen(3000, ()=>{
    console.log('server has started at port ', 3000)
})

