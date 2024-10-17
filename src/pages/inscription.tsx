import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

const InscriptionPages = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

    const handleSubmit = async() => {
      console.log("Nom:", nom);
      console.log("Prénom:", prenom);
      console.log("Email:", email);

      setNom("");
      setPrenom("");
      setEmail("");

      const response = await axios.get("/api/user");
      console.log(response.data);
    //   alert(`Les inscrits sont ${JSON.stringify(response.data)}`);
    };

  const handleRegister = async () => {
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Email:", email);

    try {
      const response = await axios.post("/api/register", {
        nom,
        prenom,
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-4 items-center justify-center gap-8 text-start md:items-center">
        <Typography
          variant="h1"
          className="font-bold text-start md:text-center mt-10 mb-10 mx-4"
        >
          Merci de vous inscrire
        </Typography>
        <Card className="">
          <CardHeader className="">
            <CardTitle className="font-bold">
              <Typography
                variant="p"
                className="font-bold text-start md:text-center mx-4"
              >
                Merci de remplir les champs
              </Typography>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              className="mt-6"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <Input
              type="text"
              className="mt-6"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            <Input
              type="email"
              className="mt-6"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />

            <div className="flex flex-col items-center justify-center">
              <Button
                className="mt-8 justify-center items-center"
                onClick={handleRegister}
              >
                Enregistrer
              </Button>
              <Button
                className="mt-8 justify-center items-center"
                onClick={handleSubmit}
              >
                Liste des inscrits
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default InscriptionPages;
