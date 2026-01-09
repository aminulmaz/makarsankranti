"use client";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function Tickets() {
  return (
    <main className="min-h-screen bg-fest-green pt-32 pb-20 px-4 bg-grain">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16 relative">
             <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 right-[10%] hidden md:block"
             >
                <Star className="w-24 h-24 fill-fest-yellow text-black" />
             </motion.div>
             <h1 className="font-bangers text-6xl md:text-8xl text-white text-stroke-4 drop-shadow-funky mb-4">
                GRAB A PASS
             </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* STANDARD PASS */}
            <TicketCard 
                title="DAY PASS" 
                price="₹499" 
                color="bg-white" 
                features={["Access to all stages", "Free Kite Kit", "Food Court Access"]} 
            />

            {/* VIP PASS (Featured) */}
            <div className="relative transform md:-translate-y-6">
                <div className="absolute -top-6 left-0 right-0 text-center">
                    <span className="bg-black text-white font-bangers px-4 py-1 border-2 border-black rotate-2 inline-block">MOST POPULAR</span>
                </div>
                <TicketCard 
                    title="SEASON PASS" 
                    price="₹899" 
                    color="bg-fest-yellow" 
                    features={["Access for BOTH Days", "Priority Entry Line", "Free Kite Kit + Thread", "After-party Access"]} 
                    featured={true}
                />
            </div>

            {/* SQUAD PASS */}
            <TicketCard 
                title="SQUAD (4)" 
                price="₹2500" 
                color="bg-white" 
                features={["4 x Season Passes", "Reserved Seating Zone", "4x Free Kite Kits", "Meet & Greet Raffle"]} 
            />

        </div>
      </div>
    </main>
  );
}

// Sub-component for Ticket Card
function TicketCard({ title, price, color, features, featured }: any) {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            className={`${color} border-4 border-black p-6 shadow-funky relative overflow-hidden`}
        >
            {/* PUNCH HOLE DECORATION */}
            <div className="absolute top-1/2 -left-4 w-8 h-8 bg-fest-green border-4 border-black rounded-full"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-fest-green border-4 border-black rounded-full"></div>

            <h2 className="font-bangers text-4xl text-center mb-2">{title}</h2>
            <div className="text-center border-b-4 border-black border-dashed pb-6 mb-6">
                <span className="font-poppins font-black text-5xl">{price}</span>
            </div>
            
            <ul className="space-y-3 mb-8">
                {features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 font-poppins font-bold text-sm">
                        <Check className="w-5 h-5 text-black border-2 border-black rounded-full p-0.5" />
                        {f}
                    </li>
                ))}
            </ul>

            <button className={`w-full font-bangers text-xl py-3 border-4 border-black shadow-funky-sm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${featured ? 'bg-fest-red text-white' : 'bg-fest-sky'}`}>
                BOOK NOW
            </button>
        </motion.div>
    )
}