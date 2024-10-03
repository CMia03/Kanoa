import React from "react";
import Layout from "@/components/layout";
import FondImage from "../../public/images/menu.png";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/Typography";
import IntroPages from "@/components/kanoa/introdution";
import ListPages from "@/components/kanoa/list";

const welcomePage = () => {
  return (
    <Layout>
      <div
        className="relative flex flex-col items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${FondImage.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50  "></div>
        <Typography variant="h1" className="text-4xl font-bold text-white z-10 mt-52">
          Bienvenu chez Kanoa
        </Typography>
        <Typography
          variant="p"
          className="text-lg mt-4 text-white z-10 text-center mr-[30%] ml-[30%]"
        >
          Ce nouveau chapitre est dédié à la mémoire de Aina Rajaonah, un esprit
          créatif et passionné qui a fait de notre cuisine un symbole de
          liberté. Kanoa, un restaurant qui inspire la liberté.
        </Typography>
        <Button className="text-white font-bold bg-transparent hover:bg-primary px-4 py-2 rounded-md mt-4 z-10">
          <Typography variant="p">Voir plus</Typography>
        </Button>
      </div>
      <IntroPages />
      <ListPages />
    </Layout>
  );
};export default welcomePage;
