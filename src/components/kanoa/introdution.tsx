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
      <Card className="flex flex-col md:flex-row text-left md:items-center border-collapse mt-20 mb-14 mx-6">
        <div className="w-full md:w-1/2 p-4 flex justify-center order-1 md:order-2">
          <Image
            src={portrait}
            alt="Portrait"
            className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
          <CardHeader className="flex">
            <CardTitle className="">
              <span className="flex">
                <Image src={Logo} alt="" className="h-20 w-20" /> &nbsp; <Typography variant="p">&nbsp;Kanoa Restaurant</Typography>

              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Typography variant="p">
              Kanoa, un restaurant à Itaosy Ambaniala,
              incarne l'esprit de liberté à travers sa cuisine.
              Ce lieu rend hommage à <b>Aina Rajaonah</b>,
              un créatif passionné qui a transformé notre art culinaire en symbole de libération.
              Chaque plat chez Kanoa invite à célébrer la liberté.
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default introPages;
