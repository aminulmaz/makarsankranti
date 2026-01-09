"use client";
import { motion } from "framer-motion";
import { Star, Mic2 } from "lucide-react";

export default function Lineup() {
  const artists = [
    { name: "The Local Train", time: "8:00 PM", day: "Day 1", color: "bg-fest-red" },
    { name: "When Chai Met Toast", time: "6:30 PM", day: "Day 1", color: "bg-fest-orange" },
    { name: "Papon", time: "9:00 PM", day: "Day 2", color: "bg-fest-green" },
    { name: "Zubeen Garg", time: "7:30 PM", day: "Day 2", color: "bg-fest-yellow" },
    { name: "Indie Rockers", time: "4:00 PM", day: "Day 1", color: "bg-fest-sky" },
    { name: "Folk Brothers", time: "5:00 PM", day: "Day 2", color: "bg-fest-red" },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-4 bg-halftone">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-bangers text-7xl md:text-9xl text-fest-orange text-stroke-4 drop-shadow-funky">
            THE STARS
          </h1>
          <p className="font-poppins font-bold text-xl mt-4 bg-black text-white inline-block px-4 py-2 -rotate-2">
            2 Days. 20+ Artists. No Sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artists.map((artist, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotate: i % 2 === 0 ? 2 : -2, scale: 1.02 }}
              className={`border-4 border-black p-4 pb-8 shadow-funky bg-white relative group`}
            >
              {/* IMAGE PLACEHOLDER */}
              <div className={`aspect-square ${artist.color} border-4 border-black mb-6 flex items-center justify-center overflow-hidden relative`}>
                 {/* Texture Overlay */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
                 <Mic2 className="w-24 h-24 text-black opacity-20 rotate-12 group-hover:scale-125 transition-transform duration-300" />
                 
                 <div className="absolute bottom-0 right-0 bg-black text-white px-3 py-1 font-bangers text-xl border-t-4 border-l-4 border-black">
                    {artist.day}
                 </div>
              </div>

              {/* DETAILS */}
              <h2 className="font-bangers text-4xl text-black text-stroke-2 leading-none mb-2">
                {artist.name}
              </h2>
              <div className="flex justify-between items-center border-t-4 border-black pt-4 mt-4">
                  <span className="font-poppins font-bold bg-fest-yellow px-2 border-2 border-black rounded text-sm">
                    {artist.time}
                  </span>
                  <button className="font-bangers text-xl hover:text-fest-red">
                    Add to Schedule +
                  </button>
              </div>

              {/* DECORATIVE PIN */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300 border-4 border-black shadow-sm z-20"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}