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
import { GiSatelliteCommunication } from "react-icons/gi";
import { SiBluesky, SiGithub, SiInstagram, SiX } from "react-icons/si";

const HERO_IMG =
  "https://pbs.twimg.com/profile_banners/774034242837807104/1628442703/1500x500";

export function Welcome() {
  React.useEffect(() => {
    console.info("###############################################");
    console.info(
      "'In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.'"
    );
    console.info("###############################################");
  }, []);

  const [email, setEmail] = React.useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    console.log("New subscriber email:", email);
    setEmail("");
    alert("Thanks for subscribing! (Check the console for your email.)");
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Full-width HERO SECTION */}
      <section className="relative w-full h-[60vh] bg-blue-900 text-white flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={HERO_IMG}
          alt="Mountaineering Hero"
          loading="lazy"
          className="absolute inset-0 object-cover w-full h-full opacity-60"
        />
        {/* Overlay content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Daniele Salatti</h1>
          <p className="text-xl md:text-2xl mt-4">
            The miscellaneous rambling of a net citizen
          </p>
        </div>
        {/* Theme toggle in the top-right corner (positioned absolute) */}
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="container mx-auto px-4 py-12 max-w-3xl text-center space-y-6">
        <header>
          <h2 className="text-3xl font-semibold">
            Welcome to my (very WIP) blog
          </h2>
        </header>

        <div className="text-base space-y-4 leading-relaxed">
          <p>
            I’m an Italian software developer living in Seattle. I love
            mountaineering, sci-fi,{" "}
            <Tooltip>
              <TooltipTrigger aria-label="Ham Radio call sign">
                ham radio
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">My call sign is KI7UVW</p>
              </TooltipContent>
            </Tooltip>
            , sailing, SCUBA diving, spearfishing, hunting, competitive
            shooting, and tinkering (to name just a few). If it’s outdoors or
            geeky, I’m probably into it.
          </p>
          <p>
            Feel free to browse around, share your thoughts, and follow along as
            I set up this space to post code snippets, adventure stories, and
            anything else that piques my curiosity.
          </p>
          {/* Hidden-ish tooltip */}
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger
                className="text-transparent hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer mx-2"
                aria-label="Hidden Nerdy Fact"
              >
                <GiSatelliteCommunication className="w-6 h-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">
                  Fun Fact: The International Space Station has a ham radio
                  station (NA1SS) that astronauts use to chat with amateurs on
                  Earth
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* 3. SUBSCRIBE SECTION */}
      <section className="container mx-auto px-4 py-12 max-w-lg text-center hidden">
        <h3 className="text-2xl font-semibold mb-4">Subscribe for Updates</h3>
        <p className="text-muted-foreground mb-6">
          Join my mailing list to get notified when new posts go live.
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
          <Button variant="default" type="submit" className="whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </section>

      {/* 4. SOCIAL LINKS SECTION */}
      <section className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
        <p className="text-muted-foreground mb-8">
          Reach out on social media, or track my projects on GitHub.
        </p>
        <div className="flex justify-center gap-6">
          {/* BlueSky */}
          <a
            href="https://bsky.app/profile/danielesalatti.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            title="BlueSky"
          >
            <SiBluesky className="w-6 h-6" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/DanieleSalatti"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            title="GitHub"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          {/* X (formerly Twitter) */}
          <a
            href="https://twitter.com/DanieleSalatti"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            title="X"
          >
            <SiX className="w-6 h-6" />
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/Danielesalatti"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            title="Instagram"
          >
            <SiInstagram className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="mt-auto py-6 border-t border-muted-foreground/20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Daniele Salatti — Powered by{" "}
            <a
              href="https://v37.io"
              className="underline hover:text-blue-600 transition-colors"
            >
              v37, LLC
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
