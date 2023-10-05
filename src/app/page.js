"use client"
import AddTodo from "@/components/addTodo";
import {FiEdit} from 'react-icons/fi';
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    axios.get("api/todos")
    .then(res => setTodos(res.data) )
  },[])
  const deleteTodo = (id) => {
    axios.delete(`api/todos/${id}`)
      .then(res => res.data)
  }
  return (
    <main className=' flex flex-col gap-4 justify-center items-center mt-9'>
      <h1 className='text-white text-4xl mt-2'>Next Full Stack Todo</h1> 
      <AddTodo/>
      <ul className="w-1/2 mx-auto mt-5">
        {
          todos.map(todo=>{
            return <li className="flex justify-between items-center border p-2 mt-1" key={todo._id}>
              <span>{todo.todo}</span>
              <span className="flex gap-3 items-center">
                <Link href={`/${todo._id}`}><FiEdit /></Link>
                <button onClick={() => deleteTodo(todo._id)}><MdOutlineDeleteOutline /></button>
              </span>
              </li>

          })
        }
      </ul>
    </main>
  )
}
