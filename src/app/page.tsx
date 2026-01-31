"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image"; 
import Link from "next/link"; 
import { Music, MapPin, Ticket, Star, Mic2, ArrowRight, Zap, Wind, Heart, ExternalLink } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    const newNotes = [...Array(6)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 40 + Math.random() * 60,
      duration: 10 + Math.random() * 10,
      delay: i * 2,
    }));
    setNotes(newNotes);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-fest-sky bg-halftone relative text-black selection:bg-fest-red selection:text-white overflow-x-hidden">
      
      {/* --- LOADING SCREEN --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-fest-yellow flex flex-col items-center justify-center border-b-8 border-black"
          >
            <motion.div
              animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative w-48 h-48 mb-6"
            >
               {/* Ensure logo.jpg exists in public folder */}
               <Image src="/logo.png" alt="Loading" fill className="object-contain" />
            </motion.div>
            <h2 className="font-bangers text-4xl animate-pulse">LOADING THE VIBE...</h2>
            <div className="w-64 h-4 border-4 border-black rounded-full mt-4 p-1">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    className="h-full bg-fest-red rounded-full"
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-20">
          
          <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

          {/* FLOATING NOTES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             {notes.map((note) => (
                <motion.div
                  key={note.id}
                  initial={{ y: "100vh", x: note.x + "vw", opacity: 0 }}
                  animate={{ y: "-10vh", opacity: [0, 1, 0], rotate: [0, 20, -20, 0] }}
                  transition={{ duration: note.duration, repeat: Infinity, delay: note.delay, ease: "linear" }}
                  className="absolute text-black/10"
                >
                   <Music size={note.size} />
                </motion.div>
             ))}
          </div>

          {/* --- HERO SECTION --- */}
          <section className="relative z-10 flex flex-col items-center pt-10 pb-20 px-4">
            
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-fest-yellow rounded-full border-4 border-black border-dashed opacity-50 z-0" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[20%] right-[-50px] w-48 h-48 bg-fest-green rounded-full border-4 border-black border-dashed opacity-50 z-0" />

            {/* Flying Kite */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotate: [5, -10, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-[10%] md:right-[20%] z-20 w-32 md:w-40"
            >
               <svg viewBox="0 0 100 150" fill="none" className="drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                    <path d="M50 0L95 60L50 120L5 60L50 0Z" fill="#FF4D4D" stroke="black" strokeWidth="3"/>
                    <path d="M50 0V120" stroke="black" strokeWidth="2"/>
                    <path d="M5 60H95" stroke="black" strokeWidth="2"/>
                    <path d="M50 120C50 120 60 140 80 150" stroke="black" strokeWidth="3" strokeLinecap="round"/>
               </svg>
            </motion.div>

            {/* --- TEXT STACK (Mobile Optimized) --- */}
            <div className="flex flex-col items-center relative z-10 mt-6 text-center w-full max-w-[100vw] overflow-hidden">
                
                {/* 1. "MAKAR" */}
                <div className="flex justify-center gap-1 md:gap-4 font-bangers text-[3.5rem] sm:text-[6rem] md:text-[10rem] leading-[0.85] tracking-wide flex-wrap">
                    {['M','A','K','A','R'].map((letter, i) => (
                        <motion.span 
                            key={i}
                            initial={{ y: 100, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ delay: 2.5 + (i * 0.1) }} 
                            whileHover={{ y: -20, rotate: i % 2 === 0 ? 5 : -5 }}
                            className={`${i % 2 === 0 ? 'text-fest-red' : 'text-fest-orange'} text-stroke-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-default z-${10-i}`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* 2. DATE STICKER */}
                <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.1, type: "spring" }}
                    className="bg-fest-yellow px-6 py-2 md:px-8 md:py-3 border-4 border-black rotate-[-2deg] z-20 shadow-funky hover:rotate-2 transition-transform cursor-pointer mt-[-10px] md:mt-[-20px] mb-2"
                >
                    <h2 className="font-bangers text-2xl md:text-4xl text-black flex items-center gap-2">
                        <Star className="fill-black w-4 h-4 md:w-6 md:h-6"/> 7th & 8th Feb <Star className="fill-black w-4 h-4 md:w-6 md:h-6"/>
                    </h2>
                </motion.div>

                {/* 3. "SANKRANTI" */}
                <motion.h1 
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 3.3 }}
                    className="font-bangers text-[2.8rem] sm:text-[5rem] md:text-[8rem] text-fest-green text-stroke-4 leading-[0.9] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-default"
                >
                    SANKRANTI
                </motion.h1>

                {/* 4. "FESTIVAL" */}
                <motion.h1 
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 3.5 }}
                    className="font-bangers text-[2.8rem] sm:text-[4.5rem] md:text-[7rem] text-fest-orange text-stroke-4 leading-[0.9] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-default -mt-1 md:-mt-4"
                >
                    FESTIVAL
                </motion.h1>

                {/* 5. LOCATION PILL */}
                <div className="bg-[#FFF5F5] border-4 border-black rounded-full px-6 py-2 mt-6 md:mt-8 shadow-funky-sm max-w-[90%]">
                    <p className="font-poppins font-black text-sm md:text-xl tracking-widest uppercase flex items-center justify-center gap-2 whitespace-nowrap">
                        <MapPin className="text-fest-red w-4 h-4 md:w-6 md:h-6" /> SONAI, SILCHAR
                    </p>
                </div>
            </div>
          </section>

          <ZigZagDivider color="#000000" />
          
          {/* --- UPDATED MARQUEE SECTION (BETTER TEXT) --- */}
          <section className="bg-black py-6 overflow-hidden border-b-4 border-black">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
                 {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8">
                        {/* ITEM 1: Kites & Lights */}
                        <span className="font-bangers text-5xl text-white tracking-widest text-stroke-2">UNLEASH THE SKY</span>
                        <Star className="text-fest-yellow w-10 h-10 fill-current animate-spin-slow" />
                        
                        {/* ITEM 2: The Sound of Silchar */}
                        <span className="font-bangers text-5xl text-fest-sky tracking-widest text-stroke-2">THE SOUND OF SILCHAR</span>
                        <Music className="text-fest-red w-10 h-10 fill-current animate-bounce" />
                        
                        {/* ITEM 3: Good Vibes Only */}
                        <span className="font-bangers text-5xl text-white tracking-widest text-stroke-2">GOOD VIBES ONLY</span>
                        <Heart className="text-fest-yellow w-10 h-10 fill-current animate-ping" />
                    </div>
                 ))}
            </div>
          </section>

          {/* --- CARDS SECTION --- */}
          <section className="bg-white py-20 px-4 relative">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <Link href="/lineup" className="block h-full">
                    <TiltCard color="bg-fest-orange" icon={<Mic2 className="w-10 h-10 text-white" />} title="Lineup" desc="Shreya, Divine, Fakira & More!" btnText="SEE ARTISTS" />
                  </Link>

                  <a href="https://maps.google.com/?q=Sonai,+Silchar,+Assam" target="_blank" rel="noreferrer" className="block h-full">
                    <TiltCard color="bg-fest-red" icon={<MapPin className="w-10 h-10 text-white" />} title="Venue" desc="Riverfront Grounds, Sonai. Tap for Map." btnText="GET DIRECTIONS" isExternal />
                  </a>

                  <Link href="/tickets" className="block h-full">
                    <TiltCard color="bg-fest-green" icon={<Ticket className="w-10 h-10 text-white" />} title="Tickets" desc="Selling fast on BookMyShow!" btnText="BUY PASSES" />
                  </Link>
              </div>
          </section>

          <ZigZagDivider color="#000000" reverse />

          {/* --- MEET THE ICONS --- */}
          <section className="bg-fest-yellow py-24 px-4 overflow-hidden relative">
              <div className="max-w-6xl mx-auto relative z-10">
                  <div className="text-center mb-16">
                       <div className="inline-block bg-black text-white px-6 py-2 border-4 border-white rotate-2 mb-4 shadow-funky-sm">
                            <span className="font-poppins font-bold tracking-widest">FIRST EVER EDITION</span>
                       </div>
                       <h2 className="font-bangers text-6xl md:text-7xl text-black text-stroke-2 drop-shadow-funky mb-2">
                            MEET THE ICONS
                       </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <ComicPanel name="SHREYA GHOSHAL" role="HEADLINER OF DAY 2" color="bg-fest-sky" image="/artists/shreya.jpg" />
                     <ComicPanel name="DIVINE" role="HEADLINER OF DAY 1" color="bg-fest-red" image="/artists/divine.jpg" />
                     <ComicPanel name="FAKIRA" role="ROCK BAND" color="bg-fest-green" image="/artists/fakira.jpg" />
                  </div>

                  <div className="text-center mt-20">
                      <Link href="/lineup">
                          <button className="bg-white text-black font-bangers text-2xl md:text-3xl px-8 md:px-12 py-4 border-4 border-black shadow-funky hover:bg-black hover:text-white hover:scale-105 transition-all flex items-center gap-3 mx-auto">
                              <Zap className="fill-current" /> FULL LINEUP
                          </button>
                      </Link>
                  </div>
              </div>
          </section>
      </div>
    </main>
  );
}

