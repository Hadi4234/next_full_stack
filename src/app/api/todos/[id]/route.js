import Todo from "@/app/lib/model/todo"
import connectToDb from "@/app/lib/mongoose"
import { NextResponse } from "next/server"


export const GET = async (req, { params }) => {
    try {
        const id = params.id
        connectToDb()
        const todo = await Todo.findById(id)
        return NextResponse.json(todo)
    } catch (error) {

    }
}

export const PUT = async (req, { params }) => {
    try {
        const { todo } = await req.json()
        const id = params.id
        console.log(id, todo)
        connectToDb()
        const result = await Todo.findByIdAndUpdate(id, { todo })
        return NextResponse.json(result)
    } catch (error) {

    }
}


export const DELETE = async (req, { params }) => {
    try {

        const id = params.id
        connectToDb()
        const result = await Todo.findByIdAndDelete(id)
        return NextResponse.json(result)
    } catch (error) {

    }
}