'use client'

import { motion } from "framer-motion";
import Logo from "@/components/ui/logo";

export default function FooterSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const shortLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Security", href: "#security" },
    { name: "Testimonial", href: "#testimonials" }
  ];

  const otherPages = [
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms & conditions", href: "/terms" },
    { name: "404", href: "/404" }
  ];

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
            </p>
          </motion.div>

          {/* Short Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Short links</h3>
            <ul className="space-y-4">
              {shortLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a 
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Pages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Other pages</h3>
            <ul className="space-y-4">
              {otherPages.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a 
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Easy Pay. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
