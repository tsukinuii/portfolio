"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link href="/" className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={`${item.href}-${index}`} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}