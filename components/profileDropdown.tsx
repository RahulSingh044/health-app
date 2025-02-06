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

function profileDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=' px-4 py-2 rounded-xl'>
                <div className='flex gap-3 justify-center items-center'>
                <img className='w-10 h-10 bg-slate-400 rounded-full object-cover' src='' alt='' />
                <span>Dr.Rahul Singh</span>
                <ChevronDown />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default profileDropdown