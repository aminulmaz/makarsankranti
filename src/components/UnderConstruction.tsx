"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer, HardHat, Wrench, ArrowLeft, Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-fest-yellow pt-32 pb-20 px-4 bg-halftone relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* GLOBAL GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

      {/* ANIMATED BACKGROUND ICONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
          {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ y: "110vh", x: Math.random() * 100 + "vw", rotate: 0 }}
               animate={{ y: "-10vh", rotate: 360 }}
               transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 2 }}
               className="absolute text-black"
             >
                <Construction size={80 + Math.random() * 40} />
             </motion.div>
          ))}
      </div>

      <div className="relative z-10 max-w-3xl">
        
        {/* ANIMATED GRAPHIC */}
        <div className="flex justify-center mb-8 relative">
            <motion.div 
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white border-4 border-black p-4 rounded-full shadow-funky relative z-10"
            >
                <HardHat size={80} className="text-fest-orange fill-current" />
            </motion.div>
            
            {/* Hammer hitting the hat */}
            <motion.div 
                animate={{ rotate: [0, -45, 0], x: [0, -20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                className="absolute -right-12 top-0 text-black z-20"
            >
                <Hammer size={60} fill="gray" />
            </motion.div>

             {/* Wrench spinning */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -left-12 bottom-0 text-black z-0"
            >
                <Wrench size={60} />
            </motion.div>
        </div>

        {/* TEXT CONTENT */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-funky rotate-1">
            <h1 className="font-bangers text-5xl md:text-7xl text-black mb-2">
                BUILDING THE STAGE...
            </h1>
            <p className="font-poppins font-bold text-xl md:text-2xl text-gray-600 mb-6">
                The festival site is currently under maintenance. <br/>
                We are tuning the speakers. Be right back!
            </p>
            
            {/* PROGRESS BAR */}
            <div className="w-full h-6 border-4 border-black rounded-full p-1 mb-2">
                <motion.div 
                    initial={{ width: "10%" }}
                    animate={{ width: ["10%", "40%", "60%", "45%", "80%"] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-fest-red rounded-full relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.3)_75%,transparent)] bg-[length:10px_10px]"></div>
                </motion.div>
            </div>
            <p className="font-poppins text-xs font-bold text-gray-400 text-right">MAINTENANCE MODE: ACTIVE</p>
        </div>

      </div>
    </main>
  );
}