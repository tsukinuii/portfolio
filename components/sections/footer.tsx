"use client";

import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    // { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sasithon", label: "GitHub" },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:sasithon.nuii@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand section */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-xl sm:text-2xl font-semibold text-foreground">
                Portfolio
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                Showcasing design and development work. Let's create something
                amazing together.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors text-muted-foreground hover:text-accent"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
