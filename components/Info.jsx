import React from "react";
import { motion } from 'framer-motion';

function Info({descoperaRef}) {
  return (
    <div
    ref={descoperaRef}
    className='bg-black my-[78px] md:my-[98px] md:px-[50px] lg:px-[100px] flex justify-center xl:my-[200px] pt-[58px] md:pt-[78px] '>
      <div className='flex flex-col md:flex-row lg:space-x-[120px]'>
        
        <motion.div
        initial={{ opacity: 0 , x: -200 }}
        whileInView={{ opacity: 1 , x:0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className='flex flex-col items-center  space-y-[40px] md:justify-center  '>
          <h1 className='text-[25px] lg:text-[49px]'>
            Cateva informatii despre mine
          </h1>
          <p className='text-center w-[350px] lg:text-[30px] lg:w-[600px] '>
            Ma numesc Klaus Mercan si sunt pasionat de ceea ce fac si ofer
            acestei meserii tot timpul de care este nevoie. Fie ca este vorba de
            o tunsoare ce este in trend, de un barbierit profesional, si in
            acelasi timp o discutie si relaxare, tot mai multi barbati isi cauta
            frizerul experimentat in aceasta directie. Te asteptam si pe tine
            pentru a gusta din serviciile noastre de calitate venind la pachet
            cu o gama larga de produse premium.
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 , x: 200 }}
        whileInView={{ opacity: 1 , x:0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className='flex justify-center'>
          <img
            src='/info-img.jpg'
            alt='poza salon'
            className='scale-[0.6] lg:hidden xl:flex xl:scale-[1] '
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Info;
