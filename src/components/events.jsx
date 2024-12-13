import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const events = [
  {
    category: "Workshops",
    items: [
      { title: "AI Workshop", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Finance Seminar", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Data Analytics", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Machine Learning Basics", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Blockchain Fundamentals", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Cloud Computing Workshop", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
    ]
  },
  {
    category: "Webinars",
    items: [
      { title: "Career Guidance", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Industry Trends", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Tech Talk", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Future of AI", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Cybersecurity Essentials", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
      { title: "Data Science in Business", image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300" },
    ]
  }
]

export default function Events() {
  const [activeTab, setActiveTab] = useState("Workshops")
  const containerRef = useRef(null)
  const controls = useAnimation()
  const [key, setKey] = useState(0)

  useEffect(() => {
    const scrollContainer = containerRef.current
    if (!scrollContainer) return

    let animationFrame
    let startTime = null
    const duration = 30000 // 30 seconds for a full cycle
    const scrollSpeed = scrollContainer.scrollWidth / (duration / 1000)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = (elapsed % duration) / duration
      const scrollPosition = progress * scrollContainer.scrollWidth

      // Ensure smooth transition when reaching the end
      if (scrollPosition > totalWidth - scrollContainer.clientWidth) {
        const overlap = scrollPosition - (totalWidth - scrollContainer.clientWidth)
        scrollPosition = overlap
      }
      
      controls.set({ x: -scrollPosition })

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [activeTab, controls, key])

  const handleTabChange = (value) => {
    setActiveTab(value)
    controls.set({ x: 0 })
    setKey(prevKey => prevKey + 1)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center" id="events">
      <div className="container px-4 md:px-6">
        <div className="text-start space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl underline text-orange-500">Events Gallery</h2>
          <p className="text-gray-500 md:text-gray-400 text-lg md:text-xl">Explore our recent events and activities</p>
        </div>
        <Tabs defaultValue="Workshops" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            {events.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {events.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-10"></div>
                <motion.div
                  key={`${category.category}-${key}`}
                  ref={containerRef}
                  className="flex gap-6"
                  animate={controls}
                  transition={{ type: "tween", ease: "linear" }}
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-[300px]"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-lg mb-4 w-full h-48 object-cover"
                          />
                          <h3 className="font-semibold text-sm sm:text-base text-black">{item.title}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

