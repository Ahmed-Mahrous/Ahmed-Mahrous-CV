"use client";

import type { ReactNode } from "react";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  courses,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/data/cv";

function PrintLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className="text-[#1d4ed8] underline">
      {children}
    </a>
  );
}

export function PrintCv() {
  return (
    <div className="cv-print min-h-full bg-[oklch(0.97_0.01_90)] text-[oklch(0.22_0.02_250)]">
      <div className="no-print mx-auto flex max-w-[210mm] items-center justify-between px-4 py-4">
        <p className="text-sm text-muted-foreground">
          Download the PDF, or print this page from the browser.
        </p>
        <div className="flex gap-2">
          <Button
            nativeButton={false}
            render={
              <a href="/Ahmed-Mahrous-Flutter-Developer.pdf" download />
            }
          >
            <Download data-icon="inline-start" />
            Download PDF
          </Button>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer data-icon="inline-start" />
            Print
          </Button>
        </div>
      </div>

      <article className="print-sheet mx-auto bg-white px-8 py-8 text-[12px] leading-[1.4] sm:px-10">
        <header className="border-b-2 border-[oklch(0.42_0.08_230)] pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-heading text-3xl tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-1 text-base font-medium text-[oklch(0.42_0.08_230)]">
                {profile.title}
              </p>
            </div>
            <div className="max-w-full text-left text-[11px] sm:text-right">
              <p className="whitespace-nowrap">
                {profile.location}
                {" · "}
                <PrintLink href={profile.phoneHref}>{profile.phone}</PrintLink>
                {" · "}
                <PrintLink href={`mailto:${profile.email}`}>
                  {profile.email}
                </PrintLink>
              </p>
              <p className="whitespace-nowrap">
                <PrintLink href={profile.linkedin}>
                  linkedin.com/in/ahmedmahrous3255
                </PrintLink>
                {" · "}
                <PrintLink href={profile.github}>
                  github.com/Ahmed-Mahrous
                </PrintLink>
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-[72ch] text-[12px] leading-5">
            {profile.summary}
          </p>
        </header>

        <section className="mt-4">
          <h2 className="border-b border-black/15 pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
            Experience
          </h2>
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="print-only-break mt-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-semibold">
                  {job.role} · {job.company}
                  <span className="ml-2 font-normal text-black/55">
                    {job.type}
                  </span>
                </p>
                <p className="text-[11px] text-black/70">
                  {job.start} – {job.end}
                </p>
              </div>
              <p className="text-[11px] text-black/60">{job.location}</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-4">
          <h2 className="border-b border-black/15 pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
            Projects
          </h2>
          {projects.map((project) => (
            <div key={project.slug} className="print-only-break mt-2">
              <p className="font-semibold">
                {project.name}
                {project.arabicName ? ` (${project.arabicName})` : ""} ·{" "}
                <span className="font-normal">{project.company}</span>
                {project.links?.length ? (
                  <>
                    {" · "}
                    {project.links.map((link, index) => (
                      <span key={link.href}>
                        {index > 0 ? " · " : null}
                        <PrintLink href={link.href}>{link.label}</PrintLink>
                      </span>
                    ))}
                  </>
                ) : null}
              </p>
              <p>{project.summary}</p>
            </div>
          ))}
        </section>

        <section className="print-only-break mt-4">
          <h2 className="border-b border-black/15 pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
            Skills
          </h2>
          <div className="mt-2 space-y-1">
            {skillGroups.map((group) => (
              <p key={group.title}>
                <span className="font-semibold">{group.title}: </span>
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="print-only-break mt-4 grid gap-4 sm:grid-cols-[1fr_1.4fr_0.8fr]">
          <div>
            <h2 className="border-b border-black/15 pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
              Education
            </h2>
            {education.map((item) => (
              <div key={item.school} className="mt-2">
                <p className="font-semibold">{item.degree}</p>
                <p>
                  {item.school} · {item.years}
                </p>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="border-b border-black/15 pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
              Courses
            </h2>
            <ul className="mt-2 list-disc pl-4">
              {courses.map((item) => (
                <li key={item.name}>
                  {item.name} · {item.issuer}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="border-b border-black/15 pb-1 text-[11px] font-semibold tracking-[0.16em] uppercase">
              Languages
            </h2>
            {languages.map((item) => (
              <p key={item.name} className="mt-2">
                {item.name} · {item.level}
              </p>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
