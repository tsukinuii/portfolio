"use client";

import { useState, useMemo } from "react";
import { projects, type Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/breadcrumb";

type Category = "all" | Project["category"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [currentPage, setCurrentPage] = useState(1);

  // const categories: Category[] = ["all", "frontend", "fullstack", "design", "seo"]

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const breadcrumbs = [
    { label: "Projects", href: "/projects" },
    selectedCategory !== "all" && { label: selectedCategory, href: "#" },
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects & Case Studies",
    description: "A collection of web development projects and case studies",
    url: "https://example.com/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: paginatedProjects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        description: project.shortDescription,
        image: project.image,
        keywords: project.tags.join(", "),
      })),
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Projects & Case Studies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A friendly collection of work showcasing what I’ve created across
              design, development, and digital strategy. Let’s explore together!
            </p>
            <p className="text-xs text-muted-foreground max-w-2xl pt-1.5">
              นี่คือผลงานที่ได้รวบรวมไว้เพื่อโชว์สิ่งที่ฉันได้สร้างสรรค์ไว้ในด้านการออกแบบ การพัฒนา และกลยุทธ์ดิจิทัล มาร่วมสำรวจไปด้วยกันนะ!
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="capitalize"
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {Math.min(itemsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
          </p> */}
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {paginatedProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          className="w-10"
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <Card className="border-dashed">
              <CardContent className="py-16 text-center">
                <p className="text-muted-foreground mb-4">
                  No projects found in this category.
                </p>
                <Button
                  variant="outline"
                  onClick={() => handleCategoryChange("all")}
                >
                  View All Projects
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
