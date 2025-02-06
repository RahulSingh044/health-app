'use client'
import React from 'react';
import { CircleCheck, Trash, UserRoundPen } from 'lucide-react'
import axios from 'axios';



const patientList = () => {
  const [patient, setPatient] = React.useState([])

  const patientList = async() => {
    const response = await axios.get('/api/patients')
    setPatient(response.data.data)
  }

  React.useEffect(()=> {
    patientList()
  },[])


  return (
    <table className="w-full text-sm mt-6 gap-2 text-center py-2 border-collapse border-spacing-2">
      <thead className="text-sm text-slate-400">
        <tr>
          <th>Sr no.</th>
          <th>Patient Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patient && 
          patient.map((p, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.patientDetails.gender}</td>
              <td>{p.phoneNumber}</td>
              <td>{p.email}</td>
              <td className="flex justify-around">
                <CircleCheck className="text-green-400" />
                <Trash className="text-red-500" />
                <UserRoundPen />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default patientList;
