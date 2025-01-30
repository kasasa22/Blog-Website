"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Github, Linkedin } from "lucide-react"
import { CreatePostDialog } from "@/components/create-post-dialog"
import { useState } from "react"

export default function Home() {
  const sections = [
    { id: "overview", title: "Project Overview" },
    { id: "timeline", title: "Timeline" },
    { id: "team", title: "Team" },
    { id: "blog", title: "Blog" },
    { id: "contact", title: "Contact Us" },
  ]

  const teamMembers = [
    {
      name: "John Doe",
      role: "Team Lead",
      image: "/placeholder.svg?height=400&width=400",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      bio: "Full-stack developer specializing in data pipeline architecture",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      image: "/placeholder.svg?height=400&width=400",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      bio: "Backend specialist with focus on microservices and cloud infrastructure",
    },
    {
      name: "Mike Johnson",
      role: "Data Engineer",
      image: "/placeholder.svg?height=400&width=400",
      github: "https://github.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
      bio: "Data engineer with expertise in Apache Airflow and Kafka",
    },
    {
      name: "Sarah Wilson",
      role: "DevOps Engineer",
      image: "/placeholder.svg?height=400&width=400",
      github: "https://github.com/sarahwilson",
      linkedin: "https://linkedin.com/in/sarahwilson",
      bio: "DevOps specialist focusing on containerization and CI/CD",
    },
  ]

  const timelineItems = [
    {
      phase: "Design Phase",
      date: "Until February 28, 2025",
      title: "Design Document Submission",
      description:
        "Complete and submit comprehensive design documentation detailing the system architecture, data flow, and technical specifications.",
      status: "In Progress",
    },
    {
      phase: "Implementation Phase",
      date: "Until May 2, 2025",
      title: "Working Prototype",
      description:
        "Development and deployment of a fully functional prototype demonstrating the core features and capabilities of the system.",
      status: "Upcoming",
    },
    {
      phase: "Documentation Phase",
      date: "Until May 30, 2025",
      title: "Project Report",
      description:
        "Compilation and submission of the final project report documenting the entire development process, challenges, and outcomes.",
      status: "Upcoming",
    },
    {
      phase: "Presentation Phase",
      date: "June 2-13, 2025",
      title: "Final Presentations",
      description: "Project demonstration and presentation to the evaluation committee.",
      status: "Upcoming",
    },
  ]

  const blogPosts = [
    {
      title: "Initial Project Setup",
      date: "2024-01-30",
      author: {
        name: "John Doe",
        role: "Team Lead",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Setup",
      readTime: "5 min",
      excerpt:
        "Setting up the development environment and initial project structure for the AirQo Data Pipeline Enhancement project.",
      content: `
## Project Setup

Our initial setup includes:

1. Development Environment
   - VS Code with recommended extensions
   - Git for version control
   - Docker for containerization

2. Project Structure
   - Microservices architecture
   - CI/CD pipeline configuration
   - Documentation framework

3. Technology Stack
   - Node.js for backend services
   - React for frontend applications
   - PostgreSQL for data storage
      `,
    },
    {
      title: "Data Pipeline Architecture",
      date: "2024-01-28",
      author: {
        name: "Jane Smith",
        role: "Backend Developer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Technical",
      readTime: "8 min",
      excerpt: "Detailed overview of the data pipeline architecture and components we'll be implementing.",
      content: `
## System Architecture

The data pipeline consists of:

1. Data Collection Layer
   - Sensor data ingestion
   - API integrations
   - Data validation

2. Processing Layer
   - Data transformation
   - Quality checks
   - Analytics processing

3. Storage Layer
   - Time-series database
   - Data warehouse
   - Backup systems
      `,
    },
  ]

  const [posts, setPosts] = useState(blogPosts)

  const handlePostCreated = (newPost: any) => {
    setPosts([newPost, ...posts])
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex gap-6 md:gap-10">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Pipeline Image */}
      <div className="container mt-6">
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=900&width=2100"
            alt="AirQo Data Pipeline Architecture"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <main className="container py-6 space-y-20">
        {/* Project Overview */}
        <section id="overview" className="scroll-mt-14">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Project Overview</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              The AirQo Data Pipeline Enhancement project aims to improve air quality monitoring through advanced
              technologies. Our team is working on developing a scalable and efficient data pipeline infrastructure that
              will enhance data collection, processing, and analysis capabilities.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="scroll-mt-14">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Project Timeline</h2>
          <div className="grid gap-8">
            {timelineItems.map((item, index) => (
              <div key={item.title} className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  {/* Timeline Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden">
                    <div className="absolute top-6 left-[-4px] w-2 h-2 rounded-full bg-primary"></div>
                  </div>

                  {/* Date Column */}
                  <div className="hidden md:block w-48 shrink-0 pt-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-4"></div>
                      <span className="text-sm font-medium">{item.date}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{item.phase}</Badge>
                        <Badge variant={item.status === "In Progress" ? "default" : "outline"}>{item.status}</Badge>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <div className="md:hidden text-sm text-muted-foreground mt-1">{item.date}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Connector Line for Desktop */}
                {index < timelineItems.length - 1 && (
                  <div className="hidden md:block absolute left-[3.7rem] top-8 bottom-0 w-px bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="scroll-mt-14">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="scroll-mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Project Blog</h2>
            <CreatePostDialog onPostCreated={handlePostCreated} />
          </div>

          <div>
            {" "}
            {/* Removed Tabs component */}
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Card key={post.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-primary cursor-pointer">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-muted-foreground">{post.author.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="mr-1 h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-14">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Have questions about our project? Feel free to reach out to our team through any of the team members'
              social links above or email us at{" "}
              <a href="mailto:contact@airqo-project.com" className="text-primary hover:underline">
                contact@airqo-project.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

