"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import event from "../../../public/images/event.jpg";
import livraison from "../../../public/images/16.jpg";
import { Typography } from "../ui/Typography";
import Image, { StaticImageData } from "next/image";
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
      description: "Le restaurant Kanoa propose désormais un service de livraison pour ses délicieux plats. Que vous soyez à la maison ou au bureau, vous pouvez profiter de leurs spécialités culinaires sans avoir à vous déplacer. Ce service est conçu pour offrir une expérience gastronomique pratique et agréable, directement à votre porte.\n\nEn plus de la livraison, Kanoa s'engage à maintenir la qualité et la fraîcheur de ses plats. Chaque commande est préparée avec soin et livrée rapidement pour garantir que vous receviez vos repas dans les meilleures conditions. Profitez de la cuisine de Kanoa où que vous soyez!",
      imageURL: livraison,
    },
    {
      id: 1,
      description: "Kanoa propose un service traiteur pour tous vos événements. Que ce soit un anniversaire, un mariage, une réunion d'affaires ou un événement spécial, nous avons tout ce qu'il vous faut pour ravir vos invités.\n\nNos plats savoureux sont préparés avec des ingrédients frais et de qualité, reflétant l'authenticité de la cuisine de Kanoa. Nos chefs expérimentés se chargent de chaque détail, vous permettant de vous concentrer sur vos invités et de profiter de chaque moment.\n\nAvec une variété de menus personnalisables, vous pouvez choisir des plats qui correspondent à vos préférences et à celles de vos invités. De plus, notre équipe de service est dédiée à offrir un service impeccable, veillant à ce que votre événement soit mémorable et sans stress.\n\nFaites confiance à Kanoa pour transformer vos événements en véritables célébrations culinaires!",
      imageURL: event,
    },
  ];
  
  return (
    <div className="items-center justify-center gap-8 ml-[10%] mr-[5%]">
      <Carousel   
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //     stopOnInteraction: false,
        //     stopOnMouseEnter: true,
        //   }),
        // ]}
      >
        <CarouselContent>
          {items.map(item => (
            <CarouselItem key={item.id}>
              <div className="relative z-10 text-white mb-14 ml-[20%] mr-[20%]">
                <div className="flex flex-col md:flex-row items-center justify-between mb-14">
                  <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
                    <Typography variant="h1" className="text-4xl font-bold mt-52">
                      {item.id === 0 ? "Livraison" : "Service Traiteur"}
                    </Typography>
                    <Typography variant="p" className="text-white">
                      {item.description}
                    </Typography>
                  </div>
                  <div className="md:w-1/2 mt-28">
                    <Image
                      src={item.imageURL}
                      alt={item.id === 0 ? "Service Traiteur" : "Livraison"}
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
    </div>
  );
};
export default slidePages;