import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { PassThrough } from "stream";

connect()

export async function GET(request: NextRequest){
    try{
        const data = await User.find({role:'doctor'}).select("-password")
        return NextResponse.json({data: data},{status: 200})
    }
    catch(error:any){
        console.error(error)
        return NextResponse.json({message: error.message},{status:500})
    }
}