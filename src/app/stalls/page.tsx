"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // <--- Added Imports
import { Store, Utensils, Palette, ShoppingBag, Phone, ArrowRight, Star, Megaphone } from "lucide-react";

export default function Stalls() {
  
  const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfhFAgpXiWnK7SANNiJButinDeDTfxsFHIWEbSFlrHe_3nWaQ/viewform";

  // 1. STATE FOR FLOATING ICONS (Fixes Hydration Error)
  const [icons, setIcons] = useState<any[]>([]);

  useEffect(() => {
    // Generate random values ONLY on the client
    const newIcons = [...Array(10)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      yStart: "100vh",
      yEnd: "-10vh",
      size: 60 + Math.random() * 40,
      duration: 15 + Math.random() * 10,
      delay: i * 2,
      rotation: [0, 45, -45, 0]
    }));
    setIcons(newIcons);
  }, []);

  return (
    <main className="min-h-screen bg-[#A7F3D0] pt-32 pb-20 px-4 bg-halftone relative overflow-x-hidden">
      
      {/* GLOBAL GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

      {/* FLOATING ICONS BACKGROUND (Now Safe) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
         {icons.map((icon) => (
            <motion.div
              key={icon.id}
              initial={{ y: icon.yStart, x: icon.x + "vw", opacity: 0 }}
              animate={{ y: icon.yEnd, opacity: [0, 1, 0], rotate: icon.rotation }}
              transition={{ duration: icon.duration, repeat: Infinity, delay: icon.delay, ease: "linear" }}
              className="absolute text-black"
            >
               <Store size={icon.size} />
            </motion.div>
         ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-16 relative">
             <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="inline-block bg-fest-red text-white font-bangers text-2xl px-8 py-2 border-4 border-black rotate-[-2deg] mb-6 shadow-funky-sm"
             >
                CALLING ALL VENDORS!
             </motion.div>
             
             <h1 className="font-bangers text-7xl md:text-9xl text-black text-stroke-2 drop-shadow-funky leading-none mb-6">
                STALL<br/><span className="text-fest-yellow text-stroke-4">REGISTRATION</span>
             </h1>

             <p className="font-poppins font-bold text-xl md:text-2xl max-w-2xl mx-auto text-black bg-white/50 p-4 border-2 border-black rounded-xl backdrop-blur-sm">
                Bring your vibe, your brand, and your hustle to <span className="text-fest-red">Makar Sankranti Festival 2026.</span>
             </p>
        </div>

        {/* --- CATEGORIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <CategoryCard title="FOOD" icon={<Utensils size={40}/>} color="bg-fest-orange" delay={0.1} />
            <CategoryCard title="LOCAL BRANDS" icon={<Store size={40}/>} color="bg-fest-sky" delay={0.2} />
            <CategoryCard title="MERCHANDISE" icon={<ShoppingBag size={40}/>} color="bg-fest-yellow" delay={0.3} />
            <CategoryCard title="ART & CRAFTS" icon={<Palette size={40}/>} color="bg-fest-red" delay={0.4} />
        </div>

        {/* --- INFO BOXES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* WHY JOIN */}
            <div className="bg-white border-4 border-black p-8 shadow-funky rotate-1">
                <h3 className="font-bangers text-4xl mb-4 flex items-center gap-3">
                    <Megaphone className="fill-fest-yellow" /> WHY JOIN?
                </h3>
                <ul className="space-y-4 font-poppins font-bold text-lg">
                    <li className="flex items-center gap-3">
                        <Star className="fill-fest-green text-black" /> Massive Footfall (10000+)
                    </li>
                    <li className="flex items-center gap-3">
                        <Star className="fill-fest-sky text-black" /> Prime Location in Sonai
                    </li>
                    <li className="flex items-center gap-3">
                        <Star className="fill-fest-orange text-black" /> Exclusive Branding Space
                    </li>
                </ul>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-black text-white border-4 border-white p-8 shadow-funky -rotate-1 flex flex-col justify-center items-center text-center">
                <h3 className="font-bangers text-4xl mb-2 text-fest-yellow">QUESTIONS?</h3>
                <p className="font-poppins text-gray-300 mb-6">Call us to know more about pricing and sizes.</p>
                <a href="tel:+918638132260" className="bg-fest-green text-black font-bangers text-3xl px-8 py-3 border-4 border-white rounded-full hover:scale-105 transition-transform flex items-center gap-3">
                    <Phone className="fill-black" /> +91 86381 32260
                </a>
            </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="text-center relative">
            <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-12 right-10 md:right-1/3 z-20"
            >
                <div className="bg-fest-red text-white font-bangers text-xl px-4 py-2 border-2 border-black rotate-12 shadow-sm">
                    LIMITED STALLS!
                </div>
            </motion.div>

            <a 
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-fest-yellow text-black font-bangers text-4xl md:text-6xl px-12 md:px-24 py-6 border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all rounded-2xl relative overflow-hidden group"
            >
                <span className="relative z-10 flex items-center gap-4">
                    REGISTER NOW <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform"/>
                </span>
                {/* Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine" />
            </a>
            
            <p className="font-poppins font-bold text-lg mt-6 opacity-60">
                *Stalls are allocated on a first-come-first-serve basis.
            </p>
        </div>

      </div>
    </main>
  );
}

// --- HELPER COMPONENT ---
function CategoryCard({ title, icon, color, delay }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay }}
            whileHover={{ y: -10, rotate: 2 }}
            className={`${color} p-6 border-4 border-black shadow-funky-sm text-center flex flex-col items-center gap-4 h-full`}
        >
            <div className="bg-white p-4 border-4 border-black rounded-full shadow-sm">
                {icon}
            </div>
            <h3 className="font-bangers text-3xl text-black leading-none">{title}</h3>
        </motion.div>
    )
}