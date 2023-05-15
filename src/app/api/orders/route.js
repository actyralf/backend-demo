import { NextResponse } from "next/server";
import dbConnect from "@/db/connect";
import Order from "@/db/models/Order";
import { Types } from "mongoose";

export async function GET(request) {
  try {
    await dbConnect();
    const orders = await Order.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "products",
          localField: "products",
          foreignField: "_id",
          as: "products",
        },
      },
    ]);
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { user, products } = body;
    const order = await Order.create({
      user: new Types.ObjectId(user),
      products: products.map((p) => new Types.ObjectId(p)),
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
