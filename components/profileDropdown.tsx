import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { User } from '@/app/store/slices/userSlice'
import { useSelector } from 'react-redux'

function profileDropdown() {

    const user = useSelector((state: { user: User | null }) => state.user);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=' px-4 py-2 rounded-xl'>
                <div className='flex gap-3 justify-center items-center'>
                <img className='w-10 h-10 bg-slate-400 rounded-full object-cover' src='' alt='' />
                <span>Dr. {user?.user}</span>
                <ChevronDown />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <Link href='/logout'>
                <DropdownMenuItem>Logout</DropdownMenuItem>
                </Link>
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default profileDropdown