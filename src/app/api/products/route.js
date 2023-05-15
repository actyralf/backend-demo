import { NextResponse } from "next/server";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export async function GET(request) {
  try {
    await dbConnect();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
