import type { Metadata } from "next";
import { Bangers, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// 1. Load Fonts
const bangers = Bangers({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-bangers" 
});

const poppins = Poppins({ 
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-poppins" 
});

// 2. SEO Metadata
export const metadata: Metadata = {
  title: "Makar Sankranti Festival 2026",
  description: "Assam's Funkiest Music & Kite Festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${poppins.variable} antialiased bg-fest-sky`}>
        {/* 3. The Global Structure */}
        <Navbar />
        <div className="mt-0">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}