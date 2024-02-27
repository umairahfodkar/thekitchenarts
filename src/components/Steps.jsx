import React from 'react'
import StepsImg from '../assets/images/steps2.png';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';


const Steps = ({scrollToContact}) => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ duration: 2000 });
    };
  
    // Delay initialization to make sure images are loaded
    const delay = setTimeout(initAOS, 500);
  
    return () => clearTimeout(delay); // Cleanup on component unmount
  }, []);
  
  return (
    <div className="relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${StepsImg})` }}>
    <div className="absolute"></div>
    
    <div className="max-w-[1170px] mx-auto py-20 p-3 md:flex md: place-content-end relative">
<div data-aos='fade-left' className="contact-field md:w-[40%] p-[1rem] relative z-10 bg-white shadow-2xl">
<h2 className=' my-2  text-4xl font-normal font-dm'>5 Steps To Your <br/> Kitchen</h2>


<ul className="relative">
      <div className="absolute left-3 top-0 bg-[#890809] h-[94%] mt-[8px] w-px"></div>
      <li className="relative pl-7 mb-5 font-roboto">
        <div className="absolute left-[6px] top-2 w-3 h-3 rounded-full bg-[#890809]"></div>
        On-site consultation
      </li>
      <li className="relative pl-7 mb-5 font-roboto">
        <div className="absolute left-[6px] top-2 w-3 h-3 rounded-full bg-[#890809]"></div>
        Finalise the Design
      </li>
      <li className="relative pl-7 mb-5 font-roboto">
        <div className="absolute left-[6px] top-2 w-3 h-3 rounded-full bg-[#890809]"></div>
        Providing detailed Quotations
      </li>
      <li className="relative pl-7 mb-5 font-roboto">
        <div className="absolute left-[6px] top-2 w-3 h-3 rounded-full bg-[#890809]"></div>
        Material selection
      </li>
      <li className="relative pl-7 mb-5 font-roboto">
        <div className="absolute left-[6px] top-2 w-3 h-3 rounded-full bg-[#890809]"></div>
        Construction and Kitchen Installation
      </li>
    </ul>

    <button className='bg-[#A15757] text-[white] px-3 py-3 font-roboto text-sm'    ><Link to='#contactus'>Book Consultation</Link>  </button>


</div>

    </div>
  </div>
  )
}

export default Steps