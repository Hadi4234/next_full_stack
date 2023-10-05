 import mongoose from 'mongoose'

 const connectTodo=()=>{
    try {
        mongoose.connect(process.env.MONGO_DB_URL)
        .then(()=>{
            console.log("Database connected")
        }).catch(err => console.log(err))
    } catch (error) {
        
    }
 }
 export default connectTodo;