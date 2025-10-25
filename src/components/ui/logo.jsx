'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <motion.a
      href="/"
      className="flex items-center cursor-pointer mt-6 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div 
        className="w-[41px] h-[73px] flex items-center justify-center"
        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/logo.png"
          alt="Easy Pay Logo"
          width={41}
          height={73}
          className="w-full h-full object-contain opacity-100"
        />
      </motion.div>
      <motion.span 
        className="font-['Urbanist'] font-bold text-[28px] leading-[150%] tracking-[0%] w-[113px] h-[52px] opacity-100 text-[#01081B] ml-2 flex items-center group-hover:text-purple-600 transition-colors duration-300"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Easy Pay
      </motion.span>
    </motion.a>
  );
}
