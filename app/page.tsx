'use client'

import React, { useState, useCallback, useRef, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, BarChart, FileText, ImageIcon, Share2, CalendarCheck, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import TeamSection from "../components/TeamSection"

// Define the TopicContent type
interface TopicContent {
  title: string
  subheader: string
  content: string[]
  icon: React.ElementType
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const topics: TopicContent[] = [
    { 
      title: "Our Approach", 
      subheader: "Instructor led workshops that focus on Marketing & Creative skill development",
      content: [
        "Leverage cutting-edge GenAI",
        "Establish effective and competitivemarketing strategies",
        "Develop engaging multi-modal content",
        "Design Experiences and Optimize your contentfor leading platforms"
      ],
      icon: Lightbulb 
    },
    { 
      title: "Marketing Strategy", 
      subheader: "Leverage GenAI tools:",
      content: ["Identify unique market opportunities", "Conduct thorough market analysis", "Perform in-depth competitor research"], 
      icon: BarChart 
    },
    { 
      title: "Creating a Brief", 
      subheader: "Create Dynamic Brief's that:",
      content: ["Establish a strong brand voice", "Clearly communicate campaign strategies", "Provide creative direction tailored to your needs"], 
      icon: FileText 
    },
    { 
      title: "Content Creation", 
      subheader: "Use GenAI Creative tools for:",
      content: ["AI-assisted image creation", "Professional audio and music production", "High-quality video and podcast production"], 
      icon: ImageIcon 
    },
    { 
      title: "Reach Audiences", 
      subheader: "Leverage GenAI to:",
      content: ["Utilize GenAI for UX design", "Implement AI-aided software development", "Create targeted advertising content for optimal distribution"], 
      icon: Share2 
    },
    { 
      title: "Upcoming Workshops",
      subheader: "Workshop Details",
      content: ["Join our workshop on February 15-16, 2025", "From 9:00 AM to 5:00 PM each day", "Learn more about leveraging GenAI in marketing"], 
      icon: CalendarCheck 
    }
  ]

  const [expandedTopic, setExpandedTopic] = useState<string | null>("Our Approach")

  const toggleTopic = (title: string) => {
    setExpandedTopic(expandedTopic === title ? null : title)
  }

  return (
    <div className="min-h-screen bg-stone-200 text-black font-sans">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-image-v1-qwerty123.jpg"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Woman%20working%20stock%20image2-1dw9OGMTpQF7eWSUweLlW373Gwf57y.mov" type="video/quicktime" />
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Woman%20working%20stock%20image2-1dw9OGMTpQF7eWSUweLlW373Gwf57y.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-stone-200 px-4 py-12 w-full mt-16 sm:mt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            Become an Expert in GenAI for Marketing and Creative
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 animate-fade-in-up animation-delay-300">
            Join our workshops and fine tune your skill development
          </p>
          <Link href="/workshops/overview">
            <Button 
              className="animate-fade-in-up animation-delay-600 font-thin px-6 py-3 bg-[#FFA500] hover:bg-[#FFA500]/90 text-white transform transition-all duration-300 ease-in-out hover-scale"
              style={{ backgroundColor: '#FFA500' }}
            >
              <span className="text-[1.3rem] font-bold">Explore Workshops</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 bg-white" id="our-approach">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Renaissance AI Academy Team:</h2>
            <p className="text-base text-gray-700">
              The team behind RenaissanceAI Academy have trained hundreds of professionals at leading 
              Advertising Agencies, Software companies, and Academic institutions worldwide.
            </p>
          </div>

          {/* Add TeamSection component here */}
          <TeamSection />

          {/* New TwoColumnCard component */}
          <Card className="w-full max-w-[136.8vw] xl:max-w-[2016px] mx-auto shadow-none border-none">
            <CardContent className="p-6">
              <div className="md:flex md:space-x-8">
                <div className="w-full md:w-[45%] xl:w-[30%] md:pr-8">
                  {topics.map((topic, index) => (
                    <div key={index} className="mb-4">
                      <Button
                        onClick={() => toggleTopic(topic.title)}
                        className={`w-full min-w-[110%] justify-between text-left h-auto py-2 px-3 text-sm md:text-base ${
                          expandedTopic === topic.title ? 'bg-[#FFA500]' : ''
                        }`}
                        variant={expandedTopic === topic.title ? "default" : "outline"}
                        style={{ transition: 'transform 0.3s', transform: expandedTopic === topic.title ? 'scale(1.1)' : 'scale(1)' }}
                      >
                        <span className="flex items-start w-full">
                          {React.createElement(topic.icon, { className: "h-5 w-5 mr-2 flex-shrink-0 mt-0.5" })}
                          <span className="flex-grow text-left font-semibold leading-tight">{topic.title}</span>
                          <span className="md:hidden flex-shrink-0 ml-2">
                            {expandedTopic === topic.title ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </span>
                        </span>
                      </Button>
                      <div className={`mt-2 p-4 bg-gray-50 rounded-md md:hidden ${expandedTopic === topic.title ? 'block' : 'hidden'}`}>
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">{topic.subheader}</h3>
                        <ul className="list-disc pl-5 text-gray-600 mb-4">
                          {topic.content.map((point: string, index: number) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                        {topic.title === "Upcoming Workshops" && (
                          <Link href="/register">
                            <Button className="w-full bg-[#FFA500] text-white">
                              Register Now
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hidden md:block w-full md:w-[55%] xl:w-[70%] md:border-l border-gray-200 md:pl-16">
                  {expandedTopic && (
                    <>
                      <div className="flex items-center mb-4">
                        {React.createElement(topics.find(t => t.title === expandedTopic)?.icon || 'span', { className: "h-6 w-6 mr-2 text-[#FFA500]" })}
                        <h2 className="text-2xl xl:text-3xl font-bold text-primary">
                          {expandedTopic === "Upcoming Workshops" ? "Register for an Upcoming Workshop" : expandedTopic}
                        </h2>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700 text-left">
                        {topics.find(t => t.title === expandedTopic)?.subheader}
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 mb-4 mt-2">
                        {topics.find(t => t.title === expandedTopic)?.content.map((point: string, index: number) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      {expandedTopic === "Upcoming Workshops" && (
                        <Link href="/register">
                          <Button className="bg-[#FFA500] text-white">
                            Register Now
                          </Button>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Start Your Journey Form */}
      <section className="py-12 bg-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-center mb-8">Start Your Journey</h2>
              <form className="space-y-3 md:space-y-4 max-w-xl mx-auto">
                <Input type="text" placeholder="Name" required className="bg-white" />
                <Input type="email" placeholder="Email Address" required className="bg-white" />
                <Select name="expertise" className="your-class-name">
                  <SelectTrigger className="w-full bg-white text-left no-scale">
                    <SelectValue placeholder="Select Your Level of Expertise with Generative AI" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Beginner</SelectItem>
                    <SelectItem value="2">2 - Novice</SelectItem>
                    <SelectItem value="3">3 - Intermediate</SelectItem>
                    <SelectItem value="4">4 - Advanced</SelectItem>
                    <SelectItem value="5">5 - Expert</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Reason for your Interest in Renaissance Academy" required className="bg-white" />
                <Button type="submit" className="w-full bg-[#FFA500] text-white hover:bg-[#FFA500]/90 no-scale">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-300 mx-auto max-w-7xl"></div>

      {/* Footer */}
      <footer className="bg-transparent text-black py-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <Image
              src="/images/sschoolblack.png"
              alt="RenaissanceAI Academy Logo"
              width={350}
              height={87.5}
              className="mx-auto mb-1 w-auto h-14"
            />
            <p className="text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about-contact" className="hover:text-[#FFA500] transition-colors">
              About Us
            </Link>
            <Link href="/about-contact" className="hover:text-[#FFA500] transition-colors">
              Contact Us
            </Link>
            <Link href="/workshops/overview" className="hover:text-[#FFA500] transition-colors">
              Explore Workshops
            </Link>
            <Link href="/register" className="hover:text-[#FFA500] transition-colors">
              Register Now
            </Link>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .bg-orange-500 {
          background-color: #FFA500;
        }
        .hover\:bg-orange-600:hover {
          background-color: #FFA500/90;
        }
        button:hover {
          transform: scale(1.15) !important;
          transition: transform 0.3s ease-in-out;
        }
        .no-scale:hover {
          transform: none !important;
        }
      `}</style>
    </div>
  )
}