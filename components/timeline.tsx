import type React from "react"

interface TimelineItemProps {
  title: string
  date: string
  description: string
}

export function TimelineItem({ title, date, description }: TimelineItemProps) {
  return (
    <div className="mb-8 flex justify-between items-center w-full">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">•</h1>
      </div>
      <div className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-md bg-card">
        <h3 className="mb-3 font-bold text-gray-800 text-xl dark:text-white">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        <p className="text-sm leading-snug tracking-wide text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto w-full">
      <div className="relative wrap overflow-hidden p-4 md:p-10">
        <div className="absolute border-opacity-20 border-primary h-full border-2 left-1/2"></div>
        {children}
      </div>
    </div>
  )
}

