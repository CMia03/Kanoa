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
      <div className="flex items-center justify-center gap-8 ml-[10%] mr-[5%]">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-4">Your Text Title</h2>
          <Typography variant="p" className="text-lg">
            Chez nous, chaque plat est une invitation à un voyage sensoriel. Les
            saveurs s&apos;entrelacent pour créer une expérience inoubliable, où
            la fraîcheur des ingrédients et le savoir-faire s’unissent. Chaque
            bouchée réveille des émotions, transformant un simple repas en un
            moment de partage et de bonheur. Découvrez l&apos;essence de la
            cuisine, où chaque assiette raconte une histoire et chaque saveur
            évoque des souvenirs.
          </Typography>
        </div>
        <Carousel className="w-full max-w-xl mx-auto items-center justify-center mb-20 mt-20">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      {items[index]?.imageURL && (
                        <img
                          src={items[index].imageURL.src}
                          alt={`Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          width={500}
                          height={500}
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
