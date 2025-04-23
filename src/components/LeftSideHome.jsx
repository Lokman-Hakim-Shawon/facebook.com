
import { useLocation } from 'react-router';
import { FaUserFriends } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { RiGroup2Line } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { SiGooglenews } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import Sidebar from './customHooks/Sidebar';
import { IoMdBrowsers } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
const homeRouter=[
    {to:'/friends',label:'friends',icon:FaUserFriends},
    {to:'/memories',label:'memories',icon:FaClockRotateLeft},
    {to:'/saved',label:'saved',icon: FaBookmark },
    {to:'/groups',label:'groups',icon:RiGroup2Line},
    {to:'/videos',label:'videos',icon:MdOndemandVideo},
    {to:'/shopping',label:'shopping',icon: FaShop},
]
const videos=[
    {to:'/videos/home',label:'Home',icon:SiGooglenews},
    {to:'/videos/live',label:'Live',icon:FaFlag},
    {to:'/videos/reels',label:'Reels',icon:SiGooglenews},
    {to:'/videos/shows',label:'Shows',icon:FaFlag},
    {to:'/videos/explore',label:'Explore',icon:FaClockRotateLeft},
    {to:'/videos/savedVideos',label:'Saved Videos',icon:FaShop},
]
const shopping=[
    {to:'browse all',label:'Browse all',icon:IoMdBrowsers},
    {to:'notifications',label:'Notifications',icon: IoMdNotifications },
    {to:'inbox',label:'Inbox',icon:MdOutlineForwardToInbox},
    {to:'marketPlaceAccess',label:'Marketplace access',icon:FaTriangleExclamation},
    {to:'buying',label:'Buying',icon:FaBookmark},
    {to:'selling',label:'Selling',icon:FaClockRotateLeft},
]
const groups=[
    {to:'youFeed',label:'Your feed',icon:FaBagShopping },
    {to:'discover',label:'Discover',icon:MdSell},
    {to:'yourGroups',label:'Your groups',icon:RiGroup2Line}
]
const gaming=[
    {to:'playGames',label:'Play games',icon:RiGroup2Line},
    {to:'notifications',label:'Notifications',icon:IoMdNotifications},
    {to:'savedGames',label:'Saved games',icon:FaBookmark},
    {to:'allGames',label:'All games',icon:MdOutlineForwardToInbox},
    {to:'action',label:'Action',icon:IoMdBrowsers},
    {to:'adventure',label:'Adventure',icon:FaShop},
    {to:'arcade',label:'Arcade',icon:MdSell},
]
const LeftSideHome = () => {
    const location =useLocation()
    let path=location.pathname
    console.log(location.pathname)
    return (
        <div className='min-h-screen shadow-lg '>
            {
                path=="/videos"?<Sidebar data={videos} />
                :
                path=='/shopping'?<Sidebar data={shopping}/>
                :
                path=='/groups'?<Sidebar data={groups}/>
                :
                path=='/gaming'?<Sidebar data={gaming}/>
                :
                <Sidebar data={homeRouter} />
            }
        </div>
    );
};

export default LeftSideHome;