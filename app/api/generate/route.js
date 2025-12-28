import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "Missing url or shorturl"
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls");

    const shorturl = body.shorturl.toLowerCase();

    const doc = await collection.findOne({ shorturl });
    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "Shorturl already exists"
      }, { status: 400 });
    }

    const result = await collection.insertOne({
      url: body.url,
      shorturl,
      clicks: 0,
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: "Shorturl generated successfully",
      id: result.insertedId
    }, { status: 200 });

  } catch (error) {
    console.log("API error", error);
    return NextResponse.json({
      success: false,
      error: true,
      message: "Internal server error"
    }, { status: 500 });
  }
}
