'use client';
import type { NextPage } from 'next';
import SideLayout from './Sidelayout';
import React from 'react';
import SearchBar from '@/components/searchBar'
import Charts from '@/components/newUserOldUserChart'
import AptCards from '@/components/aptCard'
import { User, CircleCheck } from 'lucide-react'
import axios from 'axios';
const Home: NextPage = () => {

  const user = async () => {
    try {
      const response = await axios.get('api/auth/User');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect( () => {
    user();
  })

  return (
    <SideLayout>
      <div className=' w-full h-screen flex flex-col gap-5 p-16'>

        <div className='flex gap-12 '>

          {/* Welcome Box */}
          <div className='bg-white rounded-lg w-[32rem] h-56 flex justify-around items-center px-10'>
            <div className='w-28 h-28 rounded-full bg-slate-200'></div>
            <div className=''>
              <h2 className='text-2xl font-extrabold pb-2 border-b-2 border-black'>Good morning,</h2>
              <h3 className='text-lg font-bold mt-2'>Dr. Haider</h3>
              <p>Cardiologist, MBBS, MD</p>
            </div>
          </div>

          <div className='bg-white w-60 h-56 rounded-lg flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center' >
              <User className='size-20 align-middle text-blue-500' />
              <div className='text-xl font-bold text-blue-500'>12</div><div>Appointments</div>
            </div>
            <p className='text-xs pt-10'>Yesterday 8 Appointments</p>
          </div>

          <div className='bg-white w-60 h-56 rounded-lg flex flex-col justify-center items-center text-center'>

            <div className='flex flex-col justify-center items-center' >
              <CircleCheck className='size-20 align-middle text-blue-500' />
              <div className='text-xl font-bold text-blue-500'>5</div><div>Completed</div>
            </div>
            <p className='text-xs pt-10'>7 Patients waiting</p>
          </div>
        </div>


        <div className='flex gap-12 h-96 w-full'>
          {/* Analytics */}
          <div className='bg-white w-2/3 rounded-lg'>
            <Charts/>
          </div>

          <div className='bg-white w-72 max-h-[40rem] rounded-lg text-center py-4 overflow-y-auto'>
            <h1 className='text-lg font-semibold tracking-widest mb-5'>Up Next</h1>
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />   
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />   
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />   
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />   
              <AptCards Name="Rahul" Age='69' Disease="Tato ka cancer" />
          </div>
        </div>

      </div>
    </SideLayout>
  )
}

export default Home;