import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true,
    },
},{timestamps:true});

const Todo = mongoose.models.todo ||mongoose.model("todo",todoSchema);
export default Todo;