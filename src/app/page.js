"use client"
import AddTodo from "@/components/addTodo";

export default function Home() {
  return (
    <main className=' flex flex-col gap-4 justify-center items-center mt-9'>
      <h1 className='text-white text-4xl mt-2'>Next Full Stack Todo</h1>
      <AddTodo/>
      
    </main>
  )
}
