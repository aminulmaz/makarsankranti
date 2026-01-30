import type { Metadata } from "next";
import { Bangers, Poppins } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaintenanceGuard from "@/components/MaintenanceGuard";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// --- SEO SUPERCHARGE ---
export const metadata: Metadata = {
  metadataBase: new URL('https://makarsankrantifestival.com'), // REPLACE WITH YOUR REAL DOMAIN
  title: {
    default: "Makar Sankranti Festival 2026 | Silchar's Biggest Event",
    template: "%s | MSF '26"
  },
  description: "Join the loudest festival in Silchar! Live music, kites, food, and vibes. Featuring Shreya Ghoshal, Divine, and more on Feb 7th & 8th, 2026.",
  keywords: ["Makar Sankranti", "Silchar Festival", "Assam Events", "Shreya Ghoshal Silchar", "Divine Concert", "Kite Festival Assam", "Sonai Events"],
  authors: [{ name: "Aminul Mazumder" }],
  creator: "Aminul Mazumder",
  openGraph: {
    title: "Makar Sankranti Festival 2026",
    description: "Silchar's craziest weekend is back. Feb 7-8. Don't miss out!",
    url: 'https://makarsankrantifestival.com',
    siteName: 'MSF 2026',
    images: [
      {
        url: '/og-image.jpg', // Create a 1200x630px image and put it in public folder
        width: 1200,
        height: 630,
        alt: 'Makar Sankranti Festival Vibes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Makar Sankranti Festival 2026",
    description: "The biggest music & kite festival in Assam.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpg",
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
        <MaintenanceGuard>
          <Navbar />
          {children}
          <Footer />
        </MaintenanceGuard>
      </body>
    </html>
  );
}