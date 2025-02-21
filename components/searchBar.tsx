'use client'
import { Search } from 'lucide-react';
import { ReactNode } from 'react';

interface SearchBarProps{
    children: ReactNode,
    divwidth: string,
}
  
function searchBar(){
    return(
        <>
            <div className='border-solid w-full border-2 rounded-full flex justify-center items-center bg-white'
            // style={{ width: divwidth }}
            >
                <input type="text" placeholder="Seach" className=" bg-blue-200 pl-3 py-1 rounded-full outline-none"/>
                <Search className='w-24px h-24px absolute ml-40'/>
            </div>
        </>
    )
}

export default searchBar;