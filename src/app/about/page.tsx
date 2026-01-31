"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Star, Users, Music2, Plus, Minus, AlertCircle } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-fest-sky pt-32 pb-20 px-4 bg-halftone relative overflow-hidden">
      
      {/* GLOBAL GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

      {/* DECORATIVE BACKGROUND ICONS */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[-100px] w-64 h-64 border-4 border-black border-dashed rounded-full opacity-20 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- MAIN STORY CARD --- */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-funky rotate-1 mb-16 relative">
            
            {/* PIN DECORATION */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-fest-red border-4 border-black shadow-sm z-20"></div>

            <div className="text-center mb-10">
                <span className="font-poppins font-bold tracking-widest bg-black text-white px-4 py-1 -rotate-2 inline-block mb-4">
                    EST. 2026
                </span>
                <h1 className="font-bangers text-6xl md:text-8xl text-black text-stroke-2 leading-none">
                    THE VISION
                </h1>
            </div>
            
            <div className="prose prose-lg font-poppins text-black font-medium text-lg leading-relaxed text-justify md:text-center max-w-3xl mx-auto">
                <p className="mb-6">
                    <span className="font-bangers text-3xl text-fest-red">MAKAR SANKRANTI FEST 2026</span> is Silchar's biggest cultural convergence. We are bringing together the loudest beats, the tastiest local flavors, and a community that knows how to celebrate.
                </p>
                <p className="mb-6">
                    It is not just about a concert; it is about reclaiming our weekends. From top-tier artist lineups to curated flea markets, we are building a <span className="bg-fest-yellow px-2 border-2 border-black font-bold">safe, high-energy space</span> for the youth of Assam to connect and vibe.
                </p>
                <p>
                    We don't do boring. We do loud, proud, and unforgettable.
                </p>
            </div>

            {/* STATS GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatBox icon={<Calendar />} value="2 DAYS" label="Non-Stop Vibes" color="bg-fest-orange" />
                <StatBox icon={<Users />} value="10000+" label="Expected Crowd" color="bg-fest-green" />
                <StatBox icon={<Music2 />} value="20+" label="Artists & Bands" color="bg-fest-red" />
            </div>

        </div>

        {/* --- LOGICAL FAQ SECTION --- */}
        <div className="max-w-3xl mx-auto">
            <h2 className="font-bangers text-5xl text-center text-white text-stroke-4 mb-8 drop-shadow-funky">
                F.A.Q (THE IMPORTANT STUFF)
            </h2>
            
            <div className="flex flex-col gap-4">
                <FAQItem 
                    question="Is my ticket valid for both days?" 
                    answer="No. Unless you have purchased a 'Season Pass' (2-Day Access), your ticket is valid ONLY for the specific date mentioned on it."
                    color="bg-fest-yellow"
                />
                <FAQItem 
                    question="What time do gates open?" 
                    answer="Gates open at 2:00 PM on both days. We recommend arriving early to avoid long queues and catch the opening acts."
                    color="bg-fest-sky"
                />
                <FAQItem 
                    question="Is re-entry allowed?" 
                    answer="No. Once you exit the venue gates, you cannot re-enter with the same ticket. Please carry everything you need (jackets, power banks) with you."
                    color="bg-fest-orange"
                />
                <FAQItem 
                    question="Are food and drinks allowed from outside?" 
                    answer="Strictly NO. We have a curated Food Court inside with diverse options at affordable prices. Water bottles are also not allowed for security reasons (water stations available inside)."
                    color="bg-fest-green"
                />
                <FAQItem 
                    question="Is there an age limit?" 
                    answer="The festival is open to all ages. However, children below 12 must be accompanied by an adult. ID proof is mandatory for entry."
                    color="bg-white"
                />
                 <FAQItem 
                    question="What about parking?" 
                    answer="Limited paid parking is available near the venue on a first-come-first-serve basis. We strongly suggest carpooling or using public transport to avoid traffic congestion."
                    color="bg-fest-red text-white"
                />
            </div>
        </div>

      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function StatBox({ icon, value, label, color }: any) {
    return (
        <div className={`${color} p-6 border-4 border-black shadow-funky-sm flex flex-col items-center justify-center hover:scale-105 transition-transform`}>
            <div className="mb-2 text-black">{icon}</div>
            <h3 className="font-bangers text-4xl text-white text-stroke-2">{value}</h3>
            <p className="font-poppins font-bold text-black uppercase tracking-wide text-sm">{label}</p>
        </div>
    )
}

function FAQItem({ question, answer, color }: any) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left p-4 md:p-6 border-4 border-black shadow-funky-sm flex justify-between items-center ${isOpen ? color : 'bg-white'} transition-colors duration-200 group`}
        >
          <span className={`font-bangers text-xl md:text-2xl tracking-wide group-hover:translate-x-1 transition-transform ${color.includes('text-white') && isOpen ? 'text-white' : 'text-black'}`}>
            {question}
          </span>
          <div className="bg-black text-white p-1 rounded border-2 border-black">
             {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>
        </button>
        
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="bg-white border-4 border-t-0 border-black p-6 font-poppins font-medium text-gray-800 leading-relaxed text-lg">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    );
  }