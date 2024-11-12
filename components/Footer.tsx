'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
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
  )
} 