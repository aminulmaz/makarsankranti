"use client";
import { motion } from "framer-motion";
import { Gavel, AlertTriangle, Ticket, Ban } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#FEF3C7] pt-32 pb-20 px-4 bg-halftone relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
             initial={{ scale: 0 }} animate={{ scale: 1 }}
             className="inline-block bg-fest-orange text-white font-bangers text-xl px-6 py-2 border-4 border-black rotate-2 mb-4 shadow-funky-sm"
          >
             THE HOUSE RULES
          </motion.div>
          <h1 className="font-bangers text-6xl md:text-8xl text-black text-stroke-2 drop-shadow-funky">
            TERMS OF SERVICE
          </h1>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-funky -rotate-1">
          <div className="prose prose-lg max-w-none font-poppins text-black">
            
            <p className="font-bold">
              By accessing this website or purchasing a ticket to Makar Sankranti Festival 2026, you agree to these terms.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Ticket className="text-fest-red"/> 1. TICKETING POLICY
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All tickets are sold exclusively via <strong>BookMyShow</strong>. Tickets bought from unauthorized sellers will be invalid.</li>
              <li><strong>No Refunds:</strong> All sales are final. We do not offer refunds for artist lineup changes, weather conditions, or personal reasons.</li>
              <li><strong>Entry:</strong> You must present a valid ID matching the ticket name at the venue entrance.</li>
            </ul>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Ban className="text-fest-red"/> 2. CODE OF CONDUCT
            </h3>
            <p>We have zero tolerance for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Possession of illegal substances or weapons.</li>
              <li>Harassment or violence of any kind.</li>
              <li>Disrespecting the venue or local culture of Sonai, Assam.</li>
            </ul>
            <p className="mt-2 text-sm italic">Violators will be removed from the venue without refund and may face legal action.</p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-fest-yellow text-black"/> 3. EVENT CHANGES
            </h3>
            <p>
              The festival organizers reserve the right to change the artist lineup, set times, or venue layout at any time without prior notice. Such changes do not entitle you to a refund.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Gavel className="text-black"/> 4. GOVERNING LAW
            </h3>
            <p>
              Any disputes arising from these terms or the event shall be subject to the exclusive jurisdiction of the courts in <strong>Silchar, Assam, India</strong>.
            </p>

            <div className="mt-8 border-t-4 border-black pt-4">
               <p className="font-bold">Official Organizer: Makar Sankranti Fest Team</p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}