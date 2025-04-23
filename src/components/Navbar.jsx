import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { RiGroup2Line } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className='fixed w-full flex justify-between items-center p-2 bg-white border-2 border-slate-300'>
            <div className="hidden lg:block"><FaFacebook className=' text-blue-500 lg:text-5xl' /></div>
            <div className="flex justify-between lg:justify-around w-4/6 lg:space-x-6 lg:w-3/6">
                <Link to="/"><FaHome className='text-3xl lg:text-3xl'/></Link>
                <Link to="videos"><MdOndemandVideo className='text-3xl lg:text-3xl'/></Link>
                <Link to="shopping"><FaShop className='text-3xl lg:text-3xl' /></Link>
                <Link to="groups"><RiGroup2Line className='text-3xl lg:text-3xl'/></Link>
                <Link to="gaming"><FaGamepad className='text-3xl lg:text-3xl'/></Link>
            </div>
            <div className="flex justify-between items-center lg:px-8 space-x-4 lg:space-x-8">
            <FaFacebookMessenger className='text-3xl lg:text-3xl ' />
            <CgProfile className='text-3xl lg:text-3xl'/>
            </div>
        </div>
    );
};

export default Navbar;