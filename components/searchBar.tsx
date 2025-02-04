'use client'
import { Search } from 'lucide-react';
function searchBar(){
    return(
        <>
            <div className='mt-3 ml-6 w-60 border-solid border-2 rounded-full flex justify-center items-center bg-white'>
                <input type="text" placeholder="Seach" className="px-6 py-2 rounded-full outline-none"/>
                <Search className='w-24px h-24px absolute ml-44'/>
            </div>
        </>
    )
}

export default searchBar;