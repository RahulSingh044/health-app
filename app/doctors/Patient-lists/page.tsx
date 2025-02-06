import React from 'react'
import SideLayout from '../Sidelayout'
import PatientList from '@/components/patientList'
function page() {

    return (
        <SideLayout>
            <div className='bg-white w-full h-screen rounded-xl mt-8 p-4 overflow-hidden'>
                <h2 className='text-2xl font-bolder tracking-widest border-b-2 '>All Patients</h2>
                <div className='w-full h-full overflow-y-auto'>
                    <PatientList />
                </div>
            </div>
        </SideLayout>
    )
}

export default page