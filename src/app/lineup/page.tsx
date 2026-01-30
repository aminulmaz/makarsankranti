"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 
import { Calendar } from "lucide-react";

export default function Lineup() {
  const artists = [
    // 1. SHREYA GHOSHAL (Day 2 Headliner)
    { 
      name: "SHREYA GHOSHAL", 
      tag: "HEADLINER", 
      date: "Feb 8", 
      dayLabel: "DAY 2", 
      color: "bg-fest-yellow", 
      image: "/artists/shreya.jpg" 
    },
    // 2. DIVINE (Day 1 Headliner)
    { 
      name: "DIVINE", 
      tag: "HEADLINER", 
      date: "Feb 7", 
      dayLabel: "DAY 1", 
      color: "bg-fest-red", 
      image: "/artists/divine.jpg" 
    },
    // 3. FAKIRA (Special Band)
    { 
      name: "FAKIRA", 
      tag: "ROCK BAND", 
      date: "Feb 8", 
      dayLabel: "DAY 2", 
      color: "bg-fest-green", 
      image: "/artists/fakira.jpg" 
    },
    // --- OTHERS ---
    { 
      name: "NUCLEYA", 
      tag: "BASS RAJA", 
      date: "Feb 8", 
      dayLabel: "DAY 2", 
      color: "bg-fest-red", 
      image: "/artists/nucleya.jpg" 
    },
    { 
      name: "INDIAN OCEAN", 
      tag: "FUSION LEGENDS", 
      date: "Feb 7", 
      dayLabel: "DAY 1", 
      color: "bg-fest-green", 
      image: "/artists/indianocean.jpg" 
    },
    { 
      name: "PAPON", 
      tag: "FOLK STAR", 
      date: "Feb 8", 
      dayLabel: "DAY 2", 
      color: "bg-fest-orange", 
      image: "/artists/papon.jpg" 
    },
    { 
      name: "RITO RIBA", 
      tag: "RISING STAR", 
      date: "Feb 8", 
      dayLabel: "DAY 2", 
      color: "bg-fest-sky", 
      image: "/artists/rito-raba.jpg" 
    },
    { 
      name: "ROMY", 
      tag: "CHART-TOPPER", 
      date: "Feb 7", 
      dayLabel: "DAY 1", 
      color: "bg-fest-orange", 
      image: "/artists/romy.jpg" 
    },
  ];

  return (
    <main className="min-h-screen bg-fest-sky pt-32 pb-20 px-4 bg-halftone">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 relative z-10">
          <motion.div 
             initial={{ scale: 0 }} animate={{ scale: 1 }}
             className="inline-block bg-[#FF4D4D] text-white font-bangers text-xl px-6 py-2 border-4 border-black rotate-[-2deg] mb-4 shadow-funky-sm"
          >
             SONAI, SILCHAR • ASSAM
          </motion.div>
          <h1 className="font-bangers text-7xl md:text-9xl text-black text-stroke-2 drop-shadow-funky">
            THE STARS
          </h1>
          <p className="font-poppins font-bold text-xl mt-4 bg-white text-black border-2 border-black inline-block px-6 py-2 rotate-2 shadow-funky-sm">
            2 Days. 8 Icons. 1 Stage.
          </p>
        </div>

        {/* ARTIST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotate: i % 2 === 0 ? 2 : -2, y: -10 }}
              className="bg-white border-4 border-black p-3 pb-6 shadow-funky relative group cursor-pointer"
            >
              
              {/* IMAGE CONTAINER */}
              <div className={`aspect-[4/5] ${artist.color} border-2 border-black mb-4 relative overflow-hidden`}>
                 {/* Real Image - Full Color */}
                 <Image 
                    src={artist.image} 
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110" 
                 />
                 
                 {/* Subtle Tint Overlay */}
                 <div className={`absolute inset-0 ${artist.color} opacity-10 mix-blend-multiply group-hover:opacity-0 transition-opacity`}></div>
                 
                 {/* Date Sticker */}
                 <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 font-bangers text-lg border-2 border-white transform rotate-2">
                    {artist.date}
                 </div>
              </div>

              {/* DETAILS */}
              <div className="text-center relative">
                  {/* Artist Name */}
                  <h2 className="font-bangers text-4xl text-black text-stroke-sm leading-none mb-1 group-hover:scale-105 transition-transform">
                    {artist.name}
                  </h2>
                  
                  {/* Role/Tag */}
                  <p className="font-poppins font-bold text-xs tracking-widest uppercase text-gray-500 mb-4">
                    {artist.tag}
                  </p>

                  {/* Day Label & Button */}
                  <div className="flex justify-between items-center border-t-2 border-black pt-3">
                      <div className="flex items-center gap-1 font-bold bg-fest-yellow px-2 py-1 border border-black text-xs rounded-sm">
                         <Calendar size={12} fill="black"/> {artist.dayLabel}
                      </div>
                      <button className="font-bangers text-lg hover:text-fest-red hover:underline decoration-2 underline-offset-2">
                        + INFO
                      </button>
                  </div>
              </div>

              {/* DECORATIVE PIN */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-200 border-2 border-black shadow-sm z-20"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}