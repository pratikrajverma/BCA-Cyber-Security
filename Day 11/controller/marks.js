import Marks from "../model/marksModel.js"

const showMarks = async (req,res)=>{
    try {
        const marks = await Marks.find()

        return res.status(200).json({
            message: 'marks found successfully..',
            success:true,
            marks
        })


    } catch (error) {
        return res.status(500).json({
            message:'internal server error.',
            success:false
        })
    }
}

const createMarks = async (req,res)=>{
    try {
    
        const {name, marks} = req.body

        if(!name || !marks){
            return res.status(404).json({
                message:'data not found for marks',
                success:false
            })
        }

        let usermarks = await Marks.create({name, marks})

        return res.status(201).json({
            message:'user marks created successfully...',
            success:true,
            usermarks
        })


    } catch (error) {
        return res.status(500).json({
            message:'internal server error.',
            success:false
        })
    }
}

export { showMarks, createMarks}