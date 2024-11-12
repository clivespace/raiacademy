'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Course {
  id: number
  title: string
  description: string
  teacherName: string
  teacherImage: string
  courseOutline: string[]
  outcomes: string[]
}

const courses: Course[] = [
  {
    id: 1,
    title: "Prompt Engineering",
    description: "Master the art of crafting effective prompts for AI models to generate desired outputs.",
    teacherName: "Dr. Emily Johnson",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "Introduction to Prompt Engineering",
      "Understanding AI Model Behavior",
      "Crafting Effective Prompts",
      "Iterative Refinement Techniques",
      "Advanced Prompt Strategies",
      "Real-world Applications"
    ],
    outcomes: [
      "Design precise and effective prompts for various AI models",
      "Understand and manipulate AI model behavior through prompts",
      "Implement advanced prompt engineering techniques in real-world scenarios",
      "Optimize AI outputs for specific use cases and applications"
    ]
  },
  {
    id: 2,
    title: "GenAI for Research",
    description: "Learn how to leverage generative AI tools to enhance your research capabilities and streamline data analysis.",
    teacherName: "Prof. Michael Chen",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "Introduction to GenAI in Research",
      "Data Analysis with GenAI Tools",
      "Literature Review Automation",
      "Hypothesis Generation and Testing",
      "Visualizing Research Outcomes",
      "Ethical Considerations in AI-assisted Research"
    ],
    outcomes: [
      "Utilize GenAI tools to accelerate literature reviews and data analysis",
      "Generate and test hypotheses using AI-assisted methods",
      "Create compelling visualizations of research data",
      "Navigate ethical considerations in AI-enhanced research practices"
    ]
  },
  {
    id: 3,
    title: "Image Creation with GenAI",
    description: "Explore cutting-edge techniques for creating and manipulating images using generative AI models.",
    teacherName: "Sarah Thompson",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "Fundamentals of Image Generation",
      "Working with GANs and Diffusion Models",
      "Text-to-Image Generation",
      "Image Editing and Manipulation",
      "Style Transfer Techniques",
      "Ethical Considerations in AI-generated Imagery"
    ],
    outcomes: [
      "Create high-quality images using state-of-the-art GenAI models",
      "Implement advanced image manipulation techniques",
      "Understand and apply style transfer methods",
      "Navigate ethical considerations in AI-generated visual content"
    ]
  },
  {
    id: 4,
    title: "Video Production with GenAI",
    description: "Discover how to integrate AI-powered tools into your video production workflow for enhanced creativity and efficiency.",
    teacherName: "Alex Rodriguez",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "Introduction to AI in Video Production",
      "Scriptwriting and Storyboarding with AI",
      "AI-assisted Video Editing",
      "Visual Effects and Animation with GenAI",
      "AI-powered Color Grading and Post-production",
      "Workflow Integration and Optimization"
    ],
    outcomes: [
      "Streamline video production workflows using AI tools",
      "Create compelling scripts and storyboards with AI assistance",
      "Apply AI-powered visual effects and animations",
      "Optimize post-production processes with GenAI techniques"
    ]
  },
  {
    id: 5,
    title: "Audio & Music Creation with GenAI",
    description: "Unlock the potential of AI in audio production and music composition to create unique soundscapes and melodies.",
    teacherName: "Dr. Lisa Wang",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "Fundamentals of AI in Audio Production",
      "Music Composition with GenAI",
      "Sound Design and Synthesis",
      "AI-assisted Mixing and Mastering",
      "Generative Music Systems",
      "Ethical Considerations in AI-generated Music"
    ],
    outcomes: [
      "Compose original music using AI-powered tools",
      "Create unique soundscapes and audio effects with GenAI",
      "Implement AI-assisted mixing and mastering techniques",
      "Understand the ethical implications of AI in music creation"
    ]
  },
  {
    id: 6,
    title: "Podcast Creation with GenAI",
    description: "Learn how to utilize AI tools for content ideation, script writing, and audio enhancement in podcast production.",
    teacherName: "Mark Stevens",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "AI-powered Content Research and Ideation",
      "Script Generation and Refinement",
      "Voice Synthesis and Audio Enhancement",
      "AI-assisted Editing and Post-production",
      "Audience Analysis and Engagement Strategies",
      "Ethical Considerations in AI-enhanced Podcasting"
    ],
    outcomes: [
      "Streamline podcast content creation using AI tools",
      "Generate and refine scripts with AI assistance",
      "Enhance audio quality using AI-powered techniques",
      "Implement data-driven strategies for audience engagement"
    ]
  },
  {
    id: 7,
    title: "Advertising Content Creation",
    description: "Harness the power of AI to create compelling ad copy, visuals, and marketing strategies for various platforms.",
    teacherName: "Emma Clark",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "AI in Advertising: An Overview",
      "Copywriting with GenAI",
      "Visual Content Generation for Ads",
      "Personalization and Targeting Strategies",
      "Multi-platform Campaign Management",
      "Measuring and Optimizing Ad Performance"
    ],
    outcomes: [
      "Create engaging ad copy using AI-powered tools",
      "Generate visually appealing content for advertising campaigns",
      "Implement personalized targeting strategies with AI",
      "Analyze and optimize ad performance using AI-driven insights"
    ]
  },
  {
    id: 8,
    title: "UX Design with GenAI",
    description: "Explore how AI can enhance user experience design, from prototyping to user testing and iteration.",
    teacherName: "David Lee",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "AI-assisted UX Research and Analysis",
      "Generative Design in UX",
      "Prototyping with AI Tools",
      "AI-powered User Testing and Feedback Analysis",
      "Personalization in UX Design",
      "Ethical Considerations in AI-enhanced UX"
    ],
    outcomes: [
      "Conduct efficient UX research using AI-powered tools",
      "Create innovative designs using generative AI techniques",
      "Implement AI-assisted prototyping and user testing methods",
      "Apply ethical considerations in AI-enhanced UX design processes"
    ]
  },
  {
    id: 9,
    title: "AI Programming",
    description: "Dive into the world of AI development, learning to create and implement machine learning models and algorithms.",
    teacherName: "Dr. Robert Chang",
    teacherImage: "/placeholder.svg?height=200&width=200",
    courseOutline: [
      "Fundamentals of AI and Machine Learning",
      "Python for AI Development",
      "Building and Training Neural Networks",
      "Natural Language Processing Techniques",
      "Computer Vision Applications",
      "Deploying AI Models in Production"
    ],
    outcomes: [
      "Develop proficiency in AI programming using Python",
      "Build and train custom neural networks for various applications",
      "Implement NLP and computer vision techniques in real-world projects",
      "Deploy and maintain AI models in production environments"
    ]
  }
]

