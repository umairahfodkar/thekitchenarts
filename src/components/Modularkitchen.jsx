import React from 'react';
import iti1 from '../assets/images/iti1.png';
import iti2 from '../assets/images/iti2.png';
import iti3 from '../assets/images/iti3.png';
import iti4 from '../assets/images/iti4.png';
import iti5 from '../assets/images/iti5.png';
import iti6 from '../assets/images/iti6.png';
import iti7 from '../assets/images/iti7.png';
import iti8 from '../assets/images/iti8.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Modularkitchen() {
  const itineraries = [
    { image: iti1, },
    { image: iti2, },
    { image: iti3, },
    { image: iti4, },
    { image: iti5, },
    { image: iti6, },
    { image: iti7, },
    { image: iti8, },
  ];

  return (
    
    <div className='bg-[#F9EBEB]'>
      <h1 className="title-font text-[#F9EBEB]  font-rubik  text-center   text-3xl font-normal ">MODULAR KITCHEN</h1>
      <h1 data-aos='zoom-in' className="title-font text-[#25285A]  font-canada   text-center   text-3xl font-medium ">MODULAR KITCHEN</h1>
      <div data-aos='zoom-in' className="flex flex-wrap bg-[#F9EBEB] p-4 lg:p-7">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-3 sm:p-8 relative">
            <div  className="relative">
              <img src={itinerary.image} alt={`Itinerary ${index + 1}`} className="w-full hover:scale-110" />
              {/* Assuming you have 'text' property in your itineraries */}
              <div className="absolute bottom-0 left-0 w-full ">
                <p className="text-white font-bold text-center text-2xl p-2">{itinerary.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}
