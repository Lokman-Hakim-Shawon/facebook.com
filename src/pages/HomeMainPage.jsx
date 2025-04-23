import React, { useEffect, useState } from 'react';
import RighSideHome from '../components/RighSideHome';

const HomeMainPage = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/homeapi.json')
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log("error fetching",err))
    },[])
    return (
     <div className='h-full lg:flex lg:justify-between'>
           <div className='lg:h-screen overflow-y-auto w-full'>
        {data.map((post, index) => (
            <div key={index} className=' lg:m-5 bg-white rounded-3xl lg:mx-32'>
                <div className='lg:p-4'>
                <img src={post.profile_pic} alt={`${post.name}'s profile`} width="50" />
                <h3>{post.name}</h3>
                <p>{post.title}</p>
                </div>
                <div>
                <img src={post.post_image} alt="Post"  className='w-full '/>
                </div>
                <div className='flex justify-between p-5'>
                    <h1 className="">like</h1>
                    <h1 className="">comment</h1>
                    <h1 className="">share</h1>
                </div>
            </div>
        ))}
    </div>
    <RighSideHome/>
           </div> 
    );
};

export default HomeMainPage;