'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LoginButton from "@/components/LoginButton"

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          setIsNavVisible(false)
        } else {
          setIsNavVisible(true)
        }
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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 to-transparent transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 relative z-50">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-stone-200 hover:text-[#FFA500] transition-colors mr-4 z-[60]"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={24} className="opacity-75" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <LoginButton />
              <div className="h-6 w-px bg-white/20"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RenAI%20logo%20white%20transparent%20v3-Z9Ga2ki0oxK1AIcVX00fFDYDUUV7PT.png"
                alt="RenaissanceAI Academy Logo"
                width={400}
                height={100}
                className="h-24 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Drawer - Matched to Navigation.tsx */}
      {isOpen && (
        <>
          <div className="fixed inset-y-0 left-0 z-50 w-80 bg-black transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex flex-col h-full p-6">
              <button 
                className="text-stone-200 hover:text-[#FFA500] transition-colors self-start mb-6 relative z-50"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-start justify-start flex-grow space-y-4 relative z-50">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
                >
                  Home
                </Link>
                <Link 
                  href="/workshops/overview" 
                  onClick={() => setIsOpen(false)}
                  className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
                >
                  Workshops
                </Link>
                <Link 
                  href="/about-contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
                >
                  About Us
                </Link>
                <Link 
                  href="/register" 
                  onClick={() => setIsOpen(false)}
                  className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        </>
      )}
    </>
  )
} 