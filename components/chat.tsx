'use client'

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Chat() {
  return (
    <div className="relative">
      <Link href="/chat">
        <Button
          variant="ghost"
          size="sm"
          className="text-white transition-all duration-300 px-4 py-2 text-lg font-extrabold relative z-10 group overflow-hidden rounded-full flex items-center justify-center hover:scale-125 active:scale-100"
        >
          <span className="absolute inset-0 bg-white opacity-75 group-hover:opacity-100 transition-all duration-300 rounded-full scale-x-[2.0] group-hover:scale-x-[2.5]"></span>
          <MessageSquare className="mr-2 h-[1.33rem] w-[1.33rem] text-[#FFA500] opacity-100 relative z-10 stroke-[2.5]" />
          <span className="relative z-10 text-[#FFA500] font-extrabold">CHAT</span>
        </Button>
      </Link>
    </div>
  )
}