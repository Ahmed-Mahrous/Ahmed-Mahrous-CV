import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, MapPin, Phone, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/cv";
import { withBasePath } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:py-24">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1.5 font-normal">
              <span className="size-1.5 rounded-full bg-primary" />
              Open to Flutter roles
            </Badge>
            <Badge variant="outline" className="font-normal">
              <MapPin className="size-3" />
              {profile.location}
            </Badge>
          </div>
          <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
            {profile.title}
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-foreground/85">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button size="lg" nativeButton={false} render={<Link href="#projects" />}>
              View projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a href={withBasePath("/Ahmed-Mahrous-Flutter-Developer.pdf")} download />
              }
            >
              <Download data-icon="inline-start" />
              Download PDF
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<a href={`mailto:${profile.email}`} />}
            >
              <Mail data-icon="inline-start" />
              Email
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              className="whitespace-nowrap"
              render={<a href={profile.phoneHref} />}
            >
              <Phone data-icon="inline-start" />
              {profile.phone}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a
              className="inline-flex items-center gap-1.5 hover:text-foreground"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              className="inline-flex items-center gap-1.5 hover:text-foreground"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>
            <a className="hover:text-foreground" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="whitespace-nowrap hover:text-foreground"
              href={profile.phoneHref}
            >
              {profile.phone}
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs lg:mx-0 lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-primary/15 blur-2xl" />
            <Image
              src={withBasePath(profile.photo)}
              alt={profile.name}
              width={420}
              height={420}
              priority
              className="relative aspect-square w-full rounded-3xl border border-border object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-border/80 bg-card/90 p-3 text-sm shadow-lg backdrop-blur">
              <p className="font-medium">Epic Systems · Rafiqi</p>
              <p className="text-muted-foreground">Flutter · Scrum Master</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
