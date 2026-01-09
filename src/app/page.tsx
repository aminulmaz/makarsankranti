"use client";

import { motion } from "framer-motion";
import { Music, MapPin, Ticket, Star, Mic2, Camera, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-fest-sky bg-halftone relative text-black selection:bg-fest-red selection:text-white overflow-x-hidden pt-20">
      
      {/* GLOBAL GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 flex flex-col items-center pt-10 pb-20 px-4">
        
        {/* Animated Background Elements */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-fest-yellow rounded-full border-4 border-black border-dashed opacity-50 z-0" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-[20%] right-[-50px] w-48 h-48 bg-fest-green rounded-full border-4 border-black border-dashed opacity-50 z-0" />

        {/* Floating Kite */}
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

        {/* LOGO STACK */}
        <div className="flex flex-col items-center relative z-10 mt-6">
            <div className="flex font-bangers text-[5.5rem] md:text-[10rem] leading-[0.85] tracking-tight">
                {['M','A','K','A','R'].map((letter, i) => (
                    <motion.span 
                        key={i}
                        initial={{ y: 100, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -20, rotate: i % 2 === 0 ? 5 : -5 }}
                        className={`${i % 2 === 0 ? 'text-fest-red' : 'text-fest-orange'} text-stroke-4 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] cursor-default ${i > 0 ? '-ml-4' : ''} z-${10-i}`}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>

            <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }}
                className="bg-fest-yellow px-8 py-3 border-4 border-black rotate-[-2deg] z-20 shadow-funky hover:rotate-2 transition-transform cursor-pointer mt-[-20px] mb-2"
            >
                <h2 className="font-bangers text-3xl md:text-4xl text-black flex items-center gap-2">
                    <Star className="fill-black w-6 h-6"/> 7th & 8th Feb <Star className="fill-black w-6 h-6"/>
                </h2>
            </motion.div>

            <motion.h1 
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}
                className="font-bangers text-[4rem] md:text-[8rem] text-fest-green text-stroke-4 leading-[0.9] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-default"
            >
                SANKRANTI
            </motion.h1>
        </div>
      </section>

      {/* --- ZIG ZAG DIVIDER 1 --- */}
      <ZigZagDivider color="#000000" />
      
      {/* --- MARQUEE STRIP --- */}
      <section className="bg-black py-6 overflow-hidden border-b-4 border-black">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
             {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center gap-6">
                    <span className="font-bangers text-5xl text-white tracking-widest text-stroke-2">LIVE MUSIC</span>
                    <Star className="text-fest-yellow w-10 h-10 fill-current animate-spin-slow" />
                    <span className="font-bangers text-5xl text-fest-sky tracking-widest text-stroke-2">KITE FLYING</span>
                    <Star className="text-fest-yellow w-10 h-10 fill-current animate-spin-slow" />
                </div>
             ))}
        </div>
      </section>

      {/* --- INFO CARDS SECTION (With White BG for contrast) --- */}
      <section className="bg-white py-20 px-4 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <TiltCard color="bg-fest-orange" icon={<Mic2 className="w-10 h-10 text-white" />} title="Lineup" desc="20+ Artists. 2 Stages. Non-stop Folk & Fusion." />
              <TiltCard color="bg-fest-red" icon={<MapPin className="w-10 h-10 text-white" />} title="Venue" desc="Riverfront Grounds. Sunset views included." />
              <TiltCard color="bg-fest-green" icon={<Ticket className="w-10 h-10 text-white" />} title="Tickets" desc="From ₹499. Includes free kite kit!" />
          </div>
      </section>

      {/* --- ZIG ZAG DIVIDER 2 --- */}
      <ZigZagDivider color="#000000" reverse />

      {/* --- POLAROID GALLERY SECTION --- */}
      <section className="bg-fest-yellow py-20 px-4 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
          
          <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
              <h2 className="font-bangers text-6xl text-black text-stroke-2 drop-shadow-funky-sm mb-4">VIBES ONLY</h2>
              <p className="font-poppins font-bold text-xl bg-white inline-block px-4 py-1 border-2 border-black rotate-2 shadow-funky-sm">Check out last year's madness</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 relative z-10">
             <Polaroid rotate="-6deg" color="bg-fest-sky" caption="Crowd Energy" />
             <Polaroid rotate="4deg" color="bg-fest-red" caption="The Big Stage" />
             <Polaroid rotate="-3deg" color="bg-fest-green" caption="Kite Wars" />
          </div>

          <div className="text-center mt-16 relative z-10">
              <button className="bg-black text-white font-bangers text-2xl px-10 py-4 rounded-full border-4 border-white shadow-funky hover:scale-110 transition-transform">
                  FOLLOW ON INSTAGRAM
              </button>
          </div>
      </section>

    </main>
  );
}

// --- HELPER COMPONENTS ---

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

const TiltCard = ({ color, icon, title, desc }: any) => (
    <motion.div 
        whileHover={{ y: -10, rotate: 2 }}
        className={`${color} p-6 border-4 border-black rounded-3xl shadow-funky h-full flex flex-col justify-between`}
    >
        <div>
            <div className="bg-black/20 w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-black mb-6">
                {icon}
            </div>
            <h3 className="font-bangers text-5xl text-white text-stroke-2 mb-4 leading-none">{title}</h3>
            <p className="font-poppins font-bold text-black text-lg leading-tight">{desc}</p>
        </div>
        <div className="mt-6 flex justify-end">
            <ArrowRight className="w-8 h-8 text-black" />
        </div>
    </motion.div>
)

const Polaroid = ({ rotate, color, caption }: any) => (
    <motion.div 
        whileHover={{ scale: 1.1, zIndex: 50 }}
        className={`bg-white p-4 pb-8 border-4 border-black shadow-funky w-64 transform ${color}`}
        style={{ rotate: rotate }}
    >
        <div className="aspect-square bg-gray-200 border-2 border-black mb-4 flex items-center justify-center overflow-hidden group">
            <Camera className="w-12 h-12 text-gray-400 group-hover:scale-125 transition-transform" />
        </div>
        <p className="font-bangers text-2xl text-center text-black transform -rotate-1">{caption}</p>
    </motion.div>
)