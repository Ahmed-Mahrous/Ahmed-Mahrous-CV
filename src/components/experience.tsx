import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/cv";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Experience
        </p>
        <h2 className="font-heading mt-2 text-3xl tracking-tight sm:text-4xl">
          Where I build
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Full-time Flutter developer at Epic Systems from December 2024, Scrum
          Master there from 16 July 2026, part-time at Rafiqi from 23 August
          2026, and a Slash Hub internship from October 2024 — all ongoing.
        </p>
        <ol className="mt-10 space-y-6">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}-${job.start}`}
              className="relative rounded-2xl border border-border/70 bg-card p-5 sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {job.role}
                    <span className="text-muted-foreground"> · {job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={job.current ? "default" : "secondary"}>
                    {job.start} – {job.end}
                  </Badge>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/85">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
