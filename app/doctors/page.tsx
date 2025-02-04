'use client';
import type { NextPage } from 'next';
import SideLayout from './Sidelayout';
import SearchBar from '@/components/searchBar'
const Home: NextPage = () => {
  return (
    <SideLayout>
        <div className='grid grid-cols-2 p-16'>
          <div className='bg-white rounded-lg w-96 h-96'>
              
          </div>
          <div>
              <div>

              </div>
          </div>
        </div>
    </SideLayout>
  )
}

export default Home;