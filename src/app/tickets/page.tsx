"use client";
import { motion } from "framer-motion";
import { Check, Star, AlertCircle, MapPin, Calendar, ExternalLink } from "lucide-react";

export default function Tickets() {
  
  // DATA FROM YOUR BOOKMYSHOW SCREENSHOT
  const tickets = [
    { 
      title: "EARLY GA PASS", 
      price: "₹799", 
      status: "SOLD OUT", 
      color: "bg-gray-200",
      btnColor: "bg-gray-400",
      features: ["General Access", "Standing Zone", "Food Court Access"] 
    },
    { 
      title: "EARLY FORWARD VIEW", 
      price: "₹1,199", 
      status: "FAST FILLING", 
      color: "bg-white",
      btnColor: "bg-fest-sky",
      features: ["Closer to Stage", "Better View", "Dedicated Bar Access"] 
    },
    { 
      title: "EB SEASON GA - 2 DAYS", 
      price: "₹1,799", 
      status: "BEST VALUE", 
      color: "bg-[#E0F7FA]", // Light Blue
      btnColor: "bg-fest-orange",
      features: ["Access for BOTH Days", "Save ₹600", "Priority Entry Lane"] 
    },
    { 
      title: "EARLY BIRDS FAN PIT", 
      price: "₹4,999", 
      status: "AVAILABLE", 
      color: "bg-[#FFF3E0]", // Light Orange
      btnColor: "bg-fest-red",
      features: ["Right in Front of Stage", "Fan Pit Access", "Free Merch Item"] 
    },
    { 
      title: "PLATINUM LOUNGE", 
      price: "₹14,999", 
      status: "PREMIUM", 
      color: "bg-fest-yellow", 
      btnColor: "bg-black text-white",
      features: ["Elevated VIP Deck", "Unlimited F&B", "AC Lounge Access", "Meet & Greet Raffle"] 
    }
  ];

  return (
    <main className="min-h-screen bg-fest-green pt-32 pb-20 px-4 bg-grain relative">
      
      {/* DECORATIVE ELEMENTS */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 relative">
             <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-12 right-[5%] md:right-[20%] hidden md:block"
             >
                <Star className="w-32 h-32 fill-fest-yellow text-black drop-shadow-funky" />
             </motion.div>
             
             <div className="inline-block bg-white border-4 border-black px-6 py-2 rotate-[-2deg] mb-4 shadow-funky-sm">
                <span className="font-poppins font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5"/> 7th & 8th Feb • <MapPin className="w-5 h-5"/> Silchar
                </span>
             </div>

             <h1 className="font-bangers text-7xl md:text-9xl text-white text-stroke-4 drop-shadow-funky mb-4">
                TICKETS
             </h1>
             
             <p className="font-poppins text-white font-bold text-xl max-w-2xl mx-auto bg-black/20 p-4 rounded-xl backdrop-blur-sm border-2 border-white/30">
                Official Ticketing Partner: <span className="text-[#F84464] bg-white px-2 py-0.5 rounded ml-1">bookmyshow</span>
             </p>
        </div>

        {/* TICKET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            {tickets.map((ticket, i) => (
                <TicketCard key={i} data={ticket} index={i} />
            ))}

            {/* "MORE INFO" CARD */}
            <div className="bg-black border-4 border-white p-8 rounded-3xl shadow-funky flex flex-col justify-center items-center text-center h-full min-h-[400px]">
                <h3 className="font-bangers text-4xl text-fest-yellow mb-4">NEED HELP?</h3>
                <p className="text-white font-poppins mb-6">
                    Bulk bookings? Corporate tables? Questions about age limits?
                </p>
                <button className="bg-white text-black font-bangers text-xl px-8 py-3 rounded-full hover:scale-105 transition-transform">
                    CONTACT SUPPORT
                </button>
            </div>

        </div>
      </div>
    </main>
  );
}

// --- HIGH END TICKET CARD COMPONENT ---
function TicketCard({ data, index }: any) {
    const isSoldOut = data.status === "SOLD OUT";
    const isPlatinum = data.title.includes("PLATINUM");

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={!isSoldOut ? { y: -10 } : {}}
            className={`
                relative border-4 border-black shadow-funky overflow-hidden flex flex-col
                ${data.color} 
                ${isSoldOut ? 'opacity-70 grayscale' : ''}
                ${isPlatinum ? 'md:col-span-2 lg:col-span-1 transform lg:-translate-y-8 z-20' : ''}
            `}
        >
            {/* STATUS BADGE */}
            {data.status !== "AVAILABLE" && (
                <div className={`
                    absolute top-0 right-0 px-4 py-1 font-bangers text-lg border-l-4 border-b-4 border-black z-10
                    ${data.status === "FAST FILLING" ? "bg-red-500 text-white animate-pulse" : 
                      data.status === "SOLD OUT" ? "bg-gray-600 text-white" : 
                      "bg-black text-fest-yellow"}
                `}>
                    {data.status}
                </div>
            )}

            {/* TOP SECTION (Title & Price) */}
            <div className="p-6 relative">
                {/* Punch Holes */}
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-fest-green border-4 border-black rounded-full z-10"></div>
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-fest-green border-4 border-black rounded-full z-10"></div>

                <h2 className="font-bangers text-4xl leading-none mb-4 pr-16">{data.title}</h2>
                <div className="flex items-baseline gap-2">
                    <span className="font-poppins font-black text-4xl">{data.price}</span>
                    {data.status === "BEST VALUE" && <span className="text-xs font-bold bg-green-200 px-2 py-1 rounded-full border border-black">SAVE 20%</span>}
                </div>
            </div>

            {/* TEAR LINE (Dashed Border) */}
            <div className="relative h-1 w-full border-t-4 border-black border-dashed my-2"></div>

            {/* BOTTOM SECTION (Features & Button) */}
            <div className="p-6 pt-2 flex-1 flex flex-col justify-between bg-white/50">
                <ul className="space-y-3 mb-8 mt-4">
                    {data.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 font-poppins font-bold text-sm leading-tight">
                            <Check className="w-5 h-5 min-w-[20px] text-black border-2 border-black rounded-full p-0.5 bg-white" />
                            {f}
                        </li>
                    ))}
                </ul>

                <a 
                    href="https://in.bookmyshow.com/events/makar-sankranti-festival/ET00482223" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`
                        w-full font-bangers text-xl py-4 border-4 border-black shadow-funky-sm flex items-center justify-center gap-2 transition-all
                        ${data.btnColor}
                        ${isSoldOut ? 'cursor-not-allowed pointer-events-none' : 'hover:translate-x-1 hover:translate-y-1 hover:shadow-none'}
                    `}
                >
                    {isSoldOut ? "SOLD OUT" : (
                        <>
                            BOOK ON <span className="font-sans font-bold -mt-1">BMS</span> <ExternalLink size={18}/>
                        </>
                    )}
                </a>
            </div>
        </motion.div>
    )
}