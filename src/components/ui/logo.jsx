'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <motion.a
      href="/"
      className="flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div 
        className="w-[28px] h-[50px] sm:w-[36px] sm:h-[64px] md:w-[41px] md:h-[73px] flex items-center justify-center flex-shrink-0"
        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/logo.png"
          alt="Easy Pay Logo"
          width={41}
          height={73}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>
      <motion.span 
        className="font-['Urbanist'] font-bold text-lg sm:text-2xl md:text-[28px] leading-tight opacity-100 text-[#01081B] ml-1.5 sm:ml-2 flex items-center group-hover:text-purple-600 transition-colors duration-300 whitespace-nowrap"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Easy Pay
      </motion.span>
    </motion.a>
  );
}
