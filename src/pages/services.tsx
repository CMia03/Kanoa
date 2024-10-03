import React from "react";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/Typography";
import FondImage from "../../public/images/menu.png";
import Livraison from "../../public/images/16.jpg";
import Image from "next/image";

const servicesPage = () => {
  return (
    <Layout>
    <div
      className="relative flex flex-col items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${FondImage.src})` }}
    >
      {/* Superposition noire avec opacité */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      {/* Contenu en texte avec z-index élevé pour le rendre visible par-dessus la superposition */}
      <div className="relative z-10 text-white">
       
  
        <div className="mb-14 ml-[20%] mr-[20%]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <Typography
          variant="h1"
          className="text-4xl font-bold mt-52"
        >
          Nos Services
        </Typography>
              <Typography variant="p" className="text-white">
                Le restaurant Kanoa propose désormais un service de livraison
                pour ses délicieux plats. Que vous soyez à la maison ou au
                bureau, vous pouvez profiter de leurs spécialités culinaires
                sans avoir à vous déplacer. Ce service est conçu pour offrir une
                expérience gastronomique pratique et agréable, directement à
                votre porte.
                <br />
                <br />
                En plus de la livraison, Kanoa s’engage à maintenir la qualité
                et la fraîcheur de ses plats. Chaque commande est préparée avec
                soin et livrée rapidement pour garantir que vous receviez vos
                repas dans les meilleures conditions. Profitez de la cuisine de
                Kanoa où que vous soyez!
              </Typography>
            </div>
            <div className="md:w-1/2 mt-28">
              <Image
                src={Livraison}
                alt="Livraison"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  
  );
};
export default servicesPage;
