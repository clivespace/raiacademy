'use client'

import * as React from "react"
import { useState, useCallback, useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { Menu, Clock, Users, Facebook, Instagram, Linkedin, ArrowLeft } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import LoginButton from '@/components/LoginButton'

interface Workshop {
  id: number
  title: string
  description: string
  instructor: string
  instructorImage: string
  duration: string
  day: number
  time: string
}

const workshops: Workshop[] = [
  {
    id: 1,
    title: "Prompt Engineering Mastery",
    description: "Master the art of crafting effective prompts for AI models to generate desired outputs.",
    instructor: "Dr. Emily Johnson",
    instructorImage: "https://placehold.co/200x200",
    duration: "2 hours",
    day: 1,
    time: "9:30 AM - 11:30 AM",
  },
  {
    id: 2,
    title: "GenAI for Research Innovation",
    description: "Learn how to leverage generative AI tools to enhance your research capabilities and streamline data analysis.",
    instructor: "Prof. Michael Chen",
    instructorImage: "https://placehold.co/200x200",
    duration: "1 hour",
    day: 1,
    time: "11:30 AM - 12:30 PM",
  },
  {
    id: 3,
    title: "Lunch Break",
    description: "Take a break and recharge for the afternoon sessions.",
    instructor: "N/A",
    instructorImage: "https://placehold.co/200x200",
    duration: "45 minutes",
    day: 1,
    time: "12:30 PM - 1:15 PM",
  },
  {
    id: 4,
    title: "AI-Powered Image Creation",
    description: "Explore cutting-edge techniques for creating and manipulating images using generative AI models.",
    instructor: "Sarah Thompson",
    instructorImage: "https://placehold.co/200x200",
    duration: "2 hours",
    day: 1,
    time: "1:15 PM - 3:15 PM",
  },
  {
    id: 5,
    title: "Video Production with GenAI",
    description: "Discover how to integrate AI-powered tools into your video production workflow for enhanced creativity and efficiency.",
    instructor: "Alex Rodriguez",
    instructorImage: "https://placehold.co/200x200",
    duration: "2 hours 45 minutes",
    day: 1,
    time: "3:15 PM - 6:00 PM",
  },
  {
    id: 6,
    title: "Meet and Greet",
    description: "Network with fellow participants and instructors in a relaxed setting.",
    instructor: "All Instructors",
    instructorImage: "https://placehold.co/200x200",
    duration: "1 hour 55 minutes",
    day: 1,
    time: "6:05 PM - 8:00 PM",
  },
  {
    id: 7,
    title: "Project Presentations",
    description: "Showcase your learnings and projects developed during the workshops.",
    instructor: "All Instructors",
    instructorImage: "https://placehold.co/200x200",
    duration: "2.5 hours",
    day: 2,
    time: "10:00 AM - 12:30 PM",
  }
]

export default function WorkshopsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev)
  }

  const filteredWorkshops = workshops.filter(workshop =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleLearnMore = (workshop: Workshop) => {
    setSelectedWorkshop(workshop)
  }

  const handleBack = () => {
    setSelectedWorkshop(null)
  }

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [controlNavbar])

  return (
    <div className="min-h-screen bg-[#E5E5E5]">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between py-4">
            <div className={`flex items-center justify-start gap-4 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-0' : 'opacity-100'}`}>
              <button 
                className="text-stone-200 hover:text-[#FFA500] transition-colors"
                onClick={toggleDrawer}
                aria-label="Open navigation menu"
                disabled={isDrawerOpen}
              >
                <Menu size={28} />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <LoginButton />
              <div className="h-6 w-px bg-stone-200"></div>
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RenAI%20logo%20white%20transparent%20v3-Z9Ga2ki0oxK1AIcVX00fFDYDUUV7PT.png"
                  alt="RenaissanceAI Academy Logo"
                  width={500}
                  height={125}
                  className="h-24 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-32">
        <AnimatePresence mode="wait">
          {selectedWorkshop ? (
            <motion.div
              key="workshop-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Button onClick={handleBack} variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Workshops
              </Button>
              <h1 className="text-3xl font-bold mb-6">{selectedWorkshop.title}</h1>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold">Workshop Details</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{selectedWorkshop.description}</p>
                    <div className="flex items-center mb-2">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{selectedWorkshop.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Day {selectedWorkshop.day}, {selectedWorkshop.time}</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-bold">Instructor</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={selectedWorkshop.instructorImage}
                        alt={selectedWorkshop.instructor}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <p className="font-medium">{selectedWorkshop.instructor}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="workshop-list"
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
              <Tabs defaultValue="day1" className="mb-8">
                <TabsList>
                  <TabsTrigger value="day1">Day 1</TabsTrigger>
                  <TabsTrigger value="day2">Day 2</TabsTrigger>
                </TabsList>
                <TabsContent value="day1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredWorkshops
                      .filter(workshop => workshop.day === 1)
                      .map((workshop) => (
                        <Card key={workshop.id} className={`border-0 ${
                          workshop.title === "Lunch Break" || workshop.title === "Meet and Greet" 
                            ? "bg-[#EEF3FF]" 
                            : "bg-white"
                        }`}>
                          <CardContent className="p-4">
                            <h2 className="text-lg font-bold mb-2">{workshop.title}</h2>
                            <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-sm text-gray-500">{workshop.time}</span>
                              <span className="text-sm text-gray-500">{workshop.duration}</span>
                            </div>
                            {workshop.title !== "Lunch Break" && workshop.title !== "Meet and Greet" && (
                              <Button 
                                className="w-full bg-[#F5A524] hover:bg-[#F5A524]/90 text-white text-sm"
                                onClick={() => handleLearnMore(workshop)}
                              >
                                Learn More
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="day2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredWorkshops
                      .filter(workshop => workshop.day === 2)
                      .map((workshop) => (
                        <Card key={workshop.id} className="bg-white border-0">
                          <CardContent className="p-4">
                            <h2 className="text-lg font-bold mb-2">{workshop.title}</h2>
                            <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-sm text-gray-500">{workshop.time}</span>
                              <span className="text-sm text-gray-500">{workshop.duration}</span>
                            </div>
                            <Button 
                              className="w-full bg-[#F5A524] hover:bg-[#F5A524]/90 text-white text-sm"
                              onClick={() => handleLearnMore(workshop)}
                            >
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Register Now button */}
        <div className="flex justify-center mt-8">
          <Link href="/register">
            <Button 
              className="w-full mt-4 text-white transform transition-transform duration-300 ease-in-out hover:scale-110"
              style={{ backgroundColor: '#FFA500' }}
            >
              <span className="font-bold">REGISTER NOW</span>
            </Button>
          </Link>
        </div>
      </main>

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

      {/* Navigation Drawer */}
      {isDrawerOpen && <Navigation toggleDrawer={toggleDrawer} />}

      {/* Add this to your existing style jsx global section or create it if it doesn't exist */}
      <style jsx global>{`
        .hover-scale-register {
          transform: scale(1);
        }
        
        .hover-scale-register:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}