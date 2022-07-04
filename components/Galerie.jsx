import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function Galerie({ galerieRef }) {
  const galerie = [
    "/img-1.jpg",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
    "/img-6.jpg",
  ];

  return (
    <div
      ref={galerieRef}
      className='flex flex-col items-center justify-center space-y-[50px] pt-[58px] md:pt-[78px]'
    >
      <h1 className=' text-[25px] lg:text-[49px]'>Galerie</h1>
      <div className='hidden  md:grid  md:grid-cols-2 xl:grid-cols-3 xl:w-[1500px] xl:pl-[40px]'>
        {galerie.map((img) => (
          <img src={img} alt='poza tunsoare' className='scale-[0.8]' />
        ))}
      </div>

      {/* slicer */}
      <div className='relative flex justify-center w-full'>
        <div
          id='slider'
          className=' scroll relative mx-auto  md:hidden  flex w-full  justify-start space-x-[30px] overflow-x-scroll scroll-smooth  whitespace-nowrap   px-[100px] scrollbar-hide lg:justify-center '
        >
          {galerie.map((img, i) => (
           
              <img src={img} alt='poza tunsoare' className='scale-[0.8]' />
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Galerie;
