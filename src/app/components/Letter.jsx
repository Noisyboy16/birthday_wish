"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Heart, Sparkles, RotateCcw } from "lucide-react"
import confetti from "canvas-confetti"
import dynamic from "next/dynamic";

    // Dynamically load with SSR disabled
    const HeartBackground = dynamic(() => import("./HeartBackground"), {
        ssr: false,
    });


export default function Letter() {
    const [isOpen, setIsOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const [showCursor, setShowCursor] = useState(true)

    const letterText = `My Dearest Madam Jii, Kishori,

Wishing the very very happiest birthday to the prettiest and kindest girl I've ever met in my life till now.
Always keep smiling, your smile lights up everything around you — never stop smiling, because it's truly what makes your presence so warm, beautiful, and unforgettable.

The only reason behind all of this effort is to bring a smile to your face on a day that is meant to celebrate you.
I sincerely hope this small effort adds even a little joy to your special day.

Aur haa, With all due respect, thank you for giving value to my feelings. Genuinely you are the kind of person I've always wished to have in my life since the first day one I saw you, Bahut Pyaari lag rhi thi tum🥰🥺. 

But deep down, I've always known that it may never become a reality. So I expect nothing from you. Still don't know how your presence… you… became so important to me.
I'll try not to disturb you, and will always hold back my feelings that might make you uncomfortable.

Thank you for sharing your thoughts, time, and emotions. I'll always be deeply grateful to you.
You will forever remain one of the most beautiful and unforgettable moments of my life — a memory so precious, still unachievable in reality.

My only regret is knowing… you were never meant to be mine.

Ek bahut hi khubsoorat yaadgar aadhuri kahani ho tum.

Once again Happy Birthday to the beautiful soul..! 🎂✨
Have a great day....😊🥰

-- Koi Baat Nhi
Shivnath Jaiswal`

    useEffect(() => {
        if (showText) {
            let index = 0
            const timer = setInterval(() => {
                if (index < letterText.length) {
                    setCurrentText(letterText.slice(0, index + 1))
                    index++

                } else {
                    clearInterval(timer)
                    setShowCursor(false)
                    confetti({
                        particleCount: 50,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#ff69b4", "#ff1493", "#9370db", "#8a2be2", "#ffd700"],
                    })
                }
            }, 30)

            return () => clearInterval(timer)
        }
    }, [showText, letterText])

    const handleOpenLetter = () => {
        setIsOpen(true)
        setTimeout(() => {
            setShowText(true)
        }, 800)
    }

    const handleReset = () => {
        setIsOpen(false)
        setShowText(false)
        setCurrentText("")
        setShowCursor(true)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
             <HeartBackground/>

            <div className="max-w-4xl w-full">
                <motion.div
                    className="text-center mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
                       Unspoken Thoughts
                    </h1>
                    <p className    ="text-lg text-purple-300">Just for you, on your special day 💌</p>
                </motion.div>

                <motion.div
                    className="relative w-full h-full flex justify-center "
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="envelope"
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenLetter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-80 h-52 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-26 bg-gradient-to-br from-pink-300 to-purple-300 transform origin-top"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Mail className="w-16 h-16 text-pink-500" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Sparkles className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <motion.div
                                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-pink-700 text-base font-semibold"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        Click to open
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="letter"
                                className="w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-pink-300 p-8 relative transition-all"
                                initial={{ rotateX: -90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.2 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                style={{
                                    background:
                                        "linear-gradient(135deg, #ce137dff 0%, #0c3fe6ff 25%, #eb9321ff 50%, #8b11d1ff 75%, #f51717ff 100%)",
                                }}
                            >
                                <div className="text-center mb-6">
                                    <motion.div
                                        className="inline-block"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <Heart className="w-12 h-12 text-red-600 fill-current mx-auto mb-3" />
                                    </motion.div>
                                </div>

                                <div className="min-h-72 max-h-72 overflow-y-auto text-white leading-relaxed">
                                    {showText && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 mr-2 ">
                                            <div className="whitespace-pre-wrap font-cute">
                                                {currentText}
                                                {showCursor && (
                                                    <motion.span
                                                        className="inline-block w-0.5 h-4 bg-purple-600 ml-1"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {currentText === letterText && (
                                    <motion.div
                                        className="text-center mt-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <button
                                            onClick={handleReset}
                                            className="inline-flex items-center gap-2 bg-white/60 text-pink-600 font-medium border border-pink-400 px-5 py-2 rounded-full hover:bg-pink-100 transition-all"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                            Read Again
                                        </button>
                                    </motion.div>
                                )}

                                <div className="absolute top-4 left-4">
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Heart className="w-6 h-6 text-rose-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <Sparkles className="w-6 h-6 text-purple-500" />
                                </div>
                            </motion.div>

                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    )
}