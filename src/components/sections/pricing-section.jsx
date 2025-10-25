'use client'

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Free Plan",
      description: "Free for personal payments.",
      price: "$0",
      period: "/month",
      features: [
        "Up to 100 transactions per month",
        "Basic fraud protection", 
        "Email support"
      ],
      buttonText: "Get Free Plan",
      buttonVariant: "outline",
      isPopular: false,
      cardBg: "bg-white",
      textColor: "text-gray-900"
    },
    {
      name: "Advanced",
      description: "Minimal fees for advanced transactions",
      price: "$19",
      period: "/month",
      features: [
        "Up to 1000 transactions per month",
        "Advanced fraud protection",
        "Detailed transaction reports",
        "Priority email & chat support"
      ],
      buttonText: "Get Advanced Plan",
      buttonVariant: "default",
      isPopular: true,
      cardBg: "bg-gray-900",
      textColor: "text-white"
    },
    {
      name: "Business",
      description: "Premium business transactions",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited transactions per month",
        "Premium fraud protection",
        "Detailed transaction reports",
        "Priority email & chat support"
      ],
      buttonText: "Get Business Plan",
      buttonVariant: "outline",
      isPopular: false,
      cardBg: "bg-white",
      textColor: "text-gray-900"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50 scroll-mt-20">
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
              PRICING
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto mb-4">
              Simple transparent pricing
              <br className="hidden md:block" />
              no hidden fees
            </h2>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${plan.isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <Card className={`${plan.cardBg} ${plan.textColor} border-0 p-8 h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${plan.isPopular ? 'shadow-2xl scale-105' : 'shadow-lg'}`}>
                <motion.div
                  whileHover={{ scale: plan.isPopular ? 1.02 : 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative z-10 h-full flex flex-col"
                >
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`${plan.isPopular ? 'text-gray-300' : 'text-gray-600'} mb-6 font-['Urbanist']`}>
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-baseline mb-6">
                      <span className={`text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-1 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.3 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.isPopular ? 'bg-purple-600' : 'bg-purple-100'}`}>
                            <CheckIcon className={`w-3 h-3 ${plan.isPopular ? 'text-white' : 'text-purple-600'}`} />
                          </div>
                          <span className={`${plan.isPopular ? 'text-gray-300' : 'text-gray-600'} leading-relaxed font-['Urbanist']`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className={`w-full py-2 rounded-full font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center transition-all duration-300 ${
                        plan.isPopular 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'border-2 border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50'
                      }`}
                      variant={plan.buttonVariant}
                    >
                      {plan.buttonText}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Background decoration for popular plan */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-full transform translate-x-12 -translate-y-12"></div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
