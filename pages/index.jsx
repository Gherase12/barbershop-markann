import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Info from "../components/Info";
import Galerie from "../components/Galerie";
import Tarife from "../components/Tarife";
import Locatie from "../components/Locatie";
import Contact from "../components/Contact";
import { useRef } from "react";

const Home = () => {
  const descoperaRef = useRef(null);
  const galerieRef = useRef(null);
  const tarifeRef = useRef(null);
  const locatieRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='h-auto overflow-hidden font-serif bg-black text-galben '>
      <Head>
        <title>Merkann Barbershop</title>
        <link rel='icon' href='/logo.jpg' />
      </Head>
      <Nav
        descoperaRef={descoperaRef}
        galerieRef={galerieRef}
        tarifeRef={tarifeRef}
        locatieRef={locatieRef}
      />
      <Hero contactRef={contactRef} />
      <Reviews />
      <Info descoperaRef={descoperaRef} />
      <Galerie galerieRef={galerieRef} />
      <Tarife tarifeRef={tarifeRef} />
      <Locatie locatieRef={locatieRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Home;
