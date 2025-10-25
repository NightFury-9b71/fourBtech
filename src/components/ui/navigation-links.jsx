'use client'

import { motion } from "framer-motion";

export default function NavigationLinks() {
  const navItems = ['Features', 'Pricing', 'Security', 'Benefits'];

  const handleClick = (e, item) => {
    e.preventDefault();
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden md:flex items-center gap-4 lg:gap-8">
      {navItems.map((item, index) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={(e) => handleClick(e, item)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          className="relative font-['Urbanist'] font-semibold text-sm sm:text-base lg:text-lg text-[#4D525F] hover:text-purple-600 transition-colors duration-300 whitespace-nowrap group cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
          <motion.span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"
          />
        </motion.a>
      ))}
    </div>
  );
}
