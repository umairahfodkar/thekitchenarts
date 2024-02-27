import React from 'react';
import iti1 from '../assets/images/itii1.png';
import iti2 from '../assets/images/itii2.png';
import iti3 from '../assets/images/itii3.png';
import iti4 from '../assets/images/itii4.png';
import iti5 from '../assets/images/itii5.png';
import iti6 from '../assets/images/itii6.png';
import iti7 from '../assets/images/itii7.png';
import iti8 from '../assets/images/itii8.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Modularfurniture() {
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
    <div className="bg-[#F9EBEB]">
      <h1 className="title-font text-[rgb(249,235,235)] font-rubik  text-center   text-3xl font-normal ">MODULAR FURNITURE</h1>
      <h2 data-aos='zoom-in' className=" text-[#25285A]   font-canada  text-center   text-3xl  font-medium ">MODULAR FURNITURE</h2>
      <div data-aos='zoom-in' className="flex flex-wrap p-4 lg:p-7 overflow-hidden">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 sm:p-7 relative">
            <div className="relative">
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
