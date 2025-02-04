import React from 'react'


export default function Footer() {
    return (
        <div className='min-w-screen'>

            <div className='brightness-50 h-96 w-full overflow-hidden bg-cover absolute'>
                <img className='h-full w-full' src="/images/footer-bg.jpg" alt="" />
            </div>

            <div className='w-screen relative z-40 p-28 text-white'>
                <h1 className='text-5xl font-bold'>
                    Need help?
                </h1>
                <div className='grid grid-cols-2 w-full mt-4'>
                    <div className='w-2/3'>
                        <p className='text-xl mt-2'>Id sed suspendisse massa elit morbi odio justo vitae pharetra. Sed nullam sit est scelerisque tincidunt pellentesque felis.
                        </p>
                    </div>
                    <div>
                        <div className='flex gap-10 text-white'>
                            <div>
                                <p>For enquiries, please call</p>
                                <h1 className='font-bold text-xl'>(406) 555-0120</h1>
                            </div>
                            <span className='border-r-2 border-white'></span>
                            <div>
                                <p>For enquiries, please call</p>
                                <h1 className='font-bold text-xl'>(406) 555-0120</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-screen grid grid-cols-4 gap-8 p-20 px-28'>
                <div>
                    <p>1234 Washington Ave. Manchester, Kentucky 39495.</p>
                    <p className='mt-8'>(406) 555-0120</p>
                </div>

                <div className=''>
                    <h1 className='font-semibold'>PATIENT INFORMATION</h1>
                    <ul className='text-slate-700 mt-4 flex flex-col gap-1'>
                        <li>Find a Doctor</li>
                        <li>Health Library</li>
                        <li>Clinical Trials</li>
                        <li>NewsRoom</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='font-semibold'>RESEARCH & EDUCATION</h1>
                    <ul className='text-slate-700 mt-4 flex flex-col gap-1'>
                        <li>Find a Doctor</li>
                        <li>Health Library</li>
                        <li>Clinical Trials</li>
                        <li>NewsRoom</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='font-semibold'>FOR HEALTH PROFESSIONALS</h1>
                    <ul className='text-slate-700 mt-4 flex flex-col gap-1'>
                        <li>Find a Doctor</li>
                        <li>Health Library</li>
                        <li>Clinical Trials</li>
                        <li>NewsRoom</li>
                    </ul>
                </div>
            </div>

            <div className='w-full flex justify-between px-28 py-4'>
                <span>© 2025 General Hospital</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    )
}
