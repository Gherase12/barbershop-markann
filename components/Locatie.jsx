import React from "react";

function Locatie({locatieRef}) {
  return (
    <div
    ref={locatieRef}
    className='flex flex-col items-center justify-center mt-[50px] xl:mt-[100px] border-b-2 border-galben pt-[58px] md:pt-[78px]'>
      <h1 className='text-[25px] lg:text-[49px]'>
        Locatie
      </h1>

      <div className='bg-black my-[78px] md:my-[98px] md:px-[50px] lg:px-[100px] flex justify-center xl:my-[200px] '>
        <div className='flex flex-col md:flex-row lg:space-x-[120px]'>
          <div className='flex flex-col items-center  space-y-[40px] md:justify-center  '>
            <p className='text-center w-[350px] lg:text-[30px] lg:w-[600px] '>
              Bloc 6 Scara 1 Drumul Gura Caliței 4-32 București 032604
            </p>
          </div>
          <div className='flex justify-center'>
            <a href="https://www.google.com/maps/place/Merkann+Barbershop+Mobil/@44.4127604,26.1972082,17z/data=!3m1!4b1!4m5!3m4!1s0x40b2038eb6e5b38f:0x8dfb4cb75e0a26cc!8m2!3d44.4127604!4d26.1972082">
              
            <img
              src='/locatie.jpg'
              alt='locatie pallady'
              className='scale-[0.6] lg:hidden xl:flex xl:scale-[1] '
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locatie;
