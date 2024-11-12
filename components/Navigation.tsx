'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

interface NavigationProps {
  toggleDrawer: () => void
}

export function Navigation({ toggleDrawer }: NavigationProps) {
  return (
    <>
      <div className="fixed inset-y-0 left-0 z-50 w-80 bg-black transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex flex-col h-full p-6">
          <button 
            className="text-stone-200 hover:text-[#FFA500] transition-colors self-start mb-6 relative z-50"
            onClick={toggleDrawer}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-start justify-start flex-grow space-y-4 relative z-50">
            <Link 
              href="/" 
              onClick={toggleDrawer}
              className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
            >
              Home
            </Link>
            <Link 
              href="/workshops/overview" 
              onClick={toggleDrawer}
              className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
            >
              Workshops
            </Link>
            <Link 
              href="/about-contact" 
              onClick={toggleDrawer}
              className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
            >
              About Us
            </Link>
            <Link 
              href="/register" 
              onClick={toggleDrawer}
              className="text-stone-200 hover:text-[#FFA500] transition-colors text-lg font-medium w-full"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggleDrawer}
        aria-hidden="true"
      />
    </>
  )
} 