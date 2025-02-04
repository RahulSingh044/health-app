import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Token from "@/utils/auth";
import User from "@/models/userModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, mobileNo, email, password, role } = reqBody;

    const existedUser = await User.findOne({ email: email });
    if (existedUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      role,
      name,
      email,
      password: hashedPassword,
      phoneNumber: mobileNo,
    });

    await user.save();
    const res = NextResponse.json(
      { message: "User created", user: user },
      { status: 200 }
    );

    const token = Token({
      _id: user.id,
      email: user.email,
      role: user.role,
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return res

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
