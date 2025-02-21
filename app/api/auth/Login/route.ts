import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Token from "@/utils/auth";
import User from "@/models/userModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, role } = reqBody;

    const user = await User.findOne({ email });

    if (!user)
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 400 }
      );

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 400 }
      );

    const token = Token({
      _id: user.id,
      email: user.email,
      role: user.role
    })

    const res = NextResponse.json(
      { message: "Logged in successfully", user: user, token:token },
      { status: 200 }
    );

    // Set the token in the cookies with httpOnly flag for security
    res.cookies.set("token", token, {
      httpOnly: true, 
      maxAge: 60 * 60 * 24,  
      path: "/",
    });

    return res;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
