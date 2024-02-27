import React, { useEffect, useRef } from 'react';
import bannerimg from '../assets/images/bannerimg.png';
import AboutUsImg from '../assets/images/About_us.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';



const Banner = ({scrollToContact}) => {
  

  
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ duration: 2000 });
    };
  
    // Delay initialization to make sure images are loaded
    const delay = setTimeout(initAOS, 500);
  
    return () => clearTimeout(delay); // Cleanup on component unmount
  }, []);


  return (
    <div className='bg-[#F9EBEB] relative mt-5 sm:mt-20 '>
      {/* Desktop View */}
      <div className="hidden md:block container mx-auto flex items-center justify-start">
        <div className="max-w-2xl text-left p-4 md:p-2">
          <h2 className="text-xl md:text-3xl font-semibold font-faustine mb-4 md:mb-6">
            BEGIN THE JOURNEY TO YOUR DREAM KITCHEN
          </h2>
           <button
            
            className="border-2 border-[#A15757] text-[#A15757] px-3 py-2 font-medium hover:bg-[#A15757] hover:text-white transition duration-300"
            onClick={scrollToContact}   >
            Speak To Our Expert
          </button>
        </div>
        <div className="absolute p-10 top-1/2 right-0 transform -translate-y-1/2">
          <img src={bannerimg} alt="Banner Image" className='h-[300px]' />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden container mx-auto flex flex-col items-center overflow-hidden">
        <div className="max-w-2xl text-left p-4 md:p-2">
          <h1 className="text-xl md:text-xl font-semibold font-faustine mb-4 md:mb-6">
            BEGIN THE JOURNEY TO YOUR DREAM KITCHEN
          </h1>
          <button
           
            className="border-2 border-[#A15757] text-[#A15757] px-4 py-2 font-medium hover:bg-[#A15757] hover:text-white transition duration-300"
            onClick={scrollToContact}  >
            <Link to='#contactus'>Speak To Our Experts</Link>
          </button>
        </div>
        <div  data-aos='slide-left' className="p-10">
          <img src={bannerimg} alt="Banner Image" className='h-[300px]' />
        </div>
      </div>
    </div>
  );
};

export default Banner;


