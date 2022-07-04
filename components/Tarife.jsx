import React from "react";
import { motion } from 'framer-motion';

function Tarife({tarifeRef}) {
    const tarife = [
        {
          nume:"Tuns skin-fade + Spălat (45 min)",
          pret:45 
        },
        {
          nume:"Tuns + Barba + Spălat (60 min)",
          pret: 65
        },
        {
          nume:"Tuns + Barba + Pensat + Spălat (1h 20 min)",
          pret: 85 
        },
        {
          nume:"Vopsit Barbă (20 min)",
          pret: 25
        },
        {
          nume:"Vopsit Sprâncene (15 min)",
          pret: 20
        },
        {
          nume:"Pensat cu ață sau cu penseta (20 min)",
          pret: 20
        },
        {
          nume:"Epilare cu ceara Nas + Frunte + Pomeți (20 min)",
          pret: 20
        },
        {
          nume:"Pachet complet servicii + masaj capilar (1h 45 min)",
          pret: 115
        }
        
      ]
  return (
    <div 
    ref={tarifeRef}
    className='flex flex-col items-center justify-center space-y-[100px] pt-[58px] md:pt-[78px]'>
      <h1 className='text-[25px] lg:text-[49px]'>Tarife</h1>
      <div className='w-[80%] lg:w-[60%] xl:w-[50%]'>
        {tarife.map((t , i)=>(
            <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x:-100
              },
              visible: (i) => ({
                opacity: 1,
                x:0,
                transition: {
                  delay: i * 0.20,
                },
              }),
            }}
            initial='hidden'
            whileInView='visible'
            custom={i}
            key={i} className=" flex justify-between border-b-2 border-r-2 pr-3 border-galben mb-[10px] xl:text-[25px] space-x-[20px]">
                <h1>{t.nume}</h1>
                <h1>{t.pret}lei</h1>
            </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tarife;
