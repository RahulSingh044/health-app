'use client';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/app/store/store';

interface ProtectedRouteProps {
  requiredRole: 'doctor' | 'patient'; // Define roles
  children: React.ReactNode;
}

const ProtectedRoute = ({ requiredRole, children }: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.auth.role);
  const router = useRouter();

  if (!user) {
    // If no user, redirect to login page
    router.push('/login');
    return null;
  }

  if (user !== requiredRole) {
    // If role does not match, redirect to unauthorized page
    router.push('/unauthorized');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
