import React from 'react'
import campaignVideo from '../assets/campaign-structure-video.mp4';
import { Link } from 'react-router-dom';
const Campaign = () => {
  return (
    <div className='flex relative'>
            {/* tag */}
            <div className='tagBlock'>
                <p>Powered by:</p>
                <p className='font-semibold text-[18px]'>videoask</p>
            </div>
            {/* vedio section */}
            <div className='w-full h-screen lg:w-1/2 videoplayer'>
                <video src={campaignVideo} className='object-cover w-full h-full' 
                  autoPlay={true} 
                  controls={true}
                />
            </div>
            
            <div className='flex items-center justify-center w-1/2 campaignControls'>
                <Link to='/Form'>
                    <button className='w-[320px] bg-blue-600 py-2 px-4 text-white text-[18px] font-semibold rounded-xl hover:scale-105 transition-all duration-200'>
                        Download "Campaign Structure Guide"
                    </button>
                </Link>
            </div>
    </div>
  )
}

export default Campaign