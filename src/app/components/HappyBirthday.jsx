"use client"

import { motion } from "motion/react"
import { ArrowRight, Heart, PartyPopper } from "lucide-react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic";

    // Dynamically load with SSR disabled
    const HeartBackground = dynamic(() => import("./HeartBackground"), {
        ssr: false,
    });

export default function HeartfeltBirthday({ onNext }) {
  const [balloonCount, setBalloonCount] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setBalloonCount(window.innerWidth >= 768 ? 25 : 6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const balloonColors = [
    "from-rose-400 to-pink-500",
    "from-sky-400 to-blue-500",
    "from-lime-400 to-green-500",
    "from-amber-400 to-yellow-500",
    "from-fuchsia-400 to-purple-500",
    "from-orange-400 to-red-500",
  ];


  const Balloon = ({ color, delay = 0, x = 0 }) => (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, bottom: "-5%", zIndex: 10 }}
      animate={{ y: [0, -20, 0], x: [0, 8, -8, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <div className="relative w-[60px] h-[70px]">
        <div className={`w-full h-full bg-gradient-to-b ${color} rounded-full shadow-lg`}>
          <div className="absolute top-2 left-2 w-3 h-5 bg-white/40 rounded-full blur-[1px]" />
        </div>
        <div
          className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[12px] h-[12px] bg-gradient-to-b ${color}`}
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>
    </motion.div>
  );

  <div className="absolute inset-0 pointer-events-none animate-pulse bg-[radial-gradient(circle,_#ffffff1a_1px,_transparent_1px)] bg-[length:20px_20px]" />

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-100 p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
        <HeartBackground/>

        {/* Optional background sparkle effect */}
            
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ff000033_3px,_transparent_1px)] bg-[length:24px_24px] animate-[twinkle_4s_linear_infinite]" />

      {/* Balloons */}
      {Array.from({ length: balloonCount }).map((_, i) => {
        const x = (100 / balloonCount) * i;
        const color = balloonColors[i % balloonColors.length];
        return <Balloon key={`balloon-${i}`} x={x} color={color} delay={i * 0.2} />;
      })}

      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-red-600 mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          🎁✨💝 Wish you a very happiest birthday ever, madam jii 💖🎇🎉
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-pink-600 font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          Today, the world sparkles a little brighter — just for you.🎊✨✨
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-blue-700 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          🥰🥰As beautiful as your smile, as soft as your soul — may today be filled with everything you deserve. Here's A small effort from the heart, hoping it adds a little light to your day 💖🌷
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 hover:from-pink-500 hover:to-indigo-500 text-white text-lg md:text-xl px-10 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[104%]"
        >
          <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }}>
            <PartyPopper className="w-5 h-5" />
            <span>Celebrate Together</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
}