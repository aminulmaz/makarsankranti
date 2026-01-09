"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Menu, X, Ticket } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Lineup", href: "/lineup" },
    { name: "Tickets", href: "/tickets" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white border-4 border-black shadow-funky rounded-2xl flex justify-between items-center p-3 md:p-4">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-fest-orange w-10 h-10 md:w-12 md:h-12 border-4 border-black rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Music className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-bangers text-2xl md:text-3xl tracking-wide mt-1 group-hover:text-fest-red transition-colors">
                MSF '26
              </span>
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