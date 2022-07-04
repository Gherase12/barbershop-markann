import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Nav({ descoperaRef, galerieRef, tarifeRef, locatieRef }) {
  const [open, setOpen] = useState(false);

  const scrollToElement = (Ref) => {
    setOpen(false);
    Ref.current.scrollIntoView({ behavior: "smooth",block: "start" });
  };
  
  return (
    <div className='  shadow-md shadow-galben  fixed font-serif top-0 z-50 w-full h-[48px] md:h-[68px] bg-black text-galben flex items-center justify-between px-[20px] lg:px-[100px] '>
      <GiHamburgerMenu
        className=' text-[40px] md:hidden '
        onClick={() => setOpen(true)}
      />
      <img
        src='/logo.jpg'
        alt='logo frizerie  '
        className='w-[35px] h-[35px]  md:w-[50px] md:h-[50px] '
      />
      <div className='text-[20px]'>0748438692</div>
      <ul className='hidden  md:flex w-[300px] justify-between lg:text-[23px] lg:w-[500px]'>
        <button onClick={() => scrollToElement(descoperaRef)}>Descopera</button>
        <button onClick={() => scrollToElement(galerieRef)}>Galerie</button>
        <button onClick={() => scrollToElement(tarifeRef)}>Tarife</button>
        <button onClick={() => scrollToElement(locatieRef)}>Locatie</button>
      </ul>

      <ul
        className={`${
          !open
            ? "fixed right-[100%]"
            : "pt-[40px] pl-[20px] fixed top-0 left-0 h-screen w-[60%] text-[20px] text-center   flex  flex-col bg-black text-galben uppercase space-y-5  duration-500 ease-in-out  "
        }  `}
      >
        <AiOutlineCloseSquare
          className='absolute top-4 right-4 text-[30px] '
          onClick={() => setOpen(false)}
        />

        <li onClick={() => scrollToElement(descoperaRef)}>Descopera</li>
        <li onClick={() => scrollToElement(galerieRef)}>Galerie</li>
        <li onClick={() => scrollToElement(tarifeRef)}>Tarife</li>
        <li onClick={() => scrollToElement(locatieRef)}>Locatie</li>
      </ul>
    </div>
  );
}

export default Nav;
