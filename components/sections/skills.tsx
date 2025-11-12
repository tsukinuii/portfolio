"use client";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "ASP.NET MVC"],
    },
    {
      title: "Backend",
      skills: ["Nest.js", ".net core", "SQL Server", "MariaDB", "MongoDB"],
    },
    {
      title: "Design",
      skills: [
        "UI/UX Design",
        "Component Design System",
        "Responsive Web Design",
        "User Flow & Interaction Design",
        "SEO Optimization",
        "Performance Optimization",
        "Clean Architecture",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Figma",
        "Git & Version Control",
        "Storybook",
        "Chrome DevTools",
        "Postman",
        "VS Code",
        "Windsurf",
        "Prisma Studio",
        "DB Tools (SQL Server Management Studio, MySQL Workbench, Studio3T)",
      ],
    }
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-foreground">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
