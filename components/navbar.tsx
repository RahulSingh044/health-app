'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react';
import { usePathname } from "next/navigation";

function navbar() {

  const pathName = usePathname()
  const[path, setPath] = React.useState('')

  React.useEffect(() => {
    const path = pathName.split('/')[1]
    setPath(path)
  }, [pathName])

  

  return (
    <div className="h-screen overflow-x-hidden sticky top-0 overflow-y-auto w-1/6 flex bg-[#1A43BF] rounded-r-lg">
      <div className="bg-[#123499] w-2/12 h-full rounded-r-xl"></div>
      <div className="w-full text-white mt-8">
        <h2 className="text-center">LOGO</h2>

        <ul className="flex flex-col space-y-6 space-x-6 tracking-widest pr-4">
          <h1 className="mt-16 ml-5">Hospital</h1>
          <li className='flex justify-between bg-slate-100 rounded-l-full text-black px-4 w-full py-3'>
            <Link href='/doctors'>Dashboard</Link>
            <ChevronRight />
          </li>
          <li className='flex justify-between'>
            <Link href='/doctors/Appointments'>Appointments</Link>
            <ChevronRight />
          </li>
          <li className='flex justify-between'>
            <a href="#">Patients</a>
            <ChevronRight />
          </li>
          <li className='flex justify-between'>
            <Link href='/chat-bot'>
            Chat Bot
            </Link>
            <ChevronRight />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar