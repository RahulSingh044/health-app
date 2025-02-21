'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slices/authsSlice';
import { clearUserData} from "../store/slices/userSlice"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'

export default function page() {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      await axios.get('api/auth/logout')
      dispatch(clearUserData()); 
      router.push('/');
      toast.success("Logged out successfully")
    } catch (error:any) {
      console.error(error.message)
    }
  }

  React.useEffect(() => {
    handleLogout();
  },[])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <ClipLoader />
    </div>
  )
}
