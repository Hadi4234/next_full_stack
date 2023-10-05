"use client"
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const page = () => {
    const { id } = useParams()
    console.log(id)
    const [todo, setTodo] = useState({})
    const { handleSubmit, register, reset } = useForm()
    useEffect(() => {
        axios.get(`api/todos/${id}`)
            .then(res => setTodo(res.data))
    }, [id])
    const updateTodo = (data) => {
        console.log(data)
        axios.put(`/api/todos/${id}`, data)
            .then((res) => {
                if (res.data) {
                    alert("successfully")
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(updateTodo)} className="flex justify-center items-center mt-9">
            <input defaultValue={todo.todo} {...register("todo", { required: true })} className="outline-0 bg-transparent border rounded px-4  py-2" type="text" />
            <button type="submit" className="bg-indigo-700 px-4 py-2 rounded text-white">Update Todo</button>
        </form>
    );
};

export default page;