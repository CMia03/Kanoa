import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { Mail, Facebook } from 'lucide-react';


const AuthPages = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data: session } = useSession();
    const { data: sessionFacebook } = useSession();

    const handleSubmit = async () => {
        console.log("Email:", email);
        console.log("Mot de passe:", password);

    };
    return (
        <>
            <div className="mx-4 items-center justify-center gap-8 text-start md:items-center">
                <Typography
                    variant="h1"
                    className="font-bold text-start md:text-center mt-10 mb-10 mx-4"
                >
                    Connectez-vous
                </Typography>
                <Card className="">
                    <CardContent>
                        <Input
                            type="email"
                            className="mt-6"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                        <Input
                            type="password"
                            className="mt-6"
                            placeholder="identifiant"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="flex flex-row gap-4 justify-start">
                            <Button
                                className="mt-8 justify-center items-center"
                                onClick={handleSubmit}
                            >
                                Connectez
                            </Button>
                            <Button
                                className="mt-8 justify-center items-center"
                                onClick={() => signOut()}
                            >
                                Deconnecter
                            </Button>
                        </div> <br />

                        <Button onClick={() => signIn("google")}>
                            Se Connectez avec Google     <Mail />
                        </Button>
                        <Button onClick={() => signIn("facebook")}>
                            Se Connectez avec Facebook     <Mail />
                        </Button>

                        <div>
                            {sessionFacebook && sessionFacebook.user?.name && (
                                <Typography variant="p">Vous êtes connecté en tant que {sessionFacebook.user.name}</Typography>
                            )}

                        </div>
                        {session && session.user?.name && (
                            <Typography variant="p">Vous êtes connecté en tant que {session.user.name}</Typography>
                        )}
                        {session && session.user?.email && (
                            <Typography variant="p">Votre adresse email est {session.user.email}</Typography>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
export default AuthPages;