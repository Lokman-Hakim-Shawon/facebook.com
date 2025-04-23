import React from 'react';
import Navbar from '../components/Navbar';
import LeftSideHome from '../components/LeftSideHome';
import RighSideHome from '../components/RighSideHome';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col bg-slate-100 w-full'>
           <Navbar/>
           <div className='flex justify-between w-full'>
           <div className=' lg:block hidden w-1/4 bg-white border-2 border-t-0 border-slate-300'>
           <LeftSideHome/>
           </div>
           <div className='w-full lg:w-3/4 '>
           <Outlet/>
           </div>
           </div>
           
        </div>
    );
};

export default Home;