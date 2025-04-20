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
      longDescription:
      "I developed a mobile application to address the issue of overcrowded and underutilized gyms on a college campus. Students often waste time going to full gyms or don’t know where specific equipment is available. This project improves gym accessibility and workout planning through real-time data on gym capacity and equipment availability.\n\nFunctional requirements included user check-in via QR code, gym selection, real-time capacity updates, and admin-side. Non-functional requirements involved a responsive and intuitive UI, secure authentication, and efficient data updates using Firebase Realtime Database.\n\nThe app was built using Flutter and Dart for cross-platform support. Firebase Authentication and Realtime Database were used for secure login and live data updates. I chose these technologies because they’re scalable, fast to prototype with, and offer strong developer community support. Industry best practices like RESTful design and Material Design UI standards were followed throughout.\n\nThe app is not deployed in the cloud. DevOps principles were applied through GitHub integration for continuous deployment.\n\nFor this project, I learned how to use Flutter, Firebase, and QR code libraries like qr_flutter and google_mlkit_barcode_scanning. I chose these technologies to learn new technologies and to meet the need of real-time tracking and mobile scanning.\n\nThe technical structure follows a modular architecture using Flutter’s widget tree and route management. Users log in, see a list of gyms (fetched from Firebase), and admins can scan codes to check users in. A QR Code check-in system is used for the users. Firebase’s NoSQL schema was structured to reflect users, gyms, and scan events. A diagram of the Firebase structure and screen flow was created to support this.\n\nChallenges included setting up QR code scanning permissions on Android, syncing real-time updates without performance lag, and managing user roles securely. I overcame these by testing different Firebase security rules, researching plugin limitations, and developing the UI to reduce rebuild time.\n\nOutstanding issues include improving the admin dashboard and better tracking of historical scan data.",

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
        <p className="text-muted-foreground" style={{ whiteSpace: "pre-line" }}>
  {project.longDescription}
</p>
      </div>
    </div>
  )
}
