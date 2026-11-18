import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BCACyberAuth')

        console.log('database connected successfully....')

    } catch (error) {
        console.log('failed to connect to database', error)
    }
}

export default connectDB