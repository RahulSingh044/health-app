'use client';
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import { store } from '../store/store'
import PatientNav from '@/components/patientNav';
import SearchBar from '@/components/searchBar';
import Profile from '@/components/profileDropdown';
import { Bell } from 'lucide-react'
import ProtectedRoute from '@/components/protectedRoute';


export default function Layouts({ children }: { children: ReactNode }) {
    return (
        // <ProtectedRoute requiredRole='patient'>
            <Provider store={store}>
                <div className="flex w-screen bg-slate-100">
                    <PatientNav />
                    <main className='w-full p-2'>
                        <div className='w-full flex justify-between border-b-2 pb-4'>
                            <div>
                                {/* <SearchBar /> */}
                            </div>
                            <div className='flex gap-4 justify-center items-center px-8'>
                                <Bell />
                                <span className='h-10 border-r-2'> </span>
                                <Profile />
                            </div>
                        </div>
                        {children}
                    </main>
                </div>
            </Provider>
        // </ProtectedRoute>
    )
}