export function CourseOverviewComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course)
  }

  const handleBack = () => {
    setSelectedCourse(null)
  }

  return (
    <div className="min-h-screen bg-[#E5E5E5]">
      <header className="bg-[#4A4A4A] text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="w-[200px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-lg font-medium hover:text-gray-300 transition-colors">
                    Home
                  </Link>
                  <Link href="/courses" className="text-lg font-medium hover:text-gray-300 transition-colors">
                    Courses
                  </Link>
                  <Link href="/team" className="text-lg font-medium hover:text-gray-300 transition-colors">
                    Team
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RenAI%20logo%20white%20transparent%20v3-SYQ36sKmY5cBM3sPViVakZMCukeIcb.png"
              alt="RenaissanceAI Academy Logo"
              width={200}
              height={33}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {selectedCourse ? (
            <motion.div
              key="course-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={handleBack} variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Workshops
              </Button>
              <h1 className="text-3xl font-bold mb-6">{selectedCourse.title}</h1>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Outline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedCourse.courseOutline.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Instructor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <Image
                          src={selectedCourse.teacherImage}
                          alt={selectedCourse.teacherName}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <p className="font-medium">{selectedCourse.teacherName}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Be Able to Do</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedCourse.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="course-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-center mb-8">Workshop Details</h1>
              <div className="mb-8 max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border-0"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="bg-white border-0">
                    <CardContent className="p-4">
                      <h2 className="text-lg font-bold mb-2">{course.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                      <Button 
                        className="w-full bg-[#F5A524] hover:bg-[#F5A524]/90 text-white text-sm"
                        onClick={() => handleLearnMore(course)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-6 mt-12 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} RenaissanceAI Academy. All rights reserved.</p>
      </footer>
    </div>
  )
}