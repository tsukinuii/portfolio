"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter, Phone } from "lucide-react";
import { useState } from "react";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const breadcrumbs = [{ label: "Contact", href: "/contact" }].filter(
    Boolean
  ) as Array<{ label: string; href: string }>;

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      <section
        id="contact"
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* <Card>
            <CardContent className="pt-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Send Message
                </Button>
                {formSubmitted && (
                  <p className="text-sm text-green-600 text-center">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
              </form>
            </CardContent>
          </Card> */}

            <div className="space-y-8 border border-border p-6 rounded-lg">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">
                        sasithonnuii@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">
                        +66 61 856 8651
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="font-medium text-foreground">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://github.com/tsukinuii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors group"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="font-medium text-foreground">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Response time */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Response Time
                  </p>
                  <p className="text-foreground font-medium">
                    Typically within 24-48 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
