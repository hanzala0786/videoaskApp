import React, { useState } from "react";
import campaignVideo from '../assets/campaign-structure-video.mp4';
import {HiArrowLongRight} from 'react-icons/hi2';

const Form = () => {
  const [formData, setFormData] = useState({name:"", email:"", checkbox:false});
  function changeHandler(event) {
    const {name, value, type, checked} = event.target;
    setFormData((prev) => ({...prev, [name]:value}));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the formData");
    console.log(formData);
  }
  return (
    <div className='relative flex w-screen h-screen'>
      {/* tag */}
      <div className='tagBlock'>
                <p>Powered by:</p>
                <p className='font-semibold text-[18px]'>videoask</p>
            </div>
      {/* vedio section */}
      <div className="hidden w-full h-screen lg:w-1/2 lg:block">
        <video
          src={campaignVideo}
          className="object-cover w-full h-full"
          autoPlay={true}
          controls={true}
        />
      </div>
      {/* form section */}
      <div className="w-full h-full lg:w-1/2 p-8 lg:p-[5rem]">
        <h1 className="text-xl font-semibold">
          Before you go, please leave your contact details so we can get back to
          you...
        </h1>
        <form className="flex flex-col" onSubmit={submitHandler}>
          <input
            className="border-b-[1px] my-6 py-2 outline-0"
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="*Your Name"
          />

          <input
            className="border-b-[1px] py-2 mb-6 outline-0"
            type="email"
            placeholder="*Your email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />

          <div className="flex items-baseline gap-x-2 my-6">
            <input 
              type="checkbox"
              id="checkbox"
              name="checkbox" 
              checked={formData.checkbox}
              onChange={changeHandler}
            />
            <p className="opacity-50 text-[14px]">
              <sup>*</sup>
              [Sample legal text] The personal data you have provided will be
              processed by XXXXX for purposes of providing you the service. The
              legal basis of the processing is XXXXX. Your data will not be
              transferred nor assigned to third parties. You can exercise your
              right to access, rectify and delete your data, as well as the
              other rights granted by law by sending an email to XXXXX. For
              further information, please check our privacy policy XXXXX.
            </p>
          </div>

          <button className="w-full flex justify-center items-center gap-x-2 mt-20 bg-blue-600 py-5 px-4 text-white text-[18px] font-semibold rounded-xl hover:scale-105 transition-all duration-200">
            <span>Send your answer</span><span className="font-bold">{<HiArrowLongRight/>}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
