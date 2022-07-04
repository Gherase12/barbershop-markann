import React from "react";
import { BsFacebook , BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Contact({contactRef}) {
  return (
    <div
    ref={contactRef}
    className="my-[40px] flex flex-col items-center">
      <h1 className="text-[25px] xl:text-[40px] my-[20px]">Programeaza-te</h1>

      <div className="xl:text-[30px] text-center">
        <h1>Suna sau trimite mesaj la numarul de telefon: <p className="text-[25px]">+0748438692</p> </h1>
        <h1>Prin email la adresa: Klausmercan@gmail.com</h1>
      </div>
      <h1 className="text-[25px] my-[20px] xl:text-[40px]">Ma poti gasi si pe</h1>

      <div className="flex space-x-[20px] text-[25px] xl:text-[30px]">
        <a href="https://www.facebook.com/KlausMercan/">
        <BsFacebook/>
        </a>
        <a href="https://www.instagram.com/merkanklauss/">
        <BsInstagram/>
        </a>
        <a href="https://www.tiktok.com/@merkanklauss">
        <FaTiktok />
        </a>
      </div>
    </div>
  );
}

export default Contact;
