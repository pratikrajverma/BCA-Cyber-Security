import jwt from 'jsonwebtoken'

async function auth(req,res,next){
    try {
        const token = req.headers.authorization.split(' ')[1]

        const payload = await jwt.verify(token , 'jwtKey')

        if(!payload){
            return res.status(401).json({
                message: " you are not login.....",
                success:

                
            })
        }

         req.role = payload.role

        next()




    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            success:false
        })
    }
}


const isStudent = async(req,res,next) =>{
    try {

        const role = req.role

        if(role !== 'Student'){
            return res.status(401).json({
                message:'you are not Student',
                success:false
            })
        }

        next()
        
    } catch (error) {
         return res.status(500).json({
            message:"internal server error",
            success:false
        })
    }
}

const isTeacher = async(req,res,next)=>{
try {
    
    const role = req.role

        if(role !== 'Teacher'){
            return res.status(401).json({
                message:'you are not Teacher',
                success:false
            })
        }

        next()

} catch (error) {
     return res.status(500).json({
            message:"internal server error",
            success:false
        })
}
}

export {auth, isStudent, isTeacher}