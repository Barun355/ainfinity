import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const courses = [
    {
        title: "8 Week Financial Modelling & Data Analytics Program",
        duration: "8 weeks",
        level: "Intermediate to Advanced",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300"
    },
    {
        title: "6 Week Machine Learning & AI Course",
        duration: "6 weeks",
        level: "Intermediate",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300"
    },
    {
        title: "4 Week Financial Modelling Course",
        duration: "4 weeks",
        level: "Beginner to Intermediate",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300"
    },
    {
        title: "2 Week Generative AI Boot Camp",
        duration: "2 weeks",
        level: "Intermediate",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300"
    },
    {
        title: "One Week Power BI Workshop",
        duration: "1 week",
        level: "Beginner",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300"
    }
]

export default function Courses() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center" id="courses">
            <div className="container px-4 md:px-6">
                <div className="text-start space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-orange-500">
                        Online Courses Available
                    </h2>
                    <p className="text-gray-500 md:text-gray-400 text-lg md:text-xl">
                        Choose from our wide range of professional courses
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="rounded-lg mb-4 w-full h-48 object-cover"
                                    />
                                    <CardTitle className="text-lg sm:text-xl text-black">{course.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {/* <div className="space-y-2"> */}
                                    <p className="text-sm text-accent-foreground font-black">
                                        Duration: <span className="text-muted-foreground">{course.duration}</span>
                                    </p>
                                    <p className="text-sm text-accent-foreground font-black">
                                        Level: <span className="text-muted-foreground">{course.level}</span>
                                    </p>
                                    {/* </div> */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

