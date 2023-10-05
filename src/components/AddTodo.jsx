"use client"
import axios from "axios";
import { useForm } from "react-hook-form"

export default function AddTodo() {
    const {handleSubmit,register,reset}=useForm();
    const addTodo=(data)=>{
        axios.post("/api/todos",data)
        .then((res)=>{
            if(res.data){
                alert("success")
            }
        })
    }
  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <input {...register("todo",{required:true})} className=' outline-0 bg-transparent border rounded px-4 py-2' type='text'/>
      <button type="submit" className=' bg-indigo-800 px-4 py-2 rounded text-white '>Add Todo</button>
      </form>
  )
}
