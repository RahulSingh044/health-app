"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CircleCheck, Trash, UserRoundPen } from "lucide-react";
import axios from "axios";

const patientList = () => {
  const [patient, setPatient] = React.useState([]);

  const patientList = async () => {
    const response = await axios.get("/api/patients");
    setPatient(response.data.data);
  };

  React.useEffect(() => {
    patientList();
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sr no.</TableHead>
          <TableHead>Patient Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patient &&
          patient.map((p, index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.age}</TableCell>
              <TableCell>{p.patientDetails.gender}</TableCell>
              <TableCell>{p.phoneNumber}</TableCell>
              <TableCell>{p.email}</TableCell>
              <TableCell className="flex justify-evenly">
                <CircleCheck className="text-green-400" />
                <Trash className="text-red-500" />
                <UserRoundPen />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default patientList;
