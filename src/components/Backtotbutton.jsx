import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the value (3 components) based on your lay
      setShowButton(window.scrollY > 2 * 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    showButton && (
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-6 z-40 p-2  bg-[#A15757] text-white hover:bg-[] focus:outline-none focus:ring-2 focus:ring-[#A15757] flex items-center justify-center"
        style={{ width: '36px', height: '36px' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    )
  );
};

export default BackToTopButton;
