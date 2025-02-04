'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
export const useAuth = (requiredRole: string) => {
  const router = useRouter();
  const { role, isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isAuthenticated || role !== requiredRole) {
      router.push('/'); // Redirect to unauthorized page
    }
  }, [isAuthenticated, role, requiredRole, router]);

  return { role, isAuthenticated };
};