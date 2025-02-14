'use client';
import React from 'react'
import SideLayout from '../Sidelayout'
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { useForm } from 'react-hook-form'
import { Key, LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData, UserState } from '@/app/store/slices/userSlice';


function Profile() {


    const router = useRouter()
    const { register, handleSubmit, setValue } = useForm<UserState>()
    const [isEditing, setisEditing] = React.useState(false)
    const user = useSelector((state: RootState) => state.user);
    const [gender, setGender] = React.useState(user.gender)
    const [maxPatients, setMaxPatients] = React.useState(user.doctorDetails?.availableSlots)

    const dispatch = useDispatch()

    const logout = () => {
        router.push('/logout')
    }

    const onsubmit = async (data: UserState) => {
        dispatch(setUserData(data))
        try {
            const res = await axios.put('/api/auth/User/updateUser', data)
            if (res.data) {
                dispatch(setUserData(res.data.data));
            }
        } catch (error: any) {
            console.error(error.message)
        }
    }

    React.useEffect(() => {
        setValue('name', user.name)
        setValue('email', user.email)
        setValue('dateOfBirth', new Date(user.dateOfBirth))
        setValue('gender', user.gender)
        setValue('phoneNumber', user.phoneNumber)
        if (user.doctorDetails) {
            setValue('doctorDetails.specialty', user.doctorDetails.specialty)
            setValue('doctorDetails.qualifications', user.doctorDetails.qualifications)
            setValue('doctorDetails.availableSlots', user.doctorDetails.availableSlots)
            setValue('doctorDetails.maxPatientsPerDay', user.doctorDetails.maxPatientsPerDay)
        }
    }, [setValue])

    return (
        <SideLayout>
            <div className='w-4/5 flex p-10 gap-5'>
                {/* Left Section */}
                <div className='w-3/2 h-96 bg-white rounded-lg p-8 text-center space-y-4 space-x-4'>
                    <div className='w-40 h-40 rounded-full bg-slate-200'>
                        {/* <img src="/" alt="/" /> */}
                    </div>
                    <h1 className='text-xl'>Dr.{user.name}</h1>
                    <div className='flex items-center gap-2'>
                        <LogOut />
                        <AlertDialog>
                            <AlertDialogTrigger>LogOut</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Do you want to Log Out</AlertDialogTitle>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => {
                                        logout()
                                    }}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>

                {/* Right Section */}
                <div className='w-10/12 bg-white rounded-lg p-5 flex flex-col px-20 pb-10'>
                    <h1 className='text-xl font-bold tracking-wider border-b-4 py-3 w-full'>Personal Information</h1>

                    <form onSubmit={handleSubmit(onsubmit)}>
                        {/* Gender field */}
                        <div className='mt-4'>
                            <label className='text-sm mt-8 tracking-widest text-slate-400' htmlFor="gender">Gender:</label>
                            {isEditing ? (
                                // Show radio buttons if in edit mode
                                <div className='flex gap-2'>
                                    <label>
                                        <input
                                            type="radio"
                                            value="male"
                                            checked={gender === 'Male'}
                                            {...register('gender')}
                                        />
                                        Male
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="female"
                                            checked={gender === 'Female'}
                                            {...register('gender')}
                                        />
                                        Female
                                    </label>
                                </div>
                            ) : (
                                // Display selected option as text if not in edit mode
                                <h1 className='text-xl font-bold tracking-wider'>{(user.gender)}</h1>
                            )}
                        </div>


                        {/* Name field */}
                        <div className='mt-4'>
                            <label className='text-sm mt-4 tracking-widest text-slate-400' htmlFor="name">Name:</label>
                            {isEditing ? (
                                <input className='w-full bg-slate-100 outline-none px-3 py-2 rounded-lg' type="text" {...register('name')} />
                            ) : (
                                <h1 className='text-xl font-bold tracking-wider'>Dr. {user.name}</h1>
                            )}
                        </div>

                        {/* Email field */}
                        <div className='mt-4'>
                            <label className='text-sm tracking-widest text-slate-400' htmlFor="email">Email:</label>
                            {isEditing ? (
                                <input className='w-full bg-slate-100 outline-none px-3 py-2 rounded-lg' type="email" placeholder={user.email} disabled {...register('email')} />
                            ) : (
                                <h1 className='text-xl font-bold tracking-wider'>{user.email}</h1>
                            )}
                        </div>

                        <div className='flex gap-20 mt-4 w-full justify-between'>
                            {/* Phone Number field */}
                            <div className='flex flex-col'>
                                <label className='text-sm tracking-widest text-slate-400' htmlFor="phoneNo">Phone Number:</label>
                                {isEditing ? (
                                    <input className='w-full bg-slate-100 outline-none px-4 py-2 rounded-lg' type="tel" placeholder={user.phoneNumber} {...register('phoneNumber')} />
                                ) : (
                                    <h1 className='text-xl font-bold tracking-wider'>{user.phoneNumber}</h1>
                                )}
                            </div>

                            {/* Date of Birth field */}
                            <div className='flex flex-col'>
                                <label className='text-sm tracking-widest text-slate-400' htmlFor="dateOfBirth">Date of Birth:</label>
                                {isEditing ? (
                                    <input className='w-full bg-slate-100 outline-none px-4 py-2 rounded-lg' type="date" {...register('dateOfBirth')} />
                                ) : (
                                    <h1 className='text-xl font-bold tracking-wider'>{new Date(user.dateOfBirth).toLocaleDateString()}</h1>
                                )}
                            </div>
                        </div>

                        <div className='flex gap-20 mt-4 w-full justify-between'>
                            {/* Speciality */}
                            <div className='flex flex-col'>
                                <label className='text-sm tracking-widest text-slate-400' htmlFor="specialty">Specialty:</label>
                                {isEditing ? (
                                    <input className='w-full bg-slate-100 outline-none px-4 py-2 rounded-lg' type="text" placeholder={user.doctorDetails?.specialty} {...register('doctorDetails.specialty')} />
                                ) : (
                                    <h1 className='text-xl font-bold tracking-wider'>{user.doctorDetails?.specialty}</h1>
                                )}
                            </div>


                            {/* Qualification */}
                            <div className='flex flex-col'>
                                <label className='text-sm tracking-widest text-slate-400' htmlFor="qualifications">Qualification:</label>
                                {isEditing ? (
                                    <input className='w-full bg-slate-100 outline-none px-4 py-2 rounded-lg' type="text" placeholder={String(user.doctorDetails?.qualifications)} {...register('doctorDetails.qualifications')} />
                                ) : (
                                    <h1 className='text-xl font-bold tracking-wider'>{String(user.doctorDetails?.qualifications)}</h1>
                                )}
                            </div>

                        </div>

                        {/* Available Slots */}
                        <div className='mt-4 flex flex-col'>
                            <label className='text-sm tracking-widest mt-4 text-slate-400' htmlFor="availableSlots">Available Slots:</label>
                            {isEditing ? (
                                <input className='w-full bg-slate-100 outline-none px-4 py-2 rounded-lg' type="text" placeholder={String(user.doctorDetails?.availableSlots)} {...register('doctorDetails.availableSlots')} />
                            ) : (
                                <div className='flex gap-2'>
                                    {maxPatients?.map((p, Key) => {
                                        return <Badge className='flex' key={Key} variant="outline">{p}</Badge>
                                    })}
                                </div>
                            )}
                        </div>


                        {/* Max Patient */}
                        <div className='mt-4'>
                            <label className='text-sm tracking-widest text-slate-400' htmlFor="maxPatient">Max Patient:</label>
                            {isEditing ? (
                                <input className='w-full bg-slate-100 outline-none px-4 py-2 rounded-lg' type="number" {...register('doctorDetails.maxPatientsPerDay')} />
                            ) : (
                                <h1 className='text-xl font-bold tracking-wider'>{user.doctorDetails?.maxPatientsPerDay}</h1>
                            )}
                        </div>

                        {/* Edit button */}
                        <Button onClick={() => { setisEditing(!isEditing) }} className='bg-blue-500 hover:bg-blue-700 text-lg tracking-widest mt-2 w-2/12'>
                            {isEditing ? 'Save' : 'Edit'}
                        </Button>

                    </form>
                </div>
            </div>
        </SideLayout >
    )
}

export default Profile