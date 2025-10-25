'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className="bg-blue-600 font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center align-middle text-white hover:bg-blue-700 hover:shadow-lg rounded-full px-6 py-2 transition-all duration-300 relative overflow-hidden group">
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <span className="relative z-10">Contact Us</span>
      </Button>
    </motion.div>
  );
}
