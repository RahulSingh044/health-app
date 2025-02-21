'use client';
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function doctorCard({name, specialty, Key}) {

  return (
      <Card className="text-center" key={Key}>
        <CardHeader>
          <div className="flex justify-center mb-2">
            <img
              className="rounded-full w-32 h-32 object-cover bg-slate-400"
              // src={doc.image || "https://via.placeholder.com/150"}
              // alt={`Dr. ${doc.name}`}
            />
          </div>
          <CardTitle>Dr.{name} </CardTitle>
          <CardDescription>{specialty}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Bio</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-[#5D5FEF] hover:bg-[#4d4fea]">
            Book an appointment
          </Button>
        </CardFooter>
      </Card>
    )
}

export default doctorCard;
