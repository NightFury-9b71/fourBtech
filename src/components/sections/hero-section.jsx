'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Apple, Play } from "lucide-react";
import Avatars from "@/components/Avatars";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pb-6 sm:pb-8 lg:pb-0">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-2xl space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <Badge className="bg-transparent text-[#787878] w-fit">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  EASY PAYMENT
                </motion.span>
              </Badge>
              
              <h1 className="font-['Urbanist'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight lg:leading-[120%] text-[#01081B]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Pay fast and{' '}
                </motion.span>
                <span className="relative inline-block pb-4">
                  <motion.span 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    smarter
                  </motion.span>
                  {/* Animated SVG Underline */}
                  <motion.svg
                    className="absolute -bottom-0 left-0 w-[110%] h-4"
                    viewBox="0 0 300 20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <motion.path
                      d="M0,12 Q75,8 150,12 T300,12"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9333EA" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  from anywhere
                </motion.span>
              </h1>
              
              <p className="font-['Urbanist'] font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#4D525F] max-w-lg">
                Experience the future of payments: fast, secure, and tailored 
                for the next generation's convenience and trust.
              </p>
            </motion.div>

            {/* App Store Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-black text-white flex items-center space-x-2 sm:space-x-3 cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[140px] h-12 border border-gray-600 hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
                     style={{ borderRadius: '7.2px', borderWidth: '1.2px' }}>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Apple className="w-6 h-6" strokeWidth={2} fill="white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold whitespace-nowrap">App Store</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-black text-white flex items-center space-x-2 sm:space-x-3 cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[140px] h-12 border border-gray-600 hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
                     style={{ borderRadius: '7.2px', borderWidth: '1.2px' }}>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-6 h-6" strokeWidth={2} fill="white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold whitespace-nowrap">Google Play</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Man Image with Floating Elements */}
          <div className="relative flex-1 w-full lg:max-w-3xl order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] xl:h-[750px] flex items-end justify-center lg:justify-end"
            >
              {/* Avatar Tooltip Card - Positioned at shoulder level */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute top-[25%] right-2 sm:top-[28%] sm:right-4 md:top-[25%] md:right-8 lg:top-[30%] lg:right-8 xl:right-12 z-30"
              >
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-xl p-3 sm:p-4 flex flex-row items-center gap-2 sm:gap-3 min-w-[160px] sm:min-w-[180px] lg:min-w-[220px] hover:shadow-2xl transition-all duration-300">
                  <Avatars />
                  <div className="flex flex-col">
                    <motion.span 
                      className="font-['Urbanist'] font-semibold text-base sm:text-lg leading-[120%] tracking-[0%] text-gray-900"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      120K+
                    </motion.span>
                    <span className="font-['Urbanist'] font-normal text-xs sm:text-sm leading-[150%] tracking-[0%] text-gray-600">Active users</span>
                  </div>
                </Card>
              </motion.div>

              {/* Main Man Image - Anchored to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative w-full h-full flex items-end justify-center lg:justify-end"
              >
                <div className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] xl:w-[580px] h-[380px] sm:h-[480px] md:h-[580px] lg:h-[650px] xl:h-[720px]">
                  <Image
                    src="/man-wearing-t-shirt-gesturing.png"
                    alt="Man with curly hair holding phone"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </motion.div>

              {/* Payment Received Card - Positioned near phone in hand */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute top-[80%] left-0 sm:top-[62%] sm:left-1 md:top-[58%] md:left-2 lg:top-[50%] lg:left-4 z-20"
              >
                <Card className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 lg:p-5 shadow-2xl border-0 rounded-2xl min-w-[160px] sm:min-w-[180px] lg:min-w-[220px] hover:shadow-2xl transition-all duration-300">
                  <div className="space-y-1 lg:space-y-2">
                    <div className="text-xs lg:text-sm text-gray-600 font-['Urbanist']">Payment Received</div>
                    <motion.div 
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                    >
                      +35,890.00
                    </motion.div>
                    <div className="flex items-center justify-between text-xs lg:text-sm">
                      <span className="text-gray-500">11th Jan, 2024</span>
                      <motion.span 
                        className="text-green-500 flex items-center font-semibold"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        3.09% ↗️
                      </motion.span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Background Decorative Elements */}
              <motion.div
                className="absolute top-8 right-8 sm:top-12 sm:right-12 lg:top-16 lg:right-16 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-32 left-8 sm:bottom-40 sm:left-12 lg:bottom-48 lg:left-16 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-lg"
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
