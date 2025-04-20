"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "mobile-app": {
      title: "ACC Fitness",
      description: "Android mobile application to improve fitness planning.",
      image: "/gympage.png?height=2400&width=1080",
      technologies: ["Flutter", "Dart", "Firebase"],
      category: "mobile",
      github: "https://github.com/eolui/acc",
      longDescription: [
        "This project provides an interactive visualization of how full each gym on ACC campus is and what equipments each has, it gives real-time updates for the gym's occupancy. It has two sides, the user side which is used to scan their QR Codes when accessing the gym, and admin side which is used to scan the QR Codes and to know which gym that QR Code was scanned at",
        "Talking more about it",
        "And more",
      ],

    },
    "java-app": {
      title: "Temple of Treasures",
      description: "Web application that users can buy/sell famous items from movies, books, and tv shows.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Java Spring Boot", "CSS", "MySQL"],
      category: "web",
      github: "https://github.com/eolui/Temple-Of-Treasures",
      longDescription:
        "A clean CRUD web application that users can sell or buy items from their favorite media (movie, book, tv show). Admin side controls all items listed while the users can control only the items they listed",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> View on GitHub
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}
