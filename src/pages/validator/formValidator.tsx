import { z } from 'zod';

export const createContactFormSchema = () => {
  return z
    .object({
      nom: z.string().min(1, { message: "Nom est requis" }),
      prenom: z.string().min(1, { message: "Prénom est requis" }),
      email: z.string().email({ message: "Email invalide" }),
      password: z.string().min(6, { message: "Mot de passe requis (6 caractères minimum)" }),
      confirmPassword: z.string().min(1, { message: "Confirmation du mot de passe requise" }),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: "custom",
          path: ["confirmPassword"],
          message: "Les mots de passe ne correspondent pas",
        });
      }
    });
};

export default createContactFormSchema;
