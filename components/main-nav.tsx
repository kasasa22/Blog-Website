import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "timeline", label: "Timeline" },
    { id: "team", label: "Team" },
    { id: "updates", label: "Updates" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="text-sm font-medium transition-colors hover:text-primary"
          aria-label={`Scroll to ${section.label} section`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}

