export default function About() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center" id="about">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-orange-500 underline">About Us</h2>
              <p className="text-gray-500 md:text-gray-400 text-lg md:text-xl">
                We are a leading online education platform dedicated to empowering professionals
                with cutting-edge skills in finance, technology, and data analytics. Our expert-led
                courses and comprehensive training programs are designed to help you succeed in
                today's competitive job market.
              </p>
              <div className="space-y-2">
                <h3 className="font-black text-muted-foreground text-xl md:text-3xl">Our Mission</h3>
                <p className="text-gray-500 text-lg">
                  To provide accessible, high-quality education that bridges the gap between
                  academic learning and industry requirements, ensuring our students are
                  well-prepared for successful careers.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=400&width=600"
                alt="About Us"
                className="rounded-lg shadow-xl w-full h-auto max-w-md lg:max-w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  