import { projects } from "@/lib/projects";
import { projectsLearning } from "@/lib/projects-learning";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import Gallery from "@/components/project/Gallery";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const projectLearning = projectsLearning.find((p) => p.id === id);

  const projectDetail = project || projectLearning;

  if (!projectDetail) {
    notFound();
  }

  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "CreativeWork",
  //   name: project.title,
  //   description: project.description,
  //   image: project.image,
  //   author: {
  //     "@type": "Person",
  //     name: "Your Name",
  //   },
  //   keywords: project.tags.join(", "),
  //   about: {
  //     "@type": "Thing",
  //     name: project.caseStudy.challenge,
  //   },
  //   datePublished: new Date().toISOString(),
  // };

  const breadcrumbs = [
    { label: "Projects", href: "/projects" },
    { label: projectDetail.title, href: `/projects/${projectDetail.id}` },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}

      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
          <Breadcrumb items={breadcrumbs} />
          <Link href="/projects">
            <Button variant="ghost" className="gap-2 -ml-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="capitalize">{projectDetail?.category}</Badge>
                <span className="text-sm text-muted-foreground">
                  Case Study
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-pretty">
                {projectDetail.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                {projectDetail.shortDescription}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-80 sm:h-96">
              <Gallery images={projectDetail.image} alt={projectDetail.title} />
              {/* <img
                src={project.image[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  รายละเอียด
                </h2>
                <ul className="space-y-2 text-muted-foreground list-disc ml-6">
                  {projectDetail.contribution.map((item) => (
                    <li key={item}>
                      <span className="text-lg text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-8 space-y-6">
                {projectDetail.links && (
                  <div className="space-y-3 p-6 rounded-lg border border-border bg-card">
                    <h3 className="font-semibold text-foreground mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {projectDetail.links?.demo && (
                        <a
                          href={projectDetail.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full gap-2">
                            <ExternalLink className="h-4 w-4" />
                            View Live Demo
                          </Button>
                        </a>
                      )}
                      {projectDetail.links?.github && (
                        <a
                          href={projectDetail.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full gap-2 bg-transparent"
                          >
                            <Github className="h-4 w-4" />
                            View on GitHub
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetail.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how I can help bring your project to life.
            </p>
          </div>
          <Button size="lg" className="gap-2">
            Get in Touch
          </Button>
        </div>
      </section> */}
    </main>
  );
}
