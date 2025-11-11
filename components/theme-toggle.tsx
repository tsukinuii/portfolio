"use client";

import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setDarkMode(!darkMode)}
        className="rounded-full"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      <Button
        variant={theme === "minimalist" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("minimalist")}
        className="text-xs"
      >
        Minimalist
      </Button>
      <Button
        variant={theme === "corporate" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("corporate")}
        className="text-xs"
      >
        Corporate
      </Button>
    </div>
  );
}