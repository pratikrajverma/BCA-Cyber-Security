import User from "../model/userModel.js"

import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

async function signup(req,res){
    try {
        
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role){

            return res.status(404).json({
                message: 'data did not found....',
                success:false
            })

        }

     let user = await    User.findOne({email})

     if(user){
        return res.status(403).json({
            message: 'user already exist',
            success:false
        })
     }


    let hashpassword  = await bcrypt.hash(password, 10)


    user =  await User.create({name, email, password : hashpassword, role})

    res.status(201).json({
        success:true,
        message:'user created successfully....'
    })

    } catch (error) {
        res.status(500).json({
            message:'failed to create user',error,
            success:false
        })
    }
}


async function login(req,res){
    try {
        let {email , password} = req.body

        console.log(password) 


        if(!email || !password){
            return res.status(404).json({
                message: 'data not found for login...',
                success:false
            })
        }

        let user  = await User.findOne({email})

        // console.log(user)

        if(!user){
            return res.status(404).json({
                message:'user not found by this email, Try again',
                success:false
            })
        }


       
 


       if(await  bcrypt.compare( password , user.password )){



        let token = await jwt.sign(
            {
                userId : user._id,
                role: user.role
            },
            'jwtKey',
            {
                expiresIn : '1hr'
            }
        )

        res.status(200).json({
            message:'user login sucessfully...',
            user,
            success:true,
            token
        })


       }else{
        return res.status(401).json({
            message:'invalid password...',
            success:false
        })
       }





    } catch (error) {
        res.status(500).json({
            message:'failed to login ',error,
            success:false

        })
    }

}
export {signup, login}