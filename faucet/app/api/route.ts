import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Body:", body);
  console.log(process.env.ALCHEMY_API_KEY);
  return NextResponse.json({ message: "Hello from the backend!" });
}
