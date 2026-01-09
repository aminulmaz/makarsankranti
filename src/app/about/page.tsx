"use client";
export default function About() {
  return (
    <main className="min-h-screen bg-fest-sky pt-32 pb-20 px-4 bg-halftone">
      <div className="max-w-4xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-funky rotate-1">
        
        <h1 className="font-bangers text-6xl mb-8 text-black text-stroke-2">OUR STORY</h1>
        
        <div className="prose prose-lg font-poppins text-black font-medium">
            <p className="mb-6 text-xl">
                It started with two things: <span className="bg-fest-yellow px-2 border-2 border-black">A Rooftop</span> and a <span className="bg-fest-red text-white px-2 border-2 border-black">Speaker</span>.
            </p>
            <p className="mb-6">
                Makar Sankranti in Assam isn't just about the harvest; it's about looking up. The sky fills with colors, and the streets fill with music. We wanted to bring that chaotic, beautiful energy into one ground.
            </p>
            <p className="mb-6">
                Since 2020, MSF has grown from a neighborhood jam session to Guwahati's loudest indie festival. We don't do VIP lounges with AC. We do mud, music, and kites that get stuck in trees.
            </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="bg-black text-white p-6 font-bangers text-3xl text-center border-4 border-white shadow-lg">
                5 YEARS
            </div>
            <div className="bg-fest-orange p-6 font-bangers text-3xl text-center border-4 border-black shadow-funky-sm">
                50+ BANDS
            </div>
        </div>

      </div>
      
    </main>
  );
}