import User from "../model/userModel.js"


const createUser = async  (req,res)=>{
    try {

        const{name, age, gender} = req.body

        console.log(name, age, gender)

        let user = await User.create({name, age, gender})

        console.log(user)

        res.status(201).json({
            message:'data has created....',
            user
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'error for creating user...',error
        })
    }
}

export {createUser}
