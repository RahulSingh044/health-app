import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { getDataFromToken } from "@/app/helpers/getDataFromUsers";

connect();

export async function PUT(request: NextRequest) { 
    try{

        const reqBody = await request.json();
        console.log(reqBody);
        const { gender, name, email, phoneNumber, dateOfBirth, doctorDetails } = reqBody

        const { specialty, qualifications, availableSlots, maxPatientsPerDay } = doctorDetails || {};

        const parsedDateOfBirth = new Date(dateOfBirth);
        const existedUser = await getDataFromToken(request);

        if (!existedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const userid = existedUser;

        const user = await User.findByIdAndUpdate(userid, {$set:{
            gender, 
            name, 
            email, 
            phoneNumber, 
            dateOfBirth: parsedDateOfBirth, 
            doctorDetails : {
                specialty,
                qualifications,
                availableSlots,
                maxPatientsPerDay
            } 
        }}, { new: true });

        return NextResponse.json({ message: "User updated", user:user},{status:200})


    } catch (error:any) {
        return NextResponse.json({ error: error.message}, { status: 500 });
    }
}