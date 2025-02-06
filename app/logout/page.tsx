'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slices/authsSlice';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function page() {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      await axios.get('api/auth/logout')
      router.push('/');
    } catch (error:any) {
      console.error(error.message)
    }
  }

  React.useEffect(() => {
    handleLogout();
  },[])

  return (
    <div>

    </div>
  )
}
