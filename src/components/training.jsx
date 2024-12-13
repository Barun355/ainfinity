import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const trainingPrograms = [
    {
        title: "Financial Analyst Training & Placement",
        description: "Comprehensive training program with guaranteed placement opportunities",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300",
    },
    {
        title: "ERP Finance Mastery",
        image: "https://kzmk0xvmcj94m5ld011o.lite.vusercontent.net/placeholder.svg?/placeholder.svg?height=200&width=300",
        modules: [
            "SAP S/4 HANA FINANCE",
            "SAP FICO",
            "ORACLEE FINANCE"
        ]
    }
]

export default function Training() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center" id="training">
            <div className="container px-4 md:px-6">
                <div className="text-start space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-orange-500 underline">
                        Training & Placement Program
                    </h2>
                    <p className="text-gray-500 md:text-gray-400 text-lg md:text-xl">
                        Launch your career with our specialized training programs
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    {trainingPrograms.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="rounded-lg mb-4 w-full h-48 object-cover"
                                    />
                                    <CardTitle className="text-lg sm:text-xl text-black">{program.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {program.description && (
                                        <p className="text-sm sm:text-base text-accent-foreground">{program.description}</p>
                                    )}
                                    {program.modules && (
                                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-accent-foreground">
                                            {program.modules.map((module, idx) => (
                                                <li key={idx} className="text-accent-foreground">{module}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

