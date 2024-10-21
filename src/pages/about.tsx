import React from "react";
import Layout from "@/components/layout";
import { Typography } from "@/components/ui/Typography";
import FondImage from "../../public/images/menu.png";
import Image from "next/image";
import menuKanoa from "../../public/images/10.jpg";
import boissonKanoa from "../../public/images/9.jpg";
import portraitRobo from "../../public/images/11.jpg";
import Logo from "../../public/images/logo.jpg";
import { LucideIcon, MapPin, Phone } from "lucide-react";
import { StaticImageData } from "next/image";
// import ListPages from "@/components/kanoa/list";
// import introPages from "@/components/kanoa/introdution";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

type CardItem = {
  id: number;
  title: string;
  icon: LucideIcon;
  info: string;
};

export type ItemType = {
  id: number;
  imageURL: StaticImageData;
};

const aboutPage = () => {
  const cardItems: CardItem[] = [
    {
      id: 1,
      icon: Phone,
      title: "Numéro de téléphone",
      info: "032 28 237 98",
    },
    {
      id: 2,
      title: "Localisation",
      icon: MapPin,
      info: "Ambaniala Itaosy",
    },
  ];
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
            Bienvenu chez Kanoa
          </Typography>

          <Typography
            variant="p"
            className="text-lg mt-4 text-white z-10 text-left md:text-center"
          >
            Ce nouveau chapitre est dédié à la mémoire de Aina Rajaonah, un
            esprit créatif et passionné qui a fait de notre cuisine un symbole
            de liberté. Kanoa, un restaurant qui inspire la liberté.
          </Typography>
          {/* <Button className="text-white font-bold bg-transparent hover:bg-primary px-4 py-2 rounded-md mt-4 z-10">
          <Typography variant="p">Voir plus</Typography>
        </Button> */}

          <Typography
            variant="h1"
            className="text-4xl font-bold mt-52 flex flex-row items-center justify-start md:justify-center"
          >
            <Image src={Logo} alt="" className="h-16 w-16 mr-4" />
            <span className="text-left md:text-center">
              C&apos;est quoi Kanoa?
            </span>
          </Typography>

          <Card className="flex flex-row items-start border-collapse mt-20 mb-14">
            <div className="w-1/2 p-2 md:p-4">
              <CardHeader className="flex">
                <CardTitle className="font-bold">
                  <Typography variant="p" className="flex text-sm md:text-base">
                    Kanoa Restaurant
                  </Typography>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Typography variant="p" className="text-xs md:text-base">
                  Kanoa, un restaurant situé à Itaosy Ambaniala, incarne
                  l&apos;esprit de liberté à travers sa cuisine. Ce lieu est
                  dédié à la mémoire de <b>Aina Rajaonah</b>, un esprit créatif
                  et passionné qui a transformé notre art culinaire en un
                  symbole de libération. Chez Kanoa, chaque plat est une
                  invitation à célébrer la liberté.
                </Typography>
              </CardContent>
            </div>
            <div className="w-1/2 p-2 md:p-4 flex justify-center items-center">
              <Image
                src={portraitRobo}
                alt="Portrait"
                className="md:w-64 md:h-64 rounded-full object-cover"
              />
            </div>
          </Card>

          <Typography variant="h1" className="my-[30px] text-start md:text-center">
            Nos menus
          </Typography>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-3 px-4 md:px-0">
            <Image
              src={menuKanoa}
              alt="Menu"
              className="w-full md:w-1/2 max-w-[400px] h-auto object-cover mx-auto"
            />
            <Image
              src={boissonKanoa}
              alt="Menu"
              className="w-full md:w-1/2 max-w-[400px] h-auto object-cover mx-auto"
            />
          </div>

          <Typography
            variant="h1"
            className="my-[30px] text-start md:text-center"
          >
            Nos coordonnées
          </Typography>

          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center mt-3">
            {cardItems.map((item) => (
              <Card key={item.id} className="w-full md:w-[calc(50%-1rem)]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <item.icon
                      size={25}
                      strokeWidth={1}
                      className="mr-2 text-purple-900"
                    />
                    {item.title}
                  </CardTitle>
                  <Typography variant="p" className="text-sm ml-8">
                    {item.info}
                  </Typography>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="flex justify-center w-full mt-10 mb-[10%] h-[437px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.311368384309!2d47.48424787611907!3d-18.917607207585082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f5011306f10df7%3A0xd55b2c2d602e4c57!2sKanoa!5e0!3m2!1sfr!2smg!4v1727939022893!5m2!1sfr!2smg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default aboutPage;
