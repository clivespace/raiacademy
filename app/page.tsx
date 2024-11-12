'use client'

import { useState, useCallback, useRef, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, BarChart, FileText, ImageIcon, Share2, CalendarCheck, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import TeamSection from "../components/TeamSection"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const approachCards = useMemo(() => [
    {
      title: "OUR APPROACH",
      tools: [
        <span key="0" className="font-bold">Learn How to:</span>,
        "Establish your Marketing Strategy with GenAI Research",
        "Develop Engaging Content, and",
        "Format your content for the leading platforms"
      ],
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />
    },
    {
      title: "MARKETING STRATEGY",
      tools: [
        <span key="0" className="font-bold">Leverage GenAI tools:</span>,
        "Identify Unique Market Opportunities",
        "Conduct Effective Market Analysis, and",
        "Competitor Research"
      ],
      icon: <BarChart className="h-8 w-8 text-orange-500" />
    },
    {
      title: "CREATING A BRIEF",
      tools: [
        <span key="0" className="font-bold">Create more dynamic briefs:</span>,
        "Establish a unique Brand Voice",
        "Communicate your Campaign Strategy, and",
        "Provide effectiveCreative Direction"
      ],
      icon: <FileText className="h-8 w-8 text-orange-500" />
    },
    {
      title: "CONTENT CREATION",
      tools: [
        <span key="0" className="font-bold">Use GenAI Creative tools to create:</span>,
        "High quality Images",
        "Audio and Music Content",
        "Video, Podcast Production, and more..."
      ],
      icon: <ImageIcon className="h-8 w-8 text-orange-500" />
    },
    {
      title: "DISTRIBUTING YOUR CONTENT",
      tools: [
        <span key="0" className="font-bold">Reach audiences on desired platforms by leveraging:</span>,
        "GenAI tools for UX Design",
        "Software Development, and",
        "GenAI aided Advertising Content Production tools"
      ],
      icon: <Share2 className="h-8 w-8 text-orange-500" />
    },
    {
      title: "REGISTER FOR AN UPCOMING WORKSHOP",
      dates: ["February 15, 2025: 9:00 AM - 5:00 PM", "February 16, 2025: 9:00 AM - 5:00 PM"],
      button: "Register Now",
      icon: <CalendarCheck className="h-8 w-8 text-orange-500" />
    }
  ], [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev: number) => {
      const next = prev + 1;
      return next >= 3 ? 0 : next; // We have 3 pairs total (0, 1, 2)
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev: number) => {
      const next = prev - 1;
      return next < 0 ? 2 : next; // Go to last pair if at start
    });
  }, []);

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
            Become a GenAI Expert<br />
            with Renaissance AI Academy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-8 animate-fade-in-up animation-delay-300">
            Join our workshops and fine tune your creative & marketing skills
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

          {/* Existing carousel section */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ 
                  transform: `translateX(-${currentSlide * (100/3)}%)`,
                  width: '300%', // Three sections of 100% each
                }}
              >
                {[
                  approachCards.slice(0, 2),   // First pair
                  approachCards.slice(2, 4),   // Second pair
                  approachCards.slice(4, 6),   // Third pair
                ].map((cardPair, pairIndex) => (
                  <div key={pairIndex} className="w-1/3 flex">
                    {cardPair.map((card, index) => (
                      <div key={index} className="w-1/2 px-4 relative">
                        <Card className="h-[300px] border border-gray-200 shadow-md">
                          <CardContent className="p-6 h-full flex flex-col">
                            {!card.dates && ( // Only show this header for non-dates cards
                              <div className="flex items-center mb-6">
                                <div className="bg-gray-50 p-3 rounded-full mr-4">
                                  {card.icon}
                                </div>
                                <h3 className="text-xl font-bold">{card.title}</h3>
                              </div>
                            )}
                            {card.tools && (
                              <div className="flex-grow">
                                <ul className="space-y-2">
                                  {card.tools.map((tool, toolIndex) => (
                                    <li key={toolIndex} className="flex items-start">
                                      {toolIndex !== 0 && <span className="mr-2">•</span>}
                                      <span>{tool}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {card.dates && (
                              <div className="flex-grow">
                                <div className="flex items-center mb-6">
                                  <div className="bg-gray-50 p-3 rounded-full mr-4">
                                    {card.icon}
                                  </div>
                                  <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                                <div>
                                  <p className="font-bold mb-2">Workshop Dates:</p>
                                  <ul className="space-y-1">
                                    {card.dates.map((date, dateIndex) => (
                                      <li key={dateIndex} className="text-sm">{date}</li>
                                    ))}
                                  </ul>
                                </div>
                                {card.button && (
                                  <Link href="/register">
                                    <Button className="w-full mt-4 bg-[#FFA500] hover:bg-[#FFA500]/90 text-white no-scale">
                                      {card.button}
                                    </Button>
                                  </Link>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FFA500] text-white p-2 rounded-full hover:bg-[#FFA500]/90 transition-colors"
              style={{ left: '-2rem' }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFA500] text-white p-2 rounded-full hover:bg-[#FFA500]/90 transition-colors"
              style={{ right: '-2rem' }}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-[#FFA500]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
                  <SelectTrigger className="w-full bg-white no-scale">
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