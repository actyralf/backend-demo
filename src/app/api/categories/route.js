import { NextResponse } from "next/server";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
import { Types } from "mongoose";

export async function GET() {
  try {
    await dbConnect();
    const categories = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
      {
        $project: {
          _id: 1,
          count: 1,
          products: {
            name: 1,
          },
        },
      },
    ]);
    return NextResponse.json(categories);
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
