'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { ArrowLeft, Clock, Users } from "lucide-react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

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
  // ... paste the workshops array from V0 ...
]

export default function CoursesPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null)

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

  return (
    <div className="min-h-screen bg-[#E5E5E5]">
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
                        <Card key={workshop.id} className={`border-0 ${workshop.title === "Lunch Break" || workshop.title === "Meet and Greet" ? "bg-blue-100" : "bg-white"}`}>
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
      </main>

      {/* Navigation Drawer */}
      {isDrawerOpen && <Navigation toggleDrawer={toggleDrawer} />}
    </div>
  )
} 