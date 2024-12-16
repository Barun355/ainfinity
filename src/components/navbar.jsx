import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Menu } from "lucide-react"

const courses = [
  {
    "title": "8-Week Financial Modelling & Data Analytics Program",
    "description": "Master the art of financial modelling and data analytics in just 8 weeks. Learn Excel, advanced financial techniques, and data-driven decision-making skills to excel in corporate finance, investment analysis, and business strategy.",
    "href": "8-week-financial-modelling-data-analytics-program"
  },
  {
    "title": "6-Week Machine Learning & AI Mastery Course",
    "description": "Gain hands-on experience in machine learning and artificial intelligence over 6 weeks. Build real-world AI solutions, master Python, and explore deep learning, neural networks, and predictive analytics to kickstart your career in AI.",
    "href": "6-week-machine-learning-ai-mastery-course"
  },
  {
    "title": "4-Week Financial Modelling Essentials Course",
    "description": "Learn the core principles of financial modelling in 4 weeks. Build dynamic financial models, forecast revenues, analyze risks, and gain the skills needed for investment banking, corporate finance, and business strategy roles.",
    "href": "4-week-financial-modelling-essentials-course"
  },
  {
    "title": "2-Week Generative AI Boot Camp",
    "description": "Dive into the world of generative AI in just 2 weeks. Learn how to build AI models for creative content, image generation, and text synthesis, and harness the power of cutting-edge AI technologies to unlock new opportunities.",
    "href": "2-week-generative-ai-boot-camp"
  },
  {
    "title": "One-Week Power BI Workshop",
    "description": "Transform your data into actionable insights with our Power BI workshop. In just one week, learn to create interactive dashboards, visualize data effectively, and master Power BI tools to enhance your analytics skills.",
    "href": "one-week-power-bi-workshop"
  }
]

const training = [
  {
    "title": "Financial Analyst Training & Placement",
    "description": "Kickstart your career as a financial analyst with comprehensive training and guaranteed placement support. Learn financial modelling, valuation techniques, and market analysis to land your dream job in the finance industry.",
    "href": "financial-analyst-training-placement"
  },
  {
    "title": "ERP Finance Mastery",
    "description": "Master ERP finance systems and tools to streamline financial processes, manage enterprise resources, and drive business growth. Gain in-depth knowledge of ERP solutions and elevate your expertise in corporate finance.",
    "href": "erp-finance-mastery"
  }
]


export function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center px-4">
      <div className="container flex h-14 items-center justify-center">
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5 stroke-black" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" classhorizontalName="w-[300px] sm:w-[400px]">
            <div className="ml-auto flex items-center space-x-4 pb-8 pt-4">
              <Button
                className="border border-orange-200 hover:bg-orange-400 bg-transparent text-black hover:text-white font-bold"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button
                className="font-bold"
                onClick={() => navigate("/register")}
              >Join now</Button>
            </div>
            <NavigationMenu className="max-w-full flex flex-col items-start" id="nav-mobile">
              <NavigationMenuList grid className="grid-cols-1 space-y-4 items-start w-full">
                <NavigationMenuItem>
                  <NavigationMenuLink to="#hero" className="text-lg font-medium text-black">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="courses" >
                      <AccordionTrigger className="text-black text-lg font-medium">Courses</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-4">
                          {courses.map((course) => (
                            <li key={course.title}>
                              <Link href={course.href} className="text-sm hover:underline text-black">
                                {course.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="training">
                      <AccordionTrigger className="text-black">Training</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {training.map((item) => (
                            <li key={item.title}>
                              <Link href={item.href} className="text-sm hover:underline text-black">
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink to="#events" className="text-lg font-medium text-black">Events</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink to="#about" className="text-lg font-medium text-black">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink to="#contact" className="text-lg font-medium text-black">Contact</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
        <div className="flex justify-end md:justify-between w-full">
          <Button className="font-bold">Logo</Button>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#hero">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <NavigationMenuLink href="#courses">
                    Courses
                  </NavigationMenuLink>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[800px]">
                    {courses.map((course) => (
                      <ListItem
                        key={course.title}
                        title={course.title}
                        href={course.href}
                      >
                        {course.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <NavigationMenuLink href="#training">
                    Training
                  </NavigationMenuLink>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                    {training.map((course) => (
                      <ListItem
                        key={course.title}
                        title={course.title}
                        href={course.href}
                      >
                        {course.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#events">
                  Events
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="md:flex items-center space-x-4 hidden">
            <Button
              className="border border-orange-200 hover:bg-orange-400 bg-transparent text-black hover:text-white font-bold"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
            <Button
              className="font-bold"
              onClick={() => navigate("/register")}
            >Join now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group flex flex-col gap-3",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-relaxed text-primary group-hover:text-orange-950">{title}</div>
          <p className="line-clamp-4 text-md leading-snug text-accent-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

