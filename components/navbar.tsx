'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react';
import { usePathname } from "next/navigation";

function navbar() {

  const pathName = usePathname()

  const currentPath = () => {
    const fullUrl = window.location.href;
    const baseUrl = 'https://localhost:3000/';
    const pathName = fullUrl.replace(baseUrl, '');
  }

  React.useEffect(() => {
    console.log(pathName)
    currentPath()
  }, [pathName])

  const isDashboard = () => {
    if(pathName === '/doctors'){
      return true
    }
    return false
  }

  const isAppointments = () => { 
    if(pathName === '/doctors/Appointments'){
      return true
    }
    return false
  }

  const isPatient = () => {
    if(pathName === '/doctors/Patient-lists'){
      return true
    }
    return false
  }

  const isChat = () => {
    if(pathName === '/doctors/chats'){
      return true
    }
    return false
  }
  

  return (
    <div className="h-screen overflow-x-hidden sticky top-0 overflow-y-auto w-1/6 flex bg-[#1A43BF] rounded-r-lg">
      {/* <div className="bg-[#123499] w-2/12 h-full rounded-r-xl"></div> */}
      <div className="w-full text-white mt-8">
        <h2 className="text-center">LOGO</h2>

        <ul className="flex flex-col space-y-6 space-x-6 tracking-widest pr-4">
          <h1 className="mt-16 ml-5">Hospital</h1>
          <li className={`flex justify-between ${isDashboard() ? "bg-slate-100 rounded-l-full text-black px-5 w-full py-3" : "bg-[#1A43BF]"}  `}>
            <Link href='/doctors'>Dashboard</Link>
            <ChevronRight />
          </li>
          <li className={`flex justify-between ${isAppointments() ? "bg-slate-100 rounded-l-full text-black px-5 w-full py-3" : "bg-[#1A43BF]"}  `}>
            <Link href='/doctors/Appointments'>Appointments</Link>
            <ChevronRight />
          </li>
          <li className={`flex justify-between ${isPatient() ? "bg-slate-100 rounded-l-full text-black px-5 w-full py-3" : "bg-[#1A43BF]"}  `}>
            <Link href='/doctors/Patient-lists'>Patient</Link>
            <ChevronRight />
          </li>
          <li className={`flex justify-between ${isChat() ? "bg-slate-100 rounded-l-full text-black px-5 w-full py-3" : "bg-[#1A43BF]"}  `}>
            <Link href='/doctors/chat'>
            Chats
            </Link>
            <ChevronRight />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar