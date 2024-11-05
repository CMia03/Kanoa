import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table, TableBody, TableCell, TableHead, TableHeader } from "@/components/ui/table";
import createContactFormSchema from "./validator/formValidator";
import bcrypt from 'bcryptjs';


const InscriptionPages = () => {

 const [message, setMessage] = useState("");
  const schema = createContactFormSchema();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [inscrits, setInscrits] = useState([]);

  const handleList = async () => {
    const response = await axios.get("/api/user");
    const result = response.data.users
    setInscrits(result)
  };

  const onSubmit = async (data: FieldValues) => {
    console.log("Form data submitted:", data);

    const validation = schema.safeParse(data);

    if (!validation.success) {
      // Handle validation errors, e.g., display messages
      console.error("Validation errors:", validation.error.errors);
      return;
    }
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const hashedConfirmPassword = await bcrypt.hash(data.confirmPassword, 10);
      const userData = {
        ...data,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      };
      
      const response = await axios.post("/api/register", {
        userData
      });
      reset();
      setMessage(response.data.message); 
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
        <Card className="border-blue-700">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              className="mt-6 border-gray-400"
              placeholder="Nom"
              {...register("nom")}
            />
            {errors.nom && (
              <Typography variant="p" className="text-red-500 text-sm">{errors.nom.message?.toString()}</Typography>
            )}
            <Input
              type="text"
              className="mt-6 border-gray-400"
              placeholder="Prénom"
              {...register("prenom")}
            />
             {errors.prenom && (
              <Typography variant="p" className="text-red-500 text-sm">{errors.prenom.message?.toString()}</Typography>
            )}
            <Input
              type="email"
              className="mt-6 border-gray-400"
              placeholder="Email"
              {...register("email")}
            />
             {errors.email && (
              <Typography variant="p" className="text-red-500 text-sm">{errors.email.message?.toString()}</Typography>
            )}

            <Input
              type="password"
              className="mt-6 border-gray-400"
              placeholder="votre mot de passe"
              {...register("password")}
            />
             {errors.password && (
              <Typography variant="p" className="text-red-500 text-sm">{errors.password.message?.toString()}</Typography>
            )}

            <Input
              type="password"
              className="mt-6 border-gray-400"
              placeholder="Confirmer votre mot de passe"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <Typography variant="p" className="text-red-500 text-sm">{errors.confirmPassword.message?.toString()}</Typography>
            )}

            <div className="flex flex-row gap-4 justify-start">
              <Button
                className="mt-8 justify-center items-center"
                type="submit"
              >
                Enregistrer
              </Button>
              
            
            </div>
            {message && <Typography variant="p" className="text-green-500 text-sm mt-6">{message}</Typography>}
          </form>
          <Button
                className="mt-8 justify-center items-center"
                onClick={handleList}
              >
                Liste des inscrits
              </Button>


            {inscrits.length > 0 && (
              <div className="mt-4">
                <Typography variant="p">Liste des inscrits :</Typography>
                <Table className="mt-4">
                  <TableHeader className="bg-gray-200">
                    <TableHead><Typography variant="p">Nom</Typography></TableHead>
                    <TableHead><Typography variant="p">Prénom</Typography></TableHead>
                    <TableHead><Typography variant="p">Email</Typography></TableHead>
                  </TableHeader>
                  <TableBody>
                    {inscrits.map((inscrit: { nom: string; prenom: string; email: string }, index: number) => (
                      <tr key={index}>
                        <TableCell><Typography variant="p">{inscrit.nom}</Typography></TableCell>
                        <TableCell><Typography variant="p">{inscrit.prenom}</Typography></TableCell>
                        <TableCell><Typography variant="p">{inscrit.email}</Typography></TableCell>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}; export default InscriptionPages;