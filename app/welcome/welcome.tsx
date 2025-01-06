"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as React from "react";
import { FaCode, FaTerminal } from "react-icons/fa";
import { GiMountainRoad, GiSatelliteCommunication } from "react-icons/gi";
import { SiBluesky, SiGithub, SiInstagram, SiX } from "react-icons/si";

const HERO_IMG =
  "https://pbs.twimg.com/profile_banners/774034242837807104/1628442703/1500x500";

export function Welcome() {
  React.useEffect(() => {
    const messages = [
      "Initializing personality matrix...",
      "Loading outdoor adventures...",
      "Compiling life experiences...",
      "Debugging reality...",
      "System ready. Welcome aboard!",
    ];

    messages.forEach((msg, i) => {
      setTimeout(() => console.log(`%c${msg}`, "color: #36d399"), i * 800);
    });
  }, []);

  const [email, setEmail] = React.useState("");
  const [showEasterEgg, setShowEasterEgg] = React.useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    console.log("New subscriber detected:", email);
    setEmail("");
    alert("Subscription successful! Check the console for your confirmation.");
  }

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Terminal-style Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden border-b border-muted">
        <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px]" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-muted/30">
            <div className="flex items-center gap-2 mb-4 border-b border-muted pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-muted-foreground">
                terminal@danielesalatti.com
              </span>
            </div>
            <div className="font-mono">
              <p className="text-green-500">$ whoami</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                Daniele Salatti
              </h1>
              <p className="text-green-500 mt-4">$ cat description.txt</p>
              <p className="text-xl text-white/90 mt-2">
                Software Developer | Digital Explorer | Outdoor Enthusiast
              </p>
              <div className="mt-4 flex items-center gap-2">
                <FaTerminal className="text-green-500" />
                <span className="text-green-500 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-semibold">
              System.out.println("Hello World!");
            </h2>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-4">
            <p>
              <span className="text-primary font-mono">const location</span> =
              "Seattle, WA";
              <br />
              <span className="text-primary font-mono">const origin</span> =
              "Italy";
              <br />
              <span className="text-primary font-mono">const passions</span> = [
            </p>
            <div className="pl-8">
              "Software Development",
              <br />
              "Mountaineering",
              <br />
              <Tooltip>
                <TooltipTrigger className="cursor-help">
                  "Ham Radio,&nbsp;&nbsp;&nbsp;&nbsp;// KI7UVW"
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    Catch me on the airwaves! Call sign: KI7UVW
                  </p>
                </TooltipContent>
              </Tooltip>
              <br />
              "SCUBA Diving",
              <br />
              "Competitive Shooting",
              <br />
              "Endless Tinkering"
            </div>
            <p>];</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 border border-muted">
            <p className="text-base">
              When I'm not crafting code or debugging systems, you'll find me
              scaling mountains, exploring the depths of the ocean, or
              experimenting with new technologies. This digital space serves as
              my logbook - documenting adventures, sharing code snippets, and
              exploring the intersection of technology and outdoor pursuits.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Tooltip>
              <TooltipTrigger className="p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <GiSatelliteCommunication className="w-6 h-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">
                  The International Space Station has the callsign NA1SS and can
                  be reached via amateur radio!
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="p-2 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <GiMountainRoad className="w-6 h-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">
                  Ask me about my favorite climbing routes in the Cascades!
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="container mx-auto px-4 py-12 max-w-lg text-center">
        <div className="bg-muted/30 rounded-lg p-6 border border-muted">
          <h3 className="text-2xl font-semibold mb-4">
            Subscribe to My Changelog
          </h3>
          <p className="text-muted-foreground mb-6">
            Get notified when I push new updates to my life's repository.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button
              variant="default"
              type="submit"
              className="whitespace-nowrap"
            >
              git subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Social Links */}
      <section className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Network Interfaces</h3>
        <p className="text-muted-foreground mb-8">
          Connect with my distributed systems across the web.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://bsky.app/profile/danielesalatti.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            title="BlueSky"
          >
            <SiBluesky className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/DanieleSalatti"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            title="GitHub"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/DanieleSalatti"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            title="X"
          >
            <SiX className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/Danielesalatti"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            title="Instagram"
          >
            <SiInstagram className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-muted">
        <div className="container mx-auto px-4 flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-mono">
              /* &copy; {new Date().getFullYear()} Daniele Salatti */
            </span>
            <br />
            Powered by{" "}
            <a
              href="https://v37.io"
              className="underline hover:text-primary transition-colors"
            >
              v37, LLC
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
