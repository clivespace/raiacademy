'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Clive Henry",
      role: "GenAI for Marketing and Creative Leader at Adobe",
      image: "/images/Clive Henry profile pic.jpeg",
      bio: "Clive oversees our creative projects, blending traditional design principles with cutting-edge AI-generated content.",
      linkedin: "https://www.linkedin.com/in/clivehenry/"
    },
    {
      name: "Jake Cook",
      role: "CEO Tadpull, Lecturer Harvard Business School",
      image: "/images/Jake Cook profile.jpeg",
      bio: "Jake brings years of experience in AI machine learning and instructional design. He leads instructional design for Renaissance AI Academy.",
      linkedin: "https://www.linkedin.com/in/jakecook/"
    },
    {
      name: "Marc Maleh",
      role: "Global CTO Huge Inc & Marketing Strategist",
      image: "/images/Marc Maleh profile.jpeg",
      bio: "Marc specializes in developing AI-driven marketing strategies that deliver measurable results for brands.",
      linkedin: "https://www.linkedin.com/in/sarah-patel"
    },
    {
      name: "Alex Rodriguez",
      role: "Tech Lead, GenAI for Marketing tools",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
      bio: "Alex ensures our technology stack remains cutting-edge, integrating the latest AI tools into our workshops.",
      linkedin: "https://www.linkedin.com/in/alex-rodriguez"
    }
  ]

  return (
    <section className="py-12 bg-white" id="team">
      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-lg object-cover filter grayscale"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn profile of {member.name}</span>
                  </Link>
                </div>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 