'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Copy, Book, Users, Menu } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import Footer from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import Chat from "@/components/chat"

interface Message {
  role: 'user' | 'system';
  content: string;
}

export default function ChatPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Hello! I\'m your AI assistant for RenaissanceAI Academy. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const answerWindowRef = useRef<HTMLDivElement>(null)

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    if (answerWindowRef.current) {
      answerWindowRef.current.scrollTop = answerWindowRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    setTimeout(() => {
      const aiMessage: Message = { 
        role: 'system', 
        content: `Thank you for your question. Here are some resources that might help:
        
        1. Check out our course on Prompt Engineering: [Course Link](https://renaissanceai.academy/courses/prompt-engineering)
        
        2. Watch this video on AI in creativity:
        <video width="320" height="240" controls>
          <source src="https://example.com/ai-creativity.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        
        3. For more information, visit our [FAQ page](https://renaissanceai.academy/faq)
        
        How else can I assist you?`
      }
      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    })
  }

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
              <Chat />
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

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 mt-8">
        <Card className="flex-grow flex flex-col overflow-hidden w-full md:w-2/3 max-w-3xl">
          <CardHeader className="p-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://api.dicebear.com/7.x/lorelei/svg?seed=RenAI&mood=happy"
                alt="RenAI Assistant Avatar"
                width={48}
                height={48}
                className="rounded-full"
              />
              <h2 className="text-2xl font-medium text-gray-900">Meet RenAI your AI Assistant</h2>
            </div>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col p-4 overflow-hidden">
            <form onSubmit={handleSendMessage} className="flex gap-2 mb-4">
              <Textarea
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow resize-none overflow-hidden h-20"
                rows={2}
              />
              <Button 
                type="submit" 
                className="bg-[#FFA500] hover:bg-[#FFA500]/90 h-20"
                style={{ backgroundColor: '#FFA500' }}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
            <div className="flex-grow overflow-hidden bg-white rounded-lg shadow">
              <ScrollArea className="h-full p-4" ref={answerWindowRef}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.role === 'user' ? 'text-right' : 'text-left flex items-start'
                    }`}
                  >
                    {message.role === 'system' && (
                      <Image
                        src="https://api.dicebear.com/7.x/lorelei/svg?seed=RenAI&mood=happy"
                        alt="RenAI Assistant Avatar"
                        width={40}
                        height={40}
                        className="mr-2 rounded-full"
                      />
                    )}
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br>') }} />
                    </div>
                    {index !== 0 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2"
                        onClick={() => copyToClipboard(message.content, index)}
                      >
                        <Copy className={`h-4 w-4 ${copiedIndex === index ? 'text-green-500' : 'text-gray-500'}`} />
                        <span className="sr-only">Copy message</span>
                      </Button>
                    )}
                  </div>
                ))}
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Book className="mr-2 h-5 w-5 text-[#FFA500]" />
                Popular Resources
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Intro to Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    AI Ethics Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Data Science Handbook
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Users className="mr-2 h-5 w-5 text-[#FFA500]" />
                Community Highlights
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Join our vibrant community of AI enthusiasts and professionals. Participate in forums, workshops, and networking events.
              </p>
              <Link href="/workshops/overview">
                <Button className="mt-4 w-full bg-[#FFA500] hover:bg-[#FFA500]/90 text-[1.3rem] py-3">
                  Explore Our Workshops
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="container mx-auto px-4">
        <div className="border-t border-gray-400/30 my-8"></div>
      </div>

      <Footer />
    </div>
  )
}