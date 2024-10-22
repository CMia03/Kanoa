// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: email, 
      subject: subject,
      text: message, 
    };

    try {
      // Envoyer l'email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email envoyé avec succès !!!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }
}
