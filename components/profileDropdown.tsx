import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/store'

function profileDropdown() {

    const user = useSelector((state: RootState) => state.user);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=' px-4 py-2 rounded-xl'>
                <div className='flex gap-3 justify-center items-center'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='font-bold text-xl'>Dr. {user.name}</span>
                    <ChevronDown />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href='/doctors/profile'>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <Link href='/logout'>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default profileDropdown