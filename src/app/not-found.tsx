"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertTriangle, Cloud } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-fest-yellow pt-20 px-4 bg-halftone relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* GLOBAL GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

      {/* BACKGROUND CLOUDS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ x: ["-10%", "110%"] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
            className="absolute top-20 left-0 text-white/40"
          >
             <Cloud size={200} fill="currentColor" />
          </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl">
        
        {/* ANIMATED 404 TEXT */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="relative"
        >
            <h1 className="font-bangers text-[10rem] md:text-[15rem] leading-none text-fest-red text-stroke-4 drop-shadow-funky">
                404
            </h1>
            
            {/* BROKEN KITE DECORATION */}
            <motion.div 
                animate={{ rotate: [10, -10, 10], y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 md:-right-20 rotate-12"
            >
                <div className="bg-white border-4 border-black p-2 rotate-12 shadow-sm">
                    <AlertTriangle size={64} className="text-black" />
                </div>
            </motion.div>
        </motion.div>

        {/* ERROR MESSAGE */}
        <div className="bg-white border-4 border-black p-8 shadow-funky -rotate-2 mt-8">
            <h2 className="font-bangers text-4xl md:text-5xl text-black mb-2">
                KITE STRING BROKEN!
            </h2>
            <p className="font-poppins font-bold text-xl text-gray-600">
                The page you are looking for has flown away or doesn't exist.
            </p>
        </div>

        {/* BACK TO HOME BUTTON */}
        <div className="mt-12">
            <Link href="/">
                <motion.button 
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white font-bangers text-3xl px-12 py-4 border-4 border-white shadow-funky hover:bg-fest-sky hover:text-black hover:border-black transition-colors flex items-center gap-3 mx-auto"
                >
                    <Home size={32} /> TAKE ME HOME
                </motion.button>
            </Link>
        </div>

      </div>
    </main>
  );
}