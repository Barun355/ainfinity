'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: "Transform Your Career",
    description: "Join our industry-leading courses and unlock your potential",
    image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=1080&width=1920"
  },
  {
    title: "Learn from Experts",
    description: "Get mentored by industry professionals",
    image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=1080&width=1920"
  },
  {
    title: "Guaranteed Placement",
    description: "Start your journey towards a successful career",
    image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=1080&width=1920"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden" id='hero'>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1 
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          key={`description-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-2xl"
        >
          {slides[currentSlide].description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#enroll"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-200"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

