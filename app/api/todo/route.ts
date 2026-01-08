// import connectToDatabase from "@/app/lib/db";
// import TodoModel from "@/app/models/todoModels";
// import {NextRequest,  NextResponse } from "next/server";

// export async function GET(req:NextRequest) {

//         connectToDatabase();


//     const Todos = await TodoModel.find().sort({isDone:"asc"});
     
//     return NextResponse.json(Todos,{status:200});

// }

// export async function POST(req:NextRequest) {

    
//      await connectToDatabase();

//     const body = await req.json();

//     const newTodo = new TodoModel({
//         title: body.title,
//         isDone: false,
//     });

//     await newTodo.save();
  
//      return NextResponse.json( newTodo,{status:201});


// }


import connectToDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModels";
import { NextRequest, NextResponse } from "next/server";

// GET method
export async function GET(req: NextRequest) {
  // Hubi inaad sugto isku xirnaanta ka hor inta aanad sameynin query
  await connectToDatabase();

  // Samee query-ga ka dib markaad sugto isku xirnaanta
  const Todos = await TodoModel.find().sort({createdAt:"desc", isDone: "asc" });

  return NextResponse.json(Todos, { status: 200 });
}

// POST method
export async function POST(req: NextRequest) {
  // Hubi inaad sugto isku xirnaanta ka hor inta aanad sameynin wax kale
  await connectToDatabase();

  const body = await req.json();

  // Samee todo cusub
  const newTodo = new TodoModel({
    title: body.title,
    isDone: false,
  });

  // Keydi todo-ga cusub
  await newTodo.save();

  return NextResponse.json(newTodo, { status: 201 });
}


