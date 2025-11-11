"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between p-6 sm:p-8">
        <div className="text-xl sm:text-2xl font-semibold text-foreground">
          Portfolio
        </div>
        <ThemeToggle />
      </header>

      <div className="max-w-4xl mx-auto text-center space-y-8 py-20">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-pretty tracking-tight text-foreground">
            Hi, I'm a Web Developer
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I build real-world web applications with clean architecture, modern
            UI, and practical engineering skills
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="gap-2 cursor-pointer">
            <Link href="/projects">
              View My Work
              <ChevronDown className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="cursor-pointer">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 mx-auto hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
    </section>
  );
}
