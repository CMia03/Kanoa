import React from 'react';
import Layout from '@/components/layout';
import { Typography } from '@/components/ui/Typography';
import { LucideIcon, MapPin, Phone, Facebook } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import FondImage from "../../public/images/menu.png";

type CardItem = {
  id: number;
  title: string;
  icon: LucideIcon;
  info: string;
  url?: string;
};

const contactPage = () => {
  const cardItems: CardItem[] = [
    {
      id: 1,
      icon: Phone,
      title: "Contact",
      info: "032 28 237 98",
    },
    {
      id: 2,
      title: "Localisation",
      icon: MapPin,
      info: "Ambaniala Itaosy",
    },
    {
      id: 3,
      title: "Facebook",
      icon: Facebook,
      info: "Kanoa",
      url: "https://www.facebook.com/profile.php?id=61554626344330"
    }

  ];
  return (
    <Layout>
      <div
        className="relative flex flex-col items-center h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${FondImage.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white mr-[10%] ml-[10%] mt-20 w-[80%]">
          <Typography variant="h1" className="my-[30px] text-left md:text-center">
            Nos coordonnées
          </Typography>
          <Typography variant="p" className="text-left md:text-center">
            Faites de chaque repas une célébration ! Rejoignez-nous pour une expérience gastronomique unique.
          </Typography>


          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4 mt-6">
            {cardItems.map(item => (
              <Card
                key={item.id}
                className="w-full md:w-[calc(50%-1rem)] max-w-[500px] flex-1"
              >
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
export default contactPage;