"use client";

import Link from "next/link";
import { ArrowUp, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t-8 border-fest-sky relative overflow-hidden">
      
      {/* DECORATIVE BACKGROUND TEXT (Watermark) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
        <h1 className="font-bangers text-[15vw] leading-none text-white whitespace-nowrap">
          MAKAR SANKRANTI FESTIVAL
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* COLUMN 1: BRANDING & SQUAD JOIN */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
                <h2 className="font-bangers text-6xl text-fest-yellow text-stroke-2 mb-2">MSF '26</h2>
                <p className="font-poppins text-gray-400 max-w-sm text-lg">
                  Guwahati's loudest, craziest, and most colorful weekend. Don't be the one watching stories from home.
                </p>
            </div>

            <div className="bg-white/10 p-6 border-4 border-white rounded-2xl backdrop-blur-sm">
                <h3 className="font-bangers text-2xl text-white mb-2">GET THE HYPE</h3>
                <div className="flex">
                    <input 
                        type="email" 
                        placeholder="Email address..." 
                        className="w-full px-4 py-3 text-black font-bold font-poppins focus:outline-none border-y-4 border-l-4 border-black" 
                    />
                    <button className="bg-fest-red text-white px-6 font-bangers text-xl border-4 border-black hover:bg-fest-orange transition-colors">
                        GO
                    </button>
                </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (The Map) */}
          <div className="md:col-span-3">
             <h3 className="font-bangers text-3xl text-fest-sky mb-6 underline decoration-4 decoration-fest-red underline-offset-4">
                THE MAP
             </h3>
             <ul className="flex flex-col gap-3 font-bangers text-xl tracking-wide">
                <li><Link href="/lineup" className="hover:text-fest-yellow hover:translate-x-2 transition-transform inline-block">→ THE ARTISTS</Link></li>
                <li><Link href="/tickets" className="hover:text-fest-yellow hover:translate-x-2 transition-transform inline-block">→ GRAB PASSES</Link></li>
                <li><Link href="/about" className="hover:text-fest-yellow hover:translate-x-2 transition-transform inline-block">→ OUR STORY</Link></li>
                <li><Link href="#" className="hover:text-fest-yellow hover:translate-x-2 transition-transform inline-block text-gray-500">→ MERCH (Coming Soon)</Link></li>
                <li><Link href="#" className="hover:text-fest-yellow hover:translate-x-2 transition-transform inline-block text-gray-500">→ VOLUNTEER</Link></li>
             </ul>
          </div>

          {/* COLUMN 3: SOCIALS & CONTACT */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
             
             {/* Social Buttons Stack */}
             <div className="flex gap-4">
                <SocialBtn icon={<Instagram />} color="bg-fest-orange" />
                <SocialBtn icon={<Twitter />} color="bg-fest-sky" />
                <SocialBtn icon={<Facebook />} color="bg-fest-blue" /> {/* Note: Define fest-blue if needed or use hex */}
             </div>

             <div className="bg-fest-green border-4 border-black p-4 shadow-funky-sm -rotate-2 w-full md:w-auto text-center md:text-right">
                <p className="font-bangers text-black text-2xl">NEED HELP?</p>
                <a href="mailto:hello@msf26.com" className="font-poppins font-bold text-black hover:underline decoration-2">
                    hello@msf26.com
                </a>
             </div>
             
             {/* Back to Top Button */}
             <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 font-bangers text-xl text-white border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
             >
                BACK TO TOP <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
             </button>

          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t-4 border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-poppins text-gray-500">
            <p>© 2026 Makar Sankranti Festival. All rights reserved.</p>
            <div className="flex gap-6">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for Social Buttons
const SocialBtn = ({ icon, color }: { icon: any, color: string }) => (
    <button className={`${color} w-12 h-12 border-4 border-black flex items-center justify-center shadow-funky-sm hover:translate-y-1 hover:shadow-none transition-all text-black`}>
        {icon}
    </button>
);