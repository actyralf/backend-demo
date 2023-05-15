import { NextResponse } from "next/server";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export async function GET(request) {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
