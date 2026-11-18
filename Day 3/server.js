import http from 'http'


const server   =  http.createServer((req,res)=>{

    let body = '';
    
    


    // if(req.url === '/' && req.method === 'GET'){

    //     res.end('<h1>Welcome to Backend</h1>')

    // }else if(req.url === '/about' && req.method === 'GET'){
    //     // res.end('<h1>this is about page</h1>')


    //     res.end(JSON.stringify({
    //         message:'welcome to about page'
    //     }))
    // }else if(req.url === '/user' && req.method === 'POST'){

    //     req.on('data' , (chunk)=>{
    //         body = body + chunk
    //     })

    //     req.on('end', ()=>{

    //         body = JSON.parse(body)

    //         console.log(body)

    //         res.writeHead(200, {'content-type':'application/json'})

    //         res.end(JSON.stringify({
    //             message:'data fetched successfully...',
    //             success:true,
    //             body
    //         }))


    //     })
        
    // }





})  




console.log(process.argv)

let num1  = Number(process.argv[2])

let num2 = Number(process.argv[3])

let operation = process.argv[4]

if(operation === 'add'){
    console.log(num1 + num2)
}else if(operation === 'sub'){
    console.log(num1 - num2)
}else if(operation === 'multiply'){
    console.log(num1 * num2)
}else if(operation === 'div'){
    console.log(num1 / num2)
}

// console.log(num1, num2)



const port = 3000


server.listen(port, ()=>{
    console.log('server has created at port', port)
})