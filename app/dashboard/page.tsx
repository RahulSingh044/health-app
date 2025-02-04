'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'

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

  return (<p>Redirecting...</p>);
};

export default Dashboard;