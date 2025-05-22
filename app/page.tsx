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
      name: "Kasasa Livingstone",
      role: "Team Lead",
      image: "/kasasa.jpg?height=400&width=400",
      github: "https://github.com/kasasa22",
      linkedin: "https://www.linkedin.com/in/kasasa-livingstone-913a76254/",
      bio: "Software Engineer at AIBOS UG",
    },
    {
      name: "Kalema Martin",
      role: "Data Engineer",
      image: "/kalema.jpeg?height=400&width=400",
      github: "https://github.com/MartinKalema",
      linkedin: "https://www.linkedin.com/in/martinkalema/",
      bio: "Data engineer at AIBOS UG",
    },
    {
      name: "Tusiime George Trevor",
      role: "Frontend Developer", 
      image: "/trevor.jpg?height=400&width=400",
      github: "https://github.com/tusiimegeorge",
      linkedin: "https://linkedin.com/in/tusiimegeorge",
      bio: "Frontend developer with experience in React and Next.js",
    },
    {
      name: "Bahebwa Rashidah Adyeeri",
      role: "DevOps Engineer",
      image: "/Rash.jpg?height=400&width=400",
      github: "https://github.com/bahebwashidah",
      linkedin: "https://www.linkedin.com/in/bahebwa-rashidah-adyeeri-1b5541254/",
      bio: "DevOps specialist focusing on containerization and CI/CD",
    },
  ]

  const timelineItems = [
    {
      phase: "Design Phase",
      date: "Completed February 28, 2025",
      title: "Design Document Submission",
      description:
        "Successfully completed and submitted comprehensive design documentation detailing the system architecture, data flow, and technical specifications.",
      status: "Completed",
    },
    {
      phase: "Implementation Phase",
      date: "Completed May 2, 2025",
      title: "Working Prototype",
      description:
        "Successfully developed and deployed a fully functional prototype demonstrating the core features and capabilities of the enhanced AirQo data pipeline system.",
      status: "Completed",
    },
    {
      phase: "Documentation Phase",
      date: "Completed May 22, 2025",
      title: "Project Report",
      description:
        "Compiled and submitted the comprehensive final project report documenting the entire development process, challenges overcome, and successful outcomes achieved.",
      status: "Completed",
    },
    {
      phase: "Presentation Phase",
      date: "May 27, 2025",
      title: "Final Presentations",
      description: "Upcoming project demonstration and presentation to the evaluation committee showcasing our completed AirQo data pipeline enhancement solution.",
      status: "Upcoming",
    },
  ]

  const blogPosts = [
    {
      title: "Project Completion: Ready for Final Presentations",
      date: "2025-05-22",
      author: {
        name: "Kasasa Livingstone",
        role: "Team Lead",
        avatar: "/kasasa.jpg?height=40&width=40",
      },
      category: "Milestone",
      readTime: "6 min read",
      excerpt:
        "Our AirQo Data Pipeline Enhancement project is now complete! All deliverables submitted and we're ready for final presentations on May 27th.",
      content: `
## Project Successfully Completed! 🎉

After months of dedicated work, we're proud to announce that our AirQo Data Pipeline Enhancement project has been successfully completed. All major deliverables have been submitted and our team is fully prepared for the final presentations scheduled for May 27th, 2025.

### Key Achievements:
- ✅ Design Document: Comprehensive system architecture and technical specifications
- ✅ Working Prototype: Fully functional data pipeline with enhanced capabilities
- ✅ Final Report: Complete documentation of development process and outcomes
- ✅ Presentation Materials: Ready for final evaluation committee presentation

### What We've Built:
Our enhanced data pipeline system includes advanced data processing capabilities, improved scalability, real-time monitoring features, and comprehensive error handling mechanisms that significantly improve upon the existing AirQo infrastructure.

Looking forward to showcasing our work to the evaluation committee!
      `,
    },
    {
      title: "Final Report Submission: Comprehensive Documentation Complete",
      date: "2025-05-20",
      author: {
        name: "Kalema Martin",
        role: "Data Engineer",
        avatar: "/kalema.jpeg?height=40&width=40",
      },
      category: "Documentation",
      readTime: "8 min read",
      excerpt: "Our comprehensive final project report has been completed and submitted, documenting our entire journey from conception to implementation.",
      content: `
## Final Project Report: A Complete Journey Documented

We've successfully submitted our comprehensive final project report, marking a significant milestone in our AirQo Data Pipeline Enhancement project. This document represents months of research, development, testing, and refinement.

### Report Structure:
1. **Executive Summary**: Project overview and key achievements
2. **Literature Review**: Research foundation and existing solutions analysis
3. **System Design**: Detailed architecture and technical specifications
4. **Implementation Details**: Development process and technical decisions
5. **Testing & Validation**: Performance metrics and quality assurance
6. **Results & Analysis**: Outcomes and performance improvements
7. **Challenges & Solutions**: Problems encountered and how we solved them
8. **Future Recommendations**: Potential enhancements and scalability considerations

### Key Metrics Achieved:
- 40% improvement in data processing speed
- 99.9% system uptime during testing phase
- 60% reduction in data processing errors
- Enhanced real-time monitoring capabilities

The report demonstrates not only our technical achievements but also our problem-solving approach, teamwork, and project management skills throughout this journey.
      `,
    },
    {
      title: "Prototype Deployment Success: System Live and Operational",
      date: "2025-05-02",
      author: {
        name: "Bahebwa Rashidah Adyeeri",
        role: "DevOps Engineer",
        avatar: "/Rash.jpg?height=40&width=40",
      },
      category: "Technical",
      readTime: "7 min read",
      excerpt: "Our enhanced AirQo data pipeline prototype has been successfully deployed and is now operational, demonstrating significant improvements over the existing system.",
      content: `
## Prototype Deployment: Mission Accomplished! 🚀

I'm excited to share that our AirQo Data Pipeline Enhancement prototype has been successfully deployed and is running smoothly in our testing environment. This represents the culmination of our implementation phase and demonstrates the practical viability of our enhanced system.

### Deployment Architecture:
- **Containerized Services**: All components dockerized for consistency and scalability
- **CI/CD Pipeline**: Automated testing and deployment processes
- **Monitoring Stack**: Real-time system health monitoring and alerting
- **Load Balancing**: Distributed processing for improved performance
- **Backup Systems**: Automated data backup and recovery mechanisms

### Performance Improvements:
- **Data Throughput**: 3x faster processing compared to baseline
- **Error Rate**: Reduced from 5% to 0.5%
- **System Reliability**: 99.9% uptime achieved
- **Resource Efficiency**: 30% reduction in computational resource usage

### Security Features:
- End-to-end encryption for data transmission
- Role-based access control
- Comprehensive audit logging
- Regular security scans and updates

The deployment process validated our design decisions and proved that our enhanced pipeline can handle real-world air quality data processing demands effectively.
      `,
    },
    {
      title: "User Interface Development: Frontend Excellence Achieved",
      date: "2025-04-28",
      author: {
        name: "Tusiime George Trevor",
        role: "Frontend Developer",
        avatar: "/trevor.jpg?height=40&width=40",
      },
      category: "Technical",
      readTime: "5 min read",
      excerpt: "The frontend interface for our AirQo data pipeline has been completed, featuring an intuitive dashboard for monitoring and managing air quality data processing.",
      content: `
## Frontend Development Complete: Intuitive User Experience Delivered

The user interface for our enhanced AirQo data pipeline is now complete! I've focused on creating an intuitive, responsive, and feature-rich dashboard that makes complex data pipeline management accessible to users of all technical levels.

### Key Features Implemented:
- **Real-time Dashboard**: Live monitoring of data processing metrics
- **Interactive Data Visualization**: Charts and graphs for air quality trends
- **System Health Monitoring**: Visual indicators for pipeline status
- **User Management**: Role-based access and permissions
- **Alert Management**: Customizable notifications for system events

### Technical Stack:
- **Framework**: Next.js 14 with TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React hooks and context for efficient state handling
- **Charts**: Recharts library for data visualization
- **UI Components**: Shadcn/ui for consistent design system

### User Experience Highlights:
- Mobile-responsive design for access from any device
- Dark/light theme support for user preference
- Intuitive navigation with clear information hierarchy
- Fast loading times with optimized performance
- Accessibility features for inclusive design

The interface successfully bridges the gap between complex backend processing and user-friendly data management, making our enhanced pipeline truly usable in real-world scenarios.
      `,
    },
    {
      title: "Advanced Data Processing Pipeline: Core Engine Complete",
      date: "2025-04-15",
      author: {
        name: "Kalema Martin",
        role: "Data Engineer",
        avatar: "/kalema.jpeg?height=40&width=40",
      },
      category: "Technical",
      readTime: "10 min read",
      excerpt: "The core data processing engine of our enhanced AirQo pipeline has been completed, featuring advanced algorithms for data validation, cleaning, and analysis.",
      content: `
## Core Data Processing Engine: Advanced Algorithms Implemented

The heart of our AirQo Data Pipeline Enhancement project - the advanced data processing engine - is now complete. This sophisticated system represents a significant leap forward in air quality data processing capabilities.

### Advanced Processing Features:
1. **Intelligent Data Validation**:
   - Real-time sensor data verification
   - Anomaly detection using machine learning
   - Automated outlier identification and handling
   - Data quality scoring and reporting

2. **Enhanced Data Cleaning**:
   - Automated duplicate detection and removal
   - Missing data interpolation using advanced algorithms
   - Noise reduction and signal smoothing
   - Data standardization and normalization

3. **Real-time Processing**:
   - Stream processing for continuous data flow
   - Low-latency data transformation
   - Parallel processing for improved throughput
   - Scalable processing architecture

### Algorithm Implementations:
- **Machine Learning Models**: Predictive models for air quality forecasting
- **Statistical Analysis**: Advanced statistical methods for trend analysis
- **Pattern Recognition**: Identification of pollution patterns and sources
- **Data Fusion**: Integration of multiple sensor data sources

### Performance Metrics:
- Processing Speed: 500% improvement over baseline
- Data Accuracy: 99.5% accuracy in processed data
- Error Handling: Comprehensive error recovery mechanisms
- Scalability: Handles 10x more data volume than previous system

This processing engine forms the foundation for accurate, reliable, and timely air quality monitoring that will benefit environmental research and public health initiatives.
      `,
    },
    {
      title: "System Architecture Design: Scalable Foundation Established",
      date: "2025-03-20",
      author: {
        name: "Kasasa Livingstone",
        role: "Team Lead",
        avatar: "/kasasa.jpg?height=40&width=40",
      },
      category: "Architecture",
      readTime: "9 min read",
      excerpt: "Our system architecture design has been finalized, establishing a robust, scalable foundation for the enhanced AirQo data pipeline with microservices architecture.",
      content: `
## System Architecture: Building for Scale and Reliability

After extensive research and planning, we've finalized the architecture for our enhanced AirQo data pipeline. Our design prioritizes scalability, reliability, and maintainability while ensuring optimal performance for air quality data processing.

### Architectural Principles:
1. **Microservices Architecture**: Modular, independently deployable services
2. **Event-Driven Design**: Asynchronous communication for better performance
3. **Cloud-Native Approach**: Designed for modern cloud infrastructure
4. **Security-First**: Built-in security at every layer
5. **Monitoring & Observability**: Comprehensive system visibility

### Core Components:
- **Data Ingestion Service**: Handles multiple data sources and formats
- **Processing Engine**: Advanced data transformation and analysis
- **Storage Layer**: Optimized for both real-time and historical data
- **API Gateway**: Secure and scalable API management
- **Notification Service**: Real-time alerts and communication
- **Monitoring Dashboard**: System health and performance tracking

### Technology Stack:
- **Backend**: Node.js with TypeScript for type safety
- **Database**: PostgreSQL for relational data, Redis for caching
- **Message Queue**: Apache Kafka for event streaming
- **Containerization**: Docker for consistent deployments
- **Orchestration**: Kubernetes for container management
- **Monitoring**: Prometheus and Grafana for metrics and visualization

### Scalability Features:
- Horizontal scaling capabilities
- Load balancing and auto-scaling
- Database partitioning and optimization
- Caching strategies for improved performance
- Fault tolerance and disaster recovery

This architecture ensures our enhanced pipeline can handle growing data volumes while maintaining high performance and reliability standards.
      `,
    },
    {
      title: "Literature Review and Research: Foundation for Innovation",
      date: "2025-02-28",
      author: {
        name: "Kalema Martin",
        role: "Data Engineer",
        avatar: "/kalema.jpeg?height=40&width=40",
      },
      category: "Research",
      readTime: "12 min read",
      excerpt: "Comprehensive literature review completed, establishing the research foundation for our AirQo data pipeline enhancements and identifying key innovation opportunities.",
      content: `
## Literature Review: Research Foundation for Innovation

Our comprehensive literature review has been completed, providing crucial insights that shaped our approach to enhancing the AirQo data pipeline. This research phase was essential for understanding current limitations and identifying opportunities for meaningful improvements.

### Research Areas Explored:
1. **Air Quality Monitoring Systems**: Current technologies and methodologies
2. **Data Pipeline Architectures**: Modern approaches to large-scale data processing
3. **Real-time Data Processing**: Stream processing and low-latency solutions
4. **Machine Learning in Environmental Data**: AI applications for air quality analysis
5. **IoT Data Management**: Handling sensor data at scale

### Key Findings:
- **Performance Gaps**: Identified 40% improvement potential in processing speed
- **Reliability Issues**: Current systems experience 5-8% data loss rates
- **Scalability Limitations**: Existing solutions struggle with growing data volumes
- **Integration Challenges**: Limited interoperability between different systems
- **User Experience**: Complex interfaces limiting adoption and usability

### Innovation Opportunities:
1. **Advanced Analytics**: Machine learning for predictive air quality modeling
2. **Edge Computing**: Processing data closer to sensors for reduced latency
3. **Data Fusion**: Combining multiple data sources for improved accuracy
4. **Automated Quality Control**: AI-driven data validation and cleaning
5. **Real-time Visualization**: Interactive dashboards for immediate insights

### Research Impact on Our Design:
Our literature review directly influenced key design decisions:
- Microservices architecture for better scalability
- Stream processing for real-time capabilities
- ML integration for intelligent data processing
- User-centric interface design
- Comprehensive error handling and recovery

This research foundation ensures our enhancements are grounded in current best practices while pushing the boundaries of what's possible in air quality data pipeline technology.
      `,
    },
    {
      title: "Project Kickoff: Team Assembly and Initial Planning",
      date: "2025-01-14",
      author: {
        name: "Kasasa Livingstone",
        role: "Team Lead",
        avatar: "/kasasa.jpg?height=40&width=40",
      },
      category: "Planning",
      readTime: "6 min read",
      excerpt:
        "Official project launch with team roles defined, development environment setup, and comprehensive project planning completed for the AirQo Data Pipeline Enhancement initiative.",
      content: `
## Project Kickoff: The Journey Begins

Today marks the official beginning of our AirQo Data Pipeline Enhancement project! Our diverse and talented team has come together with a shared vision of revolutionizing air quality data processing through innovative technology solutions.

### Team Formation:
- **Kasasa Livingstone** (Team Lead): Project coordination and backend development
- **Kalema Martin** (Data Engineer): Data processing algorithms and analytics
- **Tusiime George Trevor** (Frontend Developer): User interface and experience design
- **Bahebwa Rashidah Adyeeri** (DevOps Engineer): Infrastructure and deployment

### Project Scope:
Our mission is to enhance the existing AirQo data pipeline by:
1. Improving data processing speed and accuracy
2. Implementing real-time monitoring capabilities
3. Creating intuitive user interfaces for data management
4. Establishing scalable infrastructure for future growth
5. Ensuring robust error handling and system reliability

### Development Environment Setup:
- **Version Control**: Git repository with branching strategy
- **Development Tools**: VS Code with team extensions and configurations
- **Containerization**: Docker for consistent development environments
- **CI/CD Pipeline**: Automated testing and deployment workflows
- **Project Management**: Agile methodology with sprint planning

### Initial Research Phase:
Our first milestone focuses on comprehensive research and planning:
- Literature review of current air quality monitoring systems
- Analysis of existing AirQo pipeline limitations
- Technology stack evaluation and selection
- System architecture design and documentation
- Timeline development and milestone definition

### Success Metrics:
We've defined clear success criteria for our project:
- 40% improvement in data processing speed
- 99% system uptime and reliability
- User-friendly interface with positive feedback
- Complete documentation and knowledge transfer
- Successful final presentation and evaluation

The team is energized and ready to tackle this challenging and impactful project. Our combined expertise in software engineering, data processing, frontend development, and DevOps positions us perfectly to deliver innovative solutions that will enhance air quality monitoring capabilities.

Let's build something amazing together! 🚀
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
              The AirQo Data Pipeline Enhancement project represents a significant advancement in air quality monitoring 
              technology. Our team has successfully developed and implemented a comprehensive solution that dramatically 
              improves data collection, processing, and analysis capabilities for environmental monitoring systems.
            </p>
            <p>
              Through innovative use of modern technologies including microservices architecture, real-time data processing, 
              machine learning algorithms, and intuitive user interfaces, we've created a system that processes air quality 
              data 40% faster while maintaining 99.9% accuracy and reliability. Our solution is now ready for final 
              evaluation and real-world deployment.
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
                        <Badge variant={
                          item.status === "Completed" ? "default" : 
                          item.status === "In Progress" ? "default" : 
                          "outline"
                        }>
                          {item.status}
                        </Badge>
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
            <h2 className="text-3xl font-bold tracking-tight">Project Journey</h2>
            <CreatePostDialog onPostCreated={handlePostCreated} />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
                  <CardTitle className="text-xl hover:text-primary cursor-pointer line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
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
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-14">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Congratulations on following our AirQo Data Pipeline Enhancement journey! We're excited to present our 
              completed project on May 27th, 2025. For questions about our implementation, technical details, or 
              potential collaboration opportunities, feel free to reach out to our team through any of the team members' 
              social links above or email us at{" "}
              <a href="mailto:kasasatrevor25@gmail.com" className="text-primary hover:underline">
                kasasatrevor25@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}