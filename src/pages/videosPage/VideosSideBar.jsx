import { Link } from 'react-router';
import { FaUserFriends } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { RiGroup2Line } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { SiGooglenews } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
const VideosSideBar = () => {
    return (
        <div>
            <div className='bg-white h-full w-full '>
            <Link to='/friends' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300  flex items-center "><FaUserFriends className='text-2xl mr-4 text-blue-500' /> Friends</Link>
            <Link to='/memories' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center"><FaClockRotateLeft className='text-2xl mr-4 text-blue-500' /> Memories</Link>
            <Link to='/saved' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaBookmark className='text-2xl mr-4 text-blue-500'/> Saved</Link>
            <Link to='/groups' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><RiGroup2Line className='text-2xl mr-4 text-blue-500'/> Groups</Link>
            <Link to='/videos' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><MdOndemandVideo className='text-2xl mr-4 text-blue-500'/> Videos</Link>
            <Link to='shopping' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaShop className='text-2xl mr-4 text-blue-500' /> Marketplace</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><SiGooglenews className='text-2xl mr-4 text-blue-500'/> Feeds</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
            <Link to='' className="block w-full px-4 py-2 rounded-xl hover:bg-slate-300 flex items-center "><FaFlag className='text-2xl mr-4 text-blue-500'/> Pages</Link>
        </div>
        </div>
    );
};

export default VideosSideBar;