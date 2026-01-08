
import connectToDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModels";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

interface Params {
  id: string;
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  // 1️⃣ Connect DB
  await connectToDatabase();

  // 2️⃣ Hel params (MUHIIM)
  const { id } = await params;

  // 3️⃣ Hel body
  const body = await req.json();
  console.log("PUT BODY:", body);

  const { isDone } = body;

  // 4️⃣ Validation
  if (typeof isDone !== "boolean") {
    return NextResponse.json(
      { message: "Invalid isDone value" },
      { status: 400 }
    );
  }

  // 5️⃣ Hubi ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid ID format" },
      { status: 400 }
    );
  }

  // 6️⃣ Update todo
  const UpdatedTodo = await TodoModel.findByIdAndUpdate(
    id,
    { isDone },
    { new: true }
  );

  if (!UpdatedTodo) {
    return NextResponse.json(
      { message: "Todo not found" },
      { status: 404 }
    );
  }

  // 7️⃣ Response
  return NextResponse.json(UpdatedTodo, { status: 200 });
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<Params> }
) {
  await connectToDatabase();

  const { id } = await params;

  // Hubi ID-ga
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid ID format" },
      { status: 400 }
    );
  }

  // Tirtir todo
  const deletedTodo = await TodoModel.findByIdAndDelete(id);

  if (!deletedTodo) {
    return NextResponse.json(
      { message: "Todo not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: "Todo deleted successfully" },
    { status: 200 }
  );
}



