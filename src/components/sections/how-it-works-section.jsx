'use client'

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, CreditCard, Banknote } from "lucide-react";
import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Download Easy Pay",
      description: "Get the Easy Pay app today from the App Store or Google Play hassle free.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      number: "02", 
      icon: CreditCard,
      title: "Link your bank or card",
      description: "Easily connect your account in seconds with advanced security for peace of mind.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      number: "03",
      icon: Banknote,
      title: "Start paying",
      description: "Easily split bills, send money to friends, and make smooth online payments instantly.",
      bgColor: "bg-green-50", 
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-0"
          >
            <Badge className="w-fit font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center text-purple-700 bg-transparent hover:bg-transparent border-0 mb-6">
              HOW IT WORKS
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Make payments, transfers, and 
              <br className="hidden md:block" />
              more in 3 simple steps
            </h2>
          </motion.div>

          {/* Get Started Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="bg-blue-600 font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center align-middle text-white hover:bg-blue-700 rounded-full px-6 py-2">
              Get Started Now
            </Button>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`${step.bgColor} border-0 p-8 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
                  {/* Step Number */}
                  <motion.div 
                    className="absolute top-4 right-4 text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  >
                    {step.number}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative z-10"
                  >
                    {/* Icon */}
                    <motion.div 
                      className={`${step.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`w-8 h-8 ${step.iconColor}`} strokeWidth={2} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-['Urbanist']">
                      {step.description}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/man-using-laptop-coffee-shop.jpg"
            alt="How it works background"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="w-full h-full bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-gray-600 text-lg">
                Join thousands of satisfied users making payments effortlessly
              </p>
            </div>
          </div>
          
          {/* Overlay for better text readability if using actual image */}
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Floating elements for visual interest */}
          <motion.div
            className="absolute top-8 left-8 w-4 h-4 bg-white/60 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-12 right-12 w-6 h-6 bg-white/40 rounded-full"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
