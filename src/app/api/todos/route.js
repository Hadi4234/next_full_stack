import Todo from "@/app/lib/model/todo";
import connectTodo from "@/app/lib/mongoose"
import { NextResponse } from "next/server";

export const GET = async (req,res)=>{
    try {
        connectTodo();
        const result = await Todo.find()
        return NextResponse.json(result);
    } catch (error) {       
    }
}

export const POST = async (req,res)=>{
    try {
        const data = await req.json() 
        connectTodo();
        const result = await Todo.create(data);
        return NextResponse.json(result);

    } catch (error) {
        
    }
}