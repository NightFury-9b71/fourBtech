'use client'

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      avatar: "/Avatar Image.png",
      rating: 5,
      content: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments."
    },
    {
      id: 2,
      name: "Daniel Thompson", 
      role: "Product Designer",
      avatar: "/Avatar Image (1).png",
      rating: 5,
      content: "Discover a payment app focused on transparency. Enjoy a seamless experience with no hidden fees, providing clarity on every single transaction. It's designed to put you in control of your payments."
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Software Engineer",
      avatar: "/Avatar Image (2).png",
      rating: 5,
      content: "This payment app has revolutionized how I handle transactions. The interface is intuitive, the security is top-notch, and the customer support is exceptional. Highly recommended for anyone looking for a reliable payment solution."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, testimonials.length - 1)) % Math.max(1, testimonials.length - 1));
  };

  const visibleTestimonials = testimonials.slice(currentSlide, currentSlide + 2);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <Badge className="w-fit font-['Outfit'] font-semibold text-base leading-[150%] tracking-[0%] text-center text-purple-700 bg-transparent hover:bg-transparent border-0 mb-6">
              TESTIMONIAL
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              We've build trust with 
              <br className="hidden md:block" />
              reviews from real users
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-lg font-['Urbanist']">
              Boost your credibility by featuring genuine testimonials from real 
              users, showcasing their positive experiences and satisfaction with 
              Monks Pay services.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="icon"
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Testimonials */}
          <div className="space-y-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentSlide}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-50 border-0 p-8 hover:shadow-lg transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.3 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg font-['Urbanist']">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.max(1, testimonials.length - 1) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-purple-600 w-8' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
