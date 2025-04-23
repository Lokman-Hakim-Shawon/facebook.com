import React from 'react';
import useSideBarData from './useSideBarData';
import { Link } from 'react-router';

const Sidebar = ({data}) => {
    const links= useSideBarData(data)
    return (
        <div className='bg-white h-full w-full'>
            {
                links.map((items,index)=>{
                    const Icon=items.icon
                    return (
                        <Link key={index} to={items.to}  className='block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center'>
                            <Icon key={index} className='text-2xl mr-4 text-blue-500'/>
                            {items.label}
                        </Link>
                    )
                }
            )}
        </div>
    );
};

export default Sidebar;