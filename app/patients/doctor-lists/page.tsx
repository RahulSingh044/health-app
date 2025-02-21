'use client';
import React from 'react'
import Layouts from '../Layouts'
import SearchBar from '@/components/searchBar';
import { Button } from '@/components/ui/button';
import DoctorCard from '@/components/doctorCard';
import axios from 'axios';
import { UserState } from '@/app/store/slices/userSlice';

type doctor = UserState[]

function page() {

  const [doctor,setDoctors] = React.useState<doctor>([])

  const getDoctorDetails = async () => {
    try {
      const response = await axios.get("/api/doctors");
      console.log(response.data.data);
      setDoctors(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getDoctorDetails();
  }, []);

  return (
    <Layouts>
      <div className='px-8 py-2'>

        {/* Doctor Filter */}
        <div className='w-full bg-white rounded-lg flex gap-10 p-4'>
          <div className='doc-search '>
            <span className='font-semibold '>Doctor Name</span>
            <SearchBar />
          </div>
          <div className='doc-search-by-speciality'>
            <span className='font-semibold '>Department</span>
            <SearchBar />
          </div>
          <div className='flex items-end pb-1'>
            <Button className='bg-blue-600 w-16 h-7 hover:bg-blue-800'>Search</Button>
          </div>
        </div>

        {/* Doctor Card List */}
        <div className='w-full p-4 mt-6 grid grid-cols-3 gap-8'>
          { doctor && doctor.length > 0 ? 
           doctor.map((doc, index) => <DoctorCard Key={index} name={doc.name} specialty={doc.doctorDetails?.specialty} />)
           : <p>No Doctors Available</p>}
        </div>

      </div>
    </Layouts>
  )
}

export default page