"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Utensils, Music2, Info, Ticket, ShieldAlert, Zap } from "lucide-react";

export default function Venue() {
  
  // Google Maps Link (Sonai, Silchar)
  const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Sonai+Cachar+Assam";

  return (
    <main className="min-h-screen bg-[#87CEEB] pt-32 pb-20 px-4 bg-halftone relative overflow-x-hidden">
      
      {/* GLOBAL GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-[40] mix-blend-multiply opacity-50"></div>

      {/* CLOUDS BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div animate={{ x: ["-10%", "110%"] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-20 left-0 text-white/40"><CloudShape size={200}/></motion.div>
          <motion.div animate={{ x: ["-10%", "110%"] }} transition={{ duration: 45, repeat: Infinity, ease: "linear", delay: 20 }} className="absolute top-60 left-0 text-white/30"><CloudShape size={150}/></motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center mb-16 relative">
             <div className="inline-block bg-fest-green text-black font-bangers text-2xl px-8 py-2 border-4 border-black rotate-2 mb-6 shadow-funky-sm">
                SONAI • CACHAR • ASSAM
             </div>
             
             <h1 className="font-bangers text-7xl md:text-9xl text-black text-stroke-2 drop-shadow-funky leading-none mb-6">
                THE<br/><span className="text-fest-yellow text-stroke-4">GROUNDS</span>
             </h1>

             <p className="font-poppins font-bold text-xl md:text-2xl max-w-2xl mx-auto text-black bg-white/60 p-4 border-2 border-black rounded-xl backdrop-blur-sm">
                Explore the massive <span className="text-fest-red">Kite Festival Ground</span>. Know your zone before you go!
             </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* --- LEFT COLUMN: THE INTERACTIVE MAP --- */}
            <div className="lg:col-span-7">
                <div className="bg-[#A7F3D0] border-4 border-black p-4 md:p-8 shadow-funky rounded-3xl relative overflow-hidden">
                    <h3 className="font-bangers text-4xl text-center mb-8 flex justify-center items-center gap-2">
                        <MapPin className="fill-fest-red text-black"/> VENUE LAYOUT
                    </h3>

                    {/* STAGE AREA */}
                    <div className="relative flex flex-col items-center">
                        
                        {/* 1. STAGE */}
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="w-3/4 h-24 bg-black rounded-t-2xl border-4 border-b-0 border-white relative z-30 flex items-center justify-center shadow-lg"
                        >
                            <h4 className="font-bangers text-4xl text-fest-yellow tracking-widest">MAIN STAGE</h4>
                            {/* Speakers */}
                            <div className="absolute top-2 -left-8 w-12 h-20 bg-gray-800 border-2 border-black rotate-[-10deg] flex flex-col gap-1 p-1">
                                <div className="bg-gray-600 w-full h-full rounded-full"></div>
                                <div className="bg-gray-600 w-full h-full rounded-full"></div>
                            </div>
                            <div className="absolute top-2 -right-8 w-12 h-20 bg-gray-800 border-2 border-black rotate-[10deg] flex flex-col gap-1 p-1">
                                <div className="bg-gray-600 w-full h-full rounded-full"></div>
                                <div className="bg-gray-600 w-full h-full rounded-full"></div>
                            </div>
                        </motion.div>

                        {/* 2. FORWARD VIEW & FAN PIT CONTAINER */}
                        <div className="w-full relative z-20 -mt-1">
                            {/* The Gradient Box */}
                            <motion.div 
                                whileHover={{ scale: 1.01 }}
                                className="w-full h-64 bg-gradient-to-b from-[#FF9F43] to-[#EE5253] border-4 border-black rounded-2xl relative shadow-md flex flex-col items-center pt-2"
                            >
                                {/* FAN PIT (U-Shape) */}
                                <div className="w-1/3 h-32 bg-fest-yellow border-4 border-black rounded-b-2xl flex items-end justify-center pb-2 shadow-inner absolute top-0">
                                    <span className="font-bangers text-xl text-black">FAN PIT</span>
                                    {/* The Ramp */}
                                    <div className="absolute top-0 w-1/2 h-20 bg-black rounded-b-lg">
                                        <span className="text-white font-bangers text-xs w-full text-center block mt-12 opacity-50">RAMP</span>
                                    </div>
                                </div>
                                
                                {/* Label for Forward View */}
                                <div className="mt-40 text-center">
                                    <h4 className="font-bangers text-3xl text-black/80">FORWARD VIEW</h4>
                                    <p className="font-poppins text-xs font-bold opacity-70">Standing • Best View</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. GA VIEW */}
                        <motion.div 
                            whileHover={{ scale: 1.01 }}
                            className="w-full h-48 bg-[#F5F6FA] border-4 border-black rounded-2xl mt-4 relative z-10 shadow-md flex items-center justify-center"
                        >
                             <div className="text-center">
                                <h4 className="font-bangers text-3xl text-gray-800">GA VIEW</h4>
                                <p className="font-poppins text-xs font-bold text-gray-500">General Access • Chill Zone</p>
                             </div>
                             {/* Flower decoration */}
                             <div className="absolute bottom-4 right-4 animate-spin-slow">
                                <Zap className="w-10 h-10 text-fest-sky fill-current"/>
                             </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* --- RIGHT COLUMN: DETAILS & INFO --- */}
            <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* ADDRESS CARD */}
                <div className="bg-white border-4 border-black p-6 shadow-funky -rotate-1">
                    <h3 className="font-bangers text-3xl mb-2 flex items-center gap-2">
                        <Navigation className="fill-fest-green"/> HOW TO REACH
                    </h3>
                    <p className="font-poppins text-lg font-medium mb-4">
                        Kite Festival Ground,<br/>
                        Sonai, Cachar, Assam - 788119
                    </p>
                    <a 
                        href={MAP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full block text-center bg-fest-blue text-white font-bangers text-xl py-3 border-4 border-black hover:bg-black transition-colors"
                    >
                        OPEN IN GOOGLE MAPS
                    </a>
                </div>

                {/* AMENITIES GRID */}
                <div className="grid grid-cols-2 gap-4">
                    <AmenityBox icon={<Car/>} label="Parking" color="bg-fest-orange"/>
                    <AmenityBox icon={<Utensils/>} label="Food Court" color="bg-fest-yellow"/>
                    <AmenityBox icon={<ShieldAlert/>} label="First Aid" color="bg-fest-red text-white"/>
                    <AmenityBox icon={<Ticket/>} label="Box Office" color="bg-fest-sky"/>
                </div>

                {/* NOTICE BOX */}
                <div className="bg-black text-white border-4 border-white p-6 shadow-funky rotate-1 mt-auto">
                    <div className="flex items-start gap-4">
                        <Info className="w-8 h-8 text-fest-yellow flex-shrink-0" />
                        <div>
                            <h4 className="font-bangers text-2xl text-fest-yellow mb-1">PRO TIPS</h4>
                            <ul className="font-poppins text-sm text-gray-300 list-disc ml-4 space-y-1">
                                <li>Gates open at 3:00 PM. Come early for front row!</li>
                                <li>No outside food/drinks allowed.</li>
                                <li>Carry a valid ID proof for entry.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function AmenityBox({ icon, label, color }: any) {
    return (
        <div className={`${color} p-4 border-4 border-black shadow-sm flex flex-col items-center justify-center gap-2 rounded-xl`}>
            {icon}
            <span className="font-bangers text-lg">{label}</span>
        </div>
    )
}

function CloudShape({ size }: { size: number }) {
    return (
        <svg width={size} height={size * 0.6} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.819 10.034C17.657 6.618 14.826 4 11.25 4C7.365 4 4.285 6.885 4.01 10.635C1.75 11.07 0 13.06 0 15.5C0 18.537 2.462 21 5.5 21H17.5V19Z" />
        </svg>
    )
}