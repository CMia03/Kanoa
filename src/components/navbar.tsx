// components/Navbar.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "../../public/images/logo.jpg";
import Image from "next/image";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/welcome");

  useEffect(() => {
    // Met à jour le lien actif en fonction de l'URL actuelle
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Met à jour l'état du lien actif
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          {/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <Mountain className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link> */}
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image src={Logo} alt="logo" className="h-6 w-6" />
            {/* <span className="sr-only">Acme Inc</span> */}
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="/welcome"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Acceuil
            </Link>
            <Link
              href="/about"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              A propos
            </Link>
            <Link
              href="/services"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      {/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Mountain className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link> */}
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image src={Logo} alt="logo" className="h-20 w-20" />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          href="/welcome"
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeLink === "/welcome"
              ? "text-[#6E0B14] text-white"
              : "bg-white hover:bg-gray-100 hover:text-gray-900"
          } focus:outline-none`}
          onClick={() => handleLinkClick("/welcome")}
          prefetch={false}
        >
          Accueil
        </Link>
        <Link
          href="/about"
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeLink === "/about"
              ? "text-[#6E0B14] text-white"
              : "bg-white hover:bg-gray-100 hover:text-gray-900"
          } focus:outline-none`}
          onClick={() => handleLinkClick("/about")}
          prefetch={false}
        >
          À propos
        </Link>
        <Link
          href="/services"
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeLink === "/services"
              ? "text-[#6E0B14] text-white"
              : "bg-white hover:bg-gray-100 hover:text-gray-900"
          } focus:outline-none`}
          onClick={() => handleLinkClick("/services")}
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeLink === "/contact"
              ? "text-[#6E0B14] text-white"
              : "bg-white hover:bg-gray-100 hover:text-gray-900"
          } focus:outline-none`}
          onClick={() => handleLinkClick("/contact")}
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
