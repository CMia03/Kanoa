import React from "react";
import Layout from "@/components/layout";
import FondImage from "../../public/images/menu.png";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/Typography";
import IntroPages from "@/components/kanoa/introdution";
import ListPages from "@/components/kanoa/list";

const welcomePage = () => {
  return (
    <Layout>
      <div
        className="relative flex flex-col items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${FondImage.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50  "></div>
        <Typography variant="h1" className="text-4xl font-bold text-white z-10 mt-52">
          Bienvenu chez Kanoa
        </Typography>
        <Typography
          variant="p"
          className="text-lg mt-4 text-white z-10 mr- ml-52"
        >
          Ce nouveau chapitre est dédié à la mémoire de Aina Rajaonah, un esprit
          créatif et passionné qui a fait de notre cuisine un symbole de
          liberté. Kanoa, un restaurant qui inspire la liberté.
        </Typography>
        <Button className="text-white font-bold bg-transparent hover:bg-primary px-4 py-2 rounded-md mt-4 z-10">
          <Typography variant="p">Voir plus</Typography>
        </Button>
        {/* <IntroPages /> */}
      </div>
      <IntroPages />
      <ListPages />
     

      {/* <div className="flex justify-center">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d292.7179929877883!2d47.4867966602574!3d-18.917608891796494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x21f07e53385c1b07%3A0x1e15264a8a703672!2sAmbaniala%2C%20Tananarive!3m2!1d-18.9251926!2d47.4895028!4m5!1s0x21f5011306f10df7%3A0xd55b2c2d602e4c57!2sKanoa!3m2!1d-18.9175932!2d47.486831599999995!5e1!3m2!1sfr!2smg!4v1727870763544!5m2!1sfr!2smg" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="w-full max-w-lg h-96" // Ajout de classes pour rendre l'iframe responsive
            ></iframe>
        </div> */}
    </Layout>
  );
};export default welcomePage;
