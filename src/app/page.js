'use client'

import { motion } from "framer-motion";
import NavigationBar from "@/components/sections/navigation-bar";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import SecuritySection from "@/components/sections/security-section";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import DownloadSection from "@/components/sections/download-section";
import CtaSection from "@/components/sections/cta-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navigation Section - Outside wrapper */}
      <NavigationBar />
      
      {/* Navigation Section */}
      <motion.div 
        className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 w-full flex flex-col rounded-3xl px-4 mx-auto overflow-hidden"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <HeroSection />
      </motion.div>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Security Section */}
      <SecuritySection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Download Section */}
      <DownloadSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer Section */}
      <FooterSection />
    </motion.div>
  );
}
