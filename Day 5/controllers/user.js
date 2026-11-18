import users from "../database/data.js";

const getuser = (req,res)=>{
    
    res.status(200).json({
        message:'data fetched successfully...',
        users,
        sucess:true
    })
}


const createUser = (req,res)=>{

    let {name, age, id} = req.body


    if(!name || !age || !id){
        return res.status(404).json({
            message:'data did not found ',
            success:false
        })
    }

    users.push({name, age, id})

    res.status(200).json({
        message:'data created successfully...',
        users
    }) 


}



const updateUser = (req,res)=>{
    let {name, age} = req.body

    let id = Number(req.params.id)
    // let user = users.find((e)=>e.id===id)

    let user = users.find((element)=>{
        return element.id === id
    })

    if(name){
        user.name  = name
    }

    if(age){
        user.age = age
    }
    res.status(200).json({
        message:'data updated successfully...',
        users
    })

}



const deleteUser  = (req,res)=>{
    let id = req.params.id

    let index = users.findIndex((e)=>e.id == id)

    users.splice(index, 1)

    res.status(200).json({
        message:'user deleted succesfully...',
        users,
        success:true
    })


}




export {getuser,   createUser, updateUser  ,  deleteUser}

