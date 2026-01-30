"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Star, Users, Music2, Plus, Minus } from "lucide-react";

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
                    THE STORY
                </h1>
            </div>
            
            <div className="prose prose-lg font-poppins text-black font-medium text-lg leading-relaxed text-justify md:text-center max-w-3xl mx-auto">
                <p className="mb-6">
                    <span className="font-bangers text-3xl text-fest-red">MAKAR SANKRANTI FEST 2026</span> is not just an event; it's a movement. It is a <span className="bg-fest-yellow px-2 border-2 border-black font-bold">two-day mega cultural festival</span> celebrating the spirit of togetherness while showcasing Assam's and India's rich heritage. 
                </p>
                <p className="mb-6">
                    What started as a simple idea to fly kites has turned into a massive gathering. The event is expected to attract a diverse audience from across <span className="bg-fest-sky px-2 border-2 border-black font-bold">Assam and neighboring states</span>, bringing everyone under one colorful sky in Sonai, Silchar.
                </p>
                <p>
                    We don't do boring. We do mud, music, culture, and kites that touch the clouds.
                </p>
            </div>

            {/* STATS GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatBox icon={<Calendar />} value="2 DAYS" label="Non-Stop Vibes" color="bg-fest-orange" />
                <StatBox icon={<Users />} value="5000+" label="Expected Crowd" color="bg-fest-green" />
                <StatBox icon={<Music2 />} value="20+" label="Artists & Bands" color="bg-fest-red" />
            </div>

        </div>

        {/* --- FAQ SECTION (Accordion) --- */}
        <div className="max-w-3xl mx-auto">
            <h2 className="font-bangers text-5xl text-center text-white text-stroke-4 mb-8 drop-shadow-funky">
                WTF (WHAT TO FESTIVAL)
            </h2>
            
            <div className="flex flex-col gap-4">
                <FAQItem 
                    question="Where exactly is the venue?" 
                    answer="The festival is happening at the Riverfront Grounds in Sonai, Silchar. Just follow the giant kites in the sky!"
                    color="bg-fest-yellow"
                />
                <FAQItem 
                    question="Is parking available?" 
                    answer="Yes! We have a dedicated parking zone near the main entrance. It is paid parking, so carpool if you can to save money and the planet."
                    color="bg-fest-sky"
                />
                <FAQItem 
                    question="Can I bring my own kite?" 
                    answer="Absolutely! But we also provide a 'Pro Kite Kit' with every ticket, so you don't strictly need to."
                    color="bg-fest-orange"
                />
                <FAQItem 
                    question="Are food and drinks included?" 
                    answer="No, but we have a curated 'Food Street' with the best local stalls from Silchar. Cash and UPI are accepted everywhere."
                    color="bg-fest-green"
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
          <span className="font-bangers text-xl md:text-2xl tracking-wide group-hover:translate-x-1 transition-transform">{question}</span>
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
                    <div className="bg-white border-4 border-t-0 border-black p-6 font-poppins font-medium text-gray-800 leading-relaxed">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    );
  }