const ZigZagDivider = ({ color = "#000", reverse = false }: { color?: string, reverse?: boolean }) => (
    <div className={`w-full h-16 relative z-20 ${reverse ? '-mt-1 rotate-180' : '-mb-1'}`}>
        <div className="absolute inset-0 bg-repeat-x" style={{ 
            backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M0 40 L20 0 L40 40 Z" fill="%23${color.replace('#','')}" /></svg>')`,
            backgroundSize: '40px 40px',
            height: '40px',
            width: '100%',
            bottom: reverse ? 'auto' : 0,
            top: reverse ? 0 : 'auto',
            transform: reverse ? 'rotate(180deg)' : 'none'
        }}></div>
    </div>
);

const TiltCard = ({ color, icon, title, desc, btnText, isExternal }: any) => (
    <motion.div 
        whileHover={{ y: -10, rotate: 2 }}
        className={`${color} p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-between relative group`}
    >
        <div className="absolute inset-2 border-2 border-black border-dashed opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
            <div className="bg-black/20 w-16 h-16 rounded-xl flex items-center justify-center border-4 border-black mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="font-bangers text-5xl text-white text-stroke-2 mb-3 leading-none">{title}</h3>
            <p className="font-poppins font-bold text-black text-lg leading-tight">{desc}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 font-bangers text-xl border-t-4 border-black pt-4">
            {btnText} {isExternal ? <ExternalLink size={20}/> : <ArrowRight size={20}/>}
        </div>
    </motion.div>
)

const ComicPanel = ({ name, role, image, color }: any) => (
    <motion.div whileHover={{ scale: 1.02 }} className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-none"></div>
        <div className="relative bg-white border-4 border-black p-0 h-[400px] flex flex-col overflow-hidden">
            <div className="relative flex-1 bg-gray-200 border-b-4 border-black overflow-hidden">
                <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-all duration-300 ease-out" />
                <div className={`absolute top-0 right-0 ${color} border-l-4 border-b-4 border-black px-4 py-1`}>
                    <span className="font-bangers text-xl text-white tracking-wide">{role}</span>
                </div>
            </div>
            <div className={`h-20 ${color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute top-0 bottom-0 left-2 w-1 bg-black/20"></div>
                <div className="absolute top-0 bottom-0 right-2 w-1 bg-black/20"></div>
                <h3 className="font-bangers text-4xl text-white text-stroke-2 tracking-wide z-10 relative">
                    {name}
                </h3>
            </div>
        </div>
    </motion.div>
)