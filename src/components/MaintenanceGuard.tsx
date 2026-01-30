"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase"; 
import { doc, onSnapshot } from "firebase/firestore";
import UnderConstruction from "@/components/UnderConstruction"; // <--- FIXED IMPORT
import { Construction } from "lucide-react"; // <--- FIXED IMPORT

export default function MaintenanceGuard({ children }: { children: React.ReactNode }) {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // REAL-TIME LISTENER
    const unsub = onSnapshot(doc(db, "settings", "config"), (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setIsMaintenance(data?.maintenance_mode || false);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase Error:", error);
      setLoading(false); 
    });

    return () => unsub();
  }, []);

  if (loading) {
    return (
       <div className="h-screen w-screen flex flex-col items-center justify-center bg-fest-yellow fixed inset-0 z-[9999]">
          <Construction className="w-16 h-16 animate-bounce mb-4 text-black" />
          <h1 className="font-bangers text-4xl animate-pulse text-black tracking-widest">
            CHECKING VIBES...
          </h1>
       </div>
    );
  }

  if (isMaintenance) {
    return <UnderConstruction />;
  }

  return <>{children}</>;
}