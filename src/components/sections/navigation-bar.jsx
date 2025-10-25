'use client'

import { motion } from "framer-motion";
import Logo from "@/components/ui/logo";
import NavigationLinks from "@/components/ui/navigation-links";
import ContactButton from "@/components/ui/contact-button";

export default function NavigationBar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 w-full max-w-[1170px] mx-auto py-4 sm:py-6 border-b border-gray-200/30 backdrop-blur-sm transition-all duration-300"
    >
      <div className="flex items-center justify-between h-full">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo />
        </motion.div>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavigationLinks />
        </motion.div>
        
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactButton />
        </motion.div>
      </div>
    </motion.nav>
  );
}
