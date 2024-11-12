'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Prompt Engineering",
    description: "Master the art of crafting effective prompts for AI models to generate desired outputs.",
    image: "/images/course-1.jpg"
  },
  {
    id: 2,
    title: "GenAI for Research",
    description: "Learn how to leverage generative AI tools to enhance your research capabilities and streamline data analysis.",
    image: "/images/course-2.jpg"
  },
  {
    id: 3,
    title: "Image Creation with GenAI",
    description: "Explore cutting-edge techniques for creating and manipulating images using generative AI models.",
    image: "/images/course-3.jpg"
  },
  {
    id: 4,
    title: "Video Production with GenAI",
    description: "Discover how to integrate AI-powered tools into your video production workflow for enhanced creativity and efficiency.",
    image: "/images/course-4.jpg"
  },
  {
    id: 5,
    title: "Audio & Music Creation with GenAI",
    description: "Unlock the potential of AI in audio production and music composition to create unique soundscapes and melodies.",
    image: "/images/course-5.jpg"
  },
  {
    id: 6,
    title: "Podcast Creation with GenAI",
    description: "Learn how to utilize AI tools for content ideation, script writing, and audio enhancement in podcast production.",
    image: "/images/course-6.jpg"
  },
  {
    id: 7,
    title: "Advertising Content Creation",
    description: "Harness the power of AI to create compelling ad copy, visuals, and marketing strategies for various platforms.",
    image: "/images/course-7.jpg"
  },
  {
    id: 8,
    title: "UX Design with GenAI",
    description: "Explore how AI can enhance user experience design, from prototyping to user testing and iteration.",
    image: "/images/course-8.jpg"
  },
  {
    id: 9,
    title: "AI Programming",
    description: "Dive into the world of AI development, learning to create and implement machine learning models and algorithms.",
    image: "/images/course-9.jpg"
  }
]

export function CourseOverviewComponent() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-stone-200 text-black font-sans">
      <header className="bg-black bg-opacity-50 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Button variant="ghost" size="icon" className="mr-4">
            <Menu size={24} />
          </Button>
          <Link href="/" className="ml-auto">
            <Image
              src="/images/logo.png"
              alt="RenaissanceAI Academy Logo"
              width={150}
              height={37.5}
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Course Overview</h1>
        
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="bg-white flex flex-col">
              <CardHeader>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{course.title}</CardTitle>
                <CardDescription className="mt-2">{course.description}</CardDescription>
                <div className="mt-4">
                  <Button className="w-full bg-[#FFA500] text-white hover:bg-[#FF8C00]">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-transparent text-black py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} RenaissanceAI Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}