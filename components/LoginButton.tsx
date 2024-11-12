'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginButton() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const loginRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setIsLoginOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={loginRef}>
      <Button
        variant="ghost"
        size="sm"
        className="text-white transition-all duration-300 px-4 py-2 text-lg font-extrabold relative z-10 group overflow-hidden rounded-full flex items-center justify-center hover:scale-125 active:scale-100"
        onClick={() => setIsLoginOpen(!isLoginOpen)}
      >
        <span className="absolute inset-0 bg-white opacity-75 group-hover:opacity-100 transition-all duration-300 rounded-full scale-x-[1.4] group-hover:scale-x-[1.75]"></span>
        <LogIn className="mr-2 h-[1.33rem] w-[1.33rem] text-[#FFA500] opacity-100 relative z-10 stroke-[2.5]" />
        <span className="relative z-10 text-[#FFA500] font-extrabold">LOGIN</span>
      </Button>
      {isLoginOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-[60]">
          <div className="px-4 py-2">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome back</h3>
            <p className="text-sm text-gray-500 mb-4">Please enter your email address and password</p>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email" className="sr-only">Email address</Label>
                <Input id="email" type="email" placeholder="Email address" required />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">Password</Label>
                <Input id="password" type="password" placeholder="Password" required />
              </div>
              <Button type="submit" className="w-full bg-[#FFA500] text-white hover:bg-[#FF8C00]">
                Sign in
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Please visit our <Link href="/register" className="text-blue-500 hover:underline">Registration page</Link> to register for an upcoming Workshop. Registered students will receive their login credentials via email.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 