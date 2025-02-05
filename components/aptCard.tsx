import React from 'react';

// Define the props interface
interface AptCardProps {
    Name: string;
    Age: string;
    Disease: string;
}

const aptCard:React.FC<AptCardProps> = ({Name, Age, Disease}) => {
    return (
        <div className='bg-[#c5e1ff] h-24 mx-3 flex justify-center items-center gap-5 rounded-xl mt-4'>
            <div className='rounded-full bg-slate-500 h-14 w-14'></div>
            <div className='text-xs text-left'>
                <h6><b>Name:</b> {Name}</h6>
                <h6><b>Age:</b> {Age}</h6>
                <h6><b>Disease:</b> {Disease}</h6>
                <button className='w-full bg-green-300 text-white rounded-lg tracking-widest mt-2 py-1'>Accept</button>
            </div>
        </div>
    )
}

export default aptCard;