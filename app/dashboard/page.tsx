'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'
import { ClipLoader } from 'react-spinners'

const Dashboard = () => {
  const router = useRouter();
  const { role } = useSelector((state:RootState) => state.auth);

  useEffect(() => {
    if (!role) {
      router.push('/login');
      return;
    }
      switch (role) {
        case 'patient':
          router.push('/patients');
          break;
        case 'doctor':
          router.push('/doctors');
          break;
        default:
          router.push('/login');
    }
  }, [role, router]);

  return (<div className='w-screen h-screen flex justify-center items-center'><ClipLoader /></div>);
};

export default Dashboard;