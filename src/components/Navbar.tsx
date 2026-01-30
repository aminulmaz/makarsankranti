"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // UPDATED LINKS LIST: Added "Stalls"
  const links = [
    { name: "Home", href: "/" },
    { name: "Lineup", href: "/lineup" },
    { name: "Stalls", href: "/stalls" }, // <--- NEW LINK ADDED HERE
    { name: "Tickets", href: "/tickets" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white border-4 border-black shadow-funky rounded-2xl flex justify-between items-center p-2 md:p-3">
            
            {/* LOGO IMAGE */}
            <Link href="/" className="relative block w-32 h-12 md:w-40 md:h-14 hover:scale-105 transition-transform">
               <Image 
                 src="/logo.png" 
                 alt="Makar Sankranti Festival" 
                 fill
                 className="object-contain"
                 priority
               />
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`font-bangers text-xl tracking-wide hover:-translate-y-1 transition-transform ${
                    pathname === link.href ? "text-fest-red underline decoration-4 decoration-black" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/tickets">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-fest-red font-bangers text-white text-lg px-6 py-2 border-4 border-black shadow-funky-sm rounded-xl hover:bg-fest-orange transition-colors"
                >
                    BUY PASSES
                </motion.button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden bg-black text-white p-2 rounded-lg"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-fest-yellow border-4 border-black shadow-funky rounded-2xl p-6 flex flex-col gap-4 text-center">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bangers text-3xl text-black hover:text-fest-red"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/tickets" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-black text-white font-bangers text-2xl py-3 rounded-xl mt-2">
                  GRAB TICKETS
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}