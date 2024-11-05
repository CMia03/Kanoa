"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel";
import event from "../../../public/images/event.jpg";
import livraison from "../../../public/images/16.jpg";
import { Typography } from "../ui/Typography";
import { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// import Autoplay from "embla-carousel-autoplay";

export type ItemType = {
  id: number;
  description: string;
  imageURL: StaticImageData;
};
const slidePages = () => {
  const items: ItemType[] = [
    {
      id: 0,
      description: "Le restaurant Kanoa propose un service de livraison pour ses plats délicieux, que vous soyez à la maison ou au bureau. Ce service vise à offrir une expérience gastronomique pratique, avec un engagement pour la qualité et la fraîcheur de chaque commande, livrée rapidement pour garantir votre satisfaction. Profitez de la cuisine de Kanoa où que vous soyez !",
      imageURL: livraison,
    },
    {
      id: 1,
      description: "Kanoa propose un service traiteur pour tous vos événements, qu'il s'agisse d'un anniversaire, d'un mariage ou d'une réunion d'affaires. Nos plats savoureux, préparés avec des ingrédients frais, reflètent l'authenticité de notre cuisine. Avec une variété de menus personnalisables, vous pouvez choisir des plats adaptés à vos préférences. Notre équipe s'assure également d'un service impeccable pour faire de votre événement une célébration mémorable. Faites confiance à Kanoa pour un service traiteur exceptionnel !",
      imageURL: event,
    },
  ];
  
  return (
    <div className="items-center justify-center gap-8 ml-[10%] mr-[5%] mt-6 mb-6">
     <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id} className="">
                <div>
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <div className="flex flex-row items-center justify-center p-8">

                        <Typography variant="p" className="text-start md:text-center">{item.description}</Typography>
                      {item.imageURL && (
                        <img
                          src={item.imageURL.src}
                          alt=""
                          width={200}
                          height={100}
                          className="mt-3 mr-2 ml-2 hidden md:block"
                        />
                      )}
                      </div>
                   
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  );
};
export default slidePages;