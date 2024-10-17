import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const result = await prisma.user.create({
        data: req.body,
      });
      res.status(200).json({ message: 'Creer avec succés', user: result });
    } catch (error) {
      res.status(500).json({ message: 'Erreur', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
