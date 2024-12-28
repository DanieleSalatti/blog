"use client";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Monitor, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative text-foreground"
        >
          {/* Light Icon */}
          <Sun
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all
            ${theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-0"}
          `}
          />
          {/* Dark Icon */}
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all
            ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"}
          `}
          />
          {/* System Icon */}
          <Monitor
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all
            ${
              theme === "system" ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }
          `}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
