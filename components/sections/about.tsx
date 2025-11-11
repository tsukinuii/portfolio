"use client";

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              I'm a full-stack developer experienced in building modern web
              applications using Next.js, Tailwind CSS, Node.js/NestJS, .net
              core and SQL Server/MariaDB. I enjoy creating clean,
              user-friendly, and efficient systems across both frontend and
              backend.
            </p>
            <p className="text-muted-foreground">
              I’ve worked on real-estate platforms, listing management,
              coin/point systems, e-commerce features, and API integrations. I
              focus on clean architecture, maintainable code, and turning
              complex requirements into reliable solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-semibold text-foreground mb-2">
                Current Role
              </h3>
              <p className="text-muted-foreground">Full-stack Developer</p>
              <p className="text-sm text-muted-foreground mt-1">
                2019 - Present
              </p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground font-medium">
                King Mongkut’s University of Technology North Bangkok
              </p>
              <p className="text-muted-foreground text-sm">
                Aug 2014 – May 2018
              </p>
              <p className="text-muted-foreground mt-1">
                Bachelor of Applied Science, Mathematics (Mathematics with
                Computer Science)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
