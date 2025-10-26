'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import NavigationLinks from "@/components/ui/navigation-links";
import ContactButton from "@/components/ui/contact-button";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navItems = ['Features', 'Pricing', 'Security', 'Benefits'];

  const handleMobileClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1170px] mx-auto py-1.5 sm:py-2 px-4">
          <div className="flex items-center justify-between min-h-[50px] sm:min-h-[60px]">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Logo />
            </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block"
          >
            <NavigationLinks />
          </motion.div>
          
          {/* Desktop Contact Button */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block"
          >
            <ContactButton />
          </motion.div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-white/10 transition-colors relative z-[110] bg-transparent"
              aria-label="Toggle menu"
              type="button"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-[50px] sm:top-[60px] right-0 bottom-0 w-[280px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-2xl z-[105] lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-12">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <button
                          onClick={() => handleMobileClick(item)}
                          className="w-full text-left font-['Urbanist'] font-semibold text-xl text-gray-900 hover:text-purple-600 transition-colors py-2"
                        >
                          {item}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Button */}
                <div className="p-6 border-t border-gray-200">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <ContactButton />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
