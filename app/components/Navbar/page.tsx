import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='min-w-screen absolute z-50'>
            <div className='w-full bg-blue-500 text-white text-center py-2 items-center'>
                <h1>Emergency Call</h1>
            </div>
            <div className='w-screen grid grid-cols-3 gap-20 py-6 bg-white'>
                <div className='logo mx-auto flex items-center'>
                    <img src="" alt="LoGo" />
                </div>

                <div className='nav-links flex items-center justify-center'>
                    <ul className='flex justify-center items-center gap-12'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <Link href="/login">
                    <div className='flex justify-center items-center'>
                        <button className='py-3 w-1/2 font-semibold rounded-lg border-2 border-blue-500 hover:text-white hover:bg-blue-500'>
                            Book an appointment
                        </button>
                    </div>
                </Link>

            </div>
        </div>
    )
}
