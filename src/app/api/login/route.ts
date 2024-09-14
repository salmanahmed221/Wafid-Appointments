import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  try {
    if (req.email === "admin@gmail.com" && req.password === "admin") {
      // Set an authentication cookie
      const res = NextResponse.json({ message: "Login successful" });
      res.cookies.set("authToken", "LoginToken"); // Set the cookie with an appropriate value
      return res;
    } else {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error((error as { message: string }).message);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
