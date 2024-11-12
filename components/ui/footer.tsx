import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-transparent text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RenAI%20Logo%20black%20transparent%20v2-1bLx7qrzVGeOR2hiLltiKx4xVTWO9j.png"
              alt="RenaissanceAI Academy Logo"
              width={350}
              height={87.5}
              className="mx-auto mb-4 w-auto h-14"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/about-contact">
              <Button variant="outline" className="w-full hover:bg-[#F5A524] hover:text-white">
                About Us
              </Button>
            </Link>
            <Link href="/about-contact">
              <Button variant="outline" className="w-full hover:bg-[#F5A524] hover:text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" className="w-full hover:bg-[#F5A524] hover:text-white">
                Explore Our Workshops
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="w-full hover:bg-[#F5A524] hover:text-white">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-xs">&copy; {new Date().getFullYear()} RenaissanceAI Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 