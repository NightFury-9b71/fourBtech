'use client'

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I create an Easy Pay account?",
      answer: "Creating an Easy Pay account is simple! Download the app from the App Store or Google Play, then follow the quick registration process. You'll need to provide your email, create a password, and verify your identity. The entire process takes less than 5 minutes."
    },
    {
      question: "Is Easy Pay secure for online transactions?",
      answer: "Absolutely! Easy Pay uses bank-level encryption, two-factor authentication, and advanced fraud detection to protect your money. All transactions are monitored 24/7, and we never share your financial information with third parties."
    },
    {
      question: "What are the fees for using Easy Pay?",
      answer: "Easy Pay offers transparent pricing with no hidden fees. Personal transfers to friends and family are completely free. Business transactions have a small fee of 2.9% + $0.30 per transaction. Check our Pricing page for detailed information."
    },
    {
      question: "Can I use Easy Pay internationally?",
      answer: "Yes! Easy Pay supports international payments in over 130 countries. You can send and receive money globally with competitive exchange rates and low fees. Currency conversion is handled automatically."
    },
    {
      question: "How long do transfers take?",
      answer: "Most Easy Pay transfers are instant! Money sent to other Easy Pay users arrives immediately. Bank transfers typically take 1-3 business days, depending on your bank. International transfers may take up to 5 business days."
    },
    {
      question: "What should I do if I encounter a problem?",
      answer: "Our dedicated support team is available 24/7 to help you. You can reach us through in-app chat, email at support@easypay.com, or call our hotline. We typically respond within minutes and resolve most issues the same day."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
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
              FAQ
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto mb-4">
              Frequently asked questions
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Urbanist']">
              Everything you need to know about Easy Pay. Can't find the answer you're looking for? 
              Feel free to contact our support team.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-purple-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-purple-700 transition-colors duration-300" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="px-6 pb-6 pt-0"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 leading-relaxed font-['Urbanist']">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0 p-8 md:p-12 max-w-3xl mx-auto hover:shadow-xl transition-all duration-300">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Still have questions?
            </motion.h3>
            <p className="text-gray-600 mb-6 font-['Urbanist']">
              Can't find the answer you're looking for? Our friendly support team is here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center text-white hover:bg-blue-700 rounded-full px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Support
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
