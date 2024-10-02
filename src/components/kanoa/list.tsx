"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import imageA from "../../../public/images/1.jpg";
import imageB from "../../../public/images/2.jpg";
import imageC from "../../../public/images/3.jpg";
import imageD from "../../../public/images/4.jpg";
import { Typography } from "../ui/Typography";
import { StaticImageData } from "next/image";

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
      <div className="items-center justify-center gap-8 ml-[10%] mr-[5%]">
        <Typography variant="h1" className="text-4xl font-bold text-center mt-10 mb-10">Réveillez Vos Émotions avec Chaque Bouchée</Typography>
        <Typography variant="p" className="text-lg text-center mt-10 mb-10 mr-[30%] ml-[30%]">
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
          }}
          className="w-full h-screen max-w-full mx-auto items-center justify-center mb-0 mt-0" // Full width and height of the screen
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="max-w-full max-h-full">
                  {" "}
                  {/* Full size for the card container */}
                  <Card className="h-full">
                    {" "}
                    {/* Ensure card takes full height */}
                    <CardContent className="flex h-full items-center justify-center p-0">
                      {" "}
                      {/* No padding for full size */}
                      {item.imageURL && (
                        <img
                          src={item.imageURL.src}
                          alt={`Image ${item.id}`} // Alternative text for accessibility
                          className="w-full h-full object-cover"
                          width={1920} // Wider image size
                          height={1080} // Adjusted height for a landscape orientation
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
export default listPages;
