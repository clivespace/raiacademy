'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu, MapPin } from "lucide-react"
import { Navigation } from '@/components/Navigation'
import LoginButton from '@/components/LoginButton'
import Footer from '@/components/Footer'

const workshopDates = [
  {
    id: 1,
    dates: "August 1-2, 2024",
    availability: "Available",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    dates: "September 15-16, 2024",
    availability: "Limited Seats",
    location: "New York, NY"
  },
  {
    id: 3,
    dates: "October 5-6, 2024",
    availability: "Available",
    location: "Austin, TX"
  },
  {
    id: 4,
    dates: "November 10-11, 2024",
    availability: "Available",
    location: "Miami, FL"
  }
]

export default function Registration() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [paymentSuccessful, setPaymentSuccessful] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev)
  }, [])

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsRegistered(true)
    console.log('Form submitted')
  }

  const handlePayment = () => {
    setPaymentSuccessful(true)
    console.log('Payment submitted')
  }

  const PaymentForm = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="payment-name" className="text-base">Name on Card</Label>
        <Input 
          id="payment-name" 
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-base">Address</Label>
        <Input 
          id="address" 
          className="h-12"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-base">City</Label>
          <Input 
            id="city" 
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state" className="text-base">State</Label>
          <Input 
            id="state" 
            className="h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country" className="text-base">Country</Label>
          <Input 
            id="country" 
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postal-code" className="text-base">Postal Code/Zip Code</Label>
          <Input 
            id="postal-code" 
            className="h-12"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="card-number" className="text-base">Card Number</Label>
        <Input 
          id="card-number" 
          className="h-12"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry-date" className="text-base">Expiry Date</Label>
          <Input 
            id="expiry-date" 
            placeholder="MM/YY"
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv" className="text-base">CVV</Label>
          <Input 
            id="cvv" 
            className="h-12"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">
          I agree to the terms and conditions
        </Label>
      </div>

      <Button 
        onClick={handlePayment}
        className="w-full h-12 bg-[#FFA500] hover:bg-[#FFA500]/90 text-white"
        style={{ backgroundColor: '#FFA500' }}
      >
        Make Payment
      </Button>
    </div>
  )

  const PaymentSuccess = () => (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold text-green-600">Your Payment was Successful.</h2>
      <div className="bg-green-100 p-8 rounded-full mx-auto w-32 h-32 flex items-center justify-center">
        <svg 
          className="w-16 h-16 text-green-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
      <p className="text-lg text-gray-700">Thank you for registering for our workshop. We look forward to seeing you!</p>
    </div>
  )

  const RegistrationForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-base">Name</Label>
        <Input 
          id="name" 
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-base">Email Address</Label>
        <Input 
          id="email" 
          type="email" 
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expertise" className="text-base">Select Your Level of Expertise with Generative AI</Label>
        <Select>
          <SelectTrigger id="expertise" className="h-12">
            <SelectValue placeholder="Select your expertise level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 - Beginner (New to Generative AI)</SelectItem>
            <SelectItem value="2">2 - Novice (Some basic knowledge)</SelectItem>
            <SelectItem value="3">3 - Intermediate (Familiar with concepts)</SelectItem>
            <SelectItem value="4">4 - Advanced (Regular user of GenAI tools)</SelectItem>
            <SelectItem value="5">5 - Expert (Professional experience with GenAI)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="workshop-dates" className="text-base">Select Workshop Dates</Label>
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger id="workshop-dates" className="h-12">
            <SelectValue placeholder="Select workshop dates" />
          </SelectTrigger>
          <SelectContent>
            {workshopDates.map((workshop) => (
              <SelectItem key={workshop.id} value={workshop.dates}>
                <div>
                  <div>{workshop.dates}</div>
                  <div className="text-sm text-gray-500">{workshop.location} - {workshop.availability}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason" className="text-base">Reason for your Interest in Renaissance Academy</Label>
        <Textarea 
          id="reason" 
          className="min-h-[120px] resize-none"
        />
      </div>

      {!isRegistered ? (
        <Button 
          type="submit" 
          className="w-full h-12 bg-[#FFA500] hover:bg-[#FFA500]/90 text-white"
          style={{ backgroundColor: '#FFA500' }}
        >
          Register
        </Button>
      ) : (
        <div className="space-y-4">
          <p className="text-center text-green-600 font-medium">
            Thank you for sharing your interest in our Workshops
          </p>
          <Button 
            type="button" 
            onClick={() => setShowPaymentForm(true)}
            className="w-full h-12 bg-[#FFA500] hover:bg-[#FFA500]/90 text-white"
            style={{ backgroundColor: '#FFA500' }}
          >
            Proceed to Payment
          </Button>
        </div>
      )}
    </form>
  )

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

      {isDrawerOpen && <Navigation toggleDrawer={toggleDrawer} />}

      <div className="h-32"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
          <MapPin className="mr-2 h-8 w-8 text-[#FFA500]" />
          Start Your Journey
        </h1>

        <div className="grid md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          <Card className="bg-white shadow-lg md:col-span-3 w-full mx-auto">
            <CardContent className="p-6 flex items-center min-h-[600px]">
              {paymentSuccessful ? (
                <div className="w-full flex flex-col items-center justify-center">
                  <PaymentSuccess />
                </div>
              ) : showPaymentForm ? (
                <div className="w-full mt-8">
                  <PaymentForm />
                </div>
              ) : (
                <div className="w-full mt-8">
                  <RegistrationForm />
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8 md:block hidden md:col-span-2">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Registration Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm lg:text-base">
                  <li>Registration is open until July 15, 2024</li>
                  <li>Classes start on August 1, 2024</li>
                  <li>Early bird discount of 20% for registrations before June 1, 2024</li>
                  <li>Limited seats available, register early to secure your spot</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Workshop Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm lg:text-base">Our workshops run for two consecutive days. Upcoming dates:</p>
                <ul className="space-y-2 text-sm lg:text-base">
                  {workshopDates.map((workshop) => (
                    <li key={workshop.id}>
                      {workshop.dates} - {workshop.location} ({workshop.availability})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <div className="container mx-auto px-4">
        <div className="border-t border-gray-400/30 my-8"></div>
      </div>

      <Footer />
    </div>
  )
} 