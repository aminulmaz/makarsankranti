import type { Metadata } from "next";
import { Bangers, Poppins } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaintenanceGuard from "@/components/MaintenanceGuard"; // <--- The Security Wrapper

// 1. SETUP FONTS
// We load them here so Next.js optimizes them automatically (Zero Layout Shift)
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "900"], // Regular, SemiBold, Bold, Black
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// 2. SEO METADATA
export const metadata: Metadata = {
  title: "Makar Sankranti Festival 2026",
  description: "The loudest, craziest, and most colorful festival in Silchar, Assam! Join us on Feb 7th & 8th.",
  icons: {
    icon: "/logo.jpg", // Ensure this exists in public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bangers.variable} ${poppins.variable}`}>
      <body className="antialiased bg-white text-black selection:bg-fest-red selection:text-white">
        
        {/* 3. MAINTENANCE GUARD
            This wraps the entire app. If 'maintenance_mode' is TRUE in Firebase,
            it hides Navbar, Footer, and Page Content, replacing them with the 
            "Building the Stage" screen.
        */}
        <MaintenanceGuard>
          <Navbar />
          {children}
          <Footer />
        </MaintenanceGuard>

      </body>
    </html>
  );
}