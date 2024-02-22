import React from 'react'
import InteriorLogo from '../assets/images/kitchen_art_logo.png';
import InstagramLogo from'../assets/images/instagram.png';
import FbLogo from'../assets/images/Facebook.png';
import WhatsappLogo from'../assets/images/Whatsapp.png';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({ duration: 2000 });
    };
  
    // Delay initialization to make sure images are loaded
    const delay = setTimeout(initAOS, 500);
  
    return () => clearTimeout(delay); // Cleanup on component unmount
  }, []);
  return (
   <div className="footer bg-[#890809] overflow-hidden">

    <div className="max-w-[1170px] mx-auto py-5 p-3 md:flex md:justify-around">

    <div data-aos='fade-right' className="footerlogos ml-3 ">
        <div className="interior-logo mt-2">
        <img src={InteriorLogo} alt="My Image" className='w-[120px]' />
        </div>
        <p class="md:text-center text-white py-2 font-canada">Social Networks</p>
        <div className="social-icon-box flex gap-2">
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
  <img src={InstagramLogo} alt="Instagram Logo" className='w-[25px] h-[25px]'/>
</a>

<a href="https://www.facebook.com/thekitchenart.18" target="_blank" rel="noopener noreferrer">
  <img src={FbLogo} alt="My Image" className='w-[25px] h-[25px]' />
</a>

        

        </div>

    </div>

    <div data-aos='fade-down' className="linksbox text-white mt-2  ml-3">
        <a href="" className='block  py-2 font-canada'>About Us</a>
        <a href="" className='block  py-2 font-canada'>Our Services</a>
        <a href="" className='block  py-2 font-canada'>Testimonials</a>
        <a href="" className='block  py-2 font-canada'>Contact Us</a>

    </div>

    <div data-aos='fade-left' className="contactinfo mt-2   ml-3">
        <h2 class="text-[#F8CB89] text-[30px]">CONTACT US</h2>

        <div className="address text-white py-1">
          <h6 className='font-canada'>Address</h6>
          <p className='font-canada'>16/123, Unnat Nagar,Part 3, M. G. Road, Near Gajanan Maharaj Nandir, Goregaon(W),Mumbai 400104.</p>
        </div>

        <div className="phone text-white py-1">
        <h6 className='font-canada'>Phone</h6>
          <p className='font-canada'>9234567891</p>

        </div>

        <div className="email text-white py-1">
        <h6 className='font-canada'>Email</h6>
          <p className='font-canada'>thekitchenart2018@gmail.com</p>

        </div>


    </div>

    </div>

   </div>
  )
}

export default Footer