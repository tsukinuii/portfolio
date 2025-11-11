"use client"

import type { Project } from "@/lib/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="relative h-48 sm:h-64 bg-muted overflow-hidden">
          <img
            src={project.image[0] || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">{project.shortDescription}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && <Badge variant="secondary">+{project.tags.length - 3}</Badge>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}