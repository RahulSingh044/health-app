'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar';


export default function SideLayout({ children }: { children: ReactNode }) {
    // useAuth('doctor');

    return (
        <Provider store={store}>
                <div className="flex w-screen h-screen bg-slate-100">
                    <Navbar />
                    <main className='w-full'>
                        <SearchBar/>
                        {children}
                    </main>
                </div>
        </Provider>
    )
}