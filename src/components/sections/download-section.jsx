'use client'

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Star, Globe, MessageCircle, CreditCard, Apple, Play } from "lucide-react";

export default function DownloadSection() {
  const stats = [
    {
      number: "10M+",
      label: "Active Downloads",
      icon: Smartphone
    },
    {
      number: "4.8",
      label: "App Store Rating",
      icon: Star
    },
    {
      number: "150+",
      label: "Countries Supported",
      icon: Globe
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: MessageCircle
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center text-purple-700 bg-transparent hover:bg-transparent border-0 mb-6 w-fit">
              DOWNLOAD NOW
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Start your journey with
              <br className="hidden md:block" />
              Easy Pay today
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-['Urbanist']">
              Join millions of users worldwide who trust Easy Pay for their daily transactions. 
              Download now and experience the future of digital payments.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-black text-white flex items-center space-x-3 cursor-pointer px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-900 hover:shadow-xl transition-all duration-300"
                     style={{ borderRadius: '7.2px', borderWidth: '1.2px' }}>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Apple className="w-6 h-6" strokeWidth={2} fill="white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold whitespace-nowrap">App Store</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="bg-black text-white flex items-center space-x-3 cursor-pointer px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-900 hover:shadow-xl transition-all duration-300"
                     style={{ borderRadius: '7.2px', borderWidth: '1.2px' }}>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-6 h-6" strokeWidth={2} fill="white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-base font-semibold whitespace-nowrap">Google Play</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center lg:text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center"
                      >
                        <IconComponent className="w-5 h-5 text-purple-600" strokeWidth={2} />
                      </motion.div>
                      <motion.div 
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                      >
                        {stat.number}
                      </motion.div>
                    </div>
                    <div className="text-gray-600 font-['Urbanist']">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Frame */}
              <motion.div 
                className="relative z-10 bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Mock App Screenshot */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center p-8">
                    <div className="text-center space-y-6">
                      <motion.div 
                        className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <CreditCard className="w-8 h-8 text-white" strokeWidth={2} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Easy Pay</h3>
                      <p className="text-gray-600 font-['Urbanist']">
                        Fast, secure payments at your fingertips
                      </p>
                      
                      {/* Mock Card */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg mt-8"
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <div className="text-left space-y-4">
                          <div className="text-sm opacity-80">Balance</div>
                          <motion.div 
                            className="text-3xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                          >
                            $12,450.00
                          </motion.div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-xs opacity-80">Card Number</div>
                              <div className="text-sm">•••• •••• •••• 8429</div>
                            </div>
                            <CreditCard className="w-6 h-6 text-white/80" strokeWidth={2} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Mock Buttons */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <motion.div 
                          className="bg-white border-2 border-purple-600 text-purple-600 rounded-lg py-3 font-semibold text-sm cursor-pointer"
                          whileHover={{ scale: 1.05, borderColor: "#7c3aed" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Send
                        </motion.div>
                        <motion.div 
                          className="bg-purple-600 text-white rounded-lg py-3 font-semibold text-sm cursor-pointer"
                          whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Request
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
                animate={{ 
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
