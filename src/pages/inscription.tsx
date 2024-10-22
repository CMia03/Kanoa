import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useAuth } from "./context/AuthContext";
const InscriptionPages = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [inscrits, setInscrits] = useState([]);
  const sessionAuth = useAuth();
  const session = sessionAuth.data;
  console.log(session);

  useEffect(() => {
    // Si l'email existe dans la session, l'initialiser dans l'état
    if (session && session.user?.email) {
      setEmail(session.user.email);
    }
    if(session && session.user?.name) {
      setNom(session.user.name);
    }
  }, [session]);

  const handleSubmit = async () => {
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Email:", email);
    const response = await axios.get("/api/user");
     console.log(">>>>>>>>>>>>", response.data.users);
    const result = response.data.users 
    setInscrits(result)

    
    //   alert(`Les inscrits sont ${JSON.stringify(response.data)}`);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/register", {
        nom,
        prenom,
        email,
      });
      setNom("");
      setPrenom("");
      setEmail("");
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

            <div className="flex flex-row gap-4 justify-start">
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

            {inscrits.length > 0 && (
        <div className="mt-4">
          <Typography variant="p">Liste des inscrits :</Typography>
          <ul>
  {inscrits.map((inscrit: { nom: string; prenom: string; email: string }, index: number) => (
    <li key={index}>
      {inscrit.nom} {inscrit.prenom} - {inscrit.email}
    </li>
  ))}
</ul>

        </div>
      )}
            
          </CardContent>
        </Card>
      </div>
    </>
  );
};export default InscriptionPages;
