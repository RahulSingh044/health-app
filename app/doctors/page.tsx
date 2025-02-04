'use client';
import type { NextPage } from 'next';
import SideLayout from './Sidelayout';
import React from 'react';
import SearchBar from '@/components/searchBar'
import axios from 'axios';
const Home: NextPage = () => {

  const user = async () => {
    try {
      const response = await axios.get('api/auth/User');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect( () => {
    user();
  })

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