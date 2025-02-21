'use client';
import type { NextPage } from 'next';
import SideLayout from './Sidelayout';
import React from 'react';
import SearchBar from '@/components/searchBar'
import Charts from '@/components/newUserOldUserChart'
import AptCards from '@/components/aptCard'
import { User, CircleCheck } from 'lucide-react'
import axios from 'axios';
import { setUserData } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useEdgeStore } from '@/lib/edgestore';
import { FormSchemaType } from '@/types/user';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
const Home: NextPage = () => {

  // const [file, setFile] = React.useState<File>()
  // const [url, setUrl] = React.useState<{
  //   url: String,
  //   thumbnailurl: String | null
  // }>()
  // const { edgestore } = useEdgeStore()

  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.user);
  const [greetings, setGreetings] = React.useState('');

 const currentUser = async () => {
  try {
    const response = await axios.get('api/auth/User');
    if (response.data) {
      dispatch(setUserData(response.data.data))
    }
  } catch (error) {
    console.error(error);
  }
 }

 const getGreetings = () => {
  const currentDate = new Date()
  const hours = currentDate.getHours()
  if (hours >= 6 && hours < 12) {
    return 'Good Morning'
  } else if (hours >= 12 && hours < 18) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
 }

 React.useEffect(() => {
  currentUser();
 },[dispatch])

 React.useEffect(() => {
  setGreetings(getGreetings());
 },[])

  return (
    <SideLayout>
      <div className=' w-full flex flex-col gap-5 p-10'>

        <div className='flex gap-12 '>

          {/* Hidden input for uploading profile Image */}
          {/* <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={(e) => {
              setFile(e.target.files?.[0])
            }}
          />
          <button
            hidden
            ref={hiddenButtonRef}
            onClick={async () => {
              if (file) {
                const res = await edgestore.myProfileImage.upload({ file })

                //logic for saving data to database

                setUrl({
                  url: res.url,
                  thumbnailurl: res.thumbnailUrl
                })
              }



            }}
          >click</button> */}

          {/* Welcome Box */}
          <div className='bg-white rounded-lg w-[32rem] h-56 flex justify-around items-center px-10'>
            <div onClick={() => {
              // fileInputRef.current?.click();
              // hiddenButtonRef.current?.click();
            }} className='w-28 h-28 rounded-full bg-slate-200'>

            </div>
            <div>
              <h2 className='text-2xl font-extrabold pb-2 border-b-2 border-black'>{greetings},</h2>
              <h3 className='text-lg font-bold mt-2'>Dr. {userData.name}</h3>
              <div className='flex gap-3'>
              {userData.doctorDetails?.qualifications && userData.doctorDetails.qualifications?.map((q,key) => (
                  <h1 className='text-lg text-slate-400' key={key}>{q}</h1>
              ))}
              </div>
            </div>
          </div>

          <div className='bg-white w-60 h-56 rounded-lg flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col justify-center items-center' >
              <User className='size-20 align-middle text-blue-500' />
              <div className='text-xl font-bold text-blue-500'>{ }</div><div>Appointments</div>
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
            <Charts />
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