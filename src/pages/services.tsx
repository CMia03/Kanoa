import React from "react";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/Typography";
import FondImage from "../../public/images/menu.png";
import SlidePages from "@/components/kanoa/slideservices";

const servicesPage = () => {
  return (
    <Layout>
    <div
      className="relative flex flex-col md:items-center text-left h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${FondImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white md:mr-[20%] md:ml-[20%] mx-6">
        <Typography
          variant="h1"
          className="text-4xl font-bold text-white z-10 mt-52 text-left md:text-center"
        >
          Nos services
        </Typography>

        <Typography
          variant="p"
          className="text-lg mt-4 text-white z-10 text-left md:text-center"
        >
        Nous proposons une gamme de services adaptés à vos besoins, notamment un service de livraison pour vos commandes, un service traiteur pour vos événements, ainsi qu'une organisation d'anniversaires sur mesure. Que ce soit pour un repas entre amis, une fête d'entreprise ou un anniversaire mémorable, Kanoa s'engage à offrir une expérience exceptionnelle et à satisfaire toutes vos attentes.
        </Typography>
        <SlidePages />
      

   
      </div>
    </div>
  </Layout>
  );
};
export default servicesPage;
