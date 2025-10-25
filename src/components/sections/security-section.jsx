'use client'

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function SecuritySection() {
  const securityFeatures = [
    {
      id: 1,
      title: "Two-factor authentication",
      description: "Two-factor authentication ensures added protection by using verification steps.",
      dotColor: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      id: 2,
      title: "Fraud detection and alerts",
      description: "Fraud detection safeguards your money, sending instant alerts for any activity.",
      dotColor: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100"
    },
    {
      id: 3,
      title: "Transaction notifications",
      description: "Instant notifications for transaction keep you informed to manage your finances.",
      dotColor: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-100"
    },
    {
      id: 4,
      title: "Biometric access",
      description: "Easily and securely log in with biometric features, and facial recognition.",
      dotColor: "bg-cyan-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-100"
    },
    {
      id: 5,
      title: "End-to-end encryption",
      description: "By encryption, protecting your data from unauthorized access.",
      dotColor: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100"
    },
    {
      id: 6,
      title: "24/7 Protection support",
      description: "Our dedicated team is available around the clock to help you.",
      dotColor: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    }
  ];

  return (
    <section id="security" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="w-fit font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center text-purple-700 bg-transparent hover:bg-transparent border-0 mb-6">
              SECURITY
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We protect your money at 
              <br className="hidden md:block" />
              every step with Easy Pay
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg text-gray-600 leading-relaxed font-['Urbanist']">
              Easy Pay ensures your money is protected at every 
              step with advanced encryption, real-time monitoring, 
              and multi-factor authentication.
            </p>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`${feature.bgColor} ${feature.borderColor} border p-8 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative z-10"
                >
                  {/* Colored Dot */}
                  <div className="flex items-start mb-6">
                    <motion.div 
                      className={`${feature.dotColor} w-3 h-3 rounded-full flex-shrink-0 mt-2`}
                      whileHover={{ scale: 2 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-purple-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-['Urbanist']">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Subtle background pattern */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className={`w-full h-full ${feature.dotColor} rounded-full transform translate-x-8 -translate-y-8`}></div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
