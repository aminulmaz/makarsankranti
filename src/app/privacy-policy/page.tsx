"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#E0F2FE] pt-32 pb-20 px-4 bg-halftone relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div 
             initial={{ scale: 0 }} animate={{ scale: 1 }}
             className="inline-block bg-fest-red text-white font-bangers text-xl px-6 py-2 border-4 border-black rotate-[-2deg] mb-4 shadow-funky-sm"
          >
             YOUR DATA, YOUR VIBE
          </motion.div>
          <h1 className="font-bangers text-6xl md:text-8xl text-black text-stroke-2 drop-shadow-funky">
            PRIVACY POLICY
          </h1>
          <p className="font-poppins text-gray-600 mt-4">Last Updated: February 2026</p>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-funky rotate-1">
          <div className="prose prose-lg max-w-none font-poppins text-black">
            
            <p className="lead font-bold">
              At Makar Sankranti Festival (MSF), we respect your privacy. This document explains how we handle your data when you visit our site or buy tickets.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Eye className="text-fest-blue"/> 1. INFORMATION WE COLLECT
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Info:</strong> Name, email, and phone number (only if you subscribe to our newsletter or contact us).</li>
              <li><strong>Usage Data:</strong> We track how you move around our site (pages visited, time spent) to improve the vibe.</li>
              <li><strong>Cookies:</strong> Small text files to make the site work better. You can turn them off in your browser.</li>
            </ul>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Lock className="text-fest-red"/> 2. TICKETS & PAYMENTS
            </h3>
            <p>
              <strong>Crucial:</strong> We do NOT store your credit card or banking details. All ticket purchases are processed securely through our official ticketing partner, <strong>BookMyShow</strong>. When you buy a ticket, their Privacy Policy applies to your payment data.
            </p>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Server className="text-fest-green"/> 3. HOW WE USE YOUR DATA
            </h3>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Send you festival updates (lineup drops, schedule changes).</li>
              <li>Respond to your queries.</li>
              <li>Analyze website traffic to fix bugs.</li>
            </ul>

            <h3 className="font-bangers text-3xl mt-8 mb-4 flex items-center gap-2">
              <Shield className="text-fest-yellow text-black"/> 4. THIRD-PARTY SHARING
            </h3>
            <p>
              We do not sell your data. We only share strictly necessary info with trusted partners (like email services) to run the festival. We comply with all Indian laws regarding data protection.
            </p>

            <div className="mt-8 p-6 bg-gray-100 border-2 border-black rounded-xl">
              <h4 className="font-bangers text-2xl mb-2">CONTACT US</h4>
              <p>Questions about your data? Email us at <a href="mailto:privacy@msf26.com" className="text-fest-blue font-bold hover:underline">privacy@msf26.com</a></p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}