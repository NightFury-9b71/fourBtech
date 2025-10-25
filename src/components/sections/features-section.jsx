'use client'

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, FileText, Wallet, CreditCard } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Instant payments",
      description: "Send money to friends or family in real-time, for free.",
      color: "text-purple-600"
    },
    {
      icon: FileText,
      title: "No hidden fees",
      description: "Clear and simple pricing. Always be aware of your costs.",
      color: "text-blue-600"
    },
    {
      icon: Wallet,
      title: "Digital wallet",
      description: "Store money securely and make fast transfers or purchases.",
      color: "text-cyan-600"
    },
    {
      icon: CreditCard,
      title: "Secure transactions",
      description: "End-to-end encryption for all transactions.",
      color: "text-purple-600"
    }
  ];

  const companies = [
    { name: "Logoipsum", logo: "📊" },
    { name: "logoipsum", logo: "🔧" },
    { name: "logo-ipsum", logo: "⚙️" },
    { name: "logoipsum", logo: "👁️" },
    { name: "Logoipsum", logo: "⭕" },
    { name: "Logoipsum", logo: "👤" }
  ];

  return (
    <section id="features" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="w-fit font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center text-purple-700 bg-transparent hover:bg-transparent border-0 mb-6">
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                whileInView={{ opacity: 1, letterSpacing: "0em" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                FEATURES
              </motion.span>
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                Why choose Easy Pay for{' '}
              </motion.span>
              <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                effortless payments?
              </motion.span>
            </h2>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 p-8 h-full hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50/50 hover:from-purple-50/30 hover:to-blue-50/30">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className={`w-8 h-8 ${feature.color}`} strokeWidth={2} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-['Urbanist']">
                      {feature.description}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-100 pt-12 overflow-hidden"
        >
          <div className="relative flex">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer min-w-[200px]"
                >
                  <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-600">
                    <span className="text-2xl">{company.logo}</span>
                    <span className="font-medium text-sm whitespace-nowrap">{company.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
