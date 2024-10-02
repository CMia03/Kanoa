// components/Footer.js
import { Phone, MapPinCheckInside } from "lucide-react";
import { Typography } from "./ui/Typography";

export default function Footer() {
  return (
    <footer className="flex justify-between py-4 bg-gray-800 text-white">
      <div className="flex items-center ml-10">
        <Phone className="inline-block h-6 w-6" /> &nbsp; 032 28 237 98
        
      </div>
      <div className="flex items-center ml-10">
      <MapPinCheckInside className="inline-block h-6 w-6" /> &nbsp; Ambaniala - Itaosy
        
      </div>
      <Typography variant="p" className="text-right mr-10">
        &copy; {new Date().getFullYear()} KANOA RESTAURANT. Tous droits réservés.
      </Typography>
    </footer>
  );
}
