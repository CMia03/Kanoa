import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(">>>>>>>>>>> hellooooo", req.body.userData);
  const existingUser = await prisma.user.findUnique({
    where: { email: req.body.userData.email }, // Check for unique email
  });
  console.log("emaillll", existingUser);

  if (existingUser) {
   console.log("Email déjà utilisé");
    return res.status(200).json({ message: 'Email déjà utilisé' });
  }
  if (req.method === 'POST') {
      try {
      const result = await prisma.user.create({
        data: req.body.userData,
      });
    return  res.status(200).json({ message: 'Creer avec succés', user: result });
    } catch (error) {
      res.status(500).json({ message: 'Erreur', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
