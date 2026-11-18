// import os from 'os'


// console.log(os.platform())


// console.log(os.arch())

// console.log(os.cpus())

// console.log(os.totalmem() / 1024 /1024 / 1024)

// console.log(os.uptime() / 60 / 60)



//   import path from 'path'
//   let pathVar = './parent/child.js'
// // console.log(path.basename(pathVar))
// console.log(path.extname(pathVar))

// console.log(path.resolve('./server.js'))

// console.log(path.dirname(pathVar))



import fs from 'fs'

// fs.writeFile('./parent/child.js', 'console.log("File System")', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('file created successfully')
// })

// fs.readFile('./parent/child.js', 'utf-8',  (err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log(data)
// })


// fs.appendFile('./parent/child.js', '\n  console.log("File System")', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
// })

// fs.cp('./server.js', './parent/child.js', (err)=>{
//     console.log(err)
// })

// fs.unlink('./parent/child.js', (err)=>{
//     console.log(err)
// })

// fs.mkdir('./grid', (err)=>{
//     if(err){

//         console.log(err)
//         return
//     }
// })


// import dns from 'dns'

// dns.lookup('facebook.com', (err, address)=>{
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log(address)
// })

// dns.reverse('163.70.146.35', (err, domain)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(domain)
// })


import crypto from 'crypto'
 


// let name = 'Nandan Kumar Mishra'
// let hashData = crypto.createHash('sha256').update(name).digest('Hex')
// console.log(hashData)



