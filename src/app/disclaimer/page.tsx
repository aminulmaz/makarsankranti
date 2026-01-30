"use client";
import { motion } from "framer-motion";
import { AlertOctagon, ExternalLink, HeartPulse } from "lucide-react";

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-[#FCA5A5] pt-32 pb-20 px-4 bg-halftone relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
             initial={{ scale: 0 }} animate={{ scale: 1 }}
             className="inline-block bg-black text-white font-bangers text-xl px-6 py-2 border-4 border-white rotate-[-1deg] mb-4 shadow-funky-sm"
          >
             PLEASE READ CAREFULLY
          </motion.div>
          <h1 className="font-bangers text-6xl md:text-8xl text-black text-stroke-2 drop-shadow-funky">
            DISCLAIMER
          </h1>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-funky rotate-1">
          <div className="prose prose-lg max-w-none font-poppins text-black">
            
            <h3 className="font-bangers text-3xl mb-4 flex items-center gap-2">
              <AlertOctagon className="text-fest-red"/> 1. GENERAL DISCLAIMER
            </h3>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the website or the information.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <ExternalLink className="text-fest-blue"/> 2. THIRD-PARTY LINKS
            </h3>
            <p>
              This website contains links to external websites (e.g., BookMyShow, Google Maps). We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <HeartPulse className="text-fest-green"/> 3. HEALTH & SAFETY
            </h3>
            <p>
              Attendees assume all risks associated with attending a large-scale outdoor festival, including but not limited to loud music (risk of hearing damage), special effects, and weather conditions. The organizers are not liable for any personal injury or health issues arising during the event.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <AlertOctagon className="text-fest-orange"/> 4. LIABILITY LIMITATION
            </h3>
            <p>
              Makar Sankranti Festival Organizers will not be held liable for any loss, theft, or damage to personal property within the venue. Please take care of your belongings.
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}