import React from "react";
import { Typography } from "../ui/Typography";
import Image from "next/image";
import portrait from "../../../public/images/portrait.jpeg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import Logo from "../../../public/images/logo.jpg";

const introPages = () => {
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center md:items-start border-collapse mt-14 mb-14 ml-[20%] mr-[20%]">
        <div className="w-full md:w-1/2 p-4">
          <CardHeader className="flex">
            <CardTitle className="font-bold">
              <Typography variant="h1" className="flex">
                <Image src={Logo} alt="" className="h-20 w-20" /> &nbsp; Kanoa
                Restaurant
              </Typography>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Typography variant="p">
              Kanoa, un restaurant niché à Itaosy Ambaniala, incarne
              l&apos;esprit de liberté à travers sa cuisine. Ce lieu est dédié à
              la mémoire de Aina Rajaonah, un esprit créatif et passionné qui a
              transformé notre art culinaire en un symbole de libération. Chez
              Konoa, chaque plat est une invitation à célébrer la liberté.
            </Typography>
          </CardContent>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <Image
            src={portrait}
            alt="Portrait"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </Card>
    </>
  );
};

export default introPages;
