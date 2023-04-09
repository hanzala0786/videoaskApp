import { Link } from 'react-router-dom';
import introVideo from '../assets/intro-video.mp4';
import React from 'react'
function player() {
    return (
        <div className='relative flex w-full'>
            <h1 className='absolute top-[80px] left-[50px] text-[42px] font-extrabold text-white  tracking-normal'>Welcome</h1>
            {/* tag */}
            <div className='tagBlock'>
                <p>Powered by:</p>
                <p className='font-semibold text-[18px]'>videoask</p>
            </div>
            {/* vedio section */}
            <div className='w-full h-screen lg:w-1/2 videoPlayer z-1'>
                <video src={introVideo} className='object-cover w-full h-full' 
                autoPlay={true} 
                muted={true} 
                loop={true} 
                controls={true}/>
            </div>
            {/* controls */}
            <div className='flex items-center justify-center w-1/2 controls'>
                 <ul className='flex flex-col gap-y-4'>
                    <li className='controlBtn flex px-4 py-[12px] bg-gray-200 border  hover:border-blue-600 rounded-full gap-x-2 w-[320px]'>
                        <Link to='/Campaign' className='flex gap-x-2'>
                            <div className='flex items-center justify-center w-8 h-8 font-semibold text-center text-white bg-blue-600 rounded-full'>A</div>
                            <button className='text-lg font-semibold'>Campaign structure</button>
                        </Link>
                    </li>
                    <li className='controlBtn flex px-4 py-[12px] bg-gray-200 border  hover:border-blue-600 rounded-full gap-x-2 w-[320px]'>
                        <Link to='/Campaign' className='flex gap-x-2'>
                            <div className='flex items-center justify-center w-8 h-8 font-semibold text-center text-white bg-blue-600 rounded-full'>B</div>
                            <button className='text-lg font-semibold'>Learn Facebook basics</button>
                        </Link>
                        
                    </li>
                    <li className='controlBtn flex px-4 py-[12px] bg-gray-200 border hover:border-blue-600 rounded-full gap-x-2 w-[320px]'>
                        <Link to='/Campaign' className='flex gap-x-2'>
                            <div className='flex items-center justify-center w-8 h-8 font-semibold text-center text-white bg-blue-600 rounded-full'>C</div>
                            <button className='text-lg font-semibold'>3rd choice</button>
                        </Link>
                        
                    </li>
                 </ul>
            </div>
        </div>
    );
}

export default player;