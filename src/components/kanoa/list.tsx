"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import imageA from "../../../public/images/1.jpg";
import imageB from "../../../public/images/2.jpg";
import imageC from "../../../public/images/3.jpg";
import imageD from "../../../public/images/4.jpg";
import { Typography } from "../ui/Typography";
import { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";


export type ItemType = {
  id: number;
  imageURL: StaticImageData;
};
const listPages = () => {
  const items: ItemType[] = [
    {
      id: 0,
      imageURL: imageA,
    },
    {
      id: 1,
      imageURL: imageB,
    },
    {
      id: 2,
      imageURL: imageC,
    },
    {
      id: 3,
      imageURL: imageD,
    },
  ];
  return (
    <>
      <div className="items-center justify-center gap-8 text-start md:items-center">
        <Typography variant="h1" className="text-4xl font-bold text-start md:text-center mt-10 mb-10 mx-4">Réveillez Vos Émotions avec Chaque Bouchée</Typography>
        <Typography variant="p" className="text-lg text-start md:items-center mt-10 mb-10 mx-4">
          Chez nous, chaque plat est une invitation à un voyage sensoriel. Les
          saveurs s&apos;entrelacent pour créer une expérience inoubliable, où
          la fraîcheur des ingrédients et le savoir-faire s’unissent. Chaque
          bouchée réveille des émotions, transformant un simple repas en un
          moment de partage et de bonheur. Découvrez l&apos;essence de la
          cuisine, où chaque assiette raconte une histoire et chaque saveur
          évoque des souvenirs.
        </Typography>

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
          className="w-full h-screen mx-auto text-start md:items-center justify-center mb-0 mt-0" // Full width and height of the screen
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id}>
                <div className="flex justify-center">
                  <Card className="w-full max-w-xs md:max-w-md lg:max-w-lg">
                    <CardContent className="flex items-center justify-center p-0">
                      {item.imageURL && (
                        <img
                          src={item.imageURL.src}
                          alt=""
                          className="w-full h-auto object-cover"
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </>
  );
};
export default listPages;
