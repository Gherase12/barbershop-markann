import React from "react";
import { motion } from 'framer-motion'
function Hero({contactRef}) {
  const scrollToElement = (Ref) => {

    Ref.current.scrollIntoView({ behavior: "smooth",block: "start" });
  };
  return (
    <div className='bg-black my-[78px] md:my-[98px] md:px-[50px] lg:px-[100px] flex justify-center xl:my-[200px] '>
      <div className="flex flex-col md:flex-row">
        
        < motion.div 
        initial={{ opacity: 0 , x: -200 }}
        whileInView={{ opacity: 1 , x:0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className='flex flex-col items-center  space-y-[40px] md:justify-center'>
          <h1 className='text-3xl xl:text-[78px] lg:leading-[80px] text-center w-[300px] lg:w-[423px] lg:h-[208px] xl:w-[823px] xl:h-[308px]  lg:text-start'>Ma numesc Klaus Mercan si practic arta tunsului de peste 4 ani</h1>
          <button onClick={()=>scrollToElement(contactRef)} className=" border-[3px] rounded-[6px] border-galben w-[143px] h-[39px] animate-pulse ">Programeaza-te</button>
        </ motion.div>
        
        <motion.div
        initial={{ opacity: 0 , x: 200 }}
        whileInView={{ opacity: 1 , x:0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className='flex justify-center'>
          <img src='/hero-img.jpg' alt='poza salon' className='scale-[0.6] lg:hidden xl:flex xl:scale-[1] ' />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
