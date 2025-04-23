import React, { useEffect, useState } from 'react';

const Shopping = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/homeapi.json')
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log("error fetching",err))
    },[])
    return (
        <div className='w-full grid grid-cols-4'>
           {data.map((post, index) => (
            <div key={index} className=' m-2 bg-white rounded-3xl flex-col-3'>
                <div>
                <img src={post.post_image} alt="Post"  className='w-full '/>
                </div>
                <div>
                    <h1 className="font-bold">Name: Lokman Hakim Shawon</h1>
                    <h1 className="">{post.title}</h1>
                </div>
            </div>
        ))}
           </div>
    );
};

export default Shopping;