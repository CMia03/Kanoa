// components/Footer.js
import { Phone, MapPinCheckInside } from "lucide-react";
import { Typography } from "./ui/Typography";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-4 bg-gray-800 text-white">
    <div className="flex items-center mb-2 md:mb-0">
      <Phone className="inline-block h-6 w-6 ml-2" /> &nbsp; 032 28 237 98
    </div>
    <div className="flex items-center mb-2 md:mb-0">
      <MapPinCheckInside className="inline-block h-6 w-6" /> &nbsp; Ambaniala - Itaosy
    </div>
    <Typography variant="p" className="text-center md:text-right mr-10 mt-0">
      &copy; {new Date().getFullYear()} KANOA RESTAURANT. Tous droits réservés.
    </Typography>
  </footer>
  );
}
