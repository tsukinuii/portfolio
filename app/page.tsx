import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
