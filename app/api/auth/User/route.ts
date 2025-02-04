import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { getDataFromToken } from "../../../helpers/getDataFromUsers"
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request: NextRequest) {
    try {
      const userId = await getDataFromToken(request);
      console.log(userId);
      const user = await User.findById({ _id: userId }).select("-password");
      console.log(user)
      return NextResponse.json({ message: "User Found", data: user }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}