'use client'

import { useState, useCallback } from 'react'
import { Navigation } from '@/components/Navigation'
import { Menu, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import LoginButton from '@/components/LoginButton'

export default function AboutContactPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev)
  }, [])

  return (
    <div className="min-h-screen bg-stone-200 text-black font-sans">
      {/* Navigation Bar with Hero Image */}
      <div className="relative h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300">
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

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            About Us & Contact
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-3xl font-bold text-center">About Us</h3>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                RenaissanceAI Academy is at the forefront of AI-powered creative education. 
                We empower professionals with the skills needed to thrive in the age of artificial intelligence.
              </p>
              <p className="mb-6">
                Our expert instructors bring years of experience in AI, creative technologies, and professional training.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Team</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Emily Chen", role: "AI Specialist" },
                  { name: "Michael Lee", role: "Creative Director" },
                  { name: "Sarah Johnson", role: "Training Lead" }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src="https://placehold.co/100x100"
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-2"
                    />
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-3xl font-bold text-center">Get in Touch</h3>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input type="text" placeholder="Subject" required />
                <Textarea placeholder="Your Message" required className="h-32" />
                <Button type="submit" className="w-full bg-[#FFA500] hover:bg-[#FFA500]/90 text-white">
                  Send Message
                </Button>
              </form>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-[#FFA500]" size={16} />
                    <span>info@renaissanceai.academy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-[#FFA500]" size={16} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-[#FFA500]" size={16} />
                    <span>123 AI Street, Tech City, TC 12345</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-transparent text-black py-6 mt-12">
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
    </div>
  )
}