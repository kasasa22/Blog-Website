import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollText } from "lucide-react"
import type React from "react" // Import React

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const categories = ["Technical Updates", "Research Findings", "Implementation", "Documentation"]

  const recentPosts = [
    {
      title: "Data Pipeline Architecture Overview",
      date: "Jan 30, 2024",
    },
    {
      title: "Microservices Implementation",
      date: "Jan 29, 2024",
    },
  ]

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Categories</h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <Button key={category} variant="ghost" className="w-full justify-start">
                <ScrollText className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Recent Posts</h2>
          <div className="space-y-1">
            {recentPosts.map((post) => (
              <div key={post.title} className="flex flex-col px-4 py-2">
                <span className="text-sm font-medium hover:underline cursor-pointer">{post.title}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

