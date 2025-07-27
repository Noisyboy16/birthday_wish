"use client"

import { motion } from "framer-motion"
import { Camera, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import dynamic from "next/dynamic";

    // Dynamically load with SSR disabled
    const HeartBackground = dynamic(() => import("./HeartBackground"), {
        ssr: false,
    });


export default function PhotoGallery({ onNext }) {
    const photos = [
        { id: 1, src: "/images/ksh_5.jpeg" },
        { id: 2, src: "/images/ksh_1.jpeg" },
        { id: 3, src: "/images/ksh_2.jpeg" },
        { id: 4, src: "/images/ksh_3.jpeg" },
        { id: 5, src: "/images/ksh_4.jpeg" },
    ]

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-8 relative bg-gradient-to-br from-red-900 via-purple-900 to-blue-400 text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
        >
             {/* Optional background sparkle effect */}
            
            {/* <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ffffff33_3px,_transparent_1px)] bg-[length:24px_24px] animate-[twinkle_4s_linear_infinite]" /> */}
            <HeartBackground/>
            <motion.div
                className="text-center mb-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    className="mb-8"
                    animate={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Camera className="w-20 h-20 text-pink-400 mx-auto drop-shadow-2xl animate-pulse" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4 drop-shadow-md">
                    Moments With You
                </h1>

                <p className="text-lg md:text-xl text-purple-200 font-light italic max-w-xl mx-auto px-2">
                    These arent just pictures... they're fragments of joy with <span className="text-pink-300 font-semibold">Madam Jii 💖</span>
                </p>
            </motion.div>

            {/* Cube Gallery */}
            <div className="w-full max-w-sm md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 30,
                        shadowScale: 0.95,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper h-[350px] md:h-[450px]"
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={photo.id}>
                            <img
                                src={photo.src}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Button */}
            <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:brightness-110 text-white text-lg px-8 py-4 rounded-full shadow-2xl border-2 border-white/20 transition-all duration-300 hover:scale-[103%] animate-pulse"
                >
                    <motion.div className="flex items-center space-x-2" whileHover={{ x: 6 }}>
                        <span className="tracking-wide">One Last Thing</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